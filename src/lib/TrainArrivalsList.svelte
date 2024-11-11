<script lang="ts">
    import type {Train} from "$lib/types/Train";
    import {onDestroy} from "svelte";

    interface Props {
        selectedStationId: number | null;
    }

    const props: Props = $props();

    let arrivals: Train[] = $state([]);

    async function fetchArrivals(): Promise<void> {
        const baseUrl: string = import.meta.env.VITE_BACK_END_URL;

        const response = await fetch(`${baseUrl}/api/stations/${props.selectedStationId}/arrivals`);

        arrivals = await response.json();

        arrivals.sort(compareTrains);
    }

    function getEta(train: Train): number {
        const arrivalTime = new Date(train.arrivalTime).getTime();

        const predictionTime = new Date(train.predictionTime).getTime();

        return Math.floor((arrivalTime - predictionTime) / 60000);
    }

    function compareTrains(train0: Train, train1: Train) {
        const lineComparison = train0.line.localeCompare(train1.line);

        if (lineComparison !== 0) {
            return lineComparison;
        }

        const destinationComparison = train0.destination.localeCompare(train1.destination);

        if (destinationComparison !== 0) {
            return destinationComparison;
        }

        const date0 = new Date(train0.arrivalTime).getTime();

        const date1 = new Date(train1.arrivalTime).getTime();

        return date0 - date1;
    }

    $effect(() => {
        if (props.selectedStationId !== null) {
            fetchArrivals();

            const intervalId = setInterval(fetchArrivals, 60_000);

            onDestroy(() => {
                clearInterval(intervalId);
            });
        }
    });

    $effect(() => {
        const handleVisibilityChange = () => {
            if ((document.visibilityState === "visible") && (props.selectedStationId !== null)) {
                fetchArrivals();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        onDestroy(() => document.removeEventListener("visibilitychange", handleVisibilityChange));
    });
</script>
{#if props.selectedStationId !== null}
    <div>
        <table>
            <thead>
                <tr>
                    <th>Line</th>
                    <th>Destination</th>
                    <th>Run</th>
                    <th>ETA</th>
                </tr>
            </thead>
            <tbody>
                {#each arrivals as arrival}
                    <tr>
                        <td>{arrival.line}</td>
                        <td>{arrival.destination}</td>
                        <td>{arrival.run}</td>
                        <td>{getEta(arrival)} min</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
{/if}
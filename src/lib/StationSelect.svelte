<script lang="ts">
    import type { Station } from '$lib/types/Station';

    interface Props {
        stations: Station[];
        setStationId: (stationId: number | null) => void;
    }

    const props: Props = $props();

    function handleChange(event: Event): void {
        const value = (event.target as HTMLSelectElement).value;

        const stationId = (value === '') ? null : parseInt(value, 10);

        props.setStationId(stationId);
    }
</script>
<select onchange={handleChange}>
    <option selected disabled value={null}>Select a station</option>
    {#each props.stations as station}
        <option value={station.id}>
            {station.name}
        </option>
    {/each}
</select>

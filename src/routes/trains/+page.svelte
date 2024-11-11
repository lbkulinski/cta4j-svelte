<script lang="ts">
    import type { Station } from '$lib/types/Station';
    import StationSelect from "$lib/StationSelect.svelte";
    import TrainArrivalsList from "$lib/TrainArrivalsList.svelte";

    interface Props {
        data: {
            stations: Station[]
        };
    }

    const props: Props = $props();

    let selectedStationId: number | null = $state(null);

    function setStationId(stationId: number | null): void {
        selectedStationId = stationId;
    }
</script>
<div class="p-2">
	<StationSelect stations={props.data.stations} setStationId={setStationId} />
	<TrainArrivalsList selectedStationId={selectedStationId} />
</div>

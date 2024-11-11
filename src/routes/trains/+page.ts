import type { Station } from '$lib/types/Station';

export async function load({ fetch }) {
	const baseUrl: string = import.meta.env.VITE_BACK_END_URL;

	const response = await fetch(`${baseUrl}/api/stations`);

	const stations: Station[] = await response.json();

	stations.sort((station0, station1) => station0.name.localeCompare(station1.name));

	return {
		stations
	};
}

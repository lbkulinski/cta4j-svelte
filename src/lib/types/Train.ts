export interface Train {
    run: number;
    line: string;
    destination: string;
    station: string;
    predictionTime: string;
    arrivalTime: string;
    due: boolean;
    scheduled: boolean;
    delayed: boolean;
}

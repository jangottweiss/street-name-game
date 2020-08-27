import { GeoJsonObject, Point } from 'geojson';


export interface GameMode {
    id: string,
    name: string,
}

export interface GameRegion {
    id: string,
    name: string,
}

export interface GameSettings {
    mode: GameMode,
    region: GameRegion | undefined,
    difficulty: number,
    rounds: number,
}

export interface SettingsState {
    availableGameModes: Array<GameMode>,
    availableRegions: Array<GameRegion>,
    settings: GameSettings,
}

export interface GameRound {
    roundNo: number,
    streetName: string,
    streetGeometry: GeoJsonObject,
    correctAnswer: boolean | null,
    guessName: string | null,
    guessPoint: Point,
}
export interface Game {
    state: string,
    currentRound: GameRound | null,
    previousRounds: Array<GameRound>,
    nextRounds: Array<GameRound>
}

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

export interface Game {
    state: string,
    currentRound: number,
}

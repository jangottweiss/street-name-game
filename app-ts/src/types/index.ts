export interface GameMode {
    id: string,
    name: string,
}

export interface GameRegion {
    id: string,
    name: string,
}

export interface GameSettings {
    mode: string,
    region: string,
    difficulty: number,
    rounds: number,
}

export interface SettingsState {
    availableGameModes: Array<GameMode>,
    availableRegions: Array<GameRegion>,
    settings: GameSettings,
}


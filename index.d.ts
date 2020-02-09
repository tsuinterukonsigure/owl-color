export interface TeamColor {
    hex: string
    rgb: [number, number, number]
}

export interface TeamColors {
    [colorName: string]: TeamColor
}

export interface Colors {
    [teamAbbreviation: string]: {
        fullName: string
        maincolor: string
        seconcolor: string
        colors: TeamColors
    }
}

export function getAllColors(): Colors

export function getMaincolor(teamAbbreviation: string): TeamColor

export function getSeconcolor(teamAbbreviation: string): TeamColor

export function getColors(teamAbbreviation: string): TeamColors

export function getFullName(teamAbbreviation: string): string

export function getColorList(teamAbbreviation: string): string[]
// My data storage

export type UserData = {
  homeBuildings: Item[]
  homeTraps: Item[]
  homeTroops: Item[]
  homeHeroes: Item[]
  homeSpells: Item[]
  homePets: Item[]
  homeSiegeMachines: Item[]
  homeHelpers: Item[]
  builderBaseBuildings: Item[]
  builderBaseTraps: Item[]
  builderBaseTroops: Item[]
  builderBaseHeroes: Item[]
}

export type Item = {
  id: number
  count?: number
  levels?: number[]
}

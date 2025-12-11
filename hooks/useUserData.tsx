'use client'

import { UserData } from '@/types/storage'
import { useState } from 'react'

const DEFAULT_USERDATA: UserData = {
  homeBuildings: [],
  homeTraps: [],
  homeTroops: [],
  homeHeroes: [],
  homeSpells: [],
  homePets: [],
  homeSiegeMachines: [],
  homeHelpers: [],
  builderBaseBuildings: [],
  builderBaseTraps: [],
  builderBaseTroops: [],
  builderBaseHeroes: [],
}

const useUserData = () => {
  const [userData, setUserData] = useState<UserData>(DEFAULT_USERDATA)

  return { userData, setUserData }
}

export default useUserData

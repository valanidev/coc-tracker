'use client'

import { isDataValid, regroupItems } from '@/utils'

import data from '@/data.json'
import useUserData from '@/hooks/useUserData'
import ItemsEditor from '@/components/ItemsEditor'
import { useEffect } from 'react'

const Edit = () => {
  const { userData, setUserData } = useUserData()
  const isValid = isDataValid(JSON.stringify(data))

  // Convert game data to userdata format
  useEffect(() => {
    if (!isValid) return

    setUserData({
      homeBuildings: regroupItems(data.buildings),
      homeTraps: regroupItems(data.traps),
      homeTroops: regroupItems(data.units),
      homeSiegeMachines: regroupItems(data.siege_machines),
      homeHeroes: regroupItems(data.heroes),
      homeSpells: regroupItems(data.spells),
      homePets: regroupItems(data.pets),
      homeHelpers: regroupItems(data.helpers),
      builderBaseBuildings: regroupItems(data.buildings2),
      builderBaseTraps: regroupItems(data.traps2),
      builderBaseTroops: regroupItems(data.units2),
      builderBaseHeroes: regroupItems(data.heroes2),
    })
  }, [isValid])

  if (!isValid) {
    return <div className="m-2 rounded-sm bg-red-200 p-4">Data is invalid!</div>
  }

  if (!userData) {
    return <div className="m-2">Loading...</div>
  }

  return (
    <div className="m-2">
      <ItemsEditor items={userData.homeHeroes} />
    </div>
  )
}

export default Edit

import { ClashItem } from '@/types/clash'

export const regroupItems = (items: ClashItem[]) => {
  const regrouped: {
    [key: number]: { data: number; cnt: number; levels: number[] }
  } = {}

  for (const item of items) {
    if (!item) continue

    const quantity = item.cnt ?? 1
    const level = item.lvl ?? 1

    if (!regrouped[item.data]) {
      regrouped[item.data] = {
        data: item.data,
        cnt: quantity,
        levels: Array(quantity).fill(level),
      }
    } else {
      regrouped[item.data].cnt += quantity
      regrouped[item.data].levels.push(...Array(quantity).fill(level))
    }
  }

  return Object.values(regrouped)
}

const isJSON = (data: string) => {
  try {
    JSON.parse(data)
    return true
  } catch {
    return false
  }
}

export const isDataValid = (data: string) => {
  if (!data) return false
  if (data.trim() === '') return false
  if (!isJSON(data)) return false

  const jsonData = JSON.parse(data)
  if (jsonData.tag === undefined || jsonData.timestamp === undefined) {
    return false
  }
  if (jsonData.buildings === undefined || jsonData.traps === undefined) {
    return false
  }
  if (jsonData.buildings2 === undefined || jsonData.traps2 === undefined) {
    return false
  }

  return true
}

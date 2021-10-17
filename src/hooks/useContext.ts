import { useContext } from "react"
import { StoreContext } from '../context/transferContext'
import { AllStore } from "../store"


export const useStore = () => {
  return useContext(StoreContext) as AllStore
}

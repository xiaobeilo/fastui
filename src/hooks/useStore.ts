import { useContext } from "react"
import { StoreContext, TransferContext } from '../context/transferContext'
import { AllStore } from "../store"


export const useStore = () => {
  return useContext(StoreContext) as AllStore
}

export const useTransfer = () => useContext(TransferContext)
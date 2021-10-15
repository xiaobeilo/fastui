import { createContext } from "react";
import { AllStore } from "../store";
import Transfer, { Role } from "../Transfer";

export const StoreContext = createContext<AllStore | null>(null)

export const TransferContext = createContext<Transfer>(new Transfer(Role.main))
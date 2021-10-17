import { createContext } from "react";
import { AllStore } from "../store";

export const StoreContext = createContext<AllStore | null>(null)
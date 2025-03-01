import { create } from 'zustand'

interface State {
    ready : boolean,
    isReady : () => void
}

export const useBearStore = create<State>((set) => ({
    ready: false,
    isReady : () => set({ready : true})
}))
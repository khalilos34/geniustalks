import create from 'zustand'

interface PlayerIndex {
  playerindex: number,
  setIndex: (number: number) => void
}

const usePlayerIndexStore = create<PlayerIndex>((set) => ({
  playerindex: 0,
  setIndex: (playerindex: number) => set({ playerindex })
}))
export default usePlayerIndexStore
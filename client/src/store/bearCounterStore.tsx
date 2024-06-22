import { create } from 'zustand';

interface State {
  count: number
}

interface Actions {
  increment: () => void
  decrement: () => void
}

const useBearCounterStore = create<State & Actions>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useBearCounterStore;
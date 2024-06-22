import { create } from 'zustand';

interface State {
  email: string
  password: string
}

interface Actions {
  updateEmail: (email: State['email']) => void
  updatePassword: (password: State['password']) => void}

const useLoginStore = create<State & Actions>((set) => ({
  email: '',
  password: '',
  updateEmail: (email) => set(() => ({ email: email })),
  updatePassword: (password) => set(() => ({ password: password })),

}))

export default useLoginStore;
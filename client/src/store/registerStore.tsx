import { create } from 'zustand';

interface State {
  name: string
  email: string
  password: string
  confirmPassword: string
}

interface Actions {
  updateName: (name: State['name']) => void
  updateEmail: (email: State['email']) => void
  updatePassword: (password: State['password']) => void
  updateConfirmPassword: (confirmPassword: State['confirmPassword']) => void
}

const useRegisterStore = create<State & Actions>((set) => ({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  updateName: (name) => set(() => ({ name: name })),
  updateEmail: (email) => set(() => ({ email: email })),
  updatePassword: (password) => set(() => ({ password: password })),
  updateConfirmPassword: (confirmPassword) => set(() => ({ confirmPassword: confirmPassword })),
}))

export default useRegisterStore;
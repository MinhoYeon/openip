import { ActionsRegisterInput, RegisterInput } from '@/types/types';
import { create } from 'zustand';

const useRegisterStore = create<RegisterInput & ActionsRegisterInput>((set) => ({
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
import { LoginInput, ActionsLoginInput } from '@/types/types';
import { create } from 'zustand';


const useLoginStore = create<LoginInput & ActionsLoginInput>((set) => ({
  email: '',
  password: '',
  updateEmail: (email) => set(() => ({ email: email })),
  updatePassword: (password) => set(() => ({ password: password })),

}))

export default useLoginStore;
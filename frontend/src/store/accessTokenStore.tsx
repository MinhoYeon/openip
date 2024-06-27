import { LoginResponse, ActionsLoginResponse } from '@/types/types';
import { create } from 'zustand';

const initailState: LoginResponse = {
  accessToken: '',
}

const useAccessTokenStore = create<LoginResponse & ActionsLoginResponse>((set) => ({
  ...initailState,
  updateAccessToken: (accessToken) => {
    set({ accessToken: accessToken })
  },
  reset: () => {
    set(initailState)
  },
}))

export default useAccessTokenStore;
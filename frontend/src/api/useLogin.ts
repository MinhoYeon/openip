import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { LoginResponse, LoginParams } from '../types/types';  // User 인터페이스 불러오기
import { serverURL } from './config';  // serverURL 불러오기
import useAccessTokenStore from '@/store/accessTokenStore';


const login = async (user: LoginParams): Promise<LoginResponse> => {
  const response = await axios.post(`${serverURL}/user/login`, user);
  return response.data;
};

export const useLogin = (): UseMutationResult<LoginResponse, Error, LoginParams> => {
  const queryClient = useQueryClient();

  const updateAccessToken = useAccessTokenStore((state) => state.updateAccessToken);
  
  return useMutation<LoginResponse, Error, LoginParams>({
    mutationFn: login,

    onSuccess: (data) => {
      queryClient.invalidateQueries({queryKey: ['users']});
      updateAccessToken(data.accessToken);
    },
    
    onError: (error) => {
      console.error('Login failed:', error);
      // Optionally show a user-friendly error message
    }
  });
};
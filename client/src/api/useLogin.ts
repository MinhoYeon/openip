import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { LoginResponse, LoginParams } from './types';  // User 인터페이스 불러오기
import { serverURL } from './config';  // serverURL 불러오기


const login = async (user: LoginParams): Promise<LoginResponse> => {
  const response = await axios.post(`${serverURL}/user/login`, user);
  return response.data;
};

export const useLogin = (): UseMutationResult<LoginResponse, Error, LoginParams> => {
  const queryClient = useQueryClient();
  
  return useMutation<LoginResponse, Error, LoginParams>({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']});
    }
  });
};



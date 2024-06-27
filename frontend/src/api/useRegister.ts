import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { RegisterParams, RegisterResponse } from '../types/types';  // User 인터페이스 불러오기
import { serverURL } from './config';  // serverURL 불러오기


const register = async (user: RegisterParams): Promise<RegisterResponse> => {
  const response = await axios.post(`${serverURL}/user/signup`, user);
  return response.data;
};

export const useRegister = (): UseMutationResult<RegisterResponse, Error, RegisterParams> => {
  const queryClient = useQueryClient();
  
  return useMutation<RegisterResponse, Error, RegisterParams>({
    mutationFn: register,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['users']});
    }
  });
};



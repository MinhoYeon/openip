import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { User } from './types';  // User 인터페이스 불러오기
import { serverURL } from './config';  // serverURL 불러오기


const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${serverURL}/user`);
  return response.data;
};

export const useUsers = () => {
  return useQuery<User[], Error>({ 
    queryKey: ['users'], 
    queryFn: fetchUsers 
  });
};
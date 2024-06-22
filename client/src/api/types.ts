// src/api/types.ts
export interface User {
  id: number;
  name: string;
  email: string;
}


export interface LoginParams {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string; // 실제 반환되는 데이터의 타입에 맞게 수정
}



export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  success: string; // 실제 반환되는 데이터의 타입에 맞게 수정
}
// src/api/types.ts
export interface User {
  id: number;
  name: string;
  email: string;
}


//api
export interface LoginParams {
  email: string;
  password: string;
}

export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}
export interface RegisterResponse {
  accessToken: string; // 실제 반환되는 데이터의 타입에 맞게 수정
}



//store

export interface LoginResponse {
  accessToken: string;
}

export interface ActionsLoginResponse {
  updateAccessToken: (accessToken: LoginResponse['accessToken']) => void
  reset: () => void
}


export interface LoginInput {
  email: string;
  password: string;
}
export interface ActionsLoginInput {
  updateEmail: (email: LoginInput['email']) => void
  updatePassword: (password: LoginInput['password']) => void
}


export interface RegisterInput {
  name: string
  email: string
  password: string
  confirmPassword: string
}
export interface ActionsRegisterInput {
  updateName: (name: RegisterInput['name']) => void
  updateEmail: (email: RegisterInput['email']) => void
  updatePassword: (password: RegisterInput['password']) => void
  updateConfirmPassword: (confirmPassword: RegisterInput['confirmPassword']) => void
}
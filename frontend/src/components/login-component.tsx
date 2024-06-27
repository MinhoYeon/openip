import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';

import useLoginStore from '@/store/loginStore';
import { useLogin } from '@/api/useLogin';


export default function LoginComponent() {
  const navigate = useNavigate();

  const email = useLoginStore((state) => state.email);
  const password = useLoginStore((state) => state.password);
  const updateEmail = useLoginStore((state) => state.updateEmail);
  const updatePassword = useLoginStore((state) => state.updatePassword);


  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateEmail(e.currentTarget.value);
  };
  
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    updatePassword(e.currentTarget.value)
  };

  const mutation = useLogin();
  const onSubmitLoginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ email, password})
  }

  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  if (mutation.isSuccess) {
    navigate('/');
    return null;
  }

  return (
    <>
      <Card className="mx-auto max-w-sm mt-40 mb-80">
        <form onSubmit={onSubmitLoginHandler} >
          <CardHeader>
            <CardTitle className="text-2xl">로그인</CardTitle>
            <CardDescription>이메일과 비밀번호를 입력하세요</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link to="#" className="ml-auto inline-block text-sm underline">
                  비밀번호가 기억나지 않아요
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required
                value={password}
                onChange={handlePasswordChange} 
              />
            </div>
          </CardContent>
          <CardFooter className="grid">
            <Button type="submit" className="w-full">
              로그인하기
            </Button>
            <div className="mt-4 text-center text-sm">
              회원계정이 없나요?{'  '}
              <Link to="/register" className="underline">
                회원가입
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}

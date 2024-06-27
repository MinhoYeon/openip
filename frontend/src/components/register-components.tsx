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
import useRegisterStore from '@/store/registerStore';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRegister } from '@/api/useRegister';


export default function RegisterComponent() {
  const navigate = useNavigate();

  const name = useRegisterStore((state) => state.name);
  const email = useRegisterStore((state) => state.email);
  const password = useRegisterStore((state) => state.password);
  const confirmPassword = useRegisterStore((state) => state.confirmPassword);
  const updateName = useRegisterStore((state) => state.updateName);
  const updateEmail = useRegisterStore((state) => state.updateEmail);
  const updatePassword = useRegisterStore((state) => state.updatePassword);
  const updateConfirmPassword = useRegisterStore((state) => state.updateConfirmPassword);


  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    // 조건을 체크하여 폼의 유효성을 설정합니다.
    if (name && email && password && confirmPassword && password === confirmPassword) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [name, email, password, confirmPassword]);


  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateName(e.currentTarget.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateEmail(e.currentTarget.value);
  };
  
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    updatePassword(e.currentTarget.value)
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateConfirmPassword(e.currentTarget.value)
  };


  const mutation = useRegister();

  const onSubmitRegisterHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ name, email, password })
  }

  if (mutation.isPending) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  if (mutation.isSuccess) {
    navigate('/login');
    return null;
  }


  return (
    <Card className="mx-auto max-w-sm mt-40 mb-80">
      <form onSubmit={onSubmitRegisterHandler}>
        <CardHeader>
          <CardTitle className="text-xl">회원가입</CardTitle>
          <CardDescription>이름, 이메일, 비밀번호를 입력하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">이름</Label>
              <Input 
                id="name" 
                placeholder="홍길동" 
                required
                value={name}
                onChange={handleNameChange} />
            </div>
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
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={handlePasswordChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Password Confirm</Label>
              <Input 
                id="confirmPassword" 
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="grid gap-2">
          <Button type="submit" className="w-full" disabled={!formValid}>
            가입하기
          </Button>
          <div className="mt text-center text-sm">
            이미 회원이신가요?{' '}
            <Link to="/login" className="underline">
              로그인
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

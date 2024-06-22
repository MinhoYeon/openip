import { Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


export function TmFileApplicant() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40 ">
        <div className="flex flex-col gap-4 py-4 pt-16">
          <main className="grid flex-1 items-center gap-4 p-4 sm:px-6 sm:py-0">
            <div className="mx-auto grid  flex-1 auto-rows-max gap-4">
              <div className="flex sm:items-center gap-4">
                <div className="flex-1 shrink-0 whitespace-nowrap text-sm font-semibold tracking-tight sm:grow-0">
                  상표 및 상품 정보 입력하기
                </div>
                <div className="flex-1 shrink-0 whitespace-nowrap text-sm font-semibold tracking-tight sm:grow-0">
                  서비스 선택 및 결제
                </div>
                <div className="flex-1 shrink-0 whitespace-nowrap text-sm font-semibold tracking-tight sm:grow-0">
                  출원인 정보 입력하기
                </div>
              </div>
              <div className="grid gap-4 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-3 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>요청 내역</CardTitle>
                      <CardDescription>
                        {/* 상표 명칭을 입력해주세요 */}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">상표 명칭</Label>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="picture">상표 파일</Label>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="description">
                            상표를 사용하려는 상품 및 서비스를 간단하게
                            설명해주세요
                          </Label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>연락받으실 분</CardTitle>
                      <CardDescription>
                        출원 진행 상황을 등을 안내 받으실 분을 반드시
                        입력해주세요
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="grid gap-1">
                          <Label htmlFor="name">성명</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue="홍길동"
                          />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="name">이메일</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue="홍길동"
                          />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="name">휴대전화</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue="홍길동"
                          />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="name">유선전화</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue="홍길동"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <div className="flex justify-center">
                      <Button size="sm">저장하기</Button>                      <Button size="sm">수정하기</Button>

                    </div>
                  </Card>

                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>출원인 정보</CardTitle>
                      <CardDescription>
                        출원이 등록된 후에 권리자가 될 개인 혹은 법인 정보를
                        기재해 주세요.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-1">
                        <div className="grid gap-1">
                          <Label htmlFor="name">출원인명(한국)</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="name">출원인명(영문)</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="name">출원인 주민등록번호</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="name">출원인 이메일</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="name">출원인 휴대전화</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="name">출원인 유선전화</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>
                        <div className="grid gap-1">
                          <Label htmlFor="name">출원인 등본상 주소</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </CardContent>
                    <div className="flex items-center justify-center gap-1">
                      <Button size="sm">저장하기</Button>
                      <Button size="sm">수정하기</Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

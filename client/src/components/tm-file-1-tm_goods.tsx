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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@radix-ui/react-checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export function TmFileTmAndGoodsInfo({tmFileStepHandler}) {
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
                      <CardTitle>상표 정보</CardTitle>
                      <CardDescription>
                        {/* 상표 명칭을 입력해주세요 */}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">상표 명칭</Label>
                          <Input
                            id="tmName"
                            type="text"
                            className="w-full"
                            defaultValue="ex) 스타벅스(한글) or starbucks(영문) or 스타벅스/starbucks(한글/영문)"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="picture">상표 파일</Label>
                          <Input id="tmFile" type="file" className="w-full" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="description">
                            상표를 사용하려는 상품 및 서비스를 간단하게
                            설명해주세요
                          </Label>
                          <Textarea
                            id="tmDescription"
                            defaultValue="ex) 커피 및 빵을 만들어서 판매하는 커피숍입니다. 아동복 브랜드로, 아동복을 제작, 유통, 판매(쇼핑몰)하고 있습니다."
                            className="min-h-32"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card x-chunk="dashboard-07-chunk-2">
                    <CardHeader>
                      <CardTitle>상품 및 서비스 정보</CardTitle>
                      <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 grid-row">
                        <div className="grid gap-3">
                          <div className="flex flex-row">
                            <Label htmlFor="category">분류 선택</Label>
                            <div className="relative ml-auto flex-1 grow-0">
                              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-lg bg-background pl-8 w-[200px]"
                              />
                            </div>
                          </div>
                          <div>
                            <Card x-chunk="dashboard-07-chunk-1">
                              <CardContent>
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>추천 순위</TableHead>
                                      <TableHead>상품분류</TableHead>
                                      <TableHead>설명</TableHead>
                                      <TableHead>선택</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <ScrollArea className="h-24 w-96 rounded-md border">
                                      <TableRow className="text-sm">
                                        <TableCell className="font-semibold">
                                          1
                                        </TableCell>
                                        <TableCell>제43류</TableCell>
                                        <TableCell>식당, 음식점 이름</TableCell>
                                        <TableCell>
                                          <Checkbox id="terms" />
                                        </TableCell>
                                      </TableRow>
                                      <Separator className="" />
                                      <TableRow className="text-sm">
                                        <TableCell className="font-semibold">
                                          1
                                        </TableCell>
                                        <TableCell>제43류</TableCell>
                                        <TableCell>식당, 음식점 이름</TableCell>
                                        <TableCell>
                                          <Checkbox id="terms" />
                                        </TableCell>
                                      </TableRow>
                                      <Separator className="" />
                                    </ScrollArea>
                                  </TableBody>
                                </Table>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                        <div className="grid gap-3">
                          <div className="flex flex-row">
                            <Label htmlFor="subcategory">
                              상품 및 서비스 선택
                            </Label>
                            <div className="relative ml-auto flex-1 grow-0">
                              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="search"
                                placeholder="Search..."
                                className="w-full rounded-lg bg-background pl-8 w-[200px]"
                              />
                            </div>
                          </div>
                          <div>
                            {' '}
                            <div>43류</div>
                            <Card x-chunk="dashboard-07-chunk-1">
                              <CardContent>
                                <Table>
                                  <TableHeader>
                                    <TableRow>
                                      <TableHead>상품분류</TableHead>
                                      <TableHead>상품명</TableHead>
                                      <TableHead>선택</TableHead>
                                    </TableRow>
                                  </TableHeader>
                                  <TableBody>
                                    <ScrollArea className="h-24 w-96 rounded-md border">
                                      <TableRow>
                                        <TableCell className="font-semibold">
                                          제43류
                                        </TableCell>
                                        <TableCell>커피 가공업</TableCell>
                                        <TableCell>
                                          <Checkbox id="terms" />
                                        </TableCell>
                                      </TableRow>
                                      <Separator className="" />
                                    </ScrollArea>
                                  </TableBody>
                                </Table>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card x-chunk="dashboard-07-chunk-2">
                    <CardHeader>
                      <CardTitle>선택된 상품(서비스) 확인하기</CardTitle>
                      <CardDescription>
                        선택하신 상품 및 서비스를 최종적으로 확인해 주세요.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 grid-row">
                        <div className="grid gap-3 flex flex-rows">
                          <Label>제43류</Label>
                          <Card x-chunk="dashboard-07-chunk-1">
                            커피숍업, 베이커리업{' '}
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Button variant="outline" size="sm">
                  임시저장
                </Button>
                <Button onClick={tmFileStepHandler} size="sm">서비스 선택 및 결제하기</Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

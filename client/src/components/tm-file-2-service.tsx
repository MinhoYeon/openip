import { Badge } from '@/components/ui/badge';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent } from '@/components/ui/tabs';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function TmFileService({ tmFilePaymentHandler }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 ">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 ">
            <div className="grid gap-4 ">
              <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
                <CardHeader className="pb-3">
                  <CardTitle>서비스 종류</CardTitle>
                  <CardDescription className=" text-balance leading-relaxed">
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button>Create New Order</Button>
                </CardFooter>
              </Card>
            </div>
            <Tabs defaultValue="week">
              <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                  <CardHeader className="px-7">
                    <CardTitle>서비스 선택</CardTitle>
                    <CardDescription>
                      Recent orders from your store.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>상품류</TableHead>
                          <TableHead className="hidden sm:table-cell">
                            상품명칭
                          </TableHead>
                          <TableHead className="hidden sm:table-cell">
                            서비스 선택
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-accent">
                          <TableCell>
                            <div className="font-medium">제43류</div>
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            하하하업, 하하하업
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="default" id="r1" />
                                  <Label htmlFor="r1">간편출원</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="comfortable" id="r2" />
                                  <Label htmlFor="r2">조사출원</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="compact" id="r3" />
                                  <Label htmlFor="r3">출원</Label>
                                </div>
                              </RadioGroup>
                            </Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
              <CardHeader className="flex flex-row items-start bg-muted/50">
                <div className="grid gap-0.5">
                  <CardTitle className="group flex items-center gap-2 text-lg">
                    주문내역 및 결제금액
                  </CardTitle>
                  <CardDescription></CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6 text-sm">
                <div className="grid gap-3">
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        총알 출원 x <span>1</span>
                      </span>
                      <span>$250.00</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        조사 출원 x <span>1</span>
                      </span>
                      <span>$49.00</span>
                    </li>
                  </ul>
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between font-semibold">
                      <span className="text-muted-foreground">Total</span>
                      <span>$329.00</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <div className="flex items-center justify-center gap-2 pt-4">
              <Button variant="outline" size="sm">
                임시저장
              </Button>
              <Button onClick={tmFilePaymentHandler} size="sm">
                서비스 선택 및 결제하기
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

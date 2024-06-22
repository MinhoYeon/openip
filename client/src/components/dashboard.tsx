import {Link} from 'react-router-dom';
import { General } from './general';
// import FillingDetail from './fillingDetail';

export function Dashboard() {
  return (

    <div className="flex min-h-screen w-full flex-col">

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
          >
            <Link to="#" className="font-semibold text-primary">
              일반
            </Link>
            <Link to="#">개인정보</Link>
            <Link to="#">신청내역</Link>
            <Link to="#">내역</Link>
            <Link to="#">문의하기</Link>
            <Link to="#">Advanced</Link>
          </nav>
          <General />
          {/* <FillingDetail /> */}

        </div>
      </main>
    </div>
  )
}

import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/error-page';
import Home from './routes/home';
import About from './routes/about';
import TmFile from './routes/tmfile';
import Register from './routes/register';
import Login from './routes/login';
import Applicant from './routes/applicant';
import Mypage from './routes/mypage';
import TmService from './routes/tmservice';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/price',
    element: <TmService />,
  },
  {
    path: '/tm-file',
    element: <TmFile />,
  },
  {
    path: '/applicant',
    element: <Applicant />,
  },
  {
    path: '/mypage',
    element: <Mypage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

function App() {
  return <></>;
}
export default App;

import { CarouselComp } from '@/components/carousel-component';
import Footer from '@/components/footer-component';
import HeaderNavi from '@/components/header-navi';


export default function Home() {

  return (
    <>
      <div>
        <HeaderNavi />
        <CarouselComp />
        <Footer />
      </div>
    </>
  );
}

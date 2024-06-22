import HeaderNavi from '@/components/header-navi';
import { TmFileTmAndGoodsInfo } from '@/components/tm-file-1-tm_goods';
import { TmFileService } from '@/components/tm-file-2-service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TmFile() {
  const [tmFileStep, setTmFileStep] = useState(true);
  const tmFileStepHandler = () => {
    setTmFileStep(!tmFileStep);
  };

  const [tmFilePayment, setTmFilePayment] = useState(false);
  const tmFilePaymentHandler = () => {
    setTmFilePayment(!tmFilePayment);
    setTmFileStep(!tmFileStep);
  };

  // const { id } = useParams();
  // const location = useLocation();
  // const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    // if (currentPath === `/kimchis/${id}` || currentPath === `/kimchis/${id}/`) {
    //   navigate(`/kimchis/${id}/description`, { replace: true });
    // }

    if (tmFilePayment) {
      navigate(`/applicant`);
    }
  }, [tmFilePayment]);

  return (
    <>
      <div>
        <HeaderNavi />
        {tmFileStep ? (
          <TmFileTmAndGoodsInfo tmFileStepHandler={tmFileStepHandler} />
        ) : (
          <TmFileService tmFilePaymentHandler={tmFilePaymentHandler} />
        )}
      </div>
    </>
  );
}

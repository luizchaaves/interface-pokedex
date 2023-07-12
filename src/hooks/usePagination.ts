import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const usePagination = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
    navigate(`/?page=${page + 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const previousPage = () => {
    setPage(page - 1);
    navigate(`/?page=${page - 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const backToHome = () => {
    setPage(1);
    navigate('/');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const selectPage = (page: number) => {
    setPage(page);
    navigate(`/?page=${page}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setPage(parseInt(searchParams.get('page')!) || 1);
  }, [searchParams]);

  return { page, setPage, nextPage, previousPage, backToHome, selectPage };
};

export default usePagination;

import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingScreen from './components/loading/loadingScreen';

interface Props {
  children: ReactNode;
}

const LoadingProvider: FC<Props> = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <LoadingScreen />}
      <div className={`${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'} transition-opacity duration-500`}>
        {children}
      </div>
    </>
  );
};

export default LoadingProvider;

import { useState, useEffect, useRef } from 'react';
import Preloader from './components/Preloader/Preloader';
import Router from './Router';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const minTimePassedRef = useRef(false);

  useEffect(() => {
    const startTime = Date.now();
    const MIN_DURATION = 1500;

    const minTimer = setTimeout(() => {
      minTimePassedRef.current = true;
      if (document.readyState === 'complete') {
        setIsLoading(false);
      }
    }, MIN_DURATION);

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = minTimePassedRef.current ? 0 : Math.max(MIN_DURATION - elapsed, 0);
      
      setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(minTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      {!isLoading && <Router />}
    </>
  );
}

export default App;
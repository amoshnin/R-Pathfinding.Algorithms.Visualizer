import {useEffect, useRef} from 'react';

export default function useCarbonAds() {
  const adsEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.type = 'text/javascript';
    scriptEl.async = true;
    scriptEl.src =
      '//cdn.carbonads.com/carbon.js?serve=CKYIC27J&placement=pathfindingnowsh';
    scriptEl.id = '_carbonads_js';

    adsEl?.current?.appendChild(scriptEl);
    return () => {
      adsEl?.current?.removeChild(scriptEl);
    };
  }, []);

  return {adsEl};
}

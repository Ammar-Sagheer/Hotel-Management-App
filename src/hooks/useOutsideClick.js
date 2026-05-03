import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        console.log('Clicked Inside handler');
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
          console.log('Clicked Inside If');
        }
      }
      document.addEventListener('click', handleClick, listenCapturing);

      return () =>
        document.removeEventListener('click', handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return { ref };
}

import { useState, useEffect } from 'react'
import useDebounce from './useDebounce';
import { isBrowser } from "./../utils/utils";
const useMobile = (breakpoint: number) => {
  if (!isBrowser) {
    return;
  }
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);


  const setWidth = () => {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', useDebounce(setWidth, 200));

  }, [innerWidth]);


  if (innerWidth < breakpoint) {
    return true;
  }
  return false;
}

export default useMobile
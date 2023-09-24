import React, { useState, useEffect } from 'react'
import useDebounce from './useDebounce';
const useMobile = (breakpoint: number) => {
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
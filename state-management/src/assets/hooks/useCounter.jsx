import { useEffect, useRef, useState } from "react";

const useCounter = () => {
  const isMount = useRef(false);

  const [count, setCount] = useState(0);
  const [showCounter, setShowCounter] = useState(true);

  const [countTimer, setCountTimer] = useState(0);

  useEffect(() => {
    if (isMount.current) {
      setCountTimer((t) => t + 1);
    }
    isMount.current = true;
  }, [count]);

  return {
    count,
    setCount,
    showCounter,
    setShowCounter,
    countTimer,
  };
};

export default useCounter;

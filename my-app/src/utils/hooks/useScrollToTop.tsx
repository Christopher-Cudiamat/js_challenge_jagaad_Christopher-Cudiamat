import { useEffect, useState } from "react";

const useScrollToTOp = (): number => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return offset;
};

export default useScrollToTOp;

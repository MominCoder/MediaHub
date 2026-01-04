import { useEffect, useState } from "react";

export const useMobileSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MOBILE_MAX = 430;

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);
    
    const handleChange = () => {
      if (!mq.matches) setIsOpen(false);
    };

    mq.addEventListener("change", handleChange);
    handleChange();

    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return {
    isMobileSearchOpen: isOpen,
    openMobileSearch: () => setIsOpen(true),
    closeMobileSearch: () => setIsOpen(false),
  };
};

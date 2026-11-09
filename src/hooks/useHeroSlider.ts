import { useCallback, useEffect, useRef, useState } from 'react';

export function useHeroSlider(totalSlides: number, autoplayDelay = 5000, isPaused = false) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDocumentVisible, setIsDocumentVisible] = useState(() => !document.hidden);
  const timeoutRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (totalSlides <= 1 || isPaused || !isDocumentVisible) {
      clearTimer();
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      next();
    }, autoplayDelay);

    return clearTimer;
  }, [autoplayDelay, clearTimer, currentIndex, isDocumentVisible, isPaused, next, totalSlides]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return {
    currentIndex,
    next,
    prev,
    goTo,
  };
}

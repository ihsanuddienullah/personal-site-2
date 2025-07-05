import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export const useConfetti = () => {
  useEffect(() => {
    const runConfetti = () => {
      // Configure confetti options
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        colors: ['#a855f7', '#3b82f6', '#10b981', '#f59e0b'],
      });
    };

    // Trigger confetti after a short delay to let the page load
    const timer = setTimeout(runConfetti, 1000);

    return () => clearTimeout(timer);
  }, []);
};

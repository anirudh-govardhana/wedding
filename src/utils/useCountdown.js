import { useEffect, useState } from "react";

export function useCountdown(targetDate) {
  const countDownDate = new Date(targetDate).getTime();

  const [countdown, setCountdown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}

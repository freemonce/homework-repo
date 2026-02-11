import { useState } from "react";

export function useCounter(initialValue = 0, options = {}) {
  const { min, max } = options;

  const getClampedValue = (val) => {
    let result = val;
    if (min !== undefined) result = Math.max(result, min);
    if (max !== undefined) result = Math.min(result, max);
    return result;
  };

  const [count, setCount] = useState(getClampedValue(initialValue));

  const increment = () => {
    setCount((prev) => (max !== undefined && prev >= max ? prev : prev + 1));
  };

  const decrement = () => {
    setCount((prev) => (min !== undefined && prev <= min ? prev : prev - 1));
  };

  const reset = () => setCount(getClampedValue(initialValue));

  const isMax = max !== undefined && count >= max;
  const isMin = min !== undefined && count <= min;

  return { count, increment, decrement, reset, isMax, isMin };
}

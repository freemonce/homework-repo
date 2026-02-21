import React from "react";
import { create } from "zustand";

const useCounterStore = create((set) => ({
  // 상태와 액션을 여기에 정의
  count: 0,

  increment: () =>
    set((state) => ({
      count: state.count + 1,
    })),

  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),

  reset: () => set({ count: 0 }),
}));

export default useCounterStore;

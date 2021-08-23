import create from "zustand";
import { devtools } from "zustand/middleware";
import { useRouter } from "next/router";

export const useStore = create(
  devtools((set, get) => ({
    timeInterval: {
      startTime: null,
      endTime: null,
      duration: null,
      fromInput: false,
    },
    setTimeInterval: (timeInterval) => {
      set({
        timeInterval: timeInterval,
      });
    },
  }))
);

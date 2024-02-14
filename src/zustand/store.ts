import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Quote } from '../types/quote';
import { QuotesStore } from '../types/quotesStore';

export const useQuotesStore = create<QuotesStore>()(
  persist(
    (set) => ({
      data: [],
      addQuote: (newQuote: Quote) =>
        set((state) => ({ data: [...state.data, newQuote] })),
      deleteQuote: (key: string) =>
        set((state) => ({
          data: state.data.filter((item) => item.key !== key),
        })),
      updateQuotes: (newData: Quote[]) => set(() => ({ data: newData }), false),
    }),
    {
      name: 'quote-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

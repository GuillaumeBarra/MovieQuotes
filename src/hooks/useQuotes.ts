import { useState } from 'react';
import { useQuotesStore } from '../zustand/store';

export const useQuotes = () => {
  const [text, setText] = useState<string>('');
  const data = useQuotesStore((state) => state.data);
  const addQuote = useQuotesStore((state) => state.addQuote);
  const deleteQuote = useQuotesStore((state) => state.deleteQuote);
  const updateQuotes = useQuotesStore((state) => state.updateQuotes);

  const handleTextInput = (input: string) => {
    setText(input);
  };

  const handleAddQuote = () => {
    if (!text) return;

    const quote = text.trim();
    const key = `${data.length.toString()} - ${quote}`;

    addQuote({ key, label: quote });
    setText('');
  };

  const handleDeleteQuote = (key: string) => {
    deleteQuote(key);
  };

  const handleUpdateQuotes = (data) => {
    updateQuotes(data);
  };

  return {
    text,
    data,
    handleTextInput,
    handleAddQuote,
    handleDeleteQuote,
    handleUpdateQuotes,
  };
};

import { Quote } from './quote';

export interface QuotesStore {
  data: Quote[];
  addQuote: (data: Quote) => void;
  deleteQuote: (key: string) => void;
  updateQuotes: (updatedData: Quote[]) => void;
}

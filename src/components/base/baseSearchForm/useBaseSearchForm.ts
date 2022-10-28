import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useBaseSearchForm = ({
  errorHandler,
  navigateTo,
}: {
  errorHandler: (payload: boolean) => void;
  navigateTo: string;
}) => {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();
  // To validate if search input is empty
  const missingInput = () => {
    if (!value) {
      errorHandler(true);
      return true;
    }
    errorHandler(true);
    return false;
  };
  // Main method to submit the search form
  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (missingInput()) return;
    navigate(`/${navigateTo}?q=${value}`);
  };

  return { value, setValue, handleSubmitSearch };
};

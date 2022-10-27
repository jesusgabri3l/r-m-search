import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useBaseSearchForm = ({
  errorHandler,
}: {
  errorHandler: (payload: boolean) => void;
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
    navigate(`/characters?q=${value}`);
  };

  return { value, setValue, handleSubmitSearch };
};

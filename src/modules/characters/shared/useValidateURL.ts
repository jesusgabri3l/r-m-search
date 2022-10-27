import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Reusable custom hook, use it for validation some PARAM URL, like query params or url params
export const useValidateURL = (param: string) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!param) navigate('/');
  }, []);
};

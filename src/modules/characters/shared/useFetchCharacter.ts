import { useEffect, useState } from 'react';

import api from '../../../services/api';
import { Character } from '../../../types/Character';
// Reusable custom hook, use it for fetching character information
export const useFetchCharacter = ({ route }: { route?: string }) => {
  const [data, setData] = useState<Character | Character[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const getCharacterInfoByRoute = async (): Promise<void> => {
    try {
      const { data } = await api.getCharacterInfo(route || '');
      setData(data);
    } catch (e: any) {
      if (e.response?.status === 404) setError('No matching character');
      else setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCharacterInfoByRoute();
  }, []);
  return { error, loading, data };
};

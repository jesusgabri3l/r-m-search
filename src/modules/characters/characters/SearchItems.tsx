import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import BaseCard from '../../../components/base/BaseCard';
function SearchItems() {
  const [queryParam] = useSearchParams();
  const q = queryParam.get('q');
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    if (!q) navigate('/');
    const getCharacterByName = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/characters?q=${q}`);
      setCharacters(data);
    };
    getCharacterByName();
  }, []);
  return (
    <div className="grid">
      {characters &&
        characters.map((character: any) => (
          <BaseCard
            key={character.id}
            image={character.image}
            title={character.name}
            description={character.species}
            linkRoute={`/characters/${character.id}`}
          />
        ))}
    </div>
  );
}

export default SearchItems;

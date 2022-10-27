import { useSearchParams } from 'react-router-dom';

import BaseAlert from '../../../components/base/BaseAlert';
import BaseSpinner from '../../../components/base/BaseSpinner';
import { Character } from '../../../types/Character';
import { useFetchCharacter } from '../shared/useFetchCharacter';
import { useValidateURL } from '../shared/useValidateURL';
import CharacterList from './components/CharacterList';

function CharactersResultView() {
  // Get 'q' query param for doing the search
  const [queryParam] = useSearchParams();
  const q = queryParam.get('q');
  // Validating 'q' query param, If 'q' not provided, it will redirect to '/'
  useValidateURL(q as string);

  const { loading, error, data: characters } = useFetchCharacter({ route: `?q=${q}` });
  return (
    <main>
      {loading ? (
        <BaseSpinner />
      ) : !error && characters ? (
        <div className="grid">
          <CharacterList characters={characters as Character[]} />
        </div>
      ) : (
        <BaseAlert title={error} description={error} type="info" />
      )}
    </main>
  );
}

export default CharactersResultView;

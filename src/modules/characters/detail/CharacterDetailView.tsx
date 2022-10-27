import { useParams } from 'react-router-dom';

import BaseAlert from '../../../components/base/BaseAlert';
import BaseSpinner from '../../../components/base/BaseSpinner';
import { Character } from '../../../types/Character';
import { useFetchCharacter } from '../shared/useFetchCharacter';
import { useValidateURL } from '../shared/useValidateURL';
import CharacterDetailLabel from './components/CharacterDetailLabel';

function CharacterDetailView() {
  // Get 'id' url param for doing the fetch
  const { id } = useParams();
  // Validating ID url param, If id not provided, it will redirect to '/'
  useValidateURL(id as string);
  const { loading, error, data: character } = useFetchCharacter({ route: `/${id}` });
  return (
    <main>
      {loading ? (
        <BaseSpinner />
      ) : !error && (character as Character) ? (
        <div className="flex-center min-h-screen py-8">
          <article className="detail">
            <img className="detail__image" src={character.image} alt="profile" />
            <section className="detail__info">
              <h1 className="detail__info__title">{character.name}</h1>
              <div className="flex justify-between gap-y-8 mt-8 flex-wrap">
                <CharacterDetailLabel label="Status" description={character.status} />
                <CharacterDetailLabel label="Species" description={character.species} />
                <CharacterDetailLabel label="Gender" description={character.gender} />
                <CharacterDetailLabel label="Origin" description={character.Origin} />
              </div>
            </section>
          </article>
        </div>
      ) : (
        <BaseAlert title={error} description={error} type="info" />
      )}
    </main>
  );
}

export default CharacterDetailView;

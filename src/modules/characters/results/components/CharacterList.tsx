import BaseCard from '../../../../components/base/BaseCard';
import { Character } from '../../../../types/Character';

function CharacterList({ characters }: { characters: Character[] }) {
  return (
    <>
      {characters.map((character: Character) => (
        <BaseCard
          key={character.id}
          image={character.image}
          title={character.name}
          description={character.species}
          linkRoute={`/characters/${character.id}`}
        />
      ))}
    </>
  );
}

export default CharacterList;

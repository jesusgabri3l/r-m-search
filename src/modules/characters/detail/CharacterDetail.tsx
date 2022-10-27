import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [character, setCharacter] = useState<any>(null);
  useEffect(() => {
    if (!id) navigate('/');
    const getCharacterById = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/characters/${id}`);
      setCharacter(data);
    };
    getCharacterById();
  }, []);
  return (
    <div className="flex-center min-h-screen py-8">
      {character && (
        <article className="detail">
          <img className="detail__image" src={character.image} alt="profile" />
          <section className="detail__info">
            <h1 className="detail__info__title">{character.name}</h1>
            <div className="flex justify-between gap-y-8 mt-8 flex-wrap">
              <div className="detail__info__section">
                <p className="detail__info__section__label">Status: </p>
                <p className="detail__info__section__description">{character.status}</p>
              </div>
              <div className="detail__info__section">
                <p className="detail__info__section__label">Species: </p>
                <p className="detail__info__section__description">{character.species}</p>
              </div>
              <div className="detail__info__section">
                <p className="detail__info__section__label">Gender: </p>
                <p className="detail__info__section__description">{character.gender}</p>
              </div>
              <div className="detail__info__section">
                <p className="detail__info__section__label">Origin: </p>
                <p className="detail__info__section__description">
                  {character.origin.name}
                </p>
              </div>
            </div>
          </section>
        </article>
      )}
    </div>
  );
}

export default CharacterDetail;

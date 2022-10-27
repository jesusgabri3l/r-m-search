interface Props {
  label?: string;
  description?: string;
}
function CharacterDetailLabel({ label, description }: Props) {
  return (
    <div className="detail__info__section">
      <p className="detail__info__section__label">{label}: </p>
      <p className="detail__info__section__description">{description}</p>
    </div>
  );
}

CharacterDetailLabel.defaultProps = {
  label: 'Default Label',
  description: 'Default description',
};

export default CharacterDetailLabel;

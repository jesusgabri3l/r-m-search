import { Link } from 'react-router-dom';

import defaultImage from '../../assets/default.png';
interface Props {
  title?: string;
  description?: string;
  image?: string;
  linkRoute: string;
}
//Reusable card component, use it for a grid section
function BaseCard({ title, description, image, linkRoute }: Props) {
  return (
    <Link className="card" to={linkRoute}>
      <img alt="profile" src={image} className="card__image" />
      <p className="card__title">{title}</p>
      <p className="card__description">{description}</p>
    </Link>
  );
}

BaseCard.defaultProps = {
  title: 'Default title',
  description: 'Default description',
  image: defaultImage,
  linkRoute: '',
};

export default BaseCard;

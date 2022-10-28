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
    <Link className="card" to={linkRoute} data-testid="card-test">
      <img
        alt="profile"
        src={image}
        className="card__image"
        data-testid="card-image-test"
      />
      <p className="card__title" data-testid="card-title-test">
        {title}
      </p>
      <p className="card__description" data-testid="card-description-test">
        {description}
      </p>
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

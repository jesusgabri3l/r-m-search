interface Props {
  title?: string;
  description?: string;
  icon?: string;
  type?: 'error' | 'info';
}
// Reusable Alert, use it as a Error UI fallback
function BaseAlert({ title, description, icon, type }: Props) {
  return (
    <div role="alert" className={` alert alert--${type}`}>
      <i className={`fas fa-${icon}`} data-testid="alert-icon-test" />
      <div>
        <p className="alert__title" data-testid="alert-title-test">
          {title}
        </p>
        <p className="alert__description" data-testid="alert-description-test">
          {description}
        </p>
      </div>
    </div>
  );
}
BaseAlert.defaultProps = {
  title: 'WOops, something went wrong',
  description: 'Looks like something went wrong, try to reach out the support team.',
  icon: 'warning',
  type: 'error',
};
export default BaseAlert;

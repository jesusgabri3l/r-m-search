import BaseAlert from '../base/BaseAlert';

function TheNotFoundView() {
  return (
    <BaseAlert
      title="There is nothing here"
      description="Looks like there is nothing here, you can go back!"
      type="info"
      icon="bomb"
    />
  );
}

export default TheNotFoundView;

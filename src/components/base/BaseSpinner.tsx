function BaseSpinner() {
  return (
    <div
      className="h-full flex justify-center items-center pt-20"
      data-testid="spinner-test"
    >
      <div className="spinner"></div>;
    </div>
  );
}

export default BaseSpinner;

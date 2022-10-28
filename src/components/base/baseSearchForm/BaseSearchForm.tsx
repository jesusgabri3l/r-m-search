import { useBaseSearchForm } from './useBaseSearchForm';
// Reusable search component, it receives a method which you can use it to handle the empty input
function BaseSearchForm({
  errorHandler,
  navigateTo,
}: {
  errorHandler: (arg0: boolean) => void;
  navigateTo: string;
}) {
  const { value, setValue, handleSubmitSearch } = useBaseSearchForm({
    errorHandler,
    navigateTo,
  });
  return (
    <form
      className="search"
      data-testid="search-test"
      onSubmit={(e) => handleSubmitSearch(e)}
    >
      <input
        className="search__input"
        placeholder="Rick Sanchez"
        data-testid="search-input-test"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search__button" data-testid="search-button-test">
        Go
      </button>
    </form>
  );
}

export default BaseSearchForm;

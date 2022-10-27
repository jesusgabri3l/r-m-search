import { useBaseSearchForm } from './useBaseSearchForm';
// Reusable search component, it receives a method which you can use it to handle the empty input
function BaseSearchForm({ errorHandler }: { errorHandler: (arg0: boolean) => void }) {
  const { value, setValue, handleSubmitSearch } = useBaseSearchForm({ errorHandler });
  return (
    <form className="search" onSubmit={(e) => handleSubmitSearch(e)}>
      <input
        className="search__input"
        placeholder="Rick Sanchez"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search__button">Go</button>
    </form>
  );
}

export default BaseSearchForm;

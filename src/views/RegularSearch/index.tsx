import { useState, useRef, useMemo } from "react";
import SearchResults from "../../components/SearchResults";
import { useActions } from "../../hooks/useActions";
import { SearchType } from "../../utils/searchTypes";
import {
  RegularSearchForm,
  RegularSearchFormButton,
  RegularSearchFormInput,
  RegularSearchFormWrapper,
  SearchResultsWrapper,
} from "./RegularSearch.style";
const RegularSearch: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { search } = useActions();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current?.value.length === 1) {
      search(inputRef.current.value!, SearchType.BY_FIRST_LETTER);
    } else {
      search(inputRef.current?.value!);
    }
    setTerm(inputRef.current?.value!);
  };
  const setSearchType = useMemo(() => {
    if (term.length === 0) {
      return SearchType.RANDOM_10;
    } else {
      return SearchType.BY_NAME;
    }
  }, [term]);
  return (
    <RegularSearchFormWrapper>
      <RegularSearchForm onSubmit={submitHandler}>
        <RegularSearchFormInput ref={inputRef} />
        <RegularSearchFormButton>Search</RegularSearchFormButton>
      </RegularSearchForm>
      <SearchResultsWrapper>
        <SearchResults term={term} searchType={setSearchType} />
      </SearchResultsWrapper>
    </RegularSearchFormWrapper>
  );
};
export default RegularSearch;

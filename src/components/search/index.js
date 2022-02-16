import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState, useMemo } from "react"
import { InstantSearch } from "react-instantsearch-dom"

import SearchBox from "./styled-search-box"
import StyledSearchResult from "./styled-search-result"
import useClickOutside from "./use-click-outside"
import styles from "./search.module.css"
const Search = ({ indices }) => {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        "PEFIRLXAO1",
        "0ece8938c832bdd63678eb395c3219af"
      ),
    []
  )

  useClickOutside(rootRef, () => setFocus(false))

  return (
    <div className="search" ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <StyledSearchResult
          className={styles.searchResult}
          show={query && query.length > 0 && hasFocus}
          indices={indices}
        />
      </InstantSearch>
    </div>
  )
}

export default Search
import React, { useState, useEffect } from "react";
import queryString from "query-string";
import PostList from "./components/PostList";
import Pagination from "../../components/Pagination";
import FilterForm from "../../components/FilterForm";

function PostFeature() {
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
    title_like: "",
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        // { _page: 1, _limit: 10 } => _page=1&_limit=10
        const requestParam = queryString.stringify(filters);

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${requestParam}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    console.log(newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFilterChange(newFilter) {
    console.log(newFilter);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilter.searchTerm,
    });
  }

  return (
    <div>
      <FilterForm onSubmit={handleFilterChange} />
      <PostList postList={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default PostFeature;

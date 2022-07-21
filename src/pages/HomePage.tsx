import React, { FC, useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import { useDebounce } from "../hooks/debounce";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../store/github/github.api";

const HomePage: FC = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);

  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  const [
    fetchRepos,
    { isLoading: areReposLoading, data: repos, isError: isReposError },
  ] = useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length! > 0);
  }, [data?.length, debounced.length]);

  const сlickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false)
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10 mx-auto px-10">
      <div className="relative w-[100%]">
        <input
          className="border py-2 px-4 w-full h-[42px] mb-2"
          type="text"
          name="search"
          id="search"
          value={search}
          autoComplete='off'
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <ul className="absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-auto shadow-md bg-white">
            {isError && <p className="text-center text-red-500">Error...</p>}
            {isLoading && <p className="text-red-500">Loading...</p>}
            {data?.map((user) => (
              <li
                key={user.id}
                onClick={() => сlickHandler(user.login)}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors"
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="container">
        {areReposLoading && <p>Loading...</p>}
        {isReposError && <p>Error...</p>}
        {repos?.map((repo) => (
          <RepoCard repo={repo} key={repo.id}/>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

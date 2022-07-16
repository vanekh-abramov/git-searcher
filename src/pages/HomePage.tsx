import React, { useState } from "react";
import { useSearchUsersQuery } from "../store/github/github.api";

type Props = {};

const HomePage = (props: Props) => {
  const [search, setSearch] = useState("");
  const { isLoading, isError, data } = useSearchUsersQuery("Vania");
  return (
    <div className="flex justify-center pt-10 mx-auto px-10">
      {isError && <p className="text-center text-red-600">Error...</p>}
      <div className="relative w-[560px]">
        <input
          className="border py-2 px-4 w-full h-[42px] mb-2"
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute top-[42px] left-0 right-0 max-h[200px] shadow-md bg-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
          molestias!
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";

type Props = {
  repo: IRepo;
};

const RepoCard = ({ repo }: Props) => {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true)
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFav(false)
  };

  return (
    <div className="border py-3 px-5 mx-3 rounded hover:shadow-md hover:bg-gray-100 transition-all">
      <a
        className="cursor-pointer"
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="text-lg font-bold">{repo.name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo?.description}</p>
      </a>
      {!isFav ? (
        <button
          className="border rounded p-1 my-2 hover:shadow-md hover:bg-green-400 transition-all"
          onClick={addToFavourite}
        >
          Add to favourite
        </button>
      ) : (
        <button
          className="border rounded p-1 my-2 hover:shadow-md hover:bg-red-500 transition-all"
          onClick={removeFromFavourite}
        >
          Remove from favourite
        </button>
      )}
    </div>
  );
};

export default RepoCard;

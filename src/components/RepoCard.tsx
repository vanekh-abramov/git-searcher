import React, { useState } from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IRepo } from "../models/models";
import Button from "./UI/Button";
import RepoCardInfo from "./UI/RepoCardInfo";

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
    setIsFav(true);
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFav(false);
  };

  return (
    <div className="border py-3 px-5 mx-3 rounded hover:shadow-md hover:bg-gray-100 transition-all">
      <RepoCardInfo
        repoDescription={repo.description}
        repoName={repo.name}
        repoUrl={repo.html_url}
        infoForksCount={repo.forks_count}
        infoForksText={"Forks: "}
        infoLanguages={repo.language}
        infoLanguagesText={"Language: "}
        infoWatchersCount={repo.watchers_count}
        infoWatchersText={"Watchers: "}
      />
      {!isFav ? (
        <Button
          buttonClick={addToFavourite}
          buttonText={"Add to favourite"}
          bgColor={"gray"}
        />
      ) : (
        <Button
          buttonClick={removeFromFavourite}
          buttonText={"Remove from favourite"}
          bgColor={"red"}
        />
      )}
    </div>
  );
};

export default RepoCard;

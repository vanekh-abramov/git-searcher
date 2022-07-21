import React from "react";
import { useAppSelector } from "../hooks/redux";

type Props = {};

const FavouritesPage = (props: Props) => {
  const { favourites } = useAppSelector((state) => state.github);

  return (
    <ul className="list-none">
      {favourites.map(fav => (
        <li key={fav}>
          <a href={fav} target='_blank' rel="noreferrer">{fav}</a>
        </li>
      ))}
    </ul>
  );
};

export default FavouritesPage;

type Props = {
  repoUrl: string;
  repoName: string;
  repoDescription: string;
  infoWatchersCount: number;
  infoWatchersText: string;
  infoForksText: string;
  infoForksCount: number;
  infoLanguages: string;
  infoLanguagesText: string;
};

const RepoCardInfo = ({
  infoLanguages,
  infoLanguagesText,
  infoForksCount,
  infoForksText,
  infoWatchersText,
  infoWatchersCount,
  repoDescription,
  repoName,
  repoUrl,
}: Props): JSX.Element => (
  <a className="cursor-pointer" href={repoUrl} target="_blank" rel="noreferrer">
    <h2 className="text-lg font-bold">{repoName}</h2>
    <p className="text-sm">
      {infoWatchersText}
      <span className="font-bold mr-2">{infoWatchersCount}</span>
    </p>
    <p className="text-sm">
      {infoForksText}
      <span className="font-bold mr-2">{infoForksCount}</span>
    </p>
    {infoLanguages && (
      <p className="text-sm">
        {infoLanguagesText}
        <span className="font-bold mr-2">{infoLanguages}</span>
      </p>
    )}
    <p className="text-sm font-thin">{repoDescription}</p>
  </a>
);

export default RepoCardInfo;

const phrases = [
  "No?",
  "Please be my Valentine",
  "I need you",
  "I'll be upset if you say No",
  "Why are you doing this to me?",
  "I'm gonna cry if you say No...",
  "Who else if not you?",
  "You'll break my heart",
];

type NoContentProps = {
  noCount: number;
};

export const NoContent = ({ noCount }: NoContentProps) => {
  const getNoButtonPhrase = () => {
    return phrases[noCount % phrases.length];
  };

  return (
    <div className="content">
      {!noCount ? (
        <video
          key={noCount}
          playsInline
          autoPlay
          loop
          muted
          width="200px"
          height="200px"
        >
          <source src="video/main.mp4" type="video/mp4" />
        </video>
      ) : (
        <>
          <video
            key={noCount}
            playsInline
            autoPlay
            loop
            muted
            width="200px"
            height="200px"
          >
            <source
              src={`video/${(noCount % phrases.length) + 1}.mp4`}
              type="video/mp4"
            />
          </video>
          <p>{getNoButtonPhrase()}</p>
        </>
      )}
    </div>
  );
};

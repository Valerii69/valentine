const phrases = [
 "Ні?",
  "Будь ласка, будь моїм Валентином",
  "Ти мені потрібен",
  "Я засмучуся, якщо ти скажеш Ні",
  "Чому ти так зі мною чиниш?",
  "Я заплачу, якщо ти скажеш Ні...",
  "Хто, якщо не Ти?",
  "Ти розіб'єш мені серце",
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

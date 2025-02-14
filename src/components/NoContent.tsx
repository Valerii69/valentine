import { VideoContent } from "./VideoContent";
const phrases = [
  "В тебе немає варіантів!",
  "Будь ласка, будь моєю..",
  "Ти мені потрібна",
  "Я засмучуюсь, коли ти кажеш 'Ні'",
  "Чому ти так зі мною чиниш?",
  "Я заплачу, якщо ти скажеш 'Ні'...",
  "Хто, якщо не Ти?",
  "Ти розбиваєш мені серце",
];

type NoContentProps = {
  noCount: number;
};

export const NoContent = ({ noCount }: NoContentProps) => {
  const isInitial = noCount === 0;
  const phrase = phrases[noCount % phrases.length];
  const videoSrc = isInitial
    ? "video/main.mp4"
    : `video/${(noCount % phrases.length) + 1}.mp4`;

  return (
    <div className="content">
      <VideoContent
        src={videoSrc}
        width={isInitial ? 150 : 200}
        height={isInitial ? 150 : 200}
      />
      {!isInitial && <p>{phrase}</p>}
    </div>
  );
};

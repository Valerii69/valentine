import { VideoContent } from "./VideoContent";
import { Phrases } from "../components/utils/Phrases";


type NoContentProps = {
  noCount: number;
};

export function NoContent({ noCount }: NoContentProps) {
  const isInitial = noCount === 0;
  const phrase = Phrases[noCount % Phrases.length];
  const videoSrc = isInitial
    ? "video/main.mp4"
    : `video/${(noCount % Phrases.length) + 1}.mp4`;

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
}

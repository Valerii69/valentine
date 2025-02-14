export const VideoContent = ({ src, width, height,}: {
  src: string;
  width: number;
  height: number;
}) => (
  <video
    key={src}
    playsInline
    autoPlay
    loop
    muted
    width={width}
    height={height}
  >
    <source src={src} type="video/mp4" />
  </video>
);

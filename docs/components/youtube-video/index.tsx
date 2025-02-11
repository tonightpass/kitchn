import kitchn from "kitchn";

const YoutubeVideo: React.FC = ({ ...props }) => {
  return (
    <Iframe
      className={"aspect-video w-full"}
      allow={
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      }
      allowFullScreen
      {...props}
    />
  );
};

const Iframe = kitchn.iframe`
  aspect-ratio: 16 / 9;
  width: 100%;
  border: none;
  border: 1px solid ${({ theme }) => theme.colors.layout.dark};
  border-radius: ${({ theme }) => theme.radius.square};
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export default YoutubeVideo;

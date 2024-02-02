type ImageType = {
  src: string,
  alt: string
};

export const Image: React.FC<ImageType> = (props) => {
  return <img src={props.src} className="img" alt={props.alt}></img>
};

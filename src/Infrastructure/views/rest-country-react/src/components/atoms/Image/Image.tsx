import './styles/Image.css';

type ImageProps = {
  src?: string
  className?: string;
}

const Image = ({ src, className }: ImageProps) => {
  return (
    <img src={src} className={className} />
  )
}

export default Image
import './styles/Buttons.css';

type ButtonsProps = {
  children?: React.ReactNode;
  className?: string;
}

const Buttons = ({ children, className }: ButtonsProps) => {
  return (
    <button className={className}>{children}</button>
  )
}

export default Buttons

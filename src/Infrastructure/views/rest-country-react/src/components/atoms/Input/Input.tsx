import './styles/Input.css';

type InputProps = {
	type: string;
	placeholder?: string;
	className?: string;
}

const Input = ({ type, placeholder, className }: InputProps) => {
	return (
		<input type={type} placeholder={placeholder} className={className} />
	)
}

export default Input

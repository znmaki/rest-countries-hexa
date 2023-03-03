import './styles/Input.css';

type InputProps = {
	type: string;
	placeholder?: string;
	className?: string;
	onChange: (e: any) => void;
}

const Input = ({ type, placeholder, className, onChange }: InputProps) => {
	return (
		<input type={type} placeholder={placeholder} className={className} onChange={onChange} />
	)
}

export default Input

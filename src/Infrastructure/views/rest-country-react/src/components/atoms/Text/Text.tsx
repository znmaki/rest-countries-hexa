import './styles/Text.css';

type Text = {
	children?: React.ReactNode;
	className?: string
}

const Text = ({ children, className }: Text) => {
	return (
		<p className={className}>{children}</p>
	)
}

export default Text
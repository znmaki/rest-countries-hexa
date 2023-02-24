import './styles/Title.css';

type TitleProps = {
	type: string;
	children?: React.ReactNode;
	className?: string;
}

const Title = ({ type, children, className }: TitleProps) => {
	return (
		<>
			{type === 'h1' && <h1 className={`font-bold ${className}`}>{children}</h1>}
			{type === 'h2' && <h2 className={` ${className}`}>{children}</h2>}
			{type === 'h3' && <h3 className={` ${className}`}>{children}</h3>}
		</>
	)
}

export default Title

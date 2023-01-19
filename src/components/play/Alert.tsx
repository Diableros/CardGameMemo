import { ReactNode } from 'react';

type PorpsType = {
	children: ReactNode;
};

const Alert = ({ children }: PorpsType) => {
	return (
		<div className="alert">
			<h1 className="alert__message">{children}</h1>
		</div>
	);
};

export default Alert;

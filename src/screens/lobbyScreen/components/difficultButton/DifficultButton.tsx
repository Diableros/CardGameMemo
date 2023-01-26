import { DifficultType } from 'types/difficult';
import './difficultButton.scss';

type PropsType = {
	selected: Boolean;
	btnNumber: DifficultType;
	setDiffButton: (btnNumber: DifficultType) => void;
};

const DifficultButton = ({ selected, btnNumber, setDiffButton }: PropsType) => {
	return (
		<div
			className="start-screen__difficult-button hover-scale"
			onClick={() => {
				setDiffButton(btnNumber);
			}}
		>
			{selected ? (
				<div className="start-screen__difficult-button--active"></div>
			) : null}
			{btnNumber}
		</div>
	);
};

export default DifficultButton;

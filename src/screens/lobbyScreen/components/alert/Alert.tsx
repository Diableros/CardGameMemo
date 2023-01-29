import { ReactNode, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import './alert.scss';

type AlertPropsType = {
	children: ReactNode;
	showAlert: boolean;
	hideAlert: () => void;
};

const Alert = ({ children, showAlert, hideAlert }: AlertPropsType) => {
	const divRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (showAlert) {
			const anim = gsap.timeline();

			anim.fromTo(
				divRef.current,
				{ opacity: 0, display: 'none', scale: 0, rotate: 0, y: 0 },
				{
					opacity: 1,
					duration: 0.3,
					display: 'flex',
					scale: 1,
					rotate: 723,
					y: 0,
				}
			);
			anim.to(divRef.current, {
				delay: 0.1,
				y: 20,
				duration: 1.7,
				ease: 'power1',
			});
			anim.to(divRef.current, {
				opacity: 0,
				duration: 0.2,
				display: 'none',
				onComplete: () => {
					hideAlert();
				},
			});

			return () => {
				anim.kill();
			};
		}
	});

	return (
		<div ref={divRef} className="alert">
			<h1 className="alert__message">{children}</h1>
		</div>
	);
};

export default Alert;

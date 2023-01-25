import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import './blocker.scss';

const Blocker = () => {
	const divRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const anim = gsap.to(divRef.current, {
			color: '#7ac100',
			repeat: Infinity,
			duration: 0.9,
		});
		return () => {
			anim.kill();
		};
	}, [divRef]);
	return (
		<div className="blocker">
			<h1 ref={divRef} className="blocker__message">
				Запомните карты!
			</h1>
		</div>
	);
};

export default Blocker;

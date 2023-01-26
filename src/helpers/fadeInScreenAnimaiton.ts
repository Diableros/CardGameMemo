import { gsap } from 'gsap';

const fadeInScreen = (target: HTMLDivElement | null) =>
	gsap.fromTo(
		target,
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 2,
		}
	);

export default fadeInScreen;

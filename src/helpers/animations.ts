import { gsap } from 'gsap';

type TweenTargetType = HTMLDivElement | null;

export const fadeInScreenTween = (target: TweenTargetType) =>
	gsap.fromTo(
		target,
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 2,
		}
	);

export const countDownTween = (target: TweenTargetType) =>
	gsap.fromTo(
		target,
		{
			scale: 0,
			ease: 'power2',
		},
		{
			duration: 0.6,
			scale: 3,
			ease: 'back',
		}
	);

export const fadeInPlayScreenTween = (target: TweenTargetType) =>
	gsap.fromTo(
		target,
		{ opacity: 0 },
		{
			delay: 0.1,
			opacity: 1,
			duration: 0.4,
		}
	);

export const fadeInModalTween = (target: TweenTargetType) =>
	gsap.fromTo(
		target,
		{ opacity: 0 },
		{
			delay: 1,
			opacity: 1,
			duration: 0.2,
		}
	);

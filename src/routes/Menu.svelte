<script lang="ts">
	import { goto } from '$app/navigation';
	import MenuText from './MenuText.svelte';

	let text: string, textTop: string, textLeft: string, textVisibility: string;

	let setText = (txt: string) => (text = txt);

	function displayText(e: MouseEvent) {
		textVisibility = 'visible';
		textTop = e.clientY - 30 + 'px';
		textLeft = e.clientX + 4 + 'px';
	}

	function hideText() {
		textVisibility = 'hidden';
		textTop = '0';
		textLeft = '0';
	}

	function pageTransition(route: string) {
		document
			.getElementById(route)!
			.classList.remove('hover:scale-150', 'hover:scale-125', 'duration-700'); // find better way. very hacky using :global() style and vanilla js dom
		document.getElementById(route)!.classList.add('scale', 'duration-1000'); // find better way. very hacky using :global() style and vanilla js dom
		setTimeout(() => goto(route), 500);
	}
</script>

<MenuText {text} {textTop} {textLeft} {textVisibility} />

<i id="instructions" class="absolute opacity-0 bottom-0 pb-2 font-serif text-center w-full"
	>(long press / hover over each piece)</i
>

<svg
	xmlns="http://www.w3.org/2000/svg"
	id="logo"
	class="fixed w-full h-screen opacity-0 pointer-events-none"
	data-name="logo"
	viewBox="0 0 1440 1080"
>
	<g id="logogrp" class="origin-center scale-75 hover:fill-transparent stroke-black">
		<path
			on:click={() => pageTransition('socials')}
			on:keypress={() => pageTransition('socials')}
			on:mousemove={() => setText('socials')}
			on:mousemove={displayText}
			on:mouseleave={hideText}
			id="socials"
			class="transition duration-700 origin-center hover:scale-150 cursor-none hover:fill-black"
			d="M502.29,808.38c-19.46-23.52-49.78-39.56-82.01-44.35,.31,2.35,.37,4.54,.23,6.36-.84,10.37-4.1,20.71-2.37,31.01,2.18,13.15,11.94,23.22,17.85,35.03,4.1,8.21,6.45,17.54,12.1,24.62,5.65,7.08,16.5,10.85,22.8,4.61,7.04,14.63-.7,31.95-8.31,46.06-6.14,11.38-12.28,22.76-18.41,34.14,13.12,4.72,28.26,1.97,39.07-7.06,4.44-3.72,8.16-8.38,12.75-11.87,7.59-5.79,16.71-7.86,26.14-8.33,8.86-36.85,6.87-77.94-19.84-110.22Z"
		/>
		<path
			on:click={() => pageTransition('work')}
			on:keypress={() => pageTransition('work')}
			on:mousemove={() => setText('work')}
			on:mousemove={displayText}
			on:mouseleave={hideText}
			id="work"
			class="transition duration-700 origin-center hover:scale-125 cursor-none hover:fill-black"
			d="M1058.46,375.65c-9.53-9.73-21-13.2-27.28-14.54-.26-.04-.45-.13-.66-.26-6.74-3.99-16.65-9.85-28.48-17.17-33.81-20.81-50.75-31.35-53.33-36.9-14.52-31.31,21.96-90.6,34.06-106.06,1.45-1.86,5.18-6.74,6.65-13.88,2.39-11.69-5.69-22.56-11.75-32.82-12.06-20.43-16.8-47.79-2.98-67.31,4.99-7.04,12.04-12.58,16.39-20,1.64-2.79,2.77-6.06,3.15-9.32,.53-4.44-2.03-8.66-6.18-10.28C773.44-35.79,523.96-7.13,334.01,116.12,69.05,288.1-60.93,631.78,27.68,865.78c11.64,30.73,59.17,156.2,180.78,198.06,83.2,28.62,196.02,16.36,261.91-43.34-2.07-5.84-3.69-11.92-6.69-17.27-6.01-10.71-16.95-17.51-22.77-28.3-5.97-11.05-5.69-24.76-2.6-36.87,3.09-12.11,8.76-23.22,13.19-34.81,1.07-2.77,2.09-5.69,1.94-8.72-.15-2.58-1.13-5.05-2.13-7.44-6.01-14.12-13.6-27.49-22.55-39.75-4.2-5.76-8.74-11.32-12.04-17.72-3.92-7.55-5.97-15.97-7.99-24.29-3.05-12.56-6.65-25.27-9.74-38-23.58,.7-47.04,7.61-66.89,21.9-36.9,26.57-46.45,67.95-49.01,85.24-.34,2.28-3.3,2.94-4.56,1.02-10.68-16.25-35.9-62.12-21.32-118.24,16.92-65.24,74.33-93.01,85.82-98.57,64.8-31.33,131.05-10.39,151.09-4.05,64.8,20.47,100.33,62.94,128.47,113.63,.6,1.07,1.88,1.58,3.05,1.17,7.8-2.6,14.58-5.1,20.1-7.61,57.15-26.02,112.76-55.36,166.48-87.87,12.49-7.59,25.11-15.48,34.62-26.57,6.42-7.51,11.23-16.32,18.14-23.4,27.22-28.02,76.31-21.2,106.69-45.83,20.16-16.32,27.86-42.97,42.1-64.58,21.21-32.12,59.22-57.86,59.68-96.12,.06-5.78,.13-26.38-14.99-41.8Z"
		/>
		<path
			on:click={() => pageTransition('about')}
			on:keypress={() => pageTransition('about')}
			on:mousemove={() => setText('about me')}
			on:mousemove={displayText}
			on:mouseleave={hideText}
			id="about"
			class="transition duration-700 origin-center hover:scale-125 cursor-none hover:fill-black"
			d="M1024.73,62.53c-3.28-1.49-6.59-2.96-9.91-4.41-2.49-1.09-5.35,.49-5.78,3.2-2.92,18.43,7.74,38.73,1.34,56.75-2.98,8.4-9.53,15.57-10.7,24.38-.75,5.76,.9,11.54,2.81,17.04,6.71,19.41,16.78,37.66,29.61,53.72,12.58,15.72,27.75,29.37,38.73,46.22,11,16.85,17.39,38.39,9.98,57.16-2.24,5.65-5.69,11-6.46,17.06-.68,5.52,.92,11.03,2.54,16.32t.02,.04c.28,.75,11.11,30.03,19.67,64.45,3.94,15.91,1.85,14.48,4.73,24.44,3.94,13.54,11.64,29.07,42.27,60.12,33.17,33.63,66.44,58.22,78.21,66.71,12.15,8.77,18.08,12.39,28.88,21.65,17.46,14.91,27.33,27.11,42.65,45.13,11.13,13.12,27.28,31.86,47.88,54.66,.3,.32,.68,.58,1.11,.7,28.39,9.66,36.73,20.13,38.84,28.24,.7,2.77,1.73,7.68,5.29,13.31,3.69,5.93,10.51,9.15,17.07,11.79,8.1,3.24,16.37,6.1,24.77,8.53,1.41,.43,2.9-.49,3.18-1.94,50.97-252.64-131.58-559.89-406.73-685.25Z"
		/>
		<path
			on:click={() => pageTransition('contact')}
			on:keypress={() => pageTransition('contact')}
			on:mousemove={() => setText("let's talk")}
			on:mousemove={displayText}
			on:mouseleave={hideText}
			id="contact"
			class="transition duration-700 origin-center hover:scale-125 cursor-none hover:fill-black"
			d="M1411.93,795.59c-41.16-67.22-105.11-118.88-162.43-174.2-24.19-23.33-47.43-47.64-70.64-71.96-19.93-20.84-39.9-41.67-59.81-62.51-9.29-9.73-18.69-19.58-25.3-31.27-3.41-6.01-6.01-12.45-8.06-19.09-.75-2.39-4.18-2.3-4.82,.13-4.8,18.15-20.55,35.1-32.51,51.14-15.01,20.13-25.07,43.34-37.84,64.88-30.23,51.01-76.76,93.13-132.27,114.91-20.74,8.13-42.59,13.46-62.56,23.33-51.16,25.27-84.58,77.54-135.51,103.33-12.9,6.53-27.03,11.43-37.99,20.69-.87,.73-1.11,1.94-.64,2.96,34.28,72.64,67.59,152.17,151.92,205.91,137.4,87.55,353.4,70.46,488.03-35.57,77.19-60.78,113.78-139.88,130.67-190.62,.21-.7,.13-1.45-.26-2.07Z"
		/>
		<path
			on:click={() => pageTransition('chai')}
			on:keypress={() => pageTransition('chai')}
			on:mousemove={() => setText('buy me a chai')}
			on:mousemove={displayText}
			on:mouseleave={hideText}
			id="chai"
			class="transition duration-700 origin-center hover:scale-150 cursor-none hover:fill-black"
			d="M1071.27,373.24c-8.8-40.99-20.19-81.49-34.02-121.07-2.79-7.89-6.78-16.85-14.49-18.81-2.69-.7-5.65-.49-7.89-2.28-1.68-1.32-2.54-3.5-3.26-5.59-3.6-9.85-6.97-19.86-10.76-29.62-.68-1.75-2.98-2.15-4.22-.75-3.99,4.5-9.49,6.61-12.04,14.08-8.42,23.63-15.88,48.16-16.29,73.66-.13,8.15,.58,16.72,4.69,23.8,7.82,13.48,24.43,16.87,38.26,22.8,21.96,9.38,39.39,27.43,55.66,45.96,1.71,1.94,4.9,.36,4.37-2.18Z"
		/>
	</g>
</svg>

<style>
	#logogrp * {
		transform-box: fill-box;
	}
	:global(.scale) {
		transform: scale(75);
	}

	@keyframes fill {
		from {
			transform: scale(1.25);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
			pointer-events: all;
		}
	}

	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	#logo {
		/* wait for loader -  */
		animation: fill 1.75s 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}

	#instructions {
		animation: show 1.75s 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
	}
</style>

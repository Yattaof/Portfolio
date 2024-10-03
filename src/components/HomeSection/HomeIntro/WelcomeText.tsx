// Kod zmieniony - oryginalny autorstwa Mehluli Hikwa
import React, { useEffect, useState } from 'react';

const AfroGreetings = ['Cześć!', 'Hello!', 'Salut!','Hola!', 'Hallo!', 'Ciao!'];

interface QueueItem {
	from: string;
	to: string;
	start: number;
	end: number;
	char?: string;
}

const ScrambleText: React.FC = () => {
	const [greeting, setGreeting] = useState<string>('Hello!');
	const chars = 'M!E<H*I!KQW__Q+A?';
	let queue: Array<QueueItem> = [];

	useEffect(() => {
		let counter = 0;

		const nextGreeting = () => {
			scrambleText(AfroGreetings[counter]).then(() => {
				setTimeout(nextGreeting, 4000);
			});
			counter = (counter + 1) % AfroGreetings.length;
		};

		nextGreeting();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const scrambleText = (newText: string) => {
		const oldText = greeting;
		const length = Math.max(oldText.length, newText.length);
		return new Promise<void>((resolve) => {
			queue = [];
			for (let i = 0; i < length; i++) {
				const from = oldText[i] || '';
				const to = newText[i] || '';
				const start = Math.floor(Math.random() * 40);
				const end = start + Math.floor(Math.random() * 40);
				queue.push({ from, to, start, end });
			}

			let frame = 0;
			const update = () => {
				let output = '';
				let complete = 0;
				for (let i = 0, n = queue.length; i < n; i++) {
					let { from, to, start, end, char } = queue[i];
					if (frame >= end) {
						complete++;
						output += to;
					} else if (frame >= start) {
						if (!char || Math.random() < 0.28) {
							char = randomCharacter();
							queue[i].char = char;
						}
						output += `<span class="dummy">${char}</span>`;
					} else {
						output += from;
					}
				}

				setGreeting(output);
				if (complete === queue.length) {
					resolve();
				} else {
					requestAnimationFrame(update);
					frame++;
				}
			};

			update();
		});
	};

	const randomCharacter = () => {
		return chars[Math.floor(Math.random() * chars.length)];
	};

	return <h1 dangerouslySetInnerHTML={{ __html: greeting }} />;
};

export default ScrambleText;

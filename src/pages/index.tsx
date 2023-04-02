import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
	const [welcomeMessage, setWelcomeMessage] = useState<string>();
	useEffect(() => {
		fetch('/api/hello', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				res.json().then((json) => setWelcomeMessage(json.message));
			})
			.catch((err) => console.error(err));
	}, []);
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Next.js Typescript + Styled Components Starter. Happy Hacking!!' />
				<meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />
				<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
				<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<div>
					<h1>{welcomeMessage}</h1>
				</div>
			</main>
		</>
	);
}

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="lg:flex">
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/logo.ico" />
				<title>Kasidis</title>
			</Head>
			<Navigation />
			<div className="lg:flex-1">
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;

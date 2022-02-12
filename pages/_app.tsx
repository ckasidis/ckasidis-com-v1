import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className="sm:flex">
			<Navigation />
			<div className="sm:flex-1">
				<Component {...pageProps} />
			</div>
		</div>
	);
}

export default MyApp;

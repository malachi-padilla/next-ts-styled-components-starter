import Layout from '@/components/Layout';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { LightTheme } from '@/theme/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={LightTheme}>
				<GlobalStyles />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Theme, ThemeProvider } from '@src/1.app/providers/ThemeProvider';
import { App } from '@src/1.app/App';
import '@src/7.shared/config/i18n/i18n';
import { ErrorBoundary } from '@src/1.app/providers/ErrorBoundary/components/ErrorBoundary';
import './1.app/styles/index.scss';
import { StorageProvider } from '@src/1.app/providers/StoreProvider';

render(
	<div>
		<StorageProvider>
			<BrowserRouter>
				<ErrorBoundary>
					<ThemeProvider initialTheme={Theme.LIGHT}>
						<App />
					</ThemeProvider>
				</ErrorBoundary>
			</BrowserRouter>
		</StorageProvider>
	</div>,
	document.querySelector('#root'),
);

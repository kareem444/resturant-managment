import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './common/redux/store'
import { Provider } from 'react-redux'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import SplashScreenComponent from './common/components/SplashScreenComponent';
import './common/config'
import 'react-notifications/lib/notifications.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <StrictMode>
  <Suspense fallback={<SplashScreenComponent />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
  // </StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();

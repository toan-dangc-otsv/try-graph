import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';

// async function enableMocking() {
//   if (process.env.NODE_ENV !== 'development') {
//     return;
//   }

//   const { worker } = await import('@/app/configs/mocks/browser');

//   // `worker.start()` returns a Promise that resolves
//   // once the Service Worker is up and ready to intercept requests.
//   return worker.start({
//     onUnhandledRequest: 'bypass',
//   });
// }

// enableMocking().then(() => {
//   ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
// });

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rutas from './Router/ruta';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebase-config.js';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense>
    <Rutas />
    </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>REACT_APP_FIREBASE_API_KEY={process.env.REACT_APP_FIREBASE_API_KEY}</p>
      <p>REACT_APP_FIREBASE_AUTH_DOMAIN={process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}</p>
      <p>REACT_APP_FIREBASE_DATABASE_URL={process.env.REACT_APP_FIREBASE_DATABASE_URL}</p>
      <p>REACT_APP_FIREBASE_PROJECT_ID={process.env.REACT_APP_FIREBASE_PROJECT_ID}</p>
      <p>REACT_APP_FIREBASE_STORAGE_BUCKET = {process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}</p >
      <p>REACT_APP_FIREBASE_MESSAGING_SENDER_ID={process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}</p >
      <p> REACT_APP_FIREBASE_APP_ID={process.env.REACT_APP_FIREBASE_APP_ID}</p >
      <p> REACT_APP_FIREBASE_APP_MEASUREMENT_ID= {process.env.REACT_APP_FIREBASE_APP_MEASUREMENT_ID}</p >
      <p>REACT_APP_API_URL = {process.env.REACT_APP_API_URL}</p>
      <p>REACT_APP_RECAPTCHA_SECRET_KEY ={process.env.REACT_APP_RECAPTCHA_SECRET_KEY}</p>
      <p>REACT_APP_RECAPTCHA_SITE_KEY = {process.env.REACT_APP_RECAPTCHA_SITE_KEY}</p>
    </div >
  );
}

export default App;

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import 'the-new-css-reset/css/reset.css';
import '../Scss-Sass/Constructor/Fonts.scss';
import '../Scss-Sass/Constructor/Variables.scss';
import '../Scss-Sass/Constructor/Global.scss';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

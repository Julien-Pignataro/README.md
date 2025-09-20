import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React,{ useState, useEffect } from"rect";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

function Modal() {
  const [data, setData] = useState(null);
  const [show, setShow] = useState(true);

  useEffect(()=> {
    fetch("https://api.github.com/users/github-john-")
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((err)=> console.error(err));
  },[]);
  return show ? (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Titre du modal</h5>
            <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
          </div>
          <div className="modal-body">
            <p>Ici ton contenu React 🚀</p>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </div>
  ) : null;
}

document.getElementById("btnEnSavoirPlus").addEventListener("click", () => {
  const root = createRoot(document.getElementById("root"));
  root.render(<Modal />);
});
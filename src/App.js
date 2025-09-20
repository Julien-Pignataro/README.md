import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  // Fonction pour ouvrir le modal et charger les données
  const handleShow = () => {
    setShow(true);

    // 🔗 Mets ton URL ici
    fetch("https://api.github.com/users/github-john-")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Erreur :", error));
  };

  const handleClose = () => setShow(false);

  return (
    <div className="App">
      {/* Bouton rouge */}
      <button type="button" className="btn btn-danger" onClick={handleShow}>
        En savoir plus
      </button>

      {/* Modal */}
      {show && (
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              
              {/* Header */}
              <div className="modal-header">
                <h5 className="modal-title">
                  {data ? data.title : "Chargement..."}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body">
                {data ? <p>{data.body}</p> : <p>Données en cours de chargement...</p>}
              </div>

              {/* Footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Fermer
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Fond gris derrière le modal */}
      {show && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default App;

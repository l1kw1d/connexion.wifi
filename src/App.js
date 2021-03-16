import React from 'react';
import Card from './components/Card';
import './style.css';

function App() {
  return (
    <div className="App">

      <h1><span role="img" aria-label="antenna-bars">📶</span>&nbsp; Carte WiFi pour identifiants </h1>

      <p className="tag">
        Imprimez une simple carte avec vos informations de connexion WiFi. Collez-le sur le réfrigérateur, gardez-le dans votre portefeuille, etc.
      </p>

      <p className="tag">
        Vos informations WiFi ne sont jamais envoyées au serveur.
        Aucun suivi, analyse ou empreinte digitale n'est utilisé sur ce site Web.
        Voir le <a href="https://github.com/l1kw1d/connexion.wifi">code</a>.
      </p>

      <Card />

    </div>
  );
}

export default App;

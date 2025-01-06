// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './StateProvider'; // Assurez-vous d'importer le bon fichier
import { initialState, reducer } from './reducer'; // Importation de initialState et reducer

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>,
    document.getElementById('root')
);

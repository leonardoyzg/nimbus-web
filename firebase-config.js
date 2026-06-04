import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyCLasH4PAkNgtNlpio_1BIZ9xiHReC_Qqs",

    authDomain: "app-nimbus.firebaseapp.com",

    databaseURL: "https://app-nimbus-default-rtdb.firebaseio.com",

    projectId: "app-nimbus",

    storageBucket: "app-nimbus.firebasestorage.app",

    messagingSenderId: "537012946123",

    appId: "1:537012946123:web:b9241c2b0441e1ad0c074e",

    measurementId: "G-03Y07CMJB9"
};

// INICIALIZAR
const app = initializeApp(firebaseConfig);

// AUTH
export const auth = getAuth(app);


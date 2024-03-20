 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
   import { getAuth } from "firebase/auth";
  const firebaseConfig = {
    apiKey: "AIzaSyAlE8HnNXbBv4xxFLz11VCc_rIClW8E1jA",
    authDomain: "codeforchange-72f30.firebaseapp.com",
    projectId: "codeforchange-72f30",
    storageBucket: "codeforchange-72f30.appspot.com",
    messagingSenderId: "265505221845",
    appId: "1:265505221845:web:249e56245bcbde80bb065c",
    measurementId: "G-2GC818Q480"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth=getAuth(app);
  export{app,auth};

// var firebaseConfig = {
//     apiKey: "AIzaSyBX6YmNxQAeummx2ElMp3v3wUzDzcGtTkA",
//     authDomain: "test-7861b.firebaseapp.com",
//     projectId: "test-7861b",
//     storageBucket: "test-7861b.appspot.com",
//     messagingSenderId: "982558408905",
//     appId: "1:982558408905:web:faa5660fa1ca4f83190d18",
//     measurementId: "G-FNRPS7RGFX"
//   };
  var firebaseConfig = {
    apiKey: "AIzaSyD2pPSdkw8sy_c4zZTTnzw98SFHO2cWBII",
    authDomain: "fir-303b4.firebaseapp.com",
    projectId: "fir-303b4",
    storageBucket: "fir-303b4.appspot.com",
    messagingSenderId: "607591175941",
    appId: "1:607591175941:web:fb2b9cf90c166e5fde896c",
    measurementId: "G-CL6RTBT7HD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();
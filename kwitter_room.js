
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdULTLkJBWWhwyFtvbc4MbIrWgMQJFVn4",
  authDomain: "practice-2a68a.firebaseapp.com",
  databaseURL: "https://practice-2a68a-default-rtdb.firebaseio.com",
  projectId: "practice-2a68a",
  storageBucket: "practice-2a68a.appspot.com",
  messagingSenderId: "196014313382",
  appId: "1:196014313382:web:5b95c3ef98ae0d44514967"
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</di><hrv";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}



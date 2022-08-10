import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPdmiZcliYK3MbtMQY6bE-PIfEvnvZ2Zk",
  authDomain: "kwitter-1c6ee.firebaseapp.com",
  databaseURL: "https://kwitter-1c6ee-default-rtdb.firebaseio.com",
  projectId: "kwitter-1c6ee",
  storageBucket: "kwitter-1c6ee.appspot.com",
  messagingSenderId: "145614756768",
  appId: "1:145614756768:web:c529d26e329ed0ffefe2c5",
  measurementId: "G-CHFDSF4XEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById(("user_name").innerHTML="welcome"+user_name-"!");
function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

const analytics = getAnalytics(app);

function getData()
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      
      });
    });
  }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}
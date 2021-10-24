const firebaseConfig = {
    apiKey: "AIzaSyBKz3bDlvJUOLqKCJeQ6okunELOVxbhp9I",
    authDomain: "kwitter-project-69a41.firebaseapp.com",
    databaseURL: "https://kwitter-project-69a41-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-69a41",
    storageBucket: "kwitter-project-69a41.appspot.com",
    messagingSenderId: "766233878519",
    appId: "1:766233878519:web:8ce55fcb11ba5128e7d8f2"
  };

  const app = initializeApp(firebaseConfig);

user_name = localStorage.setItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome"+ user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    console.log("room name - " + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";      
document.getElementById("output").innerHTML += row; 
      });});}
getData();

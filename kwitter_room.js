
var firebaseConfig = {
      apiKey: "AIzaSyDHYJJmTbUGYs_IhURxg9dN4CH70lhdzzU",
      authDomain: "kwitter-fd5e1.firebaseapp.com",
      databaseURL: "https://kwitter-fd5e1-default-rtdb.firebaseio.com",
      projectId: "kwitter-fd5e1",
      storageBucket: "kwitter-fd5e1.appspot.com",
      messagingSenderId: "50668199416",
      appId: "1:50668199416:web:87b10d26590e32ecaf0a0d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div classes='room_name' id="+Room_names+" onclick='redirectToRoomNAme(this.id)' >"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomNAme(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
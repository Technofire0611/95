function adduser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

        window.location = "kwitter_room.html";
}

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  })

    localStorage.setItem("room_name", room_name);

    windows.location = "kwitter_page.html";
}

function redirectTRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    windows.location ="kwitter_page.html";
}


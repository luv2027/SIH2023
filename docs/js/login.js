const firebaseConfig = {
    apiKey: "AIzaSyBQBetMo7sP6DV_YvANseKDPb7qSIRCChQ",
    authDomain: "electrovault-e2de8.firebaseapp.com",
    databaseURL: "https://electrovault-e2de8-default-rtdb.firebaseio.com",
    projectId: "electrovault-e2de8",
    storageBucket: "electrovault-e2de8.appspot.com",
    messagingSenderId: "420518165356",
    appId: "1:420518165356:web:95e635bde6a650d6885149",
    measurementId: "G-BNPVWXGC0W"
};
firebase.initializeApp(firebaseConfig);

document.getElementById('dynamicForm').addEventListener("submit", submitform);


function submitform(e) {
    e.preventDefault();
    var ssoid = document.getElementById('ssoid').value;
    var pass = document.getElementById('Password').value;
    console.log(ssoid)
    firebase.database().ref().child("registrationinfo").orderByChild("Ssoid").equalTo(ssoid).once("value", function (snapshot) {
        snapshot.forEach(function (childsnapshot) {

            var usersData = snapshot.val();
            var password = childsnapshot.child("Password").val();
            console.log(password);
            if (usersData == null) {
                if (password != pass) {
                    
                    console.log("cannot login need to sign up");
                }
            }
            else {
                
                console.log(usersData);
            }
        });
    });
    
}

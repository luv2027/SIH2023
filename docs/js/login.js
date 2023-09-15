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
        var usersData = snapshot.val();
        if (usersData != null) {
            snapshot.forEach(function (childsnapshot) {

                var password = childsnapshot.child("Password").val();
                console.log(password);
                if (password == pass) {
                    //todo suceess login
                    location.replace("../index.html")
                }
                else {
                    //todo try again
                    document.querySelector('#alert').style.display = "block";
                    setTimeout(() => {
            
                        document.querySelector('#alert').style.display = "none";
                    }, 3000);
                }
            
        });
}
        else {
                //no user 
                document.querySelector('#alert').style.display = "block";
                setTimeout(() => {
            
                    document.querySelector('#alert').style.display = "none";
                }, 3000);
                
            }
    });
    
}

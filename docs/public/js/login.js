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
    var profession = document.getElementById('profession').value;
    console.log(ssoid)
    firebase.database().ref().child("registrationinfo").orderByChild("Ssoid").equalTo(ssoid).once("value", function (snapshot) {
        var usersData = snapshot.val();
        if (usersData != null) {
            snapshot.forEach(function (childsnapshot) {

                var password = childsnapshot.child("Password").val();
                var prof = childsnapshot.child("Profession").val();
                console.log(password);
                console.log(prof);
                if (password == pass && profession == prof) {
                    //todo suceess login
                    document.querySelector('#alert2').style.display = "block";

                    if (prof == "registration") {
                        setTimeout(() => {
            
                            location.replace("../registrypage.html")
                            var name = childsnapshot.child("Name").val();
                            var myprofession = childsnapshot.child("Profession").val();
                            localStorage.setItem('Name', name);
                            localStorage.setItem('Profession', myprofession);
                            console.log(name,profession)
                        



                        }, 1000);
                    }
                    else {
                        
                        setTimeout(() => {
                
                            location.replace("../otherspage.html")
                            var name = childsnapshot.child("Name").val();
                            var myprofession = childsnapshot.child("Profession").val();
                            console.log(name, profession)
                            localStorage.setItem('Name', name);
                            localStorage.setItem('Profession', myprofession);

                        }, 1000);
                    }
                }
                else {
                    //todo try again
                    document.querySelector('#alert').style.display = "block";
                    setTimeout(() => {
            
                        document.querySelector('#alert').style.display = "none";
                    }, 2000);
                }
            
        });
}
    
    });
    
}

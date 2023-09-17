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

// var registerinfodb = firebase.database().ref('Case-vault')
document.getElementById('reg_search').addEventListener("submit", submitform);

function submitform(e) {
  e.preventDefault();
  var plainphone,defphone;

  firebase.database().ref().child("registrationinfo").orderByChild("Suit_id").equalTo(Suitid).once("value", function (snapshot) {
  

  
    var Suitid= document.getElementById('Suit_id').value;
    console.log(Suitid);
    firebase.database().ref().child("Case-vault").orderByChild("Suit_id").equalTo(Suitid).once("value", function (snapshot) {
        var usersData = snapshot.val();
        if (usersData != null) {
            snapshot.forEach(function (childsnapshot) {

                var casetype = childsnapshot.child("Casetype").val();
                var registeryofficerid = childsnapshot.child("Registery_officer_id").val();
                var courtname = childsnapshot.child("Court_name").val();
                var namejudge = childsnapshot.child("Judge_name").val();
                var plaintiffname = childsnapshot.child("Plaintiff_name").val();
                var namedefendant = childsnapshot.child("Defendant_name").val();
                var plaintifflawyer = childsnapshot.child("Plaintiff_lawyer").val();
                var defendantlawyer = childsnapshot.child("Defendant_lawyer").val();
                var suitid = childsnapshot.child("Suit_id").val();
                var courtid = childsnapshot.child("Court_id").val();
                var judgeid = childsnapshot.child("Judge_id").val();
                var lawyerid = childsnapshot.child("Lawyer_id").val();
                var plaintiffadhar = childsnapshot.child("Plaintiff_adhar").val();
                var defendantadhar = childsnapshot.child("Defendant_adhar").val();
                var plaintiffaddress = childsnapshot.child("Plaintiff_address").val();
                var defendantaddress = childsnapshot.child("Defendant_address").val();
                var datefiling = childsnapshot.child("Date_filing").val();
                var charges = childsnapshot.child("Charges").val();
                var facts = childsnapshot.child("Facts").val();
              var releif = childsnapshot.child("Relief").val();
              firebase.database().ref().child("registrationinfo").orderByChild("Adhar_number").equalTo(plaintiffadhar).once("value", function (snapshot2) {

                let plaintiffdata = snapshot2.val();
                if (plaintiffdata != null) {
                  snapshot2.forEach(function (childsnapshot2) {

                    plainphone = childsnapshot2.child("Phone_number").val();

                  
                  });
                }
                
              });
              firebase.database().ref().child("registrationinfo").orderByChild("Adhar_number").equalTo(defendantadhar).once("value", function (snapshot2) {

              
              let defendantdata = snapshot2.val();
              if (defendantdata != null) {
                snapshot2.forEach(function (childsnapshot2) {

                  defphone = childsnapshot2.child("Phone_number").val();

                
                });
              }
              
            });
                
                  
                  
                    
                    document.querySelector(".card-header").innerHTML =
                  (`<div class="card_flex">
                <div class="card">
                <h5 class="card-header"> ` + suitid + `</h5>
                <div class="card-body">
                  <h5 class="card-title">Case Summary </h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">view</a>
                  </div>
                  </div>
                  <div class="card">
                  <h5 class="card-header"> Plaintiff</h5>
                  <div class="card-body">
                  <p class="card-text"> Plaintiff Name :`  + plaintiffname + `</p>
                  <p class="card-text"> Plaintiff Adhar : `  + plaintiffadhar + `</p>
                  <p class="card-text"> Plaintiff Address : `  + plaintiffaddress + `</p>
                      
                      
                  <a href="#" class="btn btn-primary">view</a>
                  </div>
                  </div>
                  
                  <div class="card">
                  <h5 class="card-header">Defendant</h5>
                  <div class="card-body">
                  <p class="card-text"> Defendant Name :`  + namedefendant + `</p>
                  <p class="card-text"> Defendant Adhar : `  + defendantadhar + `</p>
                  <p class="card-text"> Defendant Address : `  + defendantaddress + `</p>
                  <a href="#" class="btn btn-primary">view</a>
                  </div>
                  </div>
                  
                  <div class="card">
                  <h5 class="card-header">Plaintiff - Lawyer</h5>
                  <div class="card-body">
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">view</a>
                  </div>
                  </div>
                  
                  <div class="card">
                  <h5 class="card-header">Defendant - Lawyer</h5>
                  <div class="card-body">
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">view</a>
                  </div>
                  </div>
                  
                  <div class="card">
                  <h5 class="card-header">Judge</h5>
                  <div class="card-body">
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">view</a>
                  </div>
                  </div>
                  </div>`);
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
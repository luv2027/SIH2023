
const firebaseConfig = {
    apiKey: "AIzaSyBQBetMo7sP6DV_YvANseKDPb7qSIRCChQ",
    authDomain: "electrovault-e2de8.firebaseapp.com",
    databaseURL: "https://electrovault-e2de8-default-rtdb.firebaseio.com",
    projectId: "electrovault-e2de8",
    storageBucket: "electrovault-e2de8.appspot.com",
    messagingSenderId: "420518165356",
    appId: "1:420518165356:web:95e635bde6a650d6885149",
    measurementId: "G-BNPVWXGC0W",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const button = document.getElementById('reg_search');
  button.addEventListener('click', submitformothers);
  
  
  
  function submitformothers(e) {
    e.preventDefault();
  var plainphone,defphone;
    
    var Suitid = document.getElementById("form_suit").value;
    console.log(Suitid);
    
    firebase.database().ref().child("Case-vault").orderByChild("Suit_id").equalTo(Suitid).once("value", function (snapshot) {
      
      var usersData = snapshot.val();
        if (usersData != null) {
  
          snapshot.forEach(function (childsnapshot) {
            var casetype = childsnapshot.child("Casetype").val();
            var registeryofficerid = childsnapshot
              .child("Registery_officer_id")
              .val();
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
              `<div class="card_flex">
  
                  <div class="card">
                  <h5 class="card-header"> ` +suitid +`</h5>
                  <div class="card-body">
                    <h5 class="card-title">Case Summary </h5>
  
                    <p class="card-text">Courtname: `+ courtname+ `</p>
                      <p class="card-text">Casetype: `+ casetype+ `</p>
                      <p class="card-text">Suitid: `+ suitid+ `</p>
                      <p class="card-text">Courtid: `+ courtid+ `</p>
                      <p class="card-text">Judgeid: `+ judgeid+ `</p>
                      <p class="card-text">RegisteryOfficerid: `+ registeryofficerid+ `</p>
                      <p class="card-text">NameJudge: `+ namejudge+ `</p>
                      <p class="card-text">Plaintiffname: `+ plaintiffname+ `</p>
                      <p class="card-text">Namedefendant: `+ namedefendant+ `</p>
                      <p class="card-text">Plaintifflawyer: `+ plaintifflawyer+ `</p>
                      <p class="card-text">Defendantlawyer: `+ defendantlawyer+ `</p>
                      <p class="card-text">Plaintiffadhar: `+ plaintiffadhar+ `</p>
                      <p class="card-text">Defendantadhar: `+ defendantadhar+ `</p>
                      <p class="card-text">Plaintiffaddress: `+ plaintiffaddress+ `</p>
                      <p class="card-text">Defendantaddress: `+ defendantaddress+ `</p>
                      <p class="card-text">Datefiling: `+ datefiling+ `</p>
                      <p class="card-text">Charges: `+ charges+ `</p>
                      <p class="card-text">Facts: `+ facts+ `</p>
                      <p class="card-text">Releif: `+ releif+ `</p>
                  </div>
              </div> `;
          });
        } else {
          //no user
          document.querySelector("#alert").style.display = "block";
          setTimeout(() => {
            document.querySelector("#alert").style.display = "none";
          }, 3000);
        }
      });
  }
  
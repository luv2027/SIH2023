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
button.addEventListener('click', submitform);

var registerinfodb = firebase.database().ref('Case-vault')
var Suitid;
function submitform(e) {
  e.preventDefault();
  var plainphone,defphone;
  
   Suitid = document.getElementById("form_suit").value;
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
          suitid = childsnapshot.child("Suit_id").val();
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
          

          // firebase.database().ref().child("Documentdetails").orderByChild("Suit Id").equalTo(suitid).("value", function (snapshot3)){
          //   let docdata = snapshot3.val();
          //   if (docdata != null) {
          //     snapshot3.forEach(function (childsnapshot3)){
                
          //     }
          //   }
          // }

        document.querySelector(".card-header").innerHTML =
            `<div class="card_flex">
            <div class="mydata">
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
            </div>

                <div class="card">
                    <h5 class="card-header"> Upload Documents</h5>
                    <div class="card-body">
                      <p class="card-text"></p>
                      <button id="upload_button" onclick = "uploadFile()">Upload</button>
                    </div>
                </div>
                <div class="card">
                <h5 class="card-header"> View Document</h5>
                <div id="dataadd" class="card-body">
              
            </div>
                </div>

        </div>`;
      });
      Getdata(suitid);
    } else {
        //no user
        document.querySelector(".card-header").innerHTML = "";
        setTimeout(() => {
          
          alert("Case Id not registered in the database");
        }, 500);
        // document.querySelector("#alert").style.display = "block";
        // setTimeout(() => {
        //   document.querySelector("#alert").style.display = "none";
        // }, 3000);
      }
    });
}

var docinfodb = firebase.database().ref('Documentdetails');


function uploadFile() { 
  var newregistration = docinfodb.push();
  newregistration.set({
    "Suit Id": Suitid,
    "Name": "",
    "Submited_by": "",
    "Cid": "",
    "File_Name":""
    
      
  });

    location.replace("https://vm4jg5.csb.app/")
}


// import Web3Storage from 'web3.storage';

async function uploadFileToWeb3Storage() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file) {
      try {
          const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQxNjdDNzNjNzk2OTkxRDVlRWVDQ2ViOThhOUFEMThEYmQ4MGQwNzIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTQ5NDA1MTMxNDEsIm5hbWUiOiJFbGVjdHJvdmF1bHQifQ.0gge0hCQfm2KmN40LjubYxu35H56CT5zSpOFtuXNIOc'; // Replace with your Web3.storage API key
          const client = new Web3Storage({ token: apiKey });

          const { cid } = await client.put([file]);

          alert(`File uploaded to Web3.storage with CID: ${cid}`);
      } catch (error) {
          console.error('Error:', error);
          alert('Error uploading file to Web3.storage.');
      }
  } else {
      alert('Please select a file to upload.');
            }
}


function additem(name, submit, cid, filename) {
  const id = document.getElementById("dataadd");
  let article = `
  <div class="row">
  <div class="col-7">
  <p class="card-text">`+ name  + `</p>
    
  </div>
  <div class="col-1">
  <button data-modal-target="#view" id="view_button">View</button>
    
  </div>
  <div class="col-1">
  <button id="download_button">Download</button>
    
  </div>
  
  </div>
  <p class="card-text">Submittedby:` + submit + `</p>
  <br>
  `;

  id.innerHTML += article;

  
  
}
function Addallitems(data) {
  data.forEach(element => {
    additem(element.Name, element.Submited_by, element.Cid, element.File_Name);
     
    // document.getElementById('formal').addEventListener('submit', () => {
    //   view(element.Cid, element.File_Name);
    // })
    const url = `https://W3s.link/ipfs/${element.Cid}/${element.File_Name}`;
    const openmodalbutton = document.querySelectorAll('[data-modal-target]');
    const closemodalbutton = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');
  
    closemodalbutton.forEach(button => {
      button.addEventListener('click', () => {
        const view = button.closest('.view');
        closemodal(view,overlay);
      })
    })
    
    openmodalbutton.forEach(button => {
      button.addEventListener('click', () => {
        const view = document.querySelector(button.dataset.modalTarget);
        openmodal(view, overlay);
        document.getElementById('container').src = url;
        
      })
    })
    
  
  
  

    
  })
}

function Getdata(cid) {
  const dbref = firebase.database().ref();
  dbref.child("Documentdetails").orderByChild("Suit Id").equalTo(cid).on('value', function (snapshot4){
    
    var data = [];
    let d= snapshot4.val();
    if (d != null) {
      snapshot4.forEach(function (childsnapshot4) {
        
        data.push(childsnapshot4.val());
        console.log("this is working")
        
      });
      console.log(data);

      Addallitems(data);
    }

  })
  // get(child(dbref,"Documentdetails").orderByChild("Suit Id").equalTo(cid)).then((snapshot4) => {
  //   var data = [];
  //   array.forEach(childsnapshot4 => {
  //     data.push(childsnapshot4.val());

  //   }); 
  //   Addallitems(data);
  // })

}

function view(cid, filename) {
  const url = `https://W3s.link/ipfs/${cid}/${filename}`;
  const openmodalbutton = document.querySelectorAll('[data-modal-target]');
  const closemodalbutton = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  closemodalbutton.forEach(button => {
    button.addEventListener('click', () => {
      const view = button.closest('.view');
      openmodal(view);
    })
  })
  
  openmodalbutton.forEach(button => {
    button.addEventListener('click', () => {
      const view = document.querySelector(button.dataset.modalTarget);
      closemodal(view);
    })
  })
  
  document.getElementById('container').src = url;





  
  
}

function openmodal(view) {
  if (view == null) return;
  view.classList.add('active');
  overlay.classList.add('active');



}

function closemodal(view) {
  if (view == null) return;
  view.classList.remove('active');
  overlay.classList.remove('active');



}

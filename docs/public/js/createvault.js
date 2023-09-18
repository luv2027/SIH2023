

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
var registerinfodb = firebase.database().ref('Case-vault')
console.log("in the js file");


document.getElementById('vault').addEventListener("submit", submitform);


function submitform(e) {
    e.preventDefault();

    var casetype = getelementval("casetype");
    var registeryofficerid = getelementval("registry_off_id");
    var courtname = getelementval("name_court");
    var namejudge = getelementval("name_judge");
    var plaintiffname = getelementval("name_plaintiff");
    var namedefendant = getelementval("name_dependent");
    var plaintifflawyer = getelementval("name_plaintiff_lawyer");
    var defendantlawyer = getelementval("name_dependent_lawyer");
    var suitid = getelementval("Suit_id");
    var courtid = getelementval("court_id");
    var judgeid = getelementval("judge_id");
    var lawyerid = getelementval("lawyer_id");
    var plaintiffadhar = getelementval("plaintiff_adhar");
    var defendantadhar = getelementval("defendant_adhar");
    var plaintiffaddress = getelementval("plaintiff_address");
    var defendantaddress = getelementval("defendant_address");
    var datefiling = getelementval("Date_filing");
    var charges = getelementval("charges");
    var facts = getelementval("facts");
    var releif = getelementval("relief");

    var newregistration = registerinfodb.push();

    newregistration.set({
        "Casetype": casetype,
        "Registery_officer_id": registeryofficerid,
        "Court_name": courtname,
        "Judge_name": namejudge,
        "Plaintiff_name": plaintiffname,
        "Defendant_name": namedefendant,
        "Plaintiff_lawyer": plaintifflawyer,
        "Defendant_lawyer": defendantlawyer,
        "Suit_id": suitid,
        "Court_id": courtid,
        "Judge_id": judgeid,
        "Lawyer_id": lawyerid,
        "Plaintiff_adhar": plaintiffadhar,
        "Defendant_adhar": defendantadhar,
        "Plaintiff_address": plaintiffaddress,
        "Defendant_address": defendantaddress,
        "Date_of_filling": datefiling,
        "Charges": charges,
        "Facts": facts,
        "Relief": releif
    });

    document.querySelector('#alert').style.display = "block";

    setTimeout(() => {
            
        document.querySelector('#alert').style.display = "none";
        location.replace("../registrypage.html");

    }, 3000);




}



const getelementval = (id) => {
    return document.getElementById(id).value;
}

// todo connect database

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

// redfrence for database
var registerinfodb = firebase.database().ref('registrationinfo')

document.getElementById('dynamicForm').addEventListener("submit", submitform);




function submitform(e) {
    e.preventDefault();
    var profession = document.getElementById("profession").value;
    console.log(profession)
    if (profession == "citizen") {
        
        var name = getelementval('name');
        var adhar = getelementval('adhar');
        var phone = getelementval('phone');
        var email = getelementval('email');
        var Password = getelementval('password');
        const ssoid = email.substring(0, email.indexOf("@"));
        
        console.log(name, ssoid,email, phone, adhar);
        var newregistration = registerinfodb.push();
        newregistration.set({
            "Name": name,
            "Adhar_number": adhar,
            "Phone_number": phone,
            "Email_id": email,
            "Ssoid": ssoid,
            "Password" : Password,
            "Profession": profession,
        });
        document.querySelector('#alert').style.display = "block";
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        setTimeout(() => {
            
            document.querySelector('#alert').style.display = "none";
            document.getElementById("dynamicForm").reset();
            location.replace("../login.html")

        }, 3000);
        

    }
    else if (profession == "registration") {
        
        var name = getelementval('name');
        var registration_no = getelementval('registration_number');
        var email = getelementval('email');
        var Password = getelementval('password');
        const ssoid = email.substring(0, email.indexOf("@"));

        console.log(name, registration_no);
        var newregistration = registerinfodb.push();
        newregistration.set({
            "Name": name,
            "Registration": registration_no,
            "Email_id": email,
            "Ssoid": ssoid,

            "Password" : Password,
            "Profession": profession,
        })
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        document.querySelector('#alert').style.display = "block";
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        setTimeout(() => {
            
            document.querySelector('#alert').style.display = "none";
            document.getElementById("dynamicForm").reset();
            location.replace("../login.html")

        }, 3000);

    }
    else if (profession == "lawyer") {
        var name = getelementval('name');
        var license_no = getelementval('license_number');
        var email = getelementval('email');
        var Password = getelementval('password');
        const ssoid = email.substring(0, email.indexOf("@"));

        console.log(name, license_no, email);
        var newregistration = registerinfodb.push();
        newregistration.set({
            "Name": name,
            "License": license_no,
            "Email_id": email,
            "Ssoid": ssoid,

            "Password" : Password,
            "Profession": profession,
        })
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        document.querySelector('#alert').style.display = "block";
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        setTimeout(() => {
            
            document.querySelector('#alert').style.display = "none";
            document.getElementById("dynamicForm").reset();
            location.replace("../login.html")

        }, 3000);
    }
    else if (profession == "govt_employee") {
        var name = getelementval('name');
        var employee_id = getelementval('employee_id');
        var email = getelementval('email');
        var Password = getelementval('password');
        const ssoid = email.substring(0, email.indexOf("@"));


        console.log(name, employee_id);
        var newregistration = registerinfodb.push();
        newregistration.set({
            "Name": name,
            "Employee_id": employee_id,
            "Email_id": email,
            "Ssoid": ssoid,

            "Password" : Password,
            "Profession": profession,
        })
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        document.querySelector('#alert').style.display = "block";
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        setTimeout(() => {
            
            document.querySelector('#alert').style.display = "none";
            document.getElementById("dynamicForm").reset();
            location.replace("../login.html")

        }, 3000);
    }
    else if (profession == "govt_agencies") {
        var name = getelementval('name');
        var employee_id = getelementval('employee_id');
        var organisation = getelementval('organisation');
        var email = getelementval('email');
        var Password = getelementval('password');
        const ssoid = email.substring(0, email.indexOf("@"));


        console.log(name, employee_id, organisation);
        var newregistration = registerinfodb.push();
        newregistration.set({
            "Name": name, 
            "Employee_id": employee_id,
            "Organisation": organisation,
            "Email_id": email,
            "Ssoid": ssoid,

            "Password" : Password,
            "Profession": profession,
        })
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        document.querySelector('#alert').style.display = "block";
        // alert("Successful !!,Your ssoid and Password are sent by Email");
        setTimeout(() => {
            
            document.querySelector('#alert').style.display = "none";
            document.getElementById("dynamicForm").reset();
            location.replace("../login.html")
            

        }, 3000);
    }
    
    



}




const getelementval = (id) => {
    return document.getElementById(id).value;
}

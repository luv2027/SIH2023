<?php
if(isset($_POST['submit'])){
    $from = $_POST['email'];
    $username = strstr($from, '@', true);
    $subject = "Registered Sucessfully";
    $password = $_POST['password'];
    $message = "Thanks for using our website.\n Your SSoid is : ".$username."\nYour passsword is : ".$password."\n Please use the following information to Login!\n\n\nFrom team Electrovauult";
    
    $result = mail($from,$subject,$message);
    if($result){
        echo '<script type="text/javascript">alert("email sent success!")</script>';
    }
    else{
        echo '<script type="text/javascript">alert("email failure!!")</script>';
        
    }


}

?>
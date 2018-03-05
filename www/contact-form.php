<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require_once 'phpmailer/PHPMailerAutoload.php';


    //create an instance of PHPMailer
    $mail = new PHPMailer();
    $mail->From = $_POST['From'];
    $mail->AddAddress('Patco@patcoliners.com'); //recipient 
    $mail->Subject = 'Quote Request';
    $mail->Body = "
        <table>
            <tr>
                <th>Quote Request</th>
            </tr>
            <tr></tr>
            <tr>
                <td style='font-weight:bold'>From :</td>
                <td>".$_POST['From']."</td>
            </tr>            
            <tr>
                <td style='font-weight:bold'>Quantity :</td>
                <td>".$_POST['quantity']."</td>
            </tr>
            <tr>
                <td style='font-weight:bold'>Description : </td>
                <td>".$_POST['description']."</td>
            </tr>
            <tr>
                <td style='font-weight:bold'>Part No : </td>
                <td>".$_POST['part_no']."</td>
            </tr>
        <table>";

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Thanks! We have received your query.');
    echo json_encode($data);





//     <?php
// require_once 'phpmailer/PHPMailerAutoload.php';
// $mail = new PHPMailer();
// $to = "aig_test@yopmail.com";
// $mail->AddAddress('aig_myne@yopmail.com');
// $mail->From = 'test@yopmail.com';
// $mail->FromName = 'Test HMMM';
// $mail->Subject  = "Contact Form";
// $body= "<table>
//     <tr>
//         <th colspan='2'>Contact US Form Data</th>
//     </tr>
//     <tr></tr>
//     <tr>
//         <td style='font-weight:bold'>Full Name :</td>
//         <td>TEMP</td>
//     </tr>
//     <tr>
//         <td style='font-weight:bold'>E-mail : </td>
//         <td>aig_myne@yopmail.com</td>
//     </tr>
//     <tr>
//         <td style='font-weight:bold'>Phone Number : </td>
//         <td>xxx-9999-xxxx</td>
//     </tr>
//     <tr>
//         <td style='font-weight:bold'>Message : </td>
//         <td>Nothing just testing</td>
//     </tr>
// <table>";
// $body = preg_replace('/\\\\/','', $body); //Strip backslashes
// $mail->MsgHTML($body);
// $mail->Send();
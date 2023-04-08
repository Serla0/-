
<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage ('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('Заявка');
    $mail->addAddress('sssseeerrz228@gmail.com');
    $mail->Subject = ('Заявка с сайта umcspec.ru');


    $body = '<h1>Заявка с сайта umcspec.ru</h1>';

    if(trim(!empty($_POST['name']))) {
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['tel']))) {
        $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
    }
    if(trim(!empty($_POST['kurs']))) {
        $body.='<p><strong>Курс:</strong> '.$_POST['kurs'].'</p>';
    }
    if(trim(!empty($_POST['email']))) {
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))) {
        $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
    }
    
    if(empty($_FILES['image']['tmp_name'])) {

        $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];

        if(copy($_FILES['image']['tmp_name'], $filePath)) {
            $fileAttach = $filePath;
            $body = '<p><strong>Фото в приложении</strong>';
            $mail->addAttachment($fileAttach);
        }
    }

    $mail->Body = $body;

    if(!$mail->send()) {
        $message = 'Ошибка отправки заявки.';
    } else {
        $message = 'Ваша заявка успешно отправлена!';
    }
    
    $response = ['message' => $message];
    
    header('Content-type: application/json');
    echo json_encode($response);

?>

<?php

    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $drawing_complexity = $_POST['drawing_complexity'];
    $panel_size = $_POST['panel_size'];
    $bed_set = $_POST['bed_set'];
    $bed_size = $_POST['bed_size'];

    $message = '<strong>Имя: </strong><p>'$name'</p><br>
    <strong>Телефон: </strong><p>'$tel'</p><br>
    <strong>Сложность рисунка: </strong><p>'$drawing_complexity'</p><br>
    <strong>Размер панели: </strong><p>'$panel_size'</p><br>
    <strong>Комплектация кровати: </strong><p>'$bed_set'</p><br>
    <strong>Размер спального места: </strong><p>'$bed_size'</p><br>';

    $headers = 'Content-type:text/html; charset = windows-1251 \r\n';

    mail('sssseeerrz228@gmail.com', 'Письмо с сайта', $message, $headers);

?>
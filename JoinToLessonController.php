<?php
include_once("../../confg/class.php");

if (isset($_REQUEST['SelectLessonByProgram'])) {
	SelectLessonByProgram();
}else  if (isset($_REQUEST['ScheduleByLesson'])) {
	ScheduleByLesson();
}


function SelectLessonByProgram() {
	$ProgramRecNo =  $_REQUEST['ProgramRecNo'];
    $db = new MSSQL();
    $result  = $db->getData("exec LearningManagementSelectLessonByProgram '$ProgramRecNo'");   
    echo json_encode($result); 
}


function ScheduleByLesson() {
	$lessonRecNo =  $_REQUEST['lessonRecNo'];
    $db = new MSSQL();
    $result  = $db->getData("exec LearningManagementScheduleByLesson '$lessonRecNo'");   
    echo json_encode($result); 
}



?>
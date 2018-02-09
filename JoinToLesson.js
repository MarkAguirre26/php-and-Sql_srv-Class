getProgramList();




$(document).on('change', "#programSelect", function() {
    let ProgramRecNo = $(this).val();
    LearningManagementSelectLessonByProgram(ProgramRecNo);
});

$(document).on('change', "#lessonDropdown", function() {
    let lessonRecNo = $(this).val();
    ScheduleByLesson(lessonRecNo);
});








function getProgramList() {
    $("#programSelect").html("");
    $("#programSelect").html("<option></option>");
    $.ajax({
        type: "post",
        url: "../controller/LessonController.php?getProgramList",
        dataType: "json",
        data: {

        },
        success: function(data) {
            $("#programSelect").html("");
            $("#programSelect").html("<option></option>");
            $.each(data, function(i, item) {
                $("#programSelect").append("<option value=" + item[0] + ">" + item[1] + "</opntion>");
            });
        }
    });
}

function LearningManagementSelectLessonByProgram(ProgramRecNo) {

    $.ajax({
        type: "post",
        url: "../controller/JoinToLessonController.php?SelectLessonByProgram",
        dataType: "json",
        data: {
            ProgramRecNo: ProgramRecNo
        },
        success: function(data) {

            $("#lessonDropdown").html("");
            $("#lessonDropdown").html("<option></option>");
            $.each(data, function(i, item) {
                $("#lessonDropdown").append("<option value=" + item[0] + ">" + item[1] + "</opntion>");
            });
        }
    });
}

function ScheduleByLesson(lessonRecNo) {

    $.ajax({
        type: "post",
        url: "../controller/JoinToLessonController.php?ScheduleByLesson",
        dataType: "json",
        data: {
            lessonRecNo: lessonRecNo
        },
        success: function(data) {

            $("#scheduleDropdown").html("");
            $("#scheduleDropdown").html("<option></option>");
            $.each(data, function(i, item) {
                $("#scheduleDropdown").append("<option value=" + item[0] + ">" + item[1] + "</opntion>");
            });
        }
    });
}
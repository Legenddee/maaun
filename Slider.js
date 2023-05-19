$(document).ready(function(){
    $('#modal-clicked').click()
     $('#Close-btn').click(function(){
        let deptValidation = $('#department-input').val();
        if (deptValidation == "CYS" || deptValidation == "cys" || deptValidation =="Cys") {
          $('#modalId').close()
        }
        else if (deptValidation == "SE" || deptValidation == "se" || deptValidation =="Se") {
          $('#modalId').close()
        }
        else if (deptValidation == "CS" || deptValidation == "cs" || deptValidation =="Cs") {
          $('#modalId').close()
        }
        else if (deptValidation == "CE" || deptValidation == "ce" || deptValidation =="Ce") {
          $('#modalId').close()
        }
        else if (deptValidation == "IT" || deptValidation == "it" || deptValidation =="It") {
          $('#modalId').close()
        }
        else{
          alert("You are not from faculty of computer, Windows is closing")
          window.close()
        }
    });

  if($(window).width() <= 996){
    $('.license02').show()
    $('.license01').hide()
  }  
})
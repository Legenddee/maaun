$(document).ready(function(){
    $('#modal-clicked').click()
     $('#Close-btn').click(function(){
        let department = $('#department-input').val();
        let matric = $('#matricNo-input').val()

        if ((department == "SE" || department == "se" || department == "Se" || department == "sE" || department == "Software Engineering" || department == "software engineering" || department == "SOFTWARE ENGINEERING")
        && (matric.indexOf("SE")!= -1 || matric.indexOf("se")!= -1 || matric.indexOf("Se")!= -1 || matric.indexOf("sE")!= -1)) {
          $('#modalId').close()
        
       }
       else if ((department == "CS" || department == "cs" || department == "Cs" || department == "cS" || department == "Computer Science" || department == "computer science" || department == "COMPUTER SCIENCE")
        && (matric.indexOf("CS")!= -1 || matric.indexOf("cs")!= -1 || matric.indexOf("Cs")!= -1 || matric.indexOf("cS")!= -1)) {
          $('#modalId').close()
        
       }
       else if ((department == "CYS" || department == "cys" || department == "Cys" || department == "Cyber Security" || department == "cyber security" || department == "CYBER SECURITY")
        && (matric.indexOf("CYS")!= -1 || matric.indexOf("cys")!= -1 || matric.indexOf("Cys")!= -1 )) {
          $('#modalId').close()
        
       }
       else if ((department == "CE" || department == "ce" || department == "Ce" || department == "cE" || department == "Computer Engineering" || department == "computer engineering" || department == "COMPUTER ENGINEERING")
        && (matric.indexOf("CE")!= -1 || matric.indexOf("ce")!= -1 || matric.indexOf("Ce")!= -1 || matric.indexOf("cE")!= -1)) {
          $('#modalId').close()
        
       }
       else if ((department == "IT" || department == "it" || department == "It" || department == "iT" || department == "Information Technology" || department == "information technology" || department == "INFORMATION TECHNOLOGY")
        && (matric.indexOf("IT")!= -1 || matric.indexOf("it")!= -1 || matric.indexOf("It")!= -1 || matric.indexOf("iT")!= -1)) {
          $('#modalId').close()
        
       }
       else{
        alert("Your department and matric number are not match,widows is closing")
        window.close()
       }
       $('#home-modal').click()
        // else{
        //   alert("You are not from faculty of computer, Windows is closing")
        //   window.close()
        // }
    });

  if($(window).width() <= 996){
    $('.license02').show()
    $('.license01').hide()
  }  
})
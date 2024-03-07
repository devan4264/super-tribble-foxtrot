
$(document).ready(function () {
    console.log("Learn some more fun facts!");
  
    //Button facts
    $("#btnMyFacts").click(function () {
      $("#coolFactsOutput").html();
  
      let userNumber = $("#userNumber").val();
      console.log("user number = ", userNumber);

      //let coolFactsOutput = generateCoolFacts(userNumber);
      $("#coolFactsOutput").html(number(userNumber));
      $("#coolFactsOutputs").html(getCoolFact(userNumber));
    });
  });
  
  function number(userNumber) {
            return;
  }
  
  
  //fuction
  function getCoolFact(userNumber) {

    if (userNumber == 1) {
      return "I have brown eyes.";
    } 
  
    else if (userNumber == 2) {
      return "I have a black cat named Rhinnon";
    } 
  
    else if (userNumber == 3) {
      return "I believe that I cook a mean steak";
    } 
  
    else if (userNumber == 4) {
      return "My blood type is O negative";
    } 
  
    else if (userNumber == 5) {
      return "I am, once again, trying to beat Elden Ring (video game)";
    } 

    else if (userNumber == 6) {
        return "I can't wait for the new Garfield movie";
      } 

    else {
      return "Error: Please enter a number from 1 to 6";
    }
    
  }

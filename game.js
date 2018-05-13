$( document ).ready(function(){
    var Random=Math.floor(Math.random()*70+30)
  
   
    var gem1= Math.floor(Math.random()*10+1)
    var gem2= Math.floor(Math.random()*10+1)
    var gem3= Math.floor(Math.random()*10+1)
    var gem4= Math.floor(Math.random()*10+1)
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  $('#randomNumber').text(Random);

  function reset(){
        Random=Math.floor(Math.random()*70+30);
        console.log(Random)
        $('#randomNumber').text(Random);
        gem1= Math.floor(Math.random()*10+1);
        gem2= Math.floor(Math.random()*10+1);
        gem3= Math.floor(Math.random()*10+1);
        gem4= Math.floor(Math.random()*10+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
 
  function win(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

    $('#one').on ('click', function(){
      userTotal = userTotal + gem1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + gem2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + gem3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);

            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + gem4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }

       
    });   
  }); 
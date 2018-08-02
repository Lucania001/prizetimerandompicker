
    //Tickets will contain all ticket numbers purchased. Any tickets purchased who also go the answer right will be added here
   
    
    

    function getRandom(blockhash, callback){

   
       
      //provable solution//////


      ///////////HEX to DECIMAL///
      var hex = blockhash.slice(Math.max(blockhash.length - 10, 1))
     
      yourNumber = parseInt(hex, 16);
      console.log("Int is " + yourNumber)
      //////////////////End Hex to Decimal/////////////////



       var length = tickets.length
       console.log(length)
     
       // Modulus calculation to get random number 
       var lukeran = yourNumber % length
       console.log("Random number is  " + lukeran)
       //use number to pick winning ticket from array
       var winner = tickets[lukeran]
       console.log(winner)

      ///////////end provable//////////
      console.log(winner.firstName + " " + winner.lastName)


       callback(winner);

       

     }

     

      function alertFinished(winner){
        
        //update to view to show winner
        $('#fun-level').text('The Winner is ' + winner.firstName + " " + winner.lastName);
       $('#fun-level').css("color", 'green')
       $("#fun-level").css({
         'padding' : '20px'
         
         
       });
      }

     function fire(){

      var blockhash = $(".hash").val();
    
      //Animate the %counter for visual effect
      var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
      $('#fun-level').animateNumber(
      {
        number: 100,
        color: 'green',
        'font-size': '140px',
        easing: 'easeInQuad',
        numberStep: percent_number_step
      },
      150, function() {
        //call the get random function to pick a winner
        getRandom(blockhash, alertFinished);

      }

      );
    }


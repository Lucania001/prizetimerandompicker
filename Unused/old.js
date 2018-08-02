  var random = new Random();
     var length = tickets.length
     var length = length -= 1
    /////array -1 as arrays start at 0

      // pick a random number between 0 and array length-1
      var xyz =  random.integer(0, length);
       
       
      //used random number to select winning ticker from array
      var picked = tickets[xyz]
      //call function to update view with winner
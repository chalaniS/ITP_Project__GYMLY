// var countdown = 300; // 5 minutes in seconds

// var countdownTimer = setInterval(function() {
//   var minutes = Math.floor(countdown / 60);
//   var seconds = countdown % 60;
  
//   // Add leading zeros if needed
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;
  
//   // Update HTML
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;
  
//   // Decrease countdown
//   countdown--;
  
//   // Stop countdown when it reaches zero
//   if (countdown < 0) {
//     clearInterval(countdownTimer);
//     alert("Time's up!");
//   }
// }, 1000); // Update every second
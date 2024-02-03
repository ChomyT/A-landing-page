function updateCountdown()
{
const currentTime = new Date();
//console.log(currentDate);
const targetDate = new Date('YYYY-MM-DDTHH:MM:SS');
//console.log(targetDate);
const difference = targetDate - currentDate;
//console.log(difference);
const days = Math.floor(difference / (1000 * 60 * 60));
const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//console.log(days);
//console.log(hours);
//console.log(minutes);
//console.log(seconds);
document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;
const interval = setInterval(updateCountDown, 1000);
if (difference < 0){
  clearInterval(interval);
  console.log(timer);
document.getElementById("timer").innerText = "The event has started!";
}

}
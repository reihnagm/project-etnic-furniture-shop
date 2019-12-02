let countDownDate = new Date("Dec 2, 2019 00:00:00").getTime();

let x = setInterval(function() {

let now = new Date().getTime();

let distance = countDownDate - now;

let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);

$(".number-days").html(days);
$(".number-hours").html(hours);
$(".number-minutes").html(minutes);
$(".number-seconds").html(seconds);

if (distance < 0) {
    clearInterval(x);
}
}, 1000);

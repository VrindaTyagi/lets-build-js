var duration = window.prompt("Enter the duration in days: ");

var distance = (duration * 24 * 60 * 60);

// var now = new Date().getTime();
// var distance = name * 24 * 60 * 60 * 1000;

function time() {
    distance--;
    console.log(distance);

    var days = Math.floor(distance / (60 * 60 * 24));
    var hours = Math.floor(distance % (60 * 60 * 24) / (60 * 60));
    var minutes = Math.floor(distance % (60 * 60) / 60);
    var seconds = Math.floor((distance % (60)));
    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    // document.getElementById("test").innerHTML = days + "d " + hours + "h " +
    //     minutes + "m " + seconds + "s ";

    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("minutes").innerHTML = minutes + "m ";
    document.getElementById("seconds").innerHTML = seconds + "s ";
    // await sleep(1000);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("test").innerHTML = "The Countdown has Expired";
    }

}
x = setInterval(time, 1000);
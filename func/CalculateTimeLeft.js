export default function calculateTimeLeft(targetTime) {
    const difference = (+new Date(targetTime)) - (+new Date());
    // console.log(JSON.stringify(targetTime), difference); '2023-10-29T08:55:00.00'
    const timeLeft = {
        days: 0,    
        hours: 0,
        minutes: 0,
        seconds: 0,
    };
    if (difference > 0) {
        timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
        timeLeft.seconds = Math.floor((difference / 1000) % 60);
    }
    return timeLeft;
}
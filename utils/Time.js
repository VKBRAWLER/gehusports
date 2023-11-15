export function calculateTimeLeft(targetTime) {
    const difference = (+new Date(targetTime)) - (+new Date());
    // console.log(JSON.stringify(targetTime), difference); '2023-10-29T08:55:00.00'
    if (difference < 0) {
        return false;
    }
    const timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };
    timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
    timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
    timeLeft.seconds = Math.floor((difference / 1000) % 60);
    return timeLeft;
}

export function DateString(Gdate) {
    let month = Gdate.getMonth()
    if (month < 10) {
        month = `0${month}`
    }
    let date = Gdate.getDate();
    if (date < 10) {
        date = `0${date}`
    }
    const DString = `${date} / ${month} / ${Gdate.getFullYear()}`
    return DString;
}

export function TimeString(timeLeft) {
    let days = timeLeft.days;
    if (!days) {
        days = '';
    }
    else if (days < 10) {
        days = `0${days}d `;
    }
    else {
        days = days + "d ";
    }
    let hours = timeLeft.hours;
    if (!hours) {
        hours = '';
    }
    else if (hours < 10) {
        hours = `0${hours}hr `;
    }
    else {
        hours = hours + "hr ";
    }
    let minutes = timeLeft.minutes;
    if (!minutes) {
        minutes = '';
    }
    else if (minutes < 10) {
        minutes = `0${minutes}min `;
    }
    else {
        minutes = minutes + "min ";
    }
    const TString = days + hours + minutes;
    return TString;
}
const greeting = () => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 0 && hours < 6) {
        return "Good night!";
    } else if (hours >= 6 && hours < 12) {
        return "Good morning!";
    } else if (hours >= 12 && hours < 18) {
        return "Good afternoon!";
    } else if (hours >=18 && hours < 24) {
        return "Good evening!";
    } else {
        return "When can I welcome you home to earth? ;)"; // This should never happen
    }
};

export default greeting;


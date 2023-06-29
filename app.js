function getRandomTemperature(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
}

function updateTemperature() {
    const temp1 = getRandomTemperature(20, 30);
    const temp2 = getRandomTemperature(20, 30);
    const temp3 = getRandomTemperature(20, 30);

    document.getElementById("temp1").innerText = temp1 + "℃";
    document.getElementById("temp2").innerText = temp2 + "℃";
    document.getElementById("temp3").innerText = temp3 + "℃";
}

window.onload = () => {
    setInterval(updateTemperature, 1000);
};

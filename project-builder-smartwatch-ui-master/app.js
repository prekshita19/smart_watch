
function time() {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let day = date.getDay()


    hr = hr < 10 ? "0" + hr : hr
    min = min < 10 ? "0" + min : min
    let timeformat = hr + ":" + min

    document.querySelector(".smalltime").innerHTML = timeformat
    document.querySelector(".time").innerHTML = timeformat
    document.querySelector(".day").innerHTML = days[day]


}
setInterval(time, 1000)
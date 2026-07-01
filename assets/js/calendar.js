const months = [
    "March",
    "April",
    "May",
    "June",
    "July",
    "August"
];

let currentYear = 2025;
let currentMonth = 3;

function drawCalendar(){

    document.getElementById("monthTitle").innerHTML =
        months[currentMonth-3] + " " + currentYear;

    const calendar=document.getElementById("calendar");

    calendar.innerHTML="";

    const firstDay=new Date(currentYear,currentMonth-1,1);

    let start=(firstDay.getDay()+6)%7;

    const days=new Date(currentYear,currentMonth,0).getDate();

    for(let i=0;i<start;i++){

        const empty=document.createElement("div");

        empty.className="empty";

        calendar.appendChild(empty);

    }

    for(let d=1;d<=days;d++){

        const day=document.createElement("div");

        day.className="day";

        day.innerHTML=d;

        calendar.appendChild(day);

    }

}

drawCalendar();

document.getElementById("prevMonth").onclick=()=>{

    currentMonth--;

    if(currentMonth<3){

        currentMonth=8;

    }

    drawCalendar();

}

document.getElementById("nextMonth").onclick=()=>{

    currentMonth++;

    if(currentMonth>8){

        currentMonth=3;

    }

    drawCalendar();

}

document.querySelectorAll(".year-btn").forEach(btn=>{

    btn.onclick=()=>{

        document.querySelectorAll(".year-btn").forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");

        currentYear=parseInt(btn.dataset.year);

        drawCalendar();

    }

});
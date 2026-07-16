console.log("NEW SCRIPT LOADED");


async function loadPatientData()
{

try
{


const response = await fetch(

"https://cppatient-monitorbackend-production.up.railway.app/patient?time=" 
+
new Date().getTime()

);



if(!response.ok)
{
throw new Error("Backend Error");
}



const data = await response.json();



console.log("API DATA:",data);




// Patient Information


document.getElementById("patientName").textContent =
data.patientName || "--";


document.getElementById("patientId").textContent =
data.patientId || "--";


document.getElementById("bedId").textContent =
data.bedId || "--";


document.getElementById("age").textContent =
data.age || "--";


document.getElementById("gender").textContent =
data.gender || "--";






// Status


if(
data.heartRate > 0 ||
data.spo2 > 0 ||
data.bloodPressure !== ""
)
{

document.getElementById("status").textContent =
"Connected";

}

else
{

document.getElementById("status").textContent =
"Disconnected";

}





// Vitals


document.getElementById("heart").textContent =
data.heartRate || 0;



document.getElementById("bp").textContent =
data.bloodPressure || "0/0";



document.getElementById("spo2").textContent =
data.spo2 || 0;





// Date and Time


document.getElementById("date").textContent =
data.date || "--";



document.getElementById("time").textContent =
data.time || "--";




}



catch(error)
{

console.log("ERROR:",error);


document.getElementById("status").textContent =
"Backend Offline";


}


}



// Update every second


setInterval(loadPatientData,1000);



// First load


loadPatientData();

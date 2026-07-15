console.log("NEW SCRIPT LOADED");
async function loadPatientData()
{
    try
    {
        const response = await fetch(
            "/patient?time=" + new Date().getTime()
        );


        const data = await response.json();


        console.log("API DATA:", data);



        document.getElementById("status").textContent =
            data.status;



        document.getElementById("heart").textContent =
            data.heartRate;



        document.getElementById("bp").textContent =
            data.bloodPressure;



        document.getElementById("spo2").textContent =
            data.spo2;


    }

    catch(error)
    {
        console.log("ERROR:", error);
    }
}



function updateDateTime()
{
    let now = new Date();


    document.getElementById("date").textContent =
        now.toLocaleDateString();


    document.getElementById("time").textContent =
        now.toLocaleTimeString();
}



setInterval(loadPatientData,1000);

setInterval(updateDateTime,1000);


loadPatientData();

updateDateTime();

async function loadPatientData()
{

    try
    {

        const response = await fetch(
    "https://cpppatient-monitorbackend-production.up.railway.app/patient?time=" 
    + new Date().getTime()
);


        const data = await response.json();


        console.log("JSON DATA:", data);



        document.getElementById("status").innerHTML =
            data.status;



        document.getElementById("heart").innerHTML =
            data.heartRate;



        document.getElementById("bp").innerHTML =
            data.bloodPressure;



        document.getElementById("spo2").innerHTML =
            data.spo2;



    }

    catch(error)
    {

        console.log(
            "JSON ERROR:",
            error
        );

    }


}



function updateDateTime()
{

    let now = new Date();


    document.getElementById("date").innerHTML =
        now.toLocaleDateString();


    document.getElementById("time").innerHTML =
        now.toLocaleTimeString();


}




setInterval(loadPatientData,1000);


setInterval(updateDateTime,1000);


loadPatientData();

updateDateTime();

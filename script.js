console.log("NEW SCRIPT LOADED");

async function loadPatientData() {
    try {
        const response = await fetch(
            "https://cpppatient-monitorbackend-production.up.railway.app/patient?time=" +
            new Date().getTime()
        );

        if (!response.ok) {
            throw new Error("Failed to fetch patient data");
        }

        const data = await response.json();
        const patient = data.data || data;

        console.log("API DATA:", data);
      console.log("PATIENT INFO:", data);
        document.getElementById("patientName").innerText =
    data.patientName || "--";

document.getElementById("patientId").innerText =
    data.patientId || "--";

document.getElementById("bedId").innerText =
    data.bedId || "--";

document.getElementById("age").innerText =
    data.age || "--";

document.getElementById("gender").innerText =
    data.gender || "--";

        // Status
        document.getElementById("status").textContent = data.status;

        // Heart Rate
        document.getElementById("heart").textContent = data.heartRate;

        // Blood Pressure
        document.getElementById("bp").textContent = data.bloodPressure;

        // SpO₂
        document.getElementById("spo2").textContent = data.spo2;

        // Last received Date & Time from backend
        document.getElementById("date").textContent = data.date;
        document.getElementById("time").textContent = data.time;

    } catch (error) {
        console.log("ERROR:", error);

        document.getElementById("status").textContent = "Backend Offline";
    }
}

// Fetch new patient data every second
setInterval(loadPatientData, 1000);

// Initial load
loadPatientData();

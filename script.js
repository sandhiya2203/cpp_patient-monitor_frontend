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

        console.log("API DATA:", data);

        // Status
        document.getElementById("status").textContent = data.status;

        if (data.status === "Connected") {

            // Heart Rate
            document.getElementById("heart").textContent = data.heartRate;

            // Blood Pressure
            document.getElementById("bp").textContent = data.bloodPressure;

            // SpO₂
            document.getElementById("spo2").textContent = data.spo2;

            // Date & Time
            document.getElementById("date").textContent = data.date;
            document.getElementById("time").textContent = data.time;

        } else {

            // Clear values when disconnected
            document.getElementById("heart").textContent = "";
            document.getElementById("bp").textContent = "";
            document.getElementById("spo2").textContent = "";
            document.getElementById("date").textContent = "";
            document.getElementById("time").textContent = "";
        }

    } catch (error) {

        console.log("ERROR:", error);

        document.getElementById("status").textContent = "Backend Offline";

        // Clear values when backend is offline
        document.getElementById("heart").textContent = "";
        document.getElementById("bp").textContent = "";
        document.getElementById("spo2").textContent = "";
        document.getElementById("date").textContent = "";
        document.getElementById("time").textContent = "";
    }
}

// Fetch new patient data every second
setInterval(loadPatientData, 1000);

// Initial load
loadPatientData();

async function saveFIR() {

    const fir = {
        firNumber: document.getElementById("firNumber").value,
        station: document.getElementById("station").value,
        district: document.getElementById("district").value,
        officer: document.getElementById("officer").value,
        complainant: document.getElementById("complainant").value,
        suspect: document.getElementById("suspect").value,
        crimeType: document.getElementById("crimeType").value,
        crimeDate: document.getElementById("crimeDate").value,
        location: document.getElementById("location").value,
        description: document.getElementById("description") ?
            document.getElementById("description").value : ""
    };

    if (!fir.firNumber) {
        alert("Enter FIR Number");
        return;
    }

    try {

        const response = await fetch("/server/add-fir/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fir)
        });

        const result = await response.json();

        if (result.success) {

            alert("FIR Registered Successfully");

            document.querySelectorAll(".form input").forEach(input => input.value = "");

            loadFIR();

        } else {

            alert(result.message);

        }

    } catch (err) {

        console.error(err);

        alert("Unable to connect to server");

    }

}

async function loadFIR() {

    try {

        const response = await fetch("/server/get-fir/execute");

        const data = await response.json();

        const table = document.getElementById("firTable");

        table.innerHTML = "";

        data.forEach(fir => {

            table.innerHTML += `
                <tr>
                    <td>${fir.FIR_NUMBER}</td>
                    <td>${fir.POLICE_STATION}</td>
                    <td>${fir.DISTRICT}</td>
                    <td>${fir.OFFICER_NAME}</td>
                    <td>${fir.CRIME_TYPE}</td>
                    <td>${fir.CRIME_DATE}</td>
                    <td>${fir.LOCATION}</td>
                </tr>
            `;

        });

    } catch (err) {

        console.error(err);

    }

}

loadFIR();
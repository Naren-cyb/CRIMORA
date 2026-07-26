document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Search Filter Functionality
    const searchInput = document.querySelector(".search-input");
    const tableRows = document.querySelectorAll("tbody tr");

    searchInput.addEventListener("keyup", function(e) {
        let filterText = e.target.value.toLowerCase();

        tableRows.forEach(row => {
            // Get all text inside the row
            let rowText = row.textContent.toLowerCase();
            
            // Show or hide row based on search
            if(rowText.includes(filterText)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    // 2. Add New Officer Button (Dummy alert for now)
    const addBtn = document.querySelector(".add-btn");
    if(addBtn) {
        addBtn.addEventListener("click", () => {
            alert("Add New Officer form will open here. (Will connect to Zoho Catalyst later!)");
        });
    }

    // 3. View Profile Buttons (Fetches name from the table row)
    const viewBtns = document.querySelectorAll(".view-btn");
    viewBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Find the closest row to the clicked button
            let row = e.target.closest("tr");
            // Get the officer's name from the second column (index 1)
            let officerName = row.cells[1].innerText;
            let officerID = row.cells[0].innerText;
            
            alert(`Opening full profile for ${officerName} (${officerID})`);
        });
    });

});
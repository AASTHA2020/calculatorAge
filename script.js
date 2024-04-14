// This function is called when the 'Calculate' button is clicked
const calculateAge = () => {
    const inputDate = document.querySelector("#date-input");
    const yearsOutput = document.querySelector("#years");
    const monthsOutput = document.querySelector("#months");
    const daysOutput = document.querySelector("#days");

    if(inputDate.value == "") {
        alert("Please Enter Your DOB");
    } else {
        // new date format
        const dob = new Date(inputDate.value);
        
        // getting year
        const dobYear = dob.getFullYear();
        
        // getting current year
        const currentYear = new Date();
        const nowYear = currentYear.getFullYear();
        const ageYear = nowYear - dobYear;
        
        // getting month
        const dobMonth = dob.getMonth();
        const currentMonth = currentYear.getMonth();
        const finalMonth = Math.abs(currentMonth - dobMonth);
        
        // getting day
        const dobDay = dob.getDate();
        const currentDay = currentYear.getDate();
        const finalDay = currentDay - dobDay;
        
        yearsOutput.textContent = ageYear;
        monthsOutput.textContent = finalMonth;
        daysOutput.textContent = finalDay;
    }
};

// Add event listener to the "Calculate" button to trigger the age calculation
document.querySelector("#calc-age-btn").addEventListener("click", calculateAge);

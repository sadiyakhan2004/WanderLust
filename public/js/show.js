const guestIcon = document.querySelector(".guest-icon i");
const guestInfo = document.querySelector(".guestInfo");
let adultInp = document.querySelector(".adult");
let childrenInp = document.querySelector(".children");
let infantsInp = document.querySelector(".infants");
let guestCountDisplay = document.querySelector(".count-display");
let infantsCount = document.querySelector(".infantsCount");


let checkOut = document.querySelector("checkOut");
let flag = true;

const today = new Date().toISOString().split('T')[0];
document.querySelector('.checkIn').setAttribute('min', today);




function getNumOfDays() {

    let checkInDate = document.querySelector(".checkIn").value;
    let checkOutDate = document.querySelector(".checkOut").value;
    let totalDiv = document.querySelectorAll("#totalNights");
    let p = document.querySelector(".result");
    let price = document.querySelector(".price");
    let resultDiv = document.querySelector("#result-div");


    if (checkInDate) {
        const tomorrow = new Date(checkInDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const formattedDate = tomorrow.toISOString().split('T')[0];
        document.querySelector('.checkOut').setAttribute('min', formattedDate);

    }

    checkInDate = new Date(checkInDate);
    checkOutDate = new Date(checkOutDate);

    if (checkInDate && checkOutDate && checkInDate <= checkOutDate) {
        // Calculate the difference in time
        const timeDiff = checkOutDate - checkInDate;
        // Convert time difference from milliseconds to days
        const daysDiff = timeDiff / (1000 * 3600 * 24);

        if (!isNaN(daysDiff)) {
            for (let Div of totalDiv) {
                Div.textContent = `${daysDiff} nights`;

                let htmlNum = price.textContent;
                let result = htmlNum * daysDiff;

                p.innerHTML = ` Total  &#8377 ${result}`;
                resultDiv.style.display = "block";
            }
        }
    }
}


guestIcon.addEventListener("click", () => {
    if (flag) {
        flag = false;
        guestIcon.classList.replace("fa-angle-down", "fa-angle-up");
        guestInfo.style.display = "block";
    }
    else {
        flag = true;
        guestIcon.classList.replace("fa-angle-up", "fa-angle-down");
        guestInfo.style.display = "none";
    }
});

adultInp.addEventListener('input', updateGuestCount);

childrenInp.addEventListener('input', updateGuestCount);


infantsInp.addEventListener('input', function () {
    let count = infantsInp.value;

    if (adultInp.value > 0) {
        if (count == 1) {
            infantsCount.style.display = "inline";
            infantsCount.innerHTML = `,${infantsInp.value} infant`;
        }
        else if (count > 1) {
            infantsCount.innerHTML = `,${infantsInp.value} infants`;
        }

        else if (count == 0) {
            infantsCount.style.display = "none";
        }
    }
    else {
        infantsInp.value = 0;
    }

})


function updateGuestCount() {
    let adultGuest = parseInt(adultInp.value) || 0;
    let childreGuest = parseInt(childrenInp.value) || 0;
    let infantsGuest = parseInt(infantsInp.value) || 0;


    let totalGuest = adultGuest + childreGuest;

    if (adultInp.value > 0) {
    if (totalGuest <= 7) {
        guestCountDisplay.innerHTML = totalGuest;
    }

    if (totalGuest > 7) {
        if (adultGuest > childreGuest) {
            adultInp.value = 7 - childreGuest;
        } else {
            childrenInp.value = 7 - adultGuest;
        }
    }
  }else{
    childrenInp.value = 0;
  }

}




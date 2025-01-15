// Ini File Javascript

// Function to validate form
function formValidation() {
    let nameInput = document.getElementById('name-input').value;

    console.log(nameInput);
    // Condition for validate form
    if (nameInput == "") {
        alert('Name must be filled out');
    } else {
        // Display result form
        document.getElementById('result-form').innerHTML = nameInput;
    }
}

document.getElementById('submit-btn').addEventListener('click', formValidation);

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner = indexBanner + 1;
    changeBackground();
}

// Function to change background banner
function changeBackground() {
    let bannerList = document.getElementsByClassName('banner-image');

    if (indexBanner > bannerList.length - 1) {
        // Reset indexBanner
        indexBanner = 0;
    }

    // Looping to change background
    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style.display = 'none';
    }

    bannerList[indexBanner].style.display = 'block';
}

setInterval(nextBanner, 3000);
document.addEventListener('DOMContentLoaded', function(){
    const place = document.querySelectorAll('.place');
    const placeselection = document.getElementById('place-selection');
    const statutmessage = document.getElementById('statut-message');
    const buttonreserver = document.getElementById('button-reserver')

let selectedPlaceCount = 0;

function updateSelectedSetCount(){
    placeselection.innerText = `Places selectionnés : ${selectedPlaceCount}`
}

function placeClickHandler(){
    if(this.classList.contains('selection')){
        this.classList.remove('selection');
        selectedPlaceCount--
    } else {
        this.classList.add('selection');
        selectedPlaceCount++
    }
    updateSelectedSetCount()
}

place.forEach(function(place){
    place.addEventListener('click',placeClickHandler)
})

function reservePlace() {
    if (selectedPlaceCount > 0) {
        statutmessage.innerText = "Places réservées";
        statutmessage.style.color = 'green';
    } else {
        statutmessage.innerText = "Veuillez sélectionner au moins une place.";
        statutmessage.style.color = 'red';
    }
  }


buttonreserver.addEventListener('click', reservePlace);
})


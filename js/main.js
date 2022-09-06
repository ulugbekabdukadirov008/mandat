var elSiteForm = document.querySelector("#site-form");
var elSiteInput = document.querySelector("#number-input");
var elCheckInput = document.querySelector("#checkbox-input");
var elResult = document.querySelector(".result");

var minScore =  114.45
var grandScore = 141.75
var superContract = 113

elSiteForm.addEventListener("submit", function(e){
    e.preventDefault();

    var scoreValue = elSiteInput.value;

    if (elCheckInput.checked || scoreValue >= grandScore) {
        elResult.textContent = "Malades Grand uje 😎👍"

         elResult.classList.add("grand")
         elResult.classList.remove("contract")
         elResult.classList.remove("super-contract")
         elResult.classList.remove("tugadi")

    } else if(scoreValue >= minScore) {
        elResult.textContent = "Dadezi puliga o'qisiz endi bolam. Kantrakt uyog'i.🤦‍♂️"

         elResult.classList.remove("grand")
         elResult.classList.add("contract")
         elResult.classList.remove("super-contract")
         elResult.classList.remove("tugadi")

    } else  if(scoreValue >= superContract) {
        elResult.textContent = " Super bo'b qopti endi . Bir yil tayyorlanib kelin endi.👨‍🏫" 

        elResult.classList.remove("grand")
        elResult.classList.remove("contract")
        elResult.classList.add("super-contract")
        elResult.classList.remove("tugadi")

    } else {
        elResult.textContent = "Xayir  endi . Rossiyaga jo'no'rin. O'qish sizgamas ekan.😁"

        elResult.classList.remove("grand")
        elResult.classList.remove("contract")
        elResult.classList.remove("super-contract")
        elResult.classList.add("tugadi")
    }
})
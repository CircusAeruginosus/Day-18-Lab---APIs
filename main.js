const button = document.querySelector("button")

function btnClicked() {
    console.log("button clicked")
}

button.addEventListener("click", btnClicked)

axios.get("https://swapi.dev/api/planets/?search=alderaan")
.then(res => {
    
})
.catch(error => {
    console.log(error)
})
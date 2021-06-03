
function perros(){

fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
    document.getElementById("perritos").innerHTML = `<img src="${data.message}" width= 500 px>`
    console.log(data.message)
    console.log(data)
})
}

function gatos(){

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        document.getElementById("michis").innerHTML = `<img src="${data[0].url}" width= 500 px>`
        console.log(data)
        console.log(data[0].url)
    })
    }
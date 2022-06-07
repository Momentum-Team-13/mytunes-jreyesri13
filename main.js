let itunesUrlSearch = "https://itunes.apple.com/search?term="

let itunesUrl = "https://itunes.apple.com/search?term=jack+johnson&limit=5"

const itunesInfo = document.querySelector('#tunes')

fetch(itunesUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    .then(function (response) {
        // the response is the promised data
        return response.json()
        // put the response in JSON format
    })
    .then(function (data) {
        // data refers to what the above promise returned (response.json())
        console.log("Response from GitHub API: ", data)
        // console log the data
        buildItunes(data)

    })


function buildItunes(itunesData) {

    // console.log(itunesData.results[0].trackName)

    let itunesElement = document.createElement('div')
    // profileElement.classList.add('topStyle')

    for (song of itunesData.results) {
        console.log(song.trackName)

        let songElement = document.createElement('p')
        songElement.innerText = `${song.trackName}`
        itunesElement.appendChild(songElement)

        // itunesInfo.appendChild(itunesElement)
    }

    itunesInfo.appendChild(itunesElement)

    // let nameElement = document.createElement('h1')
    // // nameElement.classList.add('nameStyle')
    // nameElement.innerText = `${itunesData.artistName}`
    // itunesElement.appendChild(nameElement)

}

let form = document.getElementById("form")
// console.log(form)


let searchVal = document.getElementById("search")


// form.addEventListener('submit', (event) => {

// }


form.addEventListener("click", (event) => {
    console.log(searchVal.value)
})



// form.addEventListener('submit', (event) => {

     // event.preventDefault();

// })



// let submit = () => {
//     let values = ""
//     values += document.getElementsByName("search")[0].value
//     console.log(1)
//     console.log(values)
// }



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

    // // console.log(itunesData.results[0].trackName)

    // let itunesElement = document.createElement('div')
    // // profileElement.classList.add('topStyle')

    // for (song of itunesData.results) {
    //     console.log(song.trackName)

    //     let songElement = document.createElement('p')
    //     songElement.innerText = `${song.trackName}`
    //     itunesElement.appendChild(songElement)

    //     // itunesInfo.appendChild(itunesElement)
    // }

    // itunesInfo.appendChild(itunesElement)

    // // let nameElement = document.createElement('h1')
    // // // nameElement.classList.add('nameStyle')
    // // nameElement.innerText = `${itunesData.artistName}`
    // // itunesElement.appendChild(nameElement)
}


let form = document.getElementById("form")
// console.log(form)

let submitButton = document.getElementById("submit")

let searchVal = document.getElementById("search")

let itunesUrlSearch = "https://itunes.apple.com/search?term="

submitButton.addEventListener('click', (event) => {
    // console.log(searchVal.value)
    let userInput = searchVal.value
    //console.log(userInput)
    let limitSearch = "&limit=5"
    let userSearch = itunesUrlSearch + `${userInput}` + limitSearch
    console.log(userSearch)


    fetch(userSearch, {
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
            buildUser(data)

        })


    function buildUser(itunesData) {
        //console.log(itunesData.results[0].trackName)

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
    }

})



// jack+johnson





// form.addEventListener("click", (event) => {
//     // console.log(searchVal.value)
//     let userInput = searchVal.value
//     // console.log(userInput)
//     let userSearch = itunesUrlSearch + `${userInput}`
//     console.log(userSearch)

// })



// form.addEventListener('submit', (event) => {

     // event.preventDefault();

// })


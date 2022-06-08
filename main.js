
const itunesInfo = document.querySelector('#tunes')

let form = document.getElementById("form")

let submitButton = document.getElementById("submit")

let searchVal = document.getElementById("search")

let playAudio = document.getElementsByTagName("audio")


let itunesUrlSearch = "https://itunes.apple.com/search?term="

// submitButton.addEventListener('click', (event) => {

form.addEventListener('submit', (event) => {
    event.preventDefault()

    itunesInfo.innerHTML = ""

    // console.log(searchVal.value)
    let userInput = searchVal.value
    //console.log(userInput)
    let formatInput = userInput.toLowerCase().replaceAll(" ", "+")
    console.log(formatInput)
    let entitySearch = "&entity=song"
    let limitSearch = "&limit=5"
    let userSearch = itunesUrlSearch + `${formatInput}` + entitySearch + limitSearch
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

        for (item of itunesData.results) {
            console.log(item.trackName)


            let imageElement = document.createElement('img')
            imageElement.src = item.artworkUrl100
            imageElement.alt = 'Artwork of ' + `${item.artistName}`
            itunesElement.appendChild(imageElement)


            let songElement = document.createElement('p')
            songElement.innerText = `${item.trackName}`
            itunesElement.appendChild(songElement)


            let artistElement = document.createElement('p')
            artistElement.innerText = `${item.artistName}`
            itunesElement.appendChild(artistElement)

            let audioTest = document.createElement("audio")
            audioTest.controls = true
            audioTest.src = item.previewUrl
            itunesElement.appendChild(audioTest)

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


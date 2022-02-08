const peopleDiv = document.getElementById("people")

//for loop
for (let customer of customers){
    let personDiv = document.createElement("div")
    peopleDiv.appendChild(personDiv)
    personDiv.classList.add('person')

    //show image for each person
    let thumbnailURL = customer.picture.large
    personDiv.innerHTML += `<img src=${thumbnailURL} alt="photo of ${customer.name.first}">`

    //need name of each person
    let personName = `${customer.name.first} ${customer.name.last}`
    personDiv.innerHTML += `<h2>${personName}</h2>`

    //email address
    personDiv.innerHTML += `<p class="email">${customer.email}</p>`

    //address
    //state abbreviation pull
    let states = usStates
    let location = customer.location.state
    function customerState(input) {
        for (let state of usStates) {
            if (input === state.name) {
                return state.abbreviation
            }
        }
    }

    let stateConversion = customerState(location.toUpperCase())

    personDiv.innerHTML += `
    <p class="otherInfo">${customer.location.street.number} ${customer.location.street.name}</p>
    <p class="otherInfo2">${customer.location.city}, ${stateConversion} ${customer.location.postcode}
    `

    //DOB
    personDiv.innerHTML += `<p class="otherInfo">DOB: ${moment(customer.dob.date).format("MMM DD, YYYY")}</p>`

    //Customer Since
    personDiv.innerHTML += `<p class="otherInfo2">Customer since: ${moment(customer.registered.date).format("MMM DD, YYYY")}</p>`
}
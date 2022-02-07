

console.log("hello, world")
const customer = customers[0]
const personDiv = document.getElementById("person")



//for loop (maybe map)
for (let customer of customers){
    //show image for each person
    let personName = `${customer.name.first} ${customer.name.last}`
    let thumbnailURL = customer.picture.thumbnail
    personDiv.innerHTML += `<img src=${thumbnailURL} alt="photo of ${customer.name.first}">`

    //need name of each person
    personDiv.innerHTML += `<h2>${personName}</h2>`

    //email address
    personDiv.innerHTML += `<p class="email">${customer.email}</p>`

    //address
    personDiv.innerHTML += `
    <p class="otherInfo">${customer.location.street.number} ${customer.location.street.name}</p>
    <p class="otherInfo">${customer.location.city}, ${customer.location.state} ${customer.location.postcode}
    `

    //DOB
    personDiv.innerHTML += `<p class="otherInfo">DOB: ${moment(customer.dob.date).format("MMM DD, YYYY")}</p>`

    //Customer Since
    personDiv.innerHTML += `<p class="otherInfo">Customer since: ${moment(customer.registered.date).format("MMM DD, YYYY")}</p>`
}

const userData = async () => {
    let list = ''

    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const json = await response.json()

    console.log(json)
    json.forEach(element => {
        list += '<tr>'
        list += `<td>${element.name}</td>`
        list += `<td>${element.username}</td>`
        list += `<td>${element.phone}</td>`
        list += `<td>${element.email}</td>`
        list += `<td>${element.website}</td>`
        list += `<td>${element.address['city']}</td>`
        list += `<td>${element.company}</td>`
        list += '</tr>'
    });
    
    document.querySelector('#pwaTable').innerHTML += list
}


userData()


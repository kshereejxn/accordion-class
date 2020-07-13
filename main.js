// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


let isActive = users
.filter (users => users.isActive === true)
.map(users => users.name)
let filterh1 = document.createElement ('h1')
filterh1.append('Kata1')
main.append(filterh1)
main.append(JSON.stringify(isActive))

let email = users.map (users => users.email )
let mapH1 = document.createElement ('h1')
mapH1.append('Kata2')
main.append(mapH1)
main.append (JSON.stringify(email))

let company = users.some (users => users.company === "OVATION")
let someH1 = document.createElement ('h1')
someH1.append('Kata3')
main.append(someH1)
main.append(JSON.stringify(company))

let age = users.find (users => users.age === 38)
let ageH1 = document.createElement ('h1')
ageH1.append('Kata4')
main.append(ageH1)
main.append(JSON.stringify(age))

let ageActive = users
.filter (users => users.isActive === true)
.find (users => users.age > 38)
let ffH1 = document.createElement ('h1')
ffH1.append ('Kata5')
main.append(ffH1)
main.append(JSON.stringify(ageActive))

let balance = users
.filter (users => users.company === "ZENCO") 
.filter (users => users.balance > "$1")
.map (users => users.name)
let fmH1 = document.createElement ('h1')
fmH1.append ('Kata6')
main.append (fmH1)
main.append(JSON.stringify(balance))

let tag = users
.filter (users => users.tags.includes ('fugiat'))
.map (users => users.age)
let tagH1 = document.createElement ('h1')
tagH1.append ('Kata7')
main.append (tagH1)
main.append (JSON.stringify(tag))

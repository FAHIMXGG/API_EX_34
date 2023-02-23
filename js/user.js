const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const gender = document.getElementById('gender')
    gender.innerHTML = user.results[0].gender;
    //console.log(user.results[0].picture.medium);
    const name = document.getElementById('name')
    name.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last

    //document.getElementById('img').src = img
    // img.innerHTML = user.results[0].picture.large
    const countryCon = document.getElementById('all-countries')
    const countryDiv = document.createElement('div')
    //countryDiv.classList.add('country')
    countryDiv.innerHTML = `
    <img src="${user.results[0].picture.large}" alt="">
    
    `;
    countryCon.appendChild(countryDiv)

}

loadUser();
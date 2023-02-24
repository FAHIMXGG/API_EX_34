const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    //console.log(meals)
    //1
    const mealsCon = document.getElementById('meals-con');
    ///remove previous search
    mealsCon.innerHTML = '';

    meals.forEach(meal => {
        console.log(meal)
        //2
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col')
        //3
        mealDiv.innerHTML = `
        <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick = "loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    view
                    </button>
                    </div>
                  </div>
        `;
        //4
        mealsCon.appendChild(mealDiv)
    });


}

const searchMeals = () => {
    //console.log('ggs')
    const searchText = document.getElementById('search-field').value;
    console.log(searchText)
    loadMeals(searchText);
}

const loadMealDetail = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealsDetails(data.meals[0]));
    //console.log(idMeal)
}

const displayMealsDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML = `
        <img class="img-fluid" src="${meal. strMealThumb}">
    `;
}

loadMeals('rice');
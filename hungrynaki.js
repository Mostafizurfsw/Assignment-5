const inSearchBar = async() => {
    const searchBar = document.getElementById("search-input").value;
    // console.log(searchBar);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBar}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => displayError('No Match :( '));
}


let displayMeals = meals => {
    // console.log(meals);
    const mealContainer = document.getElementById('foodInfo');
    mealContainer.innerHTML = '';
    
    meals.forEach(meal => {
        const mealContainer = document.createElement("div");
            const mealImg = meal.strMealThumb;
            const mealName = meal.strMeal;
            const mealCat =  meal.strCategory;
            const mealArea =  meal.strArea;
            const mealId = meal.idMeal;
            const foodInfoType = document.getElementById("foodInfo");

            const foodResult = `<div class="foodDetails" onclick="resultDetails(${mealId})">
                <div class="card-body">
                    <img class="card-img-top pb-3" src="${mealImg}" >
                    <h6 class="card-text">${mealName}</h6>
                    <h6 class="card-text">${mealCat}</h6>
                    <h6 class="card-text">${mealArea}</h6>
                </div>`
                mealContainer.innerHTML=foodResult;
                foodInfoType.appendChild(mealContainer);
    });
}



// details by clicked view 
const resultDetails = (id) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(resp => resp.json())
    .then(data => {
        const meal = data.meals; 
        meal.map(element=>{
            const mealImg = element.strMealThumb;
            const foodViewContainer = document.createElement("div");
            const foodDetailsDiv = `<div>
            <div class="card mb-3 mx-auto">
                <img class="card-img-top rounded mx-auto d-block" style="width:90%; height:50%;" src="${mealImg}" alt="Card image cap">
                <div class="card-body">
                    <h3 class="card-title pb-3 fw-bold">${element.strMeal}</h3>
                    <h5 class="pb-2 fw-bold">Ingredient : </h5>
                    <p class="card-text">${element.strIngredient1}</p>
                    <p class="card-text">${element.strIngredient2}</p>
                    <p class="card-text">${element.strIngredient3}</p>
                    <p class="card-text">${element.strIngredient4}</p>
                    <p class="card-text">${element.strIngredient5}</p>
                    <p class="card-text">${element.strIngredient6}</p>
                    <p class="card-text">${element.strIngredient7}</p>
                    <p class="card-text">${element.strIngredient8}</p>
                    <p class="card-text">${element.strIngredient9}</p>
                    <p class="card-text">${element.strIngredient10}</p>
                    <p class="card-text">${element.strIngredient11}</p>
                    <p class="card-text">${element.strIngredient12}</p>
                    <p class="card-text">${element.strIngredient13}</p>
                    <p class="card-text">${element.strIngredient14}</p>
                    <p class="card-text">${element.strIngredient15}</p>
                    <p class="card-text">${element.strIngredient16}</p>
                    <p class="card-text">${element.strIngredient17}</p>
                    <p class="card-text">${element.strIngredient18}</p>
                    <p class="card-text">${element.strIngredient19}</p>
                    <p class="card-text">${element.strIngredient20}</p>
                    <p class="card-text">${element.strInstructions}</p>
                    <p class="card-text">${element.strTags}</p>
                    <p class="card-text">${element.strYoutube}</p>
                </div>
            </div>
         </div>`
        // console.log(meal)
        foodViewContainer.innerHTML=foodDetailsDiv;
        document.getElementById("searchFood").appendChild(foodViewContainer);
        document.getElementById("foodView").style.display="none";
        })
    })
}

const displayError = error => {
    const errorTag = document.getElementById('showError');
    errorTag.innerText = error;
}

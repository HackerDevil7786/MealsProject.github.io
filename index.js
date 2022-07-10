$.ajax({

    type:"get",
    url:"https://themealdb.com/api/json/v1/1/filter.php?a=Canadian",
    success: function(response){
        console.log(response.meals);
        for(let i=0;i<response.meals.length;i++){

            let item=`<div class="col-md-3 m-2 shadow-lg p-3 mb-5 bg-white rounded">
            <p>${response.meals[i].strMeal}</p>
          
            <img src=${response.meals[i].strMealThumb} alt="" class="img-fluid">
            <p>${response.meals[i].idMeal}</p>
        </div>`;
            
        $("#myitems").append(item);
        }
    },
    error:function(error){
        console.log(error);
    }
});

  // img-fluid class dene se  parent ki width lega
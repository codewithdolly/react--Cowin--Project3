let foods = {
    foodItems: [
      {
        name: "Biriyani",
        categoryID: "1234",
      },
      {
        name: "Paneer",
        categoryID: "3456",
      },
    ],
    categories: [
      {
        name: "Veg",
        id: "3456",
      },
      {
        name: "Non-Veg",
        id: "1234",
      },
    ],
  };

    // expected output
//   [
//     {
//         name:"Biriyani",
//         categoryID:"1234",
//         categoryName:"Non-Veg"
//     },
//     {
//         name:"Paneer",
//         categoryID:"3456",
//         categoryName:"Veg"
//     }
//   ]
curl -H "Authorization: 563492ad6f917000010000012d02f3a70b1f4916b3623be58448bf98" "https://api.pexels.com/v1/search?query=nature&per_page=1"

  let result=[];
  for(let index=0; index<foods.foodItems.length; index++){
    result.push(foods.foodItems[index] )
    result[index].categoryName=foods.categories[index].name;
  }


console.log(result);



 
  


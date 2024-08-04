// ### 1. Challenge 1 :
// 1. go to index.js file and use the variables to calculate the BMI, the equation for BMI is (weight (kg) / height^2(m)), dont forget to convert cm to m
// 2. show the results in an alert 

// ### 2. Challenge 2 :
// 1. using the result you calculated in challenge 1 and check the BMI state
//     1. Below 18.5	Underweight
//     2. 18.5 – 24.9	Healthy Weight
//     3. 25.0 – 29.9	Overweight
//     4. 30.0 and Above	Obesity
// 2. show the BMI state in an alert


// ### 3. Challenge 3 :
// 1. using the result you calculated in challenge 1 check the BMI state BUT based on age
// 2. use the following table for reference
// ![bmi](https://user-images.githubusercontent.com/84308096/152272549-5fad579a-641b-466a-85ce-dca61eb7cb41.png)
// 3. show `Healthy` or `Not Healthy` in an alert


function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  // console.table({ age, weight, height, male, female });
  const bmi = (weight / Math.pow((height / 100), 2)).toFixed(2)

  console.log(`Your BMI is ${bmi}`)
  if(bmi >= 30){
    alert("You are obese!")
  }else if(bmi >= 25){
    if(bmi <= 29 && age >= 65){
      alert("Your weight is healthy")
    }else if(bmi <= 28 && age >= 55){
      alert("Your weight is healthy")
    }else if(bmi <= 27 && age >= 45){
      alert("Your weight is healthy")
    }else if(bmi <=26 && age >=35){
      alert("Your weight is healthy")
      
    }else if(bmi <=25 && age >=25){
      alert("Your weight is healthy")
    }else{
      alert("You are overweight")

    }
  }else if(bmi >= 18.5){
    alert("Your weight is healthy")
  }else{
    alert("You are underweight")
  }
}
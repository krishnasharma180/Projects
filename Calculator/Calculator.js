let buttons = document.querySelectorAll(".btn");
let input = document.querySelector(".inputnum");



buttons.forEach((button)=>{
  button.addEventListener('click',()=>{
    let nums = button.getAttribute("id");


if(nums==="C"){
 input.value=""
}
else if (nums === "=") {
  
   
    let result = eval(input.value);

    if (!isNaN(result) && result !== Infinity && result !== -Infinity) {
      input.value = result;
    } else {
      input.value = 'Error';
  } ;
  }
  else if(nums==="->"){
input.value=input.value.slice(0,-1)
  }
 else {
  input.value += nums;
}

  })
})


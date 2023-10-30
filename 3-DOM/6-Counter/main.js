document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementsByClassName("counter"); 
  const decrease = document.getElementsByClassName("btn")[0];
  const reset = document.getElementsByClassName("btn")[1];  
  const increase = document.getElementsByClassName("btn")[2]; 

  let count = 0; 

  decrease.addEventListener("click", () => {
    count--;
    counter[0].innerHTML = count;
  });

  
  reset.addEventListener("click", () => {
    count = 0;
    counter[1].textContent = count;
  });


  increase.addEventListener("click", () => {
    count++;
    counter[2].textContent = count;
  });
});
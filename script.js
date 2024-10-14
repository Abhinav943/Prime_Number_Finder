const dark = document.getElementById("darkModeToggle");
const btn = document.querySelector('#prime');
const para = document.querySelector('p')
let d = 1;
function checkPrime() {
  const num = document.getElementById("numberInput").value;
  let isPrime = true;
  if (num <= 1) isPrime = false;
  else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        d = i;
        isPrime = false;
        break;
      }
    }
  }
  document.getElementById("result").textContent = isPrime
    ? `${num} is prime number.`
    : `${num} is not prime number as it is divisible by ${d}.`;
}

btn.addEventListener('click',()=>{
  checkPrime();
  para.style.display = 'block';

})

document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
      if(dark.innerText === 'Dark Mode')
      {
        dark.innerText = 'Light Mode';
      }
      else
      {
        dark.innerText = "Dark Mode";
      }
  });

const ha1 = document.querySelector('h1');

console.log(ha1);

ha1.addEventListener('click',() => {
  ha1.classList.toggle('red');
  if (ha1.classList.contains('red')) {
    ha1.innerHTML = 'black';
  } else {
    ha1.innerHTML = 'red';
  }
});


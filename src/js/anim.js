/*function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('statist_item');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.statist_item');
  
  for (let elm of elements) {
    observer.observe(elm);
  }*/
  const time = 5000; // ms
  const step = 1; 
  
  function outNum(num, elem) {
      let l = document.querySelector('#' + elem);
      n = 0;
      let t = Math.round(time/(num/step));
      let interval = setInterval(() => {
          n = n + step;
          if (n == num) {
              clearInterval(interval);
          }
          l.innerHTML = n;
      },
          t);
  }
  
  outNum(150, 'by');
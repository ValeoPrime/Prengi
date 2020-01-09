// var p = document.querySelectorAll('p')

// for (var i = 0; i < p.length; i++) {
//   p[i].addEventListener('click', function(event) {
//     event.target.style.color = 'blue'
//   })
// }

// document.getElementById('wrapper').addEventListener('click', function(event) {
//     var tagName = event.target.tagName.toLowerCase()
  
//     if (tagName === 'p') {
//       event.target.style.color = 'blue'
//     }
  
//     if (event.target.classList.contains('color')) {
//       event.target.style.color = 'red'
//     }
//   })

  var body = document.querySelector('body')
  body.addEventListener('click', function(event) {
    var tagName = event.target.tagName.toLowerCase()
    event.preventDefault()
    console.log(tagName);
    
    if(tagName === 'h1') {
      event.target.style.color = 'blue'
    }
    if(tagName === 'a') {
      event.target.style.color = 'red'
    }
    if(event.target.classList.contains('button')){
        console.log(event.target.classList);
        
      if(event.target.style.backgroundColor === 'rgb(0, 194, 240)'){
        event.target.style.backgroundColor = 'yellow'
        event.target.style.color = 'black'
      } else {
        event.target.style.backgroundColor = 'rgb(0, 194, 240)'
        event.target.style.color = 'rgb(255, 255, 255)'
      }
      
    }

  })

// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//Your JavaScript code goes here!
const errorMessage = document.getElementsByTagName('div')[0]
errorMessage.classList.add('hidden')

const heartsArray = document.getElementsByClassName('like-glyph')

for (x of heartsArray) {
  x.addEventListener('click', handleLike)
}


function handleLike(e) {
  if (e.target.textContent === EMPTY_HEART) {
    mimicServerCall()
    .then(response => {
      e.target.textContent = FULL_HEART
      e.target.classList.add('activated-heart')
    })
    .catch(response => {
      errorMessage.classList.remove('hidden')
      document.getElementById('modal-message').textContent = response
      setTimeout(() => errorMessage.classList.add('hidden'), 3000)
    })
  }
  else if(e.target.textContent === FULL_HEART) (
    mimicServerCall()
    .then(response => {
      e.target.textContent = EMPTY_HEART
      e.target.classList.remove('activated-heart')
    })
    .catch(response => {
      errorMessage.classList.remove('hidden')
      document.getElementById('modal-message').textContent = response
      setTimeout(() => errorMessage.classList.add('hidden'), 3000)
      
    })
    
  )
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

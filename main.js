alert('freedom, in any case, is only possible by constantly struggling for it.')

const red = document.querySelector('#red')

function changeDiv () {
  red.style.top = '108px'
  red.style.left = 'calc(10vw - 108px)'
  red.style.backgroundColor = 'red'
}

red.addEventListener('click', changeDiv)

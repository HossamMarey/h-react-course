

let count = 1


const render = () => {
  document.querySelector('#count').innerHTML = count
}

render()

document.querySelector('button').addEventListener('click', () => {
  count = 3
  render()
  console.log(count)
})
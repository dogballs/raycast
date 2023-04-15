const loadingElement = document.querySelector<HTMLElement>('[data-loading]');
const crashElement = document.querySelector<HTMLElement>('[data-crash]');

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

canvas.width = 640;
canvas.height = 480;

async function main() {
  loadingElement.style.display = 'none';

  console.log('Hello world!');
}

main();

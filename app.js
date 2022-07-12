
const form = document.querySelector('.form');
const input = document.querySelector('.form input');
const box = document.querySelector('.box');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //reset lai box moi lan an submit, cho vao setTimeOut voi
    //tgian la 0 de no nhay vao webAPI cung voi run( setInterval )
    setTimeout(() => {
        box.innerHTML = ``;
    }, 0);

    var text = input.value.trim();
    let cnt = 0;
    const run = setInterval(() => {
        cnt++;
        const div = document.createElement('div');
        div.innerHTML = `<p>Anh yêu em x${cnt}</p>`;
        box.appendChild(div);
        if( cnt == Number(text) )  {
            clearInterval(run);
        }
    }, 10)
})
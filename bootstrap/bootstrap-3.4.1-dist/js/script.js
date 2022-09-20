let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter the name');
    helloBtn.textContent = 'Roll No. 1:' + name;

}
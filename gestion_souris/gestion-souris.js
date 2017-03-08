
var button;
var rectangle;

function onClickButton(){
    rectangle.classList.toggle('hide');
}

function onDblClickRectangle(){
	rectangle.classList.toggle('important');
    rectangle.classList.toggle('good');
}

function onMouseNotOverRectangle(){
    rectangle.classList.remove('important');
}

function onMouseOverRectangle(){
    rectangle.classList.add('important');
}

button    = document.getElementById('toggle-rectangle');
rectangle = document.querySelector('.rectangle');

button.addEventListener('click', onClickButton);

rectangle.addEventListener('mouseout', onMouseNotOverRectangle);
rectangle.addEventListener('mouseover', onMouseOverRectangle);

rectangle.addEventListener('dblclick', onDblClickRectangle);

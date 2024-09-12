var colors = ['red', 'green', 'blue', 'yellow', 'brown', 'purple'];

function createAllItems() {
    for(var color of colors) {
        addLiOfColor(color);
    }
}

function addLiOfColor(color) {
    var ul = document.getElementById('buttons-list');

    var li = document.createElement('li');
    ul.appendChild(li);

    li.innerText = color;
    li.className = color;

    li.addEventListener('click', () => changeHeaderToColor(color));
}

function changeHeaderToColor(color) {
    var e = document.getElementById('my-header');
    e.className = color;
}

let bookDiv = document.getElementById('book');
let fontSize = Array.from(document.getElementsByClassName('font-size'));

fontSize.forEach((e) => {
    e.onclick = function () {
        bookDiv.classList.remove('font-size_small');
        bookDiv.classList.remove('font-size_big');

        for (let el of fontSize) {
            el.classList.remove('font-size_active');
        }
        e.classList.add('font-size_active');

        if (e.dataset.size === 'small') {
            bookDiv.classList.add('font-size_small');

        } else if (e.dataset.size === 'big') {
            bookDiv.classList.add('font-size_big');

        }
        return false;
    }
});

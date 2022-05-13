const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
const tooltip = document.querySelector('.tooltip');


function getTooltip(e) {
    e.preventDefault()
    let left = e.target.getBoundingClientRect().left;
    let top = e.target.getBoundingClientRect().top;

    if (tooltip.classList.contains('tooltip_active') && tooltip.textContent == e.target.title) {
        tooltip.classList.remove(('tooltip_active'));
    } else {
        tooltip.classList.add('tooltip_active');
    }
    tooltip.style.top = `${top + 20}px`;
    tooltip.style.left = `${left}px`;
    tooltip.textContent = e.target.title;

    return false;
}

window.addEventListener('scroll', function () {
    tooltip.classList.remove(('tooltip_active'));
});

hasTooltip.forEach(element => {
    element.addEventListener('click', getTooltip);

});


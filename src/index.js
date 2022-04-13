import './less/index.less'

// Your code goes here!
// #1 //
const headerHover = document.querySelector("h1");

headerHover.addEventListener("mouseover", (evt) => {
    evt.target.style.color = 'blue';
});

// #2 //
document.addEventListener("keydown", (evt) => {
    evt.target.style.backgroundColor = 'red';
});

// #3 //
document.addEventListener("dblclick", (evt) => {
    evt.target.style.color = 'green';
});

// #4 //
document.addEventListener("copy", (evt) => {
    evt.target.style.color = 'orange';
});

// #5 //
document.addEventListener("click", evt => {
    evt.target.style.color = 'purple';
});

// #6 //
const moveChange = document.querySelector('.nav-link')
moveChange.addEventListener("mousemove", evt => {
    evt.target.style.color = 'yellow';
});

// #7 //

document.addEventListener("scroll", evt => {
    console.log(`You're ${evt.type}ing!`)
})

// #8 //
const textContent = document.querySelector(".text-content");
textContent.addEventListener("mouseenter", evt => {
    evt.target.style.fontWeight = 'bold';
});

// #9 //
textContent.addEventListener("mouseleave", evt => {
    evt.target.style.fontWeight = 'initial';
});

// #10 //
window.addEventListener("load", evt => {
    console.log(`Event type ${evt.type} fired. LFG!`);
});

// Prevent Default //
document.querySelectorAll(".nav-link").addEventListener("click", evt => {
    evt.preventDefault;
    console.log('Your links are broken! Muahhahaha');
});
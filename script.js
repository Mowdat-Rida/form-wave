const labels = document.querySelectorAll('.form-control label')
const container=document.querySelector('.container')

labels.forEach(label => {
    label.innerHTML = label.innerText//innerHTML: Allows us to insert HTML directly into an element, replacing its previous content.
         .split('') //split('') converts the string "Email" into an array of individual characters, like this: ['E', 'm', 'a', 'i', 'l'].
        // This is necessary so we can wrap each character in a <span> element and apply a transition delay to each letter individually.
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)//The map() function is used to transform each letter in the array.
        .join('')
})

//${idx * 50}: The transition-delay is based on the index of the letter, meaning the first letter has transition-delay: 0ms, the second letter has transition-delay: 50ms, the third letter 100ms, and so on.

container.addEventListener('click', () => {
    container.style.transform = 'translateX(100%)'; // Move to the center
});


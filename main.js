fetch('tips.json')
  .then(response => response.json())
  .then(tips => {
    let tipOfTheDay = tips[Math.floor(Math.random() * tips.length)];

    let tipCategoryElem = document.getElementById('tip-category');
    let tipTextElem = document.getElementById('tip-text');
    let rabbitCategory = document.getElementById('rabbit');

    // Update category text and class
    tipCategoryElem.textContent = tipOfTheDay.tool;
    tipCategoryElem.classList.add(tipOfTheDay.toolSlug);
    rabbitCategory.classList.add(tipOfTheDay.toolSlug);
    tipTextElem.classList.add(tipOfTheDay.toolSlug);

    // Update tip text and add source link if applicable
    let tipText = tipOfTheDay.text
      .replace(/\[/g, '<code>')
      .replace(/\]/g, '</code>');
    tipTextElem.innerHTML = tipText;

    if (tipOfTheDay.source) {
      let learnMore = document.createElement('a');
      learnMore.href = tipOfTheDay.source;
      learnMore.classList.add('learn-more');
      learnMore.textContent = 'Learn More';
      tipTextElem.appendChild(learnMore);
    }
  })
  .catch(error => console.log({ error }));

document.querySelector('body').addEventListener('mousemove', event => {
  let cursorX = event.clientX;
  let shiftAmount = -6 + cursorX / (window.innerWidth / 10);
  document.getElementById('rabbitFace').style.transform =
    'translateX(' + shiftAmount + 'px)';
});

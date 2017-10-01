fetch('tips.json')
  .then(response => response.json())
  .then(tips => {
    let tipOfTheDay = tips[Math.floor(Math.random() * tips.length)];

    let tipCategoryElem = document.getElementById('tip-category');
    let tipTextElem = document.getElementById('tip-text');

    // Update category text and class
    tipCategoryElem.textContent = tipOfTheDay.tool;
    tipCategoryElem.classList.add(tipOfTheDay.toolSlug);

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

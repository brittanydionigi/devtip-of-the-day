fetch('tips.json')
  .then(response => response.json())
  .then(tips => {
    let randomTip = tips[Math.floor(Math.random() * tips.length)];

    let tipCategoryElem = document.getElementById('tip-category');
    let tipTextElem = document.getElementById('tip-text');

    // Update category text and class
    tipCategoryElem.textContent = randomTip.tool;
    tipCategoryElem.classList.add(randomTip.toolSlug);

    // Update tip text and add source link if applicable
    let tipText = randomTip.text.replace(/\[/g, '<code>').replace(/\]/g, '</code>');
    tipTextElem.innerHTML = tipText;

    if (randomTip.source) {
      let learnMore = document.createElement('a');
      learnMore.href = randomTip.source;
      learnMore.classList.add('learn-more');
      learnMore.textContent = 'Learn More';
      tipTextElem.appendChild(learnMore);
    }
  })
  .catch(error => console.log({ error }));
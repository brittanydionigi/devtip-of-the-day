fetch('tips.json')
  .then(response => response.json())
  .then(tips => {
    // Get the Number of days passed since project creation
    let projectCreactionDate = new Date(2017,09,14);
    let today = new Date();
    let diffDays = Math.round(Math.abs((projectCreactionDate.getTime() - today.getTime())/(86400000)));

    let tipOfTheDay = tips[diffDays % tips.length];

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

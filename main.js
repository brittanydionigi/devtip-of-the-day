fetch('tips.json')
  .then(response => response.json())
  .then(tips => {
    let randomTip = tips[Math.floor(Math.random() * tips.length)];

    let tipCategoryElem = document.getElementById('tip-category');
    tipCategoryElem.textContent = randomTip.tool;
    tipCategoryElem.classList.add(randomTip.toolSlug);

    document.getElementById('tip-text').textContent = randomTip.text;
  })
  .catch(error => console.log({ error }));
fetch('tips.json')
  .then(response => response.json())
  .then(tips => {
    let randomTip = tips[Math.floor(Math.random() * tips.length)];

    let tipCategoryElem = document.getElementById('tip-category');
    tipCategoryElem.textContent = randomTip.tool;
    tipCategoryElem.classList.add(randomTip.toolSlug);

    let tipText = randomTip.text.replace(/\[/g, '<code>').replace(/\]/g, '</code>');
    document.getElementById('tip-text').innerHTML = tipText;
  })
  .catch(error => console.log({ error }));
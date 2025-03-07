async function showItem() {
    const itemNumber = document.getElementById('itemNumberInput').value;
    const response = await fetch('items.json');
    const data = await response.json();
    const item = data.items.find(i => i.itemNumber === itemNumber);
  
    const itemContainer = document.getElementById('itemContainer');
    itemContainer.innerHTML = '';
  
    if (item) {
      const img = document.createElement('img');
      img.src = item.imagePath;
      img.alt = `Imagen del ítem ${itemNumber}`;
      itemContainer.appendChild(img);
  
      const description = document.createElement('p');
      description.textContent = item.description;
      itemContainer.appendChild(description);
    } else {
      itemContainer.textContent = 'Ítem no encontrado';
    }
  }
  



  

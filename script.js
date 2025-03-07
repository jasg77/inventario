let inventory = [];

function linkReference() {
  const itemNumber = document.getElementById('itemNumber').value;
  const reference = document.getElementById('reference').value;
  const quantity = document.getElementById('quantity').value;
  const description = document.getElementById('description').value;
  const imageInput = document.getElementById('image');
  const imageFile = imageInput.files[0];

  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageUri = e.target.result;
      saveItem(itemNumber, reference, quantity, description, imageUri);
      clearFields();
    };
    reader.readAsDataURL(imageFile);
  } else {
    saveItem(itemNumber, reference, quantity, description, '');
    clearFields();
  }
}

function saveItem(itemNumber, reference, quantity, description, imageUri) {
  const item = {
    itemNumber,
    reference,
    quantity,
    description,
    imageUri
  };
  inventory.push(item);
  localStorage.setItem('inventory', JSON.stringify(inventory));
  console.log('Item saved:', item);
}

function loadInventory() {
  const storedInventory = localStorage.getItem('inventory');
  if (storedInventory) {
    inventory = JSON.parse(storedInventory);
  }
}

function clearFields() {
  document.getElementById('itemNumber').value = '';
  document.getElementById('reference').value = '';
  document.getElementById('quantity').value = '';
  document.getElementById('description').value = '';
  document.getElementById('image').value = '';
}

function searchItem() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  const result = inventory.find(item => 
    item.itemNumber.toLowerCase() === searchValue || 
    item.reference.toLowerCase() === searchValue
  );

  if (result) {
    displayOutput(result);
  } else {
    document.getElementById('output').innerHTML = '<p>No item found</p>';
  }
}

function displayOutput(item) {
  const output = `
    <p><strong>Item Number:</strong> ${item.itemNumber}</p>
    <p><strong>Reference:</strong> ${item.reference}</p>
    <p><strong>Quantity:</strong> ${item.quantity}</p>
    <p><strong>Description:</strong> ${item.description}</p>
    ${item.imageUri ? `<img src="${item.imageUri}" alt="Item Image" style="width: 100px; height: 100px;">` : ''}
  `;

  document.getElementById('output').innerHTML = output;
}

function scanQRCode() {
  alert('QR Code scanning functionality is not implemented yet.');
}

// Cargar el inventario al iniciar la aplicación
loadInventory();


  

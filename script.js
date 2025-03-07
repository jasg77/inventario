function linkReference() {
    const itemNumber = document.getElementById('itemNumber').value;
    const reference = document.getElementById('reference').value;
    const quantity = document.getElementById('quantity').value;
    const description = document.getElementById('description').value;
    const imageUri = document.getElementById('imageUri').value;
  
    const output = `
      <p><strong>Item Number:</strong> ${itemNumber}</p>
      <p><strong>Reference:</strong> ${reference}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Description:</strong> ${description}</p>
      ${imageUri ? `<img src="${imageUri}" alt="Item Image" style="width: 100px; height: 100px;">` : ''}
    `;
  
    document.getElementById('output').innerHTML = output;
  }
  
  function scanQRCode() {
    alert('QR Code scanning functionality is not implemented yet.');
  }
  

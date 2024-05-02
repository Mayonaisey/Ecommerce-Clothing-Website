
document.getElementById('addProductButton').addEventListener('click', function() {
    var form = document.getElementById('addProductForm');
    form.style.display = (form.style.display === 'none' || !form.style.display) ? 'block' : 'none';
});

document.getElementById('newProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const imageUrl = document.getElementById('newProductImage').value.trim();
    const name = document.getElementById('newProductName').value.trim();
    const price = document.getElementById('newProductPrice').value.trim();
    
    if (!imageUrl || !name || isNaN(price) || Number(price) <= 0) {
        alert('Please enter valid inputs for image URL, product name, and price.');
        return;
    }

    const table = document.getElementById('productsTable').getElementsByTagName('tbody')[0];
    const row = table.insertRow();
    const cellImage = row.insertCell(0);
    const cellName = row.insertCell(1);
    const cellPrice = row.insertCell(2);
    const cellChanges = row.insertCell(3);

    cellImage.innerHTML = `<img src="${imageUrl}" alt="${name}">`;
    cellName.textContent = name;
    cellPrice.innerHTML = `Price: <input type="text" value="${price}" readonly>`;
    cellChanges.innerHTML = `<button onclick="toedit(this)">Edit</button><button onclick="deleteRow(this)">Delete</button>`;
});

function toedit(button) {
    var row = button.closest('tr'); 
    var priceInput = row.cells[2].querySelector('input');
    if (button.textContent === 'Edit') {
        priceInput.removeAttribute('readonly');
        priceInput.focus();
        button.textContent = 'Save';
    } else {
        if (!priceInput.value || isNaN(priceInput.value) || Number(priceInput.value) <= 0) {
            alert('Please enter a valid price.');
            return;
        }
        priceInput.setAttribute('readonly', true);
        button.textContent = 'Edit';
    }
}
function deleteRow(button) {
    var row = button.closest('tr'); 
    row.parentNode.removeChild(row); 
}


document.getElementById('addProductButton').addEventListener('click', function() {
    var form = document.getElementById('addProductForm');
    form.style.display = (form.style.display === 'none' || !form.style.display) ? 'block' : 'none';
});

    document.getElementById('newProductForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
    const productID = document.getElementById('newProductID').value.trim();
    const imageFile = document.getElementById('newProductImage').files[0];
    const name = document.getElementById('newProductName').value.trim();
    const price = document.getElementById('newProductPrice').value.trim();

    
    if (!productID) {
        alert('Please enter a product ID.');
        return;
    }
    if (!imageFile) {
        alert('Please select an image file.');
        return;
    }
    if (!name) {
        alert('Please enter a name for the product.');
        return;
    }
    if (!price || isNaN(price) || Number(price) <= 0) {
        alert('Please enter a valid price.');
        return;
    }

   
    const reader = new FileReader();
    reader.onload = function(event) {
        
        const table = document.getElementById('productsTable').getElementsByTagName('tbody')[0];
        const row = table.insertRow(-1);
        const cellID = row.insertCell(0);
        const cellImage = row.insertCell(1);
        const cellName = row.insertCell(2);
        const cellPrice = row.insertCell(3);
        const cellChanges = row.insertCell(4);

        cellID.textContent = productID;
        cellImage.innerHTML = `<img src="${event.target.result}" alt="${name}" style="width:100px;">`;
        cellName.textContent = name;
        cellPrice.innerHTML = `Price: <input type="text" value="${price}" readonly>`;
        cellChanges.innerHTML = `<button onclick="toedit(this)">Edit</button><button onclick="deleteRow(this)">Delete</button>`;
    };

    reader.readAsDataURL(imageFile);
});

function toedit(button) {
    var row = button.closest('tr'); 
    var priceInput = row.cells[3].querySelector('input');
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

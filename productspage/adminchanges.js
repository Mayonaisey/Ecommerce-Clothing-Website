function toedit(button) {
    var money = /^\d+(\.\d{1,2})?$/; 
    var row = button.closest('tr'); 
    var priceParagraph = row.querySelector('.price');
    var input = priceParagraph.querySelector('input');
    var errorParagraph = row.querySelector('.error');

    if (input.value.match(money))
   {
        errorParagraph.textContent = ''; 
        if (priceParagraph.classList.contains('hidden')) {
            priceParagraph.classList.remove('hidden');
            input.removeAttribute('readonly');
            button.textContent = 'Save';
        } else {
            priceParagraph.classList.add('hidden');
            input.setAttribute('readonly', '');
            button.textContent = 'Edit';
        }
    } else {
        errorParagraph.textContent = "Must enter the price in valid numeric format";
    }
}
function deleteRow(button) {
    var row = button.closest('tr'); // Find the closest <tr> ancestor of the button
    row.parentNode.removeChild(row); // Remove the <tr> from its parent
}

document.addEventListener('DOMContentLoaded', function() {
    listUsers(); 
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const password = document.getElementById('userPassword').value.trim();
    const address = document.getElementById('userAddress').value.trim();
    const phone = document.getElementById('userPhone').value.trim();

    let isValid = true;

    if (!name) {
        document.getElementById('nameError').textContent = "Please enter a name.";
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = "";
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    if (!password) {
        document.getElementById('passwordError').textContent = "Please enter a password.";
        isValid = false;
    } else {
        document.getElementById('passwordError').textContent = "";
    }

    if (!address) {
        document.getElementById('addressError').textContent = "Please enter an address.";
        isValid = false;
    } else {
        document.getElementById('addressError').textContent = "";
    }

    if (!phone || !/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = "Please enter a valid phone number (10 digits).";
        isValid = false;
    } else {
        document.getElementById('phoneError').textContent = "";
    }

    if (isValid) {
        addUserOrUpdate(name, email, password, address, phone);
    }
});

function toedit(email) {
    const user = users.find(u => u.email === email);
    if (user) {
        document.getElementById('userName').value = user.name;
        document.getElementById('userEmail').value = user.email;
        document.getElementById('userPassword').value = user.password;
        document.getElementById('userAddress').value = user.address;
        document.getElementById('userPhone').value = user.phone;
    }
}

let users = [
    { name: "Hagar", email: "hagar@gmail.com", password: "password1", address: "Shrouk", phone: "01004848548" },
    { name: "Zaha", email: "zahab@gmail.com", password: "password2", address: "Tagmou3", phone: "01000000000" }
];

function addUserOrUpdate(name, email, password, address, phone) {
    let user = users.find(u => u.email === email);
    if (user) {
        user.name = name;
        user.password = password;
        user.address = address;
        user.phone = phone;
    } else {
        user = { name, email, password, address, phone };
        users.push(user);
    }
    listUsers();
}

function deleteUser(email) {
    users = users.filter(user => user.email !== email);
    listUsers();
}

function listUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = `Name: ${user.name}, Email: ${user.email}, Address: ${user.address}, Phone: ${user.phone}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () { deleteUser(user.email); };
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = function () { toedit(user.email); };
        userItem.appendChild(editBtn);
        userItem.appendChild(deleteBtn);
        userList.appendChild(userItem);
    });
}




function validateForm(event) {

    //deh 3shan matkhleesh el page t refresh abl ma el js y execute :)

  event.preventDefault(); 
  
    const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (email === 'admin@gmail.com' && password === 'admin123') {
    document.getElementById('usersButton').style.display = 'block';
    document.getElementById('itemsButton').style.display = 'block';
  }
   else {
  // alert('Incorrect email or password');
 // document.getElementsByClassName('form').submit();
 
 window.location.href = 'home.html';
   }
}
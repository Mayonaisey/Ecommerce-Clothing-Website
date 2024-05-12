function openwishlist() {
  document.getElementById('wishdiv').style.display = 'block'; 
  document.getElementById('orderdiv').style.display = 'none'; 
  document.getElementById('contactdiv').style.display = 'none'; 
  document.getElementById('editdiv').style.display = 'none'; 

}

function openorder() {
  document.getElementById('orderdiv').style.display = 'block'; 
  document.getElementById('wishdiv').style.display = 'none'; 
  document.getElementById('contactdiv').style.display = 'none'; 
  document.getElementById('editdiv').style.display = 'none'; 

}


function opencontact() {
  document.getElementById('contactdiv').style.display = 'block'; 

  document.getElementById('orderdiv').style.display = 'none'; 
  document.getElementById('wishdiv').style.display = 'none'; 
  document.getElementById('editdiv').style.display = 'none'; 


}

function openedit() {
  document.getElementById('editdiv').style.display = 'block'; 

  document.getElementById('contactdiv').style.display = 'none'; 

  document.getElementById('orderdiv').style.display = 'none'; 
  document.getElementById('wishdiv').style.display = 'none'; 

}



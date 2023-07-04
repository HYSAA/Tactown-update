
  // buhat kag request 
  var xhr = new XMLHttpRequest();

  // load
  xhr.open('GET', 'index.html', true);


  xhr.onload = function() {
    if (xhr.status === 200) {
      // if ang condition kay sakto musud ang details sa navbar
      document.getElementById('navbar').innerHTML = xhr.responseText;
    }
  };


  xhr.send();


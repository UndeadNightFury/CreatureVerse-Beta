document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        console.log('Checked');
        document.getElementById('sfw').style.visibility = 'hidden';
        document.getElementById('nsfw').style.visibility = 'visible';
      } 
      else {
        // do that
        console.log('Not checked');
        document.getElementById('sfw').style.visibility = 'visible';
        document.getElementById('nsfw').style.visibility = 'hidden';
      }
    });
  });
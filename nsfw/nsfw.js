document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        console.log('NSFW');
        document.getElementById('sfw').style.visibility = 'hidden';
        document.getElementById('nsfw').style.visibility = 'visible';
      } 
      else {
        // do that
        console.log('SFW');
        document.getElementById('sfw').style.visibility = 'visible';
        document.getElementById('nsfw').style.visibility = 'hidden';
      }
    });
  });
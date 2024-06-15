function updateNsfw()
{
    var checkbox = document.querySelector('input[type="checkbox"]');
    var nsfw = localStorage.getItem("NsfwEnabled");
    if (nsfw) {
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
}

function initNsfwCheckbox()
{
    var checkbox = document.querySelector('input[type="checkbox"]');
    var nsfw = localStorage.getItem("NsfwEnabled");
    checkbox.checked = nsfw;
    updateNsfw();
}

document.addEventListener('DOMContentLoaded', function () {
   var checkbox = document.querySelector('input[type="checkbox"]');
   checkbox.addEventListener('change', function () {
       localStorage.setItem("NsfwEnabled", checkbox.checked);
       updateNsfw();
   });
    initNsfwCheckbox();
 });
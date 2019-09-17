 /*function addingEventListener(event) {
    document.getElementById('event');
    event.addEventListener('click', function(event) {
  alert('I was clicked!');
});
  } */
  function addingEventListener(event){
  const input = document.getElementById('input');
   input.addEventListener('click', function(event) {
  alert('I was clicked!');
   });
    
  }
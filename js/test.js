<script>
function showToast(text) {
  el = document.querySelector('#toast')
  el.innerText = text;
  el.style.display = 'block';

  var player = el.animate([
    {opacity: 0.5},
    {opacity: 1},
    {opacity: 1},
    {opacity: 1},
    {opacity: 1},
    {opacity: 0.5},
    {opacity: 0.0},
  ], {
    duration: 6000,
    iterations: 1,
    delay: 0
  });

  player.onfinish = function() {
    el.style.display = 'none';
  }
}
</script>
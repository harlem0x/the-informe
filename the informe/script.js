<script>
  document.addEventListener('DOMContentLoaded', function () {
    var meuCarrossel = document.querySelector('#carrosselImagens');
    var carousel = new bootstrap.Carousel(meuCarrossel, {
      interval: 3000,   
      ride: 'carousel' 
  });
</script>

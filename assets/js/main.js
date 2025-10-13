
// main.js - small interactions for static demo
document.addEventListener('DOMContentLoaded', function(){
  // mobile nav toggle handled by bootstrap
  // Add to cart demo: animate and update cart count
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', function(e){
      e.preventDefault();
      const countEl = document.getElementById('cart-count');
      let count = parseInt(countEl.textContent||'0',10);
      count += 1;
      countEl.textContent = count;
      // tiny visual feedback
      btn.classList.add('btn-success');
      setTimeout(()=> btn.classList.remove('btn-success'), 600);
    });
  });
});

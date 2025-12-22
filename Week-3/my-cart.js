document.querySelectorAll('.remove').forEach(btn => {
  btn.onclick = () => {
    btn.closest('.cart-item').remove();
  };
});

document.querySelectorAll('.save').forEach(btn => {
  btn.onclick = () => {
    alert('Saved for later!');
  };
});

document.querySelectorAll('.qty').forEach(qty => {
  qty.onchange = () => {
    console.log('Quantity changed');
  };
});

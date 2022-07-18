const menuBtn = document.querySelector('#menu-button');
const menuItems = document.querySelectorAll(".menu-item");

menuBtn.addEventListener('click', function() {
    document.body.classList.toggle('mobile-menu-active');
});

menuItems.forEach(function(item) {
      
    item.addEventListener('click', function() {
     
      document.body.classList.remove('mobile-menu-active');

      const currentItem = document.querySelector('.active');
      currentItem.classList.remove('active');
      this.classList.add('active');
    });
});
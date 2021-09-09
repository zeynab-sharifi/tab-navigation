let itemLi = document.querySelectorAll('.nav-tab li a');
itemLi.forEach((item) => {
    item.addEventListener('click' , function(e){
        e.preventDefault();

        document.querySelector('.nav-tab li a.selected').classList.remove('selected');
        this.classList.add('selected');

        let bodybox = this.getAttribute('data-content')
        
        
        document.querySelector('.nav-body li.select').classList.remove('select')
        document.querySelector(`.nav-body li[data-content="${bodybox}"]`).classList.add('select')
    })
})
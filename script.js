// initial set number
let counterNumber = 0;
//select value.
let counterValue = document.querySelector('#counter-value');
let title = document.querySelector('.title');
//select button.
let counterBtn = document.querySelectorAll('.btn');
counterBtn.forEach(function (item) {
    item.addEventListener('click', function(e){
    let styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
        counterNumber--;
    }else if(styles.contains('increase')){
        counterNumber++;
    }else{
        counterNumber = 0;
    }
    if(counterNumber > 0){
        counterValue.style.color = 'Green';
        title.style.color = 'Green';
    }
    if(counterNumber < 0){
        counterValue.style.color = 'Red';
        title.style.color = 'Red';

    }
    if(counterNumber == 0){
        counterValue.style.color = 'Black';
        title.style.color = 'Black';

    }
    counterValue.textContent = counterNumber;
    })
})
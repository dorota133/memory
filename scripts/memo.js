function randFunc(icons) {
   let myIcons = document.querySelectorAll('.fas')
      for(elem of myIcons) {
         let rn = Math.round(Math.random() * (icons.length - 1));
         elem.classList.add(icons.splice(rn, 1));
      }
}
randFunc(['fa-cat', 'fa-cat', 'fa-poo', 'fa-poo','fa-bacteria', 'fa-bacteria', 'fa-brain', 'fa-brain','fa-om', 'fa-om', 'fa-dragon', 'fa-dragon', 'fa-fish','fa-fish', 'fa-hippo', 'fa-hippo']);
//funkcja pokazania ikon w polach gry

let myIcon = document.querySelectorAll('.card');

   for(cards of myIcon) {
      cards.addEventListener('click', MyMemory); 
   }

let activcard = '';
let posit = '';
let paare = 0;
let gameResult = 0;
let attCont = document.querySelector('.versuche');

function MyMemory() {
   this.classList.add('clicked');

   if(activcard == '') {
      activcard = this.firstChild.classList[1];
      posit = this;
   } else if(activcard == this.firstChild.classList[1]) {
      this.removeEventListener('click', MyMemory);
      posit.removeEventListener('click', MyMemory);
      activcard = '';
      posit = '';
      paare++;
      gameResult++;
      attCont.innerHTML = gameResult;
      if(paare == 8) {
         clearInterval(myIn);
         alert('Du hast gewonnen ' + myIn);
         location.reload();
      }
   } else {
      let myThis = this;
      for(cards of myIcon) {
         cards.removeEventListener('click', MyMemory);
      }
      setTimeout(function() {
         myThis.classList.remove('clicked');
         posit.classList.remove('clicked');
         activcard = '';
         posit = '';
         gameResult++;
         attCont.innerHTML = gameResult;
      for(cards of myIcon) {
         cards.addEventListener('click', MyMemory);
      }
      }, 2000 );
   }
}

let tiles = document.querySelector('.tiles');
let place = document.querySelector('.time');
let startTime = 0;

tiles.addEventListener('click', function() {
   if(startTime == 0) {
      startTime = Math.round(new Date().getTime() / 1000);
      myIn = setInterval(showTimer, 1);
   }
});

function showTimer() {
   let currTime = Math.round(new Date().getTime() / 1000);
   place.innerHTML = currTime - startTime;
}
























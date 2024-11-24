const userName = document.querySelector('#userName');
const ad = document.querySelector('.ad');
const tarih = document.querySelector('.tarih');
const trh = document.querySelector('.trh');
const numara = document.querySelector('.numara');
const cardNumber =document.querySelector('#cardNumber');
const numberM = document.querySelector('#numberM');
const numberY =document.querySelector('#numberY');
const cvc = document.querySelector('#cvc');
const kod =document.querySelector('.kod');
const btn=document.querySelector('.btn');
const container=document.querySelector('.container');

userName.addEventListener('input', () => {

  ad.innerText = userName.value;
});

cardNumber.addEventListener('input', () => {

  numara.innerText = cardNumber.value;
})

numberM.addEventListener('input', () =>{

  tarih.innerText =numberM.value;
})

numberY.addEventListener('input', () =>{

  trh.innerText =numberY.value;
})

cvc.addEventListener('input', () =>{

  kod.innerText= cvc.value;
})

btn.addEventListener('click', () => {

  container.innerHTML = ` 
     <div class="info-card">
  <div class="info">
       <img src="assets/img/card-oval.png" alt="cards">
       <div class="info-flex">
   <div class="numara">
      <span>0000 0000 0000 0000</span>
   </div>
     <div class="ad-flex">
       <div class="ad">
          <span>JANE APPLESEED </span>
   </div>
    <div class="flex">
     <div class="tarih-info">
   <div class="tarih">
    <span>00 /</span>
  </div>
  </div>
     <div class="trh">
      <span>00</span>
      </div>
     </div>
   </div>
   </div>
  </div>


  <div class="arka">
      <img src="assets/img/card.png" alt="cards">
    <div class="border"></div>
     <div class="kod">
      <span>123</span>
    </div>
  </div>
</div>
   <div class="info-arka">
  <img src='assets/img/onay.png'/>
  <h4>THANK YOU!</h4>
  <p>We’ve added your card details</p>
  <button>Continue</button>
  </div>
`
})


document.querySelector('#cardForm').addEventListener('submit', (event) => {
  const userName = document.querySelector('#userName');
  const cardNumber = document.querySelector('#cardNumber');
  
  if (!userName.checkValidity() || !cardNumber.checkValidity()) {
    event.preventDefault(); 
    if (!userName.checkValidity()) {
      alert("Can’t be blank");
    }
    if (!cardNumber.checkValidity()) {
      alert("Can’t be blank");
    }
  }
});

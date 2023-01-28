const slider = document.querySelector("#slider");
const slider2 = document.querySelector("#slider2");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let enableClick = true;

//동일한 기능을 복수개 이상의 요소에 적용해야 할 때는 자주 쓰는 기능들을 함수로 미리 정의하고, 호출한다.
//전역변수로 둘 것과 지역변수로 선언되어야 할 것을 구분해야된다.

init(slider);
init(slider2);


prev.addEventListener("click",(e)=>{
  e.preventDefault();
  if(enableClick){
    enableClick = false;
    prevSlide(slider);
    prevSlide(slider2);
  }

})

next.addEventListener("click",(e)=>{
  e.preventDefault();

  if(enableClick){
    enableClick = false;
    nextSlide(slider);
    nextSlide(slider2);
  }
  
})


function init(frame){
  const ul = frame.querySelector("ul");
  const lis = ul.querySelectorAll('li');
  const len = lis.length;

  ul.style.marginLeft = "-100%";
  ul.prepend(ul.lastElementChild);
  ul.style.width = `${100 * len}%`;
  lis.forEach((el)=>{
    el.style.width = `${100 / len}%`;
  })
}


function prevSlide(frame){
  const ul = frame.querySelector('ul');

  ul.prepend(ul.lastElementChild);
  enableClick = true;

  ul.animate({
    // animate() 함수로 margin 이동값을 줄 경우 [from값, to값] 지정해주기
    marginLeft: ["-200%", "-100%"],
  }, 500)

}


function nextSlide(frame){
  const ul = frame.querySelector("ul");

  ul.append(ul.firstElementChild);
  enableClick = true;

  ul.animate({
    marginLeft: ["0%", "-100%"],
  }, 500)

}

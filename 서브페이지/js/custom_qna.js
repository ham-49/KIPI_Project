/* AOS */
AOS.init();

/* QnA */
/* 변수 선언 */
let tabBtns = document.querySelectorAll('.QnA_menu li a');
let tabContents = document.querySelectorAll('.tab');
let contentItems = document.querySelectorAll('.tab .content_item');
//console.log(firstitems);
/* for(item of firstitems){
  item.classList.add('active');
} */
tabBtns.forEach(function(btn, idx){
  btn.addEventListener('click', function(a){
  a.preventDefault();
  displayContent(idx);

  })
})
/* 클릭되면 모든 active 삭제, 해당 되는 부분만 보여주기 */
function displayContent(idx){
  for(let btns of tabBtns){
    btns.classList.remove('active');
  }
    for(let Contents of tabContents){
    Contents.classList.remove('active');
  }
  tabBtns[idx].classList.add('active');
  tabContents[idx].classList.add('active');
  for(items of contentItems){
    items.classList.remove('active');
  }
}
displayContent(0); //초기값에는 처음 내용만 보여주기

/* content_item */
    contentItems.forEach(function(item,index){
      item.addEventListener('click',function(itemlist){
        item.classList.toggle('active');
      })
    })


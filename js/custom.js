/* ############ Include Files ############*/
/* ############ header include  ############*/
fetch('/KIPI_Project/html/header.html')
.then(response => response.text())
.then(data => {
  document.querySelector('.header-include').innerHTML = data;
  /* ############ header  ############*/
  let headerbtn = document.querySelectorAll('.header_btn');
  let headerList = document.querySelectorAll('.header_list');
  headerbtn.forEach((btn,idx) => {
    btn.addEventListener('click',() => {
      if (headerList[idx].style.display === "block") {
      headerList[idx].style.display = "none";
    } else {
      // 모두 닫고 현재 인덱스만 열기
      headerList.forEach(list => list.style.display = "none");
      headerList[idx].style.display = "block";
    }
    })
  })
  /* 헤더 */
  let navBtns = document.querySelectorAll('.nav_item');
  let subNavs = document.querySelectorAll('.sub_nav');
  let headerNav = document.querySelector('.header_nav');
  let mobileBtn = document.querySelector('.site_map > a')
  if(matchMedia("screen and (max-width: 767px)").matches){
    console.log("mobile");
    mobileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    headerNav.style.display = headerNav.style.  display === "block" ? "none" : "block";
    mobileBtn.classList.toggle('active')
    // 모든 메뉴에 대해 반복
      navBtns.forEach((btn, idx) => {
        let activeSub = subNavs[idx];
        //초기값 보여주기
        navBtns[0].classList.add('hoverA');
        subNavs[0].style.display = 'block';
        // 메인 메뉴에 마우스 들어오면 해당 서브 메뉴 보이기
        btn.addEventListener('click', () => {
        navBtns[0].classList.remove('hoverA');
        subNavs.forEach(nav => nav.style.display = 'none'); // 다른 메뉴 숨김
        activeSub.style.display = 'block';
        });
        // 서브 메뉴에 마우스 들어오면 계속 보이기
        activeSub.addEventListener('click', () => {
          activeSub.style.display = 'block';
        });
        // 서브 메뉴에서 마우스 나가면 숨기기
      });
    });
  }else if(matchMedia("screen and (min-width: 768px)").matches){
  console.log("desktop");
    // 모든 메뉴에 대해 반복
    navBtns.forEach((btn, idx) => {
      let activeSub = subNavs[idx];
      // 메인 메뉴에 마우스 들어오면 해당 서브 메뉴 보이기
      btn.addEventListener('mouseenter', () => {
        subNavs.forEach(nav => nav.style.display = 'none'); // 다른 메뉴 숨김
        activeSub.style.display = 'block';
      });
      // 메인 메뉴에서 마우스 나가면 (잠깐 기다렸다가) 서브 메뉴 숨기기
      btn.addEventListener('mouseleave', () => {
        setTimeout(() => {
          if (!activeSub.matches(':hover') && !btn.matches(':hover')) {
            activeSub.style.display = 'none';
          }
        }, 200);
      });
      // 서브 메뉴에 마우스 들어오면 계속 보이기
      activeSub.addEventListener('mouseenter', () => {
        activeSub.style.display = 'block';
      });
      // 서브 메뉴에서 마우스 나가면 숨기기
      activeSub.addEventListener('mouseleave', () => {
        activeSub.style.display = 'none';
      });
    });
  };
});


/* ############ footer include  ############*/
fetch('/KIPI_Project/html/footer.html')
.then(response => response.text())
.then(data => {
  document.querySelector('.footer-include').innerHTML = data;
});

/* ############ common  ############*/
/* AOS */
AOS.init();

/* 크기 변할때 자동 새로고침 */
window.onresize = function(){
  document.location.reload();
};
/* ############ main  ############*/
/* ############ main-visual  ############*/
var swiper01 = new Swiper(".visual_swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".visual-next",
    prevEl: ".visual-prev",
  },
  slidesPerView:1,
  spaceBetween: 10,
  pagination: {
    el: ".pagination-visual",
    type: "fraction",
  },
  mousewheel: false,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
/* ############ movement  ############*/
const swiper02 = new Swiper(".movement_swiper", {
  slidesPerView: 'auto',
  spaceBetween: 200,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".movement-next",
    prevEl: ".movement-prev",
  },
  pagination: {
    el: ".pagination-movement",
  },
  mousewheel: false,
  keyboard: true,
});
/* ############ promotion  ############*/
const swiper03 = new Swiper(".promotion_swiper", {
  slidesPerView: 'auto',
  spaceBetween: 120,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".promotion-next",
    prevEl: ".promotion-prev",
  },
  mousewheel: false,
  keyboard: true,
});
/* ############ information  ############*/
/* 선언 */
let titleLink = document.querySelectorAll('.title-menu li');
let titlePlus = document.querySelectorAll('.title-plus li')
let contents = document.querySelectorAll('.notice_content div');

console.log(titleLink,titlePlus,contents)

//초기값
titleLink[0].classList.add('active');
titlePlus[0].classList.add('active');
contents[0].classList.add('active');
let LinkA = document.querySelectorAll('.title-menu li a');

console.log(LinkA)

/* 실행 */
titleLink.forEach((link,idx) => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      titleLink.forEach(L => {
        L.classList.remove('active');
      })
      titlePlus.forEach(P => {
        P.classList.remove('active');
      })
      contents.forEach(C => {
        C.classList.remove('active');
      })
      link.classList.add('active');
      titlePlus[idx].classList.add('active');
      contents[idx].classList.add('active');
  })
})

/* 스와이퍼 */
var swiper04 = new Swiper('.board-swiper',{
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.board-next',
    prevEl: '.board-prev',
  },
  pagination: {
    el: '.pagination-board',
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 50,
  mousewheel: true,
  keyboard: true,
  allowTouchMove: false,
  loop: true
});

/* ############ business  ############*/
let textBoxs = document.querySelectorAll('.text_box');
//console.log(textBoxs,businessLists);
// 실행
textBoxs.forEach(function(textBox){
  let list = textBox.querySelector('.business_list');
  if (list) {
    //리스트 none처리
    list.style.display = 'none';
    //마우스 올라가면 보이기
    textBox.addEventListener('mouseenter', function(){
      list.style.display = 'block';
    });
    //마우스 떠나면 사라지기
    textBox.addEventListener('mouseleave', function(){
      list.style.display = 'none';
    });
  }
});

/* ############ relation ############*/
var swiper05 = new Swiper(".relation_swiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
  loopedSlides : 2,
  loop : true,
});

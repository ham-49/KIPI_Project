/* AOS */
AOS.init();
/* content */
/* 변수 선언 */
//페이지 별 보여줄 행 개수
let rowsPerPage = 10;
//테이블 모든 행 가져오기
let rows = document.querySelectorAll('#tables tbody tr');
//전체 행 개수
let rowsCount = rows.length;
//총 필요한 페이지 수 계산
let pageCount = Math.ceil(rowsCount / rowsPerPage);
//페이지 번호를 추가할 ul 선택
let numbers = document.querySelector('#numbers');
//console.log(rows,rowsCount,pageCount,numbers);

/* 페이지 */
//1페이지부터 마지막페이지까지 번호 만들어 넣기
for(let i = 1; i <= pageCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`
}
//모든 페이지 번호 가져오기
let numberBtn = numbers.querySelectorAll('#numbers a');

//a클릭 시 이동하는 이벤트
//a클릭 시 기존 이동 기능 삭제 / 행 보여주기
numberBtn.forEach((item, idx)=>{
  item.addEventListener('click', function(e){
    e.preventDefault();//링크 클릭시 화면이동 막기
    displayRow(idx)//해당페이지에 맞는 행 보여주기
  })
})
/* 함수 */
//해당 페이지에 맞는 행 보여주는 함수
function displayRow(idx){
  let start = idx * rowsPerPage;//시작행 번호
  let end = start + rowsPerPage; //끝행 번호
  let rowsArray = [...rows]; //전체 값 배열로 가져오기
  console.log(rowsArray);
  //모든 행 전부 안보이게
  for(let ra of rowsArray){
    ra.style.display = "none"
  }
  //해당되는 행 10개씩 보이게 하기 
  let newRows = rowsArray.slice(start,end);
  for(let nr of newRows){
    nr.style.display = ""
  }
  //모든 번호에서 active class 삭제
  for(let nb of numberBtn){
    nb.classList.remove('active')
  }
  //현재 선택한 페이지 번호만 class 추가
  numberBtn[idx].classList.add('active')
}
displayRow(0);
$(function () {
  // 1.좌우 슬라이드 기능
  const slidesList = $(".slide-list");
  const slideWidth = $(".slide-list li").width();
  console.log(slideWidth);
  const moveSlide = () => {
    slidesList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first"));
      $(this).css({ marginLeft: 0 });
      // console.log(this);
    });
  };
  setInterval(moveSlide, 3000);
  // 2. 위로 슬라이드 기능
  const slidesListUp = $(".slide-list-up");
  const slideHeight = $(".slide-list-up li").height();
  const moveUp = () => {
    slidesListUp.animate({ marginTop: -slideHeight }, 1000, function () {
      $(this).append($(this).find("li:first"));
      $(this).css({ marginTop: 0 });
    });
  };
  setInterval(moveUp, 3000);
  // 3.페이드인 페이드 아웃
  const slideFade = $(".slide-fade li");
  const current = 0;
  const moveFade = () => {
    let next = (current + 1) % slideFade.length;
    console.log( next);
    slideFade.eq(current).fadeOut(1000);
    console.log(current);
    slideFade.eq(next).fadeIn(1000);
    current = next
  };
  slideFade.hide().eq(0).show()

  setInterval(moveFade, 3000);
});

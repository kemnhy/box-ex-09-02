$(function () {
  // console.log("시작");
  //    1. .slideDown() / .slideUp()
  //   $(".menu > li").hover(
  //     function () {
  //     // console.log("hover");
  //     // console.log($(this));

  //     $(this).find(".submenu").stop().slideDown(300);
  //   }, function(){
  //      $(this).find(".submenu").stop().slideUp(300);
  //   }

  // );
  // 2. fadeIn() / fadeOut()
//   $(".menu > li").hover(
//     function () {
//       $(this).find(".submenu").stop().fadeIn(500);
//     },
//     function () {
//       $(this).find(".submenu").stop().fadeOut(500);
//     }
//   );
// 3. 전체 서브메뉴  영역이 한꺼번에 열림
// $(".menu").hover(
//     function(){
//         $(".submenu , .header-bg"  ).stop().slideDown(400)
//     },
//     function(){
//          $(".submenu , .header-bg").stop().slideDown(400)
//     }
// )
// 5.clsslist()
$(".menu , li").hover(
    function(){
        $(this).find(".submenu").addClass("active")
    },
    function(){
        $(this).find(".submenu").removeClass("active")
    }
)
});

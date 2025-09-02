$(function () {
//   console.log("확인");
//   $("#openBtn").click(function () {
//     $("#popup").show();
//   });
//   $("#closeBtn").click(function () {
//     $("#popup").hide();
//   });
// $("#openBtn").click(function(){
//     $("#popup").fadeIn(500)
// })
$("#openBtn").click(function(){
    $("#popup").toggle() // 열려있으면 닫고, 닫혀있으면 열기
})
$("#closeBtn").click(function(){
    $("#popup").fadeOut(100)
})
});

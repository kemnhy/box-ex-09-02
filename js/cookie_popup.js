$(function(){
    // if($.cookie())
    let chk = $("#chk")
    // 쿠키 팝업에 값이  "none" 이면 팝업을 숨김
    if($.cookie("popup") === "none"){
        $(".notice_wrap").hide()
    } 
    $(".closeBtn").click(function(){
        // console.log(chk.is(":checked"));
        
        if(chk.is(":checked")){
            $.cookie("popup" , "none" , { expires: 3, path: "/" })
        }
        $(".notice_wrap").fadeOut("fast")
    })

})
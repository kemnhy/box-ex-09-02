$(function(){
    // console.log("시작");
    // $(".menu > li").hover(
    //     function(){
    //         console.log(("hover"));
    //         console.log($(this));
            
            
    //     }
    // )
    // 2. fadeIn() / fadeOut()
//     $(".menu > li").hover(
// //         function(){
// //             $(this.find(".submenu").stop().fadeIn(500)
// //         );
// //             $(this).find(".submenu").stop().slideUP(300);
             
// // //     },
// //         }
//     )
$(".menu").hover(
    function(){
        $(".sumenu , .header-bg").stop().slideDown(400)
    }
    
        
    
)
})
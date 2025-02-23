(function(){
    let currentpage =1;
    const prevBtn = document.querySelector(".form .footer .prev");
    const nextBtn = document.querySelector(".form .footer .next");
    prevBtn.addEventListener("click", function(){
        currentpage -= 1;
        movePage();
    })

})
    let arrow     = document.querySelectorAll(".arrow");
    let show_name = document.querySelectorAll(".show_name");
    let icon_bx   = document.querySelectorAll(".icon_active");
    let icon_menu = document.querySelector('.bx-menu'); 
    let sidebar   = document.querySelector(".sidebar");
    let dark_mode = document.querySelectorAll(".dark-mode");

    for (var i = 0; i < arrow.length; i++){
        arrow[i].addEventListener("click", (e)=>{
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("show_menu");
        });
    }

    for (var i = 0; i < show_name.length; i++){
        show_name[i].addEventListener("click", (e)=>{
            let iconParent = e.target.parentElement.parentElement.parentElement;
            iconParent.classList.toggle("show_menu");
        });
    }

    for (var i = 0; i < icon_bx.length; i++){
        icon_bx[i].addEventListener("click", (e)=>{
            let iconParent = e.target.parentElement.parentElement.parentElement;
            iconParent.classList.toggle("show_menu");
        });
    }

    // for (var i = 0; i < arrow.length; i++){
    //     arrow[i].addEventListener("click", (e)=>{
    //         let arrowParent = e.target.parentElement.parentElement;
    //         arrowParent.classList.toggle("active");
    //     });
    // }

    // for (var i = 0; i < show_name.length; i++){
    //     show_name[i].addEventListener("click", (e)=>{
    //         let iconParent = e.target.parentElement.parentElement.parentElement;
    //         iconParent.classList.toggle("active");
    //     });
    // }

    // for (var i = 0; i < icon_bx.length; i++){
    //     icon_bx[i].addEventListener("click", (e)=>{
    //         let iconParent = e.target.parentElement.parentElement.parentElement;
    //         iconParent.classList.toggle("active");
    //     });
    // }

    icon_menu.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    });

    


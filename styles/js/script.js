    let arrow     = document.querySelectorAll(".arrow");
    let show_name = document.querySelectorAll(".show_name");
    let icon_bx   = document.querySelectorAll(".icon_active");
    let dark_mode = document.querySelectorAll(".dark-mode");
    let icon_menu = document.querySelector('.bx-menu'); 
    let sidebar   = document.querySelector(".sidebar");

    const el      = document.getElementById("sidebar-id");

    /**
     * luuthinh135@gmail.com
     * @param {element} element 
     * @param {class} cls 
     * @returns 
     */
    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

   
    /**
     * luuthinh135@gmail.com
     * show menu sidebar
     */
    for (var i = 0; i < arrow.length; i++){
        arrow[i].addEventListener("click", (e)=>{
            let arrowParent = e.target.parentElement.parentElement;

            if(hasClass(el, "close")){
                
            } else{
                arrowParent.classList.toggle("show_menu");
            }
        });
    }

    /**
     * luuthinh135@gmail.com
     * show menu sidebar
     */
    for (var i = 0; i < show_name.length; i++){
        show_name[i].addEventListener("click", (e)=>{
            let showNameParent = e.target.parentElement.parentElement.parentElement;

            if(hasClass(el, "close")){
                
            } else{
                showNameParent.classList.toggle("show_menu");
            }
        });
    }

    /**
     * luuthinh135@gmail.com
     * show menu sidebar
     */
    for (var i = 0; i < icon_bx.length; i++){
        icon_bx[i].addEventListener("click", (e)=>{
            let iconBxParent = e.target.parentElement.parentElement.parentElement;

            if(hasClass(el, "close")){
                
            } else{
                iconBxParent.classList.toggle("show_menu");
            }
        });
    }

    /**
     * luuthinh135@gmail.com
     * active li menu sidebar
     */
    for (var i = 0; i < arrow.length; i++){
        arrow[i].addEventListener("click", (e)=>{

            let arrowParent = e.target.parentElement.parentElement;

            if(hasClass(el, "close")){
                
            } else{
                arrowParent.classList.toggle("active");
            }
        });
    }

    /**
     * luuthinh135@gmail.com
     * active li menu sidebar
     */
    for (var i = 0; i < show_name.length; i++){
        show_name[i].addEventListener("click", (e)=>{

            let showNameParent = e.target.parentElement.parentElement.parentElement;

            if(hasClass(el, "close")){
                
            } else{
                showNameParent.classList.toggle("active");
            }
        });
    }

    /**
     * luuthinh135@gmail.com
     * active li menu sidebar
     */
    for (var i = 0; i < icon_bx.length; i++){
        icon_bx[i].addEventListener("click", (e)=>{

            let iconBxParent = e.target.parentElement.parentElement.parentElement;

            if(hasClass(el, "close")){
                
            } else {
                iconBxParent.classList.toggle("active");
            }
        });
    }

    /**
     * luuthinh135@gmail.com
     * close menu sidebar
     */
    icon_menu.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    });

    


    let arrow     = document.querySelectorAll(".arrow");
    let show_name = document.querySelectorAll(".show-name");
    let icon_bx   = document.querySelectorAll(".icon-active");
    let dark_mode = document.querySelectorAll(".dark-mode");
    let icon_menu = document.querySelector('.bx-menu'); 
    let sidebar   = document.querySelector(".sidebar");

    const sidebar_id      = document.getElementById("sidebar-id");
    const item_link_class = document.getElementsByClassName("item-link");

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
     * 
     * @param {element} element 
     * @param {class} cls 
     * @returns 
     */
    function toggleClass(element, cls){
        return element.classList.toggle(cls);
    }
    
    /**
     * 
     * @param {element} element 
     * @param {class} cls 
     * @returns 
     */
    function removeClass(element, cls){
            return element.classList.remove(cls);
    }

    /**
     * luuthinh135@gmail.com
     * show menu sidebar
     */
    for (var i = 0; i < arrow.length; i++){
        arrow[i].addEventListener("click", (e)=>{
            let arrowParent = e.target.parentElement.parentElement;

            if(hasClass(sidebar_id, "close")){

            } else{
                toggleClass(arrowParent, "show-menu");
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

            if(hasClass(sidebar_id, "close")){
                
            } else{
                toggleClass(showNameParent, "show-menu");
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

            if(hasClass(sidebar_id, "close")){
                
            } else{
                toggleClass(iconBxParent, "show-menu");
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

            if(hasClass(sidebar_id, "close")){
                
            } else{
                toggleClass(arrowParent, "active");
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

            if(hasClass(sidebar_id, "close")){
                
            } else{
                toggleClass(showNameParent, "active");
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

            if(hasClass(sidebar_id, "close")){
                 
            } else {
                toggleClass(iconBxParent, "active");
            }
        });
    }

    /**
     * luuthinh135@gmail.com
     * close menu sidebar
     */
    icon_menu.addEventListener("click", ()=>{
        toggleClass(sidebar, "close");

        for (var i = 0; i < item_link_class.length; i++){
            removeClass(item_link_class[i], "show-menu");
            removeClass(item_link_class[i], "active");
        }
    });


    /** 
    *Sorts a HTML table.
    *
    * @param {HTMLTableElement} table The table to sort
    * @param {number} column the index of the column to sort
    * @param {boolean} asc Determines if the sorting will be n ascending
    */

    function sortTableByColumn(table, column, asc = true) {
        const dirModifier = asc ? 1 : -1;
        const tBody = table.tBodies[0];
        const rows = Array.from(tBody.querySelectorAll("tr"));

        //sort each row
        const sortedRows = rows.sort((a, b) => {
            const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
            const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

            return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
        });

        //remove all existing TRs from the table 
        while (tBody.firstChild){
            tBody.removeChild(tBody.firstChild);
        }

        //Re-add the newly sorted rows
        tBody.append(...sortedRows);

        //Remember how the coloumn is currently sorted
        table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
        table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
        table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);

    }

    document.querySelectorAll(".table-sortable th").forEach(headerCell => {
        headerCell.addEventListener("click", () => {
            const tableElement = headerCell.parentElement.parentElement.parentElement;
            const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
            const currentIsAscending = headerCell.classList.contains("th-sort-asc");

            sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
        });
    });
    


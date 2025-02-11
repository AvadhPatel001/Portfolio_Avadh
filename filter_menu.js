const liproduct = document.querySelectorAll('.ul li');
const product_items = document.querySelectorAll('.project_items');
liproduct.forEach(li => {
    li.onclick = function () {
        liproduct.forEach(li => {
            li.className = "";
        });
        li.className = "current";

        const value = li.textContent;
        product_items.forEach(img => {
            img.style.display = "none";
            if(img.getAttribute('data-filter') == value || value == "All"){
                img.style.display = "block";
            }
        });
    }
});

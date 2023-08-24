//* Menu function


document.getElementById("menu").addEventListener("click",()=>{
    document.getElementById("nav").style.display="block"
document.getElementById("x").style.display="block"
document.getElementById("menu").style.display="none"


})

document.getElementById("x").addEventListener("click",()=>{
    document.getElementById("nav").style.display="none"
    document.getElementById("x").style.display="none"
    document.getElementById("menu").style.display="block"
})

//* filter function

   
    function filterCards() {
        const searchInput = document.getElementById("search");
        const searchValue = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {
            const cardTitle = card.querySelector("h3").textContent.toLowerCase();
            if (cardTitle.includes(searchValue)) {
                card.style.display = "flex";
                
            } else {
                card.style.display = "none";
                

            }
        });
    }

    
    document.getElementById("search").addEventListener("input", filterCards);


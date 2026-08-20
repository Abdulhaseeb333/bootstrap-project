// Data for each page (6 items per page)
const pages = {
    1: [
        { img: "1.jpg", title: "Fresh Raspberry Tart", desc: "Bake or buy a mini pastry tart shell..." },
        { img: "2.jpg", title: "Grilled Meat Kebabs", desc: "Cut chicken, beef, or lamb into small pieces..." },
        { img: "3.jpg", title: "Pan-Seared Salmon", desc: "Season a fresh salmon fillet with salt..." },
        { img: "4.jpg", title: "Spaghetti Carbonara", desc: "Classic Italian pasta made with eggs and cheese..." },
        { img: "5.jpg", title: "Avocado Toast", desc: "Toasted sourdough topped with fresh avocado..." },
        { img: "6.jpg", title: "Berry Smoothie Bowl", desc: "Blend of frozen berries topped with fresh fruits..." }
    ],
    2: [
        { img: "7.jpg", title: "BBQ Chicken Wings", desc: "Crispy baked chicken wings tossed in spicy BBQ sauce." },
        { img: "8.jpg", title: "Mushroom Risotto", desc: "Creamy Arborio rice cooked with fresh mushrooms." },
        { img: "9.jpg", title: "Beef Burger Deluxe", desc: "Juicy beef patty with cheddar cheese and lettuce." },
        { img: "10.jpg", title: "Caesar Salad", desc: "Crisp romaine lettuce with Caesar dressing and croutons." },
        { img: "11.jpg", title: "Tacos Al Pastor", desc: "Marinated pork served in soft corn tortillas." },
        { img: "12.jpg", title: "Chocolate Lava Cake", desc: "Warm chocolate cake with a molten chocolate center." }
    ],
    3: [
        { img: "13.jpg", title: "Greek Salad", desc: "Cucumbers, tomatoes, olives, and feta cheese." },
        { img: "14.jpg", title: "Ramen Bowl", desc: "Rich pork broth served with noodles and soft-boiled egg." },
        { img: "15.jpg", title: "Margherita Pizza", desc: "Classic pizza topped with fresh mozzarella and basil." },
        { img: "16.jpg", title: "Pancakes with Syrup", desc: "Fluffy pancakes served with maple syrup and berries." },
        { img: "17.jpg", title: "Chicken Tikka Masala", desc: "Tender chicken pieces in a spiced, creamy tomato sauce." },
        { img: "18.jpg", title: "Sushi Roll Platter", desc: "Assorted fresh salmon, tuna, and avocado sushi rolls." }
    ]
};

// Function to swap images, text, and update active link status
// State tracking
let currentPage = 1;
const totalPages = Object.keys(pages).length;

function changePage(pageNumber) {
    // Safety check: ignore out-of-bounds page requests
    if (!pages[pageNumber]) return;

    currentPage = pageNumber;
    const selectedPage = pages[pageNumber];

    // Swap images, titles, and descriptions for all 6 items
    for (let i = 0; i < 6; i++) {
        document.getElementById(`img-${i + 1}`).src = selectedPage[i].img;
        document.getElementById(`title-${i + 1}`).textContent = selectedPage[i].title;
        document.getElementById(`desc-${i + 1}`).textContent = selectedPage[i].desc;
    }

    // Update active page highlight state
    const pageItems = document.querySelectorAll('.pagination .page-item');
    pageItems.forEach((item) => item.classList.remove('active'));

    // Set 'active' class on the clicked number link
    const activeLink = document.querySelectorAll('.pagination .page-item')[pageNumber - 1];
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Function to handle the "Next" button click
function nextPage() {
    if (currentPage < totalPages) {
        changePage(currentPage + 1);
    } else {
        changePage(1); // Cycle back to page 1 if at the end
    }
    
}   
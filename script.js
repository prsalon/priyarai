/* ==========================================
   PR SALON WEBSITE
   SCRIPT.JS
   PART 1
   ========================================== */


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ==========================================
   CLOSE MENU AFTER CLICKING A LINK
========================================== */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================
   SMOOTH SCROLL FOR MENU
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});


/* ==========================================
   NAVBAR SHADOW ON SCROLL
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

        header.style.background = "rgba(17,17,17,.97)";

    } else {

        header.style.boxShadow = "none";

        header.style.background = "rgba(17,17,17,.95)";

    }

});


/* ==========================================
   ACTIVE MENU HIGHLIGHT
========================================== */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   OPTIONAL:
   PRESS ESC TO CLOSE MOBILE MENU
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

    }

});


/* ==========================================
   END OF PART 1
========================================== *//* ==========================================
   PART 2
   PRICE LIST
========================================== */

/*
==========================================
CHANGE THIS TO TRUE WHEN RUNNING OFFERS
==========================================
*/

const offerEnabled = false;

/*
==========================================
SALON PRICE LIST
Add, edit or remove services here.
==========================================
*/

const services = [

{
category:"Hair",
name:"Hair Cut (female)",
price:"150" ,
offer:100
},

{
category:"Hair",
name:"Hair Wash",
price:150,
offer:120
},

{
category:"Hair",
name:"Hair Spa (Classic)",
price:600,
offer:499
},

{
category:"Hair",
name:"Hair Spa (Premium)",
price:1000,
offer:800
},

{
category:"Hair",
name:"Hair Smoothening",
price:"From 3500",
offer:2999
},

{
category:"Hair",
name:"Hair Botox",
price:"From 4500",
offer:4000
},

{
category:"Hair",
name:"Hair Keratin",
price:"From 4500",
offer:4200
},

{
category:"Skin",
name:"Cleanup",
price:400,
offer:300
},

{
category:"Skin",
name:"Natural Fruit Facial",
price:600,
offer:500
},

{
category:"Skin",
name:"De-Tan Facial",
price:800,
offer:600
},

{
category:"Skin",
name:"Anti Wrinkle Facial",
price:800,
offer:600
},

{
category:"Skin",
name:"Hydrafacial Classic",
price:2000,
offer:1600
},

{
category:"Skin",
name:"Hydrafacial Premium",
price:2499,
offer:1999
},

{
category:"Skin",
name:"Korean Glass Hydrafacial" , 
price:2499,
offer:1999
},

{
category:"Nails",
name:"Gel Polish",
price:600,
offer:499
},

{
category:"Nails",
name:"Nail Extension",
price:1499,
offer:1299
},

{
category:"Nails",
name:"French Nail Extension",
price:2000,
offer:1600
},

{
category:"Eyes",
name:"Natural Eyelash Extension" ,
price:1500,
offer:1299
},

{
category:"Eyes",
name:"Hybrid Eyelash Extension",
price:1800,
offer:1599
},

{
category:"Eyes",
name:"Volume Eyelash Extension",
price:2000,
offer:1599
},


];


/* ==========================================
   TABLE GENERATOR
========================================== */

const tableBody = document.getElementById("priceTable");

function loadServices(list){

tableBody.innerHTML="";

list.forEach(service=>{

const row=document.createElement("tr");

row.innerHTML=`

<td>

<strong>${service.category}</strong><br>

${service.name}

</td>

<td>

${String(service.price).startsWith("From")
  ? `From ₹${String(service.price).replace("From ", "")}`
  : `₹${service.price}`}

</td>

<td class="offer-price">

<span class="old-price">

${String(service.price).startsWith("From")
  ? `From ₹${String(service.price).replace("From ", "")}`
  : `₹${service.price}`}

</span>

<span class="new-price">

₹${service.offer}

</span>

</td>

`;

tableBody.appendChild(row);

});

}

loadServices(services);


/* ==========================================
   SHOW/HIDE OFFER COLUMN
========================================== */

if(offerEnabled){

document.querySelectorAll(".offer-column").forEach(col=>{

col.style.display="table-cell";

});

document.querySelectorAll(".offer-price").forEach(col=>{

col.style.display="table-cell";

});

}


/* ==========================================
   SEARCH
========================================== */

const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

const keyword=search.value.toLowerCase();

const filtered=services.filter(service=>

service.name.toLowerCase().includes(keyword) ||

service.category.toLowerCase().includes(keyword)

);

loadServices(filtered);

if(offerEnabled){

document.querySelectorAll(".offer-price").forEach(col=>{

col.style.display="table-cell";

});

}

});


/* ==========================================
   SORT PRICE (OPTIONAL)
========================================== */

function sortPriceLowHigh(){

const sorted=[...services].sort((a,b)=>a.price-b.price);

loadServices(sorted);

}

function sortPriceHighLow(){

const sorted=[...services].sort((a,b)=>b.price-a.price);

loadServices(sorted);

}/* ==========================================
   PART 3
   GALLERY • SALON STATUS • UTILITIES
========================================== */

/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img src="" alt="Gallery Image">
`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");
const closeButton = lightbox.querySelector(".lightbox-close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

    });

});

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

/* ==========================================
   ESC CLOSE LIGHTBOX
========================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        lightbox.classList.remove("active");

    }

});

/* ==========================================
   SALON OPEN / CLOSED STATUS
========================================== */

function updateSalonStatus() {

    const now = new Date();

    const day = now.getDay();

    const hour = now.getHours();

    const minute = now.getMinutes();

    const currentTime = hour * 60 + minute;

    let status = "";

    // Wednesday closed
    if (day === 3) {

        status = "🔴 Closed Today";

    }

    // Monday, Tuesday, Thursday, Friday, Saturday, Sunday
    else {

        const open = 10 * 60;

        const close = 19 * 60;

        if (currentTime >= open && currentTime < close) {

            status = "🟢 Open Now";

        }

        else {

            status = "🔴 Closed";

        }

    }

    const heading = document.querySelector("#contact h2");

    if (heading) {

        heading.innerHTML = `Contact Us <br><small>${status}</small>`;

    }

}

updateSalonStatus();

/* ==========================================
   COPY PHONE NUMBER
========================================== */

const phone = document.querySelector(".fa-phone");

if (phone) {

    phone.parentElement.style.cursor = "pointer";

    phone.parentElement.title = "Click to copy";

    phone.parentElement.addEventListener("click", () => {

        navigator.clipboard.writeText("6001260656");

        alert("Phone number copied!");

    });

}

/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".card,.gallery-grid img,.contact-grid div").forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = "all .7s ease";

    observer.observe(el);

});

/* ==========================================
   FOOTER YEAR
========================================== */

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} PR Salon & Nail Art, Jagun. All Rights Reserved.`;

}

/* ==========================================
   IMAGE FALLBACK
========================================== */


/* ==========================================
   WEBSITE LOADED
========================================== */

window.addEventListener("load", () => {

    console.log("PR Salon Website Loaded Successfully");

});

/* ==========================================
   END OF SCRIPT
========================================== */


window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.background = "rgba(255,255,255,0.75)";
    navbar.style.position = "sticky";
    navbar.style.top = "0";
    navbar.style.zIndex = "999";

  }else{

    navbar.style.background = "transparent";

  }

});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";

    }

  });

}, {
  threshold:0.2
});

sections.forEach((section)=>{

  section.style.opacity = "0";
  section.style.transform = "translateY(70px)";
  section.style.transition = "1s";

  observer.observe(section);

});

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

  const x = e.clientX / 40;
  const y = e.clientY / 40;

  document.querySelector(".main-img").style.transform =
  `translate(${x}px, ${y}px)`;

});


const cards = document.querySelectorAll(".product-card");

cards.forEach((card)=>{

  card.addEventListener("mouseenter",()=>{

    card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";

  });

  card.addEventListener("mouseleave",()=>{

    card.style.boxShadow = "none";

  });

});
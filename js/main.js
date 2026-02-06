document.addEventListener("DOMContentLoaded", () => {

  /* PRELOADER */
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => { if(preloader) preloader.style.display="none"; });

  /* SCROLL REVEAL */
  const reveals = document.querySelectorAll(".reveal");
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
      if(el.getBoundingClientRect().top < windowHeight - 80) el.classList.add("active");
    });
  };
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  /* SMOOTH SCROLL */
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if(target) target.scrollIntoView({behavior:"smooth"});
    });
  });

  /* ACTIVE NAVBAR */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar nav ul li a");
  const setActiveNav = () => {
    let index = sections.length;
    while(--index && window.scrollY + 100 < sections[index].offsetTop){}
    navLinks.forEach(link=>link.classList.remove("active"));
    navLinks[index].classList.add("active");
  };
  window.addEventListener("scroll", setActiveNav);
  setActiveNav();

  /* BACK TO TOP */
  const backBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 300) backBtn.style.display="block";
    else backBtn.style.display="none";
  });

  /* PROJECT MODAL */
  const modal=document.getElementById("modal"), modalTitle=document.getElementById("modalTitle"), modalDesc=document.getElementById("modalDesc"), closeBtn=document.getElementById("close");
  const projects=document.querySelectorAll(".project");
  if(modal && modalTitle && modalDesc && closeBtn){
    projects.forEach(p=>{
      p.addEventListener("click",()=>{
        modal.style.display="flex";
        modalTitle.textContent=p.dataset.title||"Project Preview";
        modalDesc.textContent=p.dataset.desc||"More details coming soon.";
      });
    });
    closeBtn.addEventListener("click",()=>modal.style.display="none");
    window.addEventListener("click",e=>{if(e.target===modal) modal.style.display="none";});
  }

});
// BLOG PAGINATION
const postsPerPage = 3;
const blogGrid = document.querySelector(".blog-grid");
const blogPosts = Array.from(document.querySelectorAll(".blog-post"));
const pageButtons = document.querySelectorAll(".page-btn");

function showPage(page=1){
  const start = (page-1)*postsPerPage;
  const end = start + postsPerPage;
  blogPosts.forEach((post,index)=>{
    if(index>=start && index<end) post.style.display="block";
    else post.style.display="none";
  });
  pageButtons.forEach(btn=>btn.classList.remove("active"));
  document.querySelector(`.page-btn[data-page="${page}"]`).classList.add("active");
}

pageButtons.forEach(btn=>{
  btn.addEventListener("click",()=>showPage(Number(btn.dataset.page)));
});

// Show first page on load
showPage(1);

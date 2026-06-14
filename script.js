const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

const sections = document.querySelectorAll("section");

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});
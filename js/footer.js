window.addEventListener("load", () => {
   const date = new Date() ;
   this.document.querySelector("footer div p").innerHTML = `Copyright © ${date.getFullYear()} <a class="text-dark" href="https://www.linkedin.com/in/raphael-pivot/" target="_blank">Raphaël Pivot</a>` 
})
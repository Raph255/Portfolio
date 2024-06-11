import experiencesData, { detailledExperiencesData } from "../data/experiences.js";



window.addEventListener('load', function() {

    const query = this.window.location.search ;
    const urlParams = new URLSearchParams(query);

    const experienceId = urlParams.get("id");
    
    const parsedExperienceId = parseInt(experienceId)
    if (isNaN(parsedExperienceId) || parsedExperienceId >= experiencesData.length || parsedExperienceId < 0 ) this.window.location.href = "/";
    else displayExperience(parsedExperienceId)
})

function displayExperience(id) {
    const experienceData = experiencesData[id];
    document.getElementById("hero").src = experienceData.image ;

    document.getElementById("hero-title").textContent = experienceData.title ;
    document.getElementById("hero-caption").textContent = experienceData.date + " | " + experienceData.work
    /* 
    Init Page Presentation
    */
   const presentation = document.getElementById("experience-presentation");
   const experience = detailledExperiencesData[id];
   let content = "" ; 
   for (const [index, section] of Object.entries(experience)) {
    const imageSize = 400 ;
    const colMD = 4 ;
    content += `
                <div class="${index % 2 == 0 ? "bg-dark text-white" : ""}">
                    <div class="row featurette text-justify gap-5 ${index % 2 == 0 ? "black-featurette" : "white-featurette"}">
                        <div class="d-flex flex-column justify-content-center col-md-7 ${index % 2 == 0 ? "order-md-2" : ""}">
                            <h2 class="featurette-heading fw-normal" style="color:var(--orange-100)">${section.title}</h2>
                            <p class="lead">${section.description}</p>
                        </div>
                        <div class="col-md-${colMD}">
                            <img src="${section.image} "class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="${imageSize}" height="${imageSize}"focusable="false"></image>
                        </div>
                    </div>
                </div>`
   }
   presentation.innerHTML = content  //`<hr class="featurette-divider">`
}

// const colMD = 4 ; // ${index % 2 == 0 ? "bg-dark text-white" : ""}
// content += `<hr class="featurette-divider">
//             <div class="row featurette text-justify gap-5 "> 
//                 <div class="d-flex flex-column justify-content-center col-md-7 ${index % 2 == 0 ? "order-md-2" : ""}">
//                     <h2 class="featurette-heading fw-normal" style="color:var(--orange-100)">${section.title}</h2>
//                     <p class="lead">${section.description}</p>
//                 </div>
//                 <div class="col-md-${colMD}">
//                     <img src="${section.image} "class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="${imageSize}" height="${imageSize}"focusable="false"></image>
//                 </div>
//             </div>`
// }
// presentation.innerHTML = content + `<hr class="featurette-divider">`
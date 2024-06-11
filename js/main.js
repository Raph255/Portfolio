// NavBar Link Active
import educationData from "../data/education.js";
import experiencesData from "../data/experiences.js";
import aboutMeData from "../data/aboutme.js";
import { hardSkillsData, softSkillsData, toolsSkillsData } from "../data/skills.js";
import contactData from "../data/contact.js";

window.addEventListener('load', function() {

    // NavBar Link Active
    let links = document.querySelectorAll('.nav-link');
        for(let i=0; i<links.length; i++){
        links[i].addEventListener('click', function() {
            for(let j=0; j<links.length; j++)
            links[j].classList.remove('active');
            this.classList.add('active');
        });
        }

    /* 
        Education timeline 
    */
    let content ;
    let educationTimeline = this.document.getElementById('education-timeline');
    for (const elem of educationData) {
        
        // HTML Content
        content = `<li class="timeline-item mb-5" data-date="${elem.date}">
        <h5 class="fw-bold mb-1"> ${elem.title}</h5>
        <p class="text-muted mb-1"> ${elem.location}</p>`
        
        // Description 
        for (const line of elem.description) {
            content += `<p class="m-0 p-0"> ${line}</p>`
        }
        
        // Close tags
        content += '</li>' ;

        educationTimeline.innerHTML += content; 
    }

    /*
        Experiences
    */
    let experiencesTimeline = this.document.getElementById('experiences-timeline');
    let position = 0 ;
    for (const elem of experiencesData) {

        // HTML content
        content = `<div class="timeline-2 ${position % 2 == 0 ? "left-2" : "right-2"}">
        <div class="card">
            <img class="card-img-top" src="${elem.image}"
            alt="Experiences image">
            <div class="card-body p-4">
             <h4 class="fw-bold mb-4"> ${elem.title} </h4>
             <div class="row justify-content-left">
                <p class="text-muted pe-5 attr-item"><i class="fa-solid fa-clock" aria-hidden="true"></i> ${elem.date}</p>
                <p class="text-muted pe-5 attr-item"><i class="fa-solid fa-briefcase"></i> ${elem.work}</p>
                ${elem.members != null ? `<p class="text-muted pe-5 attr-item"><i class="fa-solid fa-user-group"></i> ${elem.members} personnes</p>` : ""}
             </div>
             <p>${elem.description}</p>
             <a href="experiences.html?id=${position}" class="btn btn-light d-flex justify-content-center">Détails du projet...</a>
            </div>
           </div>
        </div>` 
        position += 1 ;

        experiencesTimeline.innerHTML += content ; 
   }

    /*
        "About me" Description
    */
    let aboutmeDiv = this.document.getElementById("about-me-description");
    content = `<h5 class="fs-4"> Mon profil</h5>
                <p class="lh-lg mb-6"> ${aboutMeData.profile}</p>
                <h5 class="fs-4"> Mes centres d'intérêt</h5>` ;
    for (const hobby of aboutMeData.hobbies) content += `<p class="lh-lg mb-6"> ${hobby} </p>` ;
    aboutmeDiv.innerHTML = content  ;


    /*
        Skills
    */
    const allSkills = [hardSkillsData, softSkillsData, toolsSkillsData];
    const allSkillsDiv = ["hard-skills","soft-skills","tool-skills"];
    let skillsDiv;
    for (let i in allSkills) {
        content = "";
        skillsDiv = this.document.getElementById(allSkillsDiv[i]);
        for (const skill of allSkills[i]) {
            content += `<div class="col d-flex align-items-center">
                            <i class="flex-shrink-0 me-3 grid-icon-size ${skill.icon}" style="color: var(--orange-100);"></i>
                            <div>
                                <h4 class="mb-0 grid-title-size fw-bold">${skill.title}</h4>
                                <p class="mb-0 grid-subtitle-size">${skill.subtitle}</p>
                            </div>
                        </div>`
        }
        skillsDiv.innerHTML = content ;
    }


    /* 
        Contact
    */

    const contactDiv = this.document.querySelector("#contact-grid") ;
    content = ""
    for (const contact of contactData) {
        content += `<div class="col d-flex align-items-center">
                        <i class="flex-shrink-0 me-3 grid-icon-size ${contact.icon}" style="color: var(--orange-100);"></i>
                        <div>
                            <h4 class="mb-0 grid-title-size fw-bold">${contact.title}</h4>
                            <p class="mb-0 grid-subtitle-size text-nowrap">${contact.subtitle}</p>
                        </div>
                    </div>`
    }
    contactDiv.innerHTML += content ;
})


 
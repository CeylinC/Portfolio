const aboutDescription = document.querySelector("#about .content p");
const experience = document.getElementById("experience");
const skill = document.querySelector(".skills");

function changeTexts(job) {
    aboutDescription.textContent = me[job].about;
    changeExperience(job);
    changeSkill(job);
}

function changeExperience(job){
    experience.children[1].innerHTML = "";
    me[job].experiences.forEach(exp => {
        let expCard = `
        <div class="experience-card">
            <h3 class="title">
                ${exp.title}
            </h3>
            <div class="company">
                ${exp.company}
            </div>
            <div class="time">
                ${exp.time}
            </div>
        </div>
        `;
        experience.children[1].insertAdjacentHTML("beforeend", expCard);
    });
}

function changeSkill(job){
    skill.innerHTML = "";
    me[job].skills.forEach(skill => {
        let skillCard = `
        <div class="skill">
            <div class="skill-text">
                <span>${skill.name}</span>
                <span class="w-${skill.level}">${skill.level}%</span>
            </div>
            <div class="progress">
                <div class="progress-bar w-${skill.level}"></div>
            </div>
        </div>
        `;
        this.skill.children[1].insertAdjacentHTML("beforeend", skillCard);
    });
}

const me = {
    designer: {
        about: "Hello, I'm Ceylin. I have been dealing with design for 6 years. I have been involved in activities such as 3D modeling, photoshop, post preparation.",
        experiences: [
            {
            title: "Post Designer",
            company: "Google Developer Student Clubs",
            time: "Oct 2022 - Jun 2023"
            },
        ],
        skills: [
            {
            name: "Photoshop",
            level: "70"
            },
            {
                name: "Illustrator",
                level: "30"
            },
            {
                name: "Blender3D",
                level: "50"
            },
            {
                name: "Cinema4D",
                level: "40"
            },
            {
                name: "Figma",
                level: "60"
            }
        ],

    },
    coder: {
        about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste commodi atque asperiores mollitia quae blanditiis possimus ab et ducimus.",
        experiences: [
            {
                title: "Front-end Intern",
                company: "Alkera Tech",
                time: "Nov 2021 - Apr 2022"
            },
            {
                title: "Front-end Intern",
                company: "Galaksiya Bilişim Teknolojileri",
                time: "Jul 2023 - Now"
            }
        ],
        skills: [
            {
                name: "C",
                level: "70"
            },
            {
                name: "C#",
                level: "50"
            },
            {
                name: "Java",
                level: "50"
            },
            {
                name: "Python",
                level: "50"
            },
            {
                name: "Unity",
                level: "40"
            },
            {
                name: "HTML",
                level: "90"
            },
            {
                name: "CSS",
                level: "80"
            },
            {
                name: "Javascript",
                level: "70"
            },
            {
                name: "SCSS",
                level: "40"
            },
            {
                name: "JQuery",
                level: "50"
            },
            {
                name: "Typescript",
                level: "65"
            },
            {
                name: "Angular",
                level: "50"
            },
            {
                name: "React",
                level: "30"
            },
            {
                name: "Bootstrap 5",
                level: "70"
            },
            {
                name: "Git",
                level: "70"
            },
        ],
        
    }
}
const aboutDescription = document.querySelector("#about .content p");
const experience = document.getElementById("experience");
const skill = document.querySelector(".skills");
const workList = document.querySelector(".work-list");

function changeTexts(job) {
    aboutDescription.textContent = me[job].about;
    changeExperience(job);
    changeSkill(job);
    changeWork(job);
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

function changeWork(job){
    workList.innerHTML = "";
    me[job].works.forEach(work => {
        let workCard = `
        <div class="work">
            <a href="${work.url}" target="_blank"><img src="${job === "designer" ? work.url : work.img}"></a>
            <div class="title">${work.name}</div>
        </div>
        `;
        workList.insertAdjacentHTML("beforeend", workCard);
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
        works: [
            {
                name: "The landscape inside the phone",
                url: "https://drive.google.com/uc?export=view&id=1nKj6ClsYUQ33SchTvwXdzISP_4KK7XEf",
            },
            {
                name: "GDSC Git and Github Event",
                url: "https://drive.google.com/uc?export=view&id=1hVOYmraJ0c36d1TZ_taELBXxEUirfztC",
            },
            {
                name: "10 November",
                url: "https://drive.google.com/uc?export=view&id=12VrE1Wzj7mCAw4YAEMu30AtS7SraSuCT",
            },
            {
                name: "How did the career talk go?",
                url: "https://drive.google.com/uc?export=view&id=1-VV7Dnmb680IpO0Yh9DhiqYigMCQyJ3s",
            },
            {
                name: "Career Talk Event",
                url: "https://drive.google.com/uc?export=view&id=1xTVXUVnnTkw9et63uwUvG1kBObZZ9mru",
            },
            {
                name: "Solution Challenge Info Session Event",
                url: "https://drive.google.com/uc?export=view&id=1L4GosFE-sK5RWTEzKoGmWNor4dHlw2Fs",
            },
            {
                name: "What is a Solution Challenge?",
                url: "https://drive.google.com/uc?export=view&id=1jayXzkJvCauLLXlwEMg2bTAbglxt9ATW",
            },
            {
                name: "What is a Solution Challenge?",
                url: "https://drive.google.com/uc?export=view&id=1keaGXzG5_Q9N07WM6sfFFsZSwhcaXKMG",
            },
            {
                name: "What is a Solution Challenge?",
                url: "https://drive.google.com/uc?export=view&id=1AkZNlgdl7IKpbP_5TOz-vsDG9k5AK1XF",
            },
            {
                name: "What is a Solution Challenge?",
                url: "https://drive.google.com/uc?export=view&id=18Oz95pTHH-DfrKQ7i7VVrodI-8wdU0qZ",
            },
            {
                name: "What is a Solution Challenge?",
                url: "https://drive.google.com/uc?export=view&id=1-uePfAqdl-8YF1uYbkZJ3_JxWQ8OLyNH",
            },
            {
                name: "Yeniden Yaşam Seferberliği Logo",
                url: "https://drive.google.com/uc?export=view&id=1dG1RbYAj62WfR5a6lBPQ5Nl6cbpkqdxm",
            },
            {
                name: "I am Everywhere",
                url: "https://drive.google.com/uc?export=view&id=1dTvWLRJO9tOW-NQzNnkeLp4FpLwKdmfx",
            },
            {
                name: "Crystal Cat",
                url: "https://drive.google.com/uc?export=view&id=1PBOu_JsZ60sZgvt757czzjAkRTTZibZj",
            },
            {
                name: "Bulbs",
                url: "https://drive.google.com/uc?export=view&id=1nMzUkQnB-XG9pVo5LkBOTssUcA_Wxdj7",
            },
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
        works: [
            {
                name: "Gym App",
                url: "https://github.com/RojinTemell/gym_app",
                img: "https://drive.google.com/uc?export=view&id=1GQxOzUK9mZFTiEuSpzMkEiWEz8oBic0h"
            },
            {
                name: "Moviex",
                url: "https://github.com/CeylinC/Moviex-Website",
                img: "https://drive.google.com/uc?export=view&id=10AlbR2Xtyb02tWEeRjjvj74GT_YDD6Yd"
            },
            {
                name: "To Do Website",
                url: "https://github.com/CeylinC/To-Do-Web",
                img: "https://drive.google.com/uc?export=view&id=1w9Ccp0ePLvT2g6O438H8dYTMjFQ4Ye5-"
            },
            {
                name: "All In One Website",
                url: "https://github.com/CeylinC/All-in-One-Website",
                img: "https://drive.google.com/uc?export=view&id=1S5c5KgyKafoBotqc3Lwr7ZB0_aP5dePE"
            },
            {
                name: "Dentinform",
                url: "https://github.com/CeylinC/Dentinform-Unity-Android",
                img: "https://drive.google.com/uc?export=view&id=1slXCSC-HKu2iozrUdldgXdAjRSZBYerO"
            },
        ],
    }
}
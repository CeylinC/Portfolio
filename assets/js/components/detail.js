const aboutDescription = document.querySelector("#about .content p");
const experience = document.getElementById("experience");

function changeTexts(job) {
    aboutDescription.textContent = me[job].about;
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

const me = {
    designer: {
        about: "Hello, I'm Ceylin. I have been dealing with design for 6 years. I have been involved in activities such as 3D modeling, photoshop, post preparation.",
        experiences: [{
            title: "Post Designer",
            company: "Google Developer Student Clubs",
            time: "Oct 2022 - Jun 2023"
        },
        ]
    },
    coder: {
        about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste commodi atque asperiores mollitia quae blanditiis possimus ab et ducimus.",
        experiences: [{
            title: "Front-end Intern",
            company: "Alkera Tech",
            time: "Nov 2021 - Apr 2022"
        },
        {
            title: "Front-end Intern",
            company: "Galaksiya Bilişim Teknolojileri",
            time: "Jul 2023 - Now"
        }],
    }
}
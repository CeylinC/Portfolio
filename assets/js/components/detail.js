const aboutDescription = document.querySelector("#about .content p");

function changeTexts(job) {
    aboutDescription.textContent = me[job].about;
}

const me = {
    designer: {
        about: "Hello, I'm Ceylin. I have been dealing with design for 6 years. I have been involved in activities such as 3D modeling, photoshop, post preparation.",

    },
    coder: {
        about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste commodi atque asperiores mollitia quae blanditiis possimus ab et ducimus.",

    }
}
// renderer.js
// Responsible ONLY for rendering UI based on state

const Renderer = (function () {

    function render(state) {
        renderProfile(state);
        renderSkills(state);
        renderProjects(state);
        renderTheme(state);
    }

    function renderProfile(state) {
        document.querySelector(".preview-name").textContent = state.profile.name || "Your Name";
        document.querySelector(".preview-bio").textContent = state.profile.bio || "Your bio will appear here.";
    }

    function renderSkills(state) {
        const list = document.querySelector(".preview-skills-list");
        list.innerHTML = "";

        state.skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            list.appendChild(li);
        });
    }

    function renderProjects(state) {
        const container = document.querySelector(".preview-projects-list");
        container.innerHTML = "";

        state.projects.forEach(project => {
            const card = document.createElement("div");
            card.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            container.appendChild(card);
        });
    }

    function renderTheme(state) {
        document.body.classList.toggle("dark-theme", state.theme === "dark");
    }

    return {
        render
    };
})();

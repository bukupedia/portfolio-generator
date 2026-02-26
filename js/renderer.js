// renderer.js
// Responsible ONLY for rendering UI based on state

const Renderer = (function () {

    function render(state) {
        renderProfile(state);
        renderSkills(state); // Modify this function to include "Remove" button
        renderProjects(state);
        renderTheme(state);
    }

    function renderProfile(state) {
        document.querySelector(".preview-name").textContent = state.profile.name || "Your Name";
        document.querySelector(".preview-bio").textContent = state.profile.bio || "Your bio will appear here.";
    }

    function renderSkills(state) {
        const list = document.querySelector(".preview-skills-list");
        list.innerHTML = ""; // Clear previous skills

        state.skills.forEach((skill, index) => {
            const li = document.createElement("li");
            li.textContent = skill;

            // Create the "Remove" button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.classList.add("remove-skill-btn");
            removeButton.addEventListener("click", () => {
                // Call removeSkill from state.js
                State.removeSkill(index);
                updateApp(); // Re-render the app after removing skill
            });

            // Append remove button to skill list item
            li.appendChild(removeButton);
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

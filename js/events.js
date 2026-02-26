// events.js
// Responsible ONLY for listening to user actions

const Events = (function () {

    function init() {

        // Profile inputs
        document.getElementById("name-input").addEventListener("input", (e) => {
            State.updateProfile("name", e.target.value);
            updateApp();
        });

        document.getElementById("bio-input").addEventListener("input", (e) => {
            State.updateProfile("bio", e.target.value);
            updateApp();
        });

        // Add skill
        document.querySelector(".add-skill-btn").addEventListener("click", () => {
            const input = document.getElementById("skills-input");
            if (input.value.trim() !== "") {
                State.addSkill(input.value.trim());
                input.value = "";
                updateApp();
            }
        });

        // Add project
        document.querySelector(".add-project-btn").addEventListener("click", () => {
            const title = document.getElementById("project-title-input").value;
            const description = document.getElementById("project-description-input").value;
            const link = document.getElementById("project-link-input").value;

            if (title.trim() !== "") {
                State.addProject({ title, description, link });
                updateApp();
            }
        });

        // Theme toggle
        document.querySelector(".theme-toggle-btn").addEventListener("click", () => {
            const currentTheme = State.getState().theme;
            const newTheme = currentTheme === "light" ? "dark" : "light";
            State.setTheme(newTheme);
            updateApp();
        });
    }

    // Central update pipeline
    function updateApp() {
        const state = State.getState();
        Renderer.render(state);
        Storage.save(state);
    }

    return {
        init,
        updateApp
    };
})();

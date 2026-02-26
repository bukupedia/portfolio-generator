// state.js
// Responsible ONLY for managing application state

const State = (function () {
    // Private state object
    let appState = {
        profile: {
            name: "",
            bio: ""
        },
        skills: [],
        projects: [],
        theme: "light"
    };

    function getState() {
        return appState;
    }

    function setState(newState) {
        appState = newState;
    }

    function updateProfile(field, value) {
        appState.profile[field] = value;
    }

    function addSkill(skill) {
        appState.skills.push(skill);
    }

    function removeSkill(index) {
        appState.skills.splice(index, 1);
    }

    function addProject(project) {
        appState.projects.push(project);
    }

    function removeProject(index) {
        appState.projects.splice(index, 1);
    }

    function setTheme(theme) {
        appState.theme = theme;
    }

    return {
        getState,
        setState,
        updateProfile,
        addSkill,
        removeSkill,
        addProject,
        removeProject,
        setTheme
    };
})();

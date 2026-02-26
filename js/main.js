// main.js
// Entry point of the application

document.addEventListener("DOMContentLoaded", () => {

    // Load saved state if available
    const savedState = Storage.load();
    if (savedState) {
        State.setState(savedState);
    }

    // Initialize events
    Events.init();

    // Initial render
    Renderer.render(State.getState());
});

// storage.js
// Responsible ONLY for saving and loading from localStorage

const Storage = (function () {
    const STORAGE_KEY = "portfolio-generator-state";

    function save(state) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function load() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    }

    return {
        save,
        load
    };
})();

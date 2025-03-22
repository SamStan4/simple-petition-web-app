const validateForm = () => {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const state = document.getElementById("state").value;
        if (email.indexOf("@") === -1) {
        alert("bad email");
        return false;
    }
    if (name.length < 5 || name.length > 20) {
        alert("bad name");
        return false;
    }
    if (state.length !== 2) {
        alert("bad state");
        return false;
    }
    if (state[0] !== state[0].toUpperCase() || state[1] !== state[1].toUpperCase()) {
        alert("bad state");
        return false;
    }
    return true;
};
function validateStudent(data) {
    const errors = [];
    const name = (data.name || "").trim();
    const email = (data.email || "").trim();
    const ageText = String(data.age || "").trim();
    const password = data.password || "";

    if (name.length < 2 || name.length > 50) {
        errors.push("Name must be between 2 and 50 characters.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Enter a valid email address.");
    }

    const age = Number(ageText);
    if (
        ageText === "" ||
        !Number.isInteger(age) ||
        age < 16 ||
        age > 100
    ) {
        errors.push("Age must be an integer between 16 and 100.");
    }

    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }

    return errors;
}

module.exports = { validateStudent };
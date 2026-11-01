
function validateStudent(data) {
    const errors = [];

    const name = typeof data.name === "string" ? data.name.trim() : "";
    const email = typeof data.email === "string" ? data.email.trim() : "";
    const ageText = typeof data.age === "string" ? data.age.trim() : "";
    const mobile = typeof data.mobile === "string" ? data.mobile.trim() : "";
    const course = typeof data.course === "string" ? data.course : "";
    const password = typeof data.password === "string" ? data.password : "";
    const confirmPassword =
        typeof data.confirmPassword === "string" ? data.confirmPassword : "";

    const allowedCourses = [
        "Computer Engineering",
        "Information Technology",
        "Software Engineering",
        "Data Science",
        "Artificial Intelligence"
    ];

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

    if (!/^[6-9]\d{9}$/.test(mobile)) {
        errors.push("Enter a valid 10-digit Indian mobile number.");
    }

    if (!allowedCourses.includes(course)) {
        errors.push("Please select a valid course.");
    }

    if (password.length < 8 || password.length > 128) {
        errors.push("Password must contain between 8 and 128 characters.");
    }

    if (password !== confirmPassword) {
        errors.push("Password and confirm password do not match.");
    }

    return errors;
}

module.exports = { validateStudent };

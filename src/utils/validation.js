const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string') {
        return { isValid: false, error: 'Email is required' };
    }
    if (!emailRegex.test(email)) {
        return { isValid: false, error: 'Invalid email format' };
    }
    if (email.length > 254) {
        return { isValid: false, error: 'Email is too long' };
    }
    return { isValid: true };
};

module.exports = {
    validateEmail
};

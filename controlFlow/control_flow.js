let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let orgRole = "Employee";
let accessTo;

switch (orgRole) {
    case "Employee":
        accessTo = "Dietary Services";
        break;
    case "Enrolled Member":
        accessTo = "Dietary Services and one-on-one";
        break;
    case "Subscriber":
        accessTo = "Partial Dietary Services";
        break;
    case "Non-Subscriber":
        accessTo = "Please enrol.";
        break;
    default:
        accessTo = "Unknown role. No access.";
}
console.log("Access To:", accessTo);


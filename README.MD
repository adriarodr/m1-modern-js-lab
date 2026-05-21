# M1 LAB: Modern JavaScript

## Questions
**1. What is the difference between frontend and backend responsibilities?**
The frontend's responsibilities are to send HTTP requests and display the returned data. Meanwhile, the backend is responsible for processing the requests, handling authentication and logic, and communicating with the database.

**2. Describe the request–response lifecycle.**
The request-response lifecycle starts when a user performs an action, causing the frontend to send an HTTP request to the backend. Express route receives this request, the server processes the logic, and MongoDB stores or retrieves the data. Afterward, the process returns to the server, which sends an HTTP response to the frontend, which updates the user interface.

**3. Why is modular file organization important?**
Modular file organization is important because it supports scalability and maintainability by separating the code into files with specific responsibilities.
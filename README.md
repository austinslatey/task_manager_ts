# Description
The Kanban board application includes a login system designed to ensure secure access to the board's features. 

## Initial Access: 
Upon accessing the secure login page, users are greeted with a simple interface containing fields for entering a username and password.

## Authentication Process:
- Valid Credentials: 
When valid credentials are entered, the system authenticates the user using JSON Web Tokens (JWT). Upon successful authentication, the user is automatically redirected to the main Kanban board page. The JWT is then securely stored in the client's local storage to facilitate future authenticated requests without needing to login again each time.

- Invalid Credentials: 
If the username or password entered is incorrect, the system displays an error message, prompting the user to check and re-enter their login details.

## Session Management:
- Logout: 
Users can choose to log out at any time. Upon logging out, the system removes the JWT from the client's local storage, and the user is sent back to the login page.
- Unauthenticated Access: 
Attempting to directly access the Kanban board without authentication results in an immediate redirect to the login page.

- Session Expiry: 
For security, the system monitors user activity. If a user remains inactive for a predetermined time, their session will expire. At this point, the JWT is invalidated, and any subsequent action by the user will redirect them back to the login page to re-authenticate.
# Scorch SEO Web App

## Development Setup

This document outlines the steps necessary to set up the Scorch SEO web application for development and mobile testing. The application consists of a backend and frontend, which need to be started in order for the application to function properly.

### Prerequisites

- Make sure you have `ngrok` installed on your system for localhost tunneling.
- You will need to update environment variables for local development and mobile testing.
- Database access is managed through a service account, the credentials for which can be found in KeePass.

### Getting Started

1. **Start the `ngrok` Tunnel**

   Navigate to the project's root directory in a PowerShell window:

cd C:\Users\wesle\Documents\Scorch\EnterpriseSites

vbnet
Copy code

Start the `ngrok` tunnel to forward localhost to the ngrok service on port 3000:

./ngrok http 3000

markdown
Copy code

Note the forwarding URL provided by `ngrok`; this will be used to set the `.env` variable for the frontend.

2. **Update Environment Variables**

- For **local development**, update the `.env` file in your frontend project with the `ngrok` forwarding URL.
- For **mobile testing**, update the environment variable on Netlify to point to the new `ngrok` forwarding URL.

3. **Database Login**

Use the service account listed in KeePass to log into the database. Ensure you have the correct permissions set up.

4. **Starting the Backend Application**

The backend application needs to be started first and must remain running for the frontend to function, especially for mobile development.

Navigate to the backend directory and run:

npm install
npm run start

sql
Copy code

This will start the backend server, typically on port 3000.

5. **Starting the Frontend Application**

Once the backend server is running, you can start the frontend application. Navigate to the frontend directory and run:

npm install
npm run start

vbnet
Copy code

This command starts the frontend development server, usually accessible via `http://localhost:3000` in your web browser.

## Mobile Testing

For testing on mobile devices, ensure that the frontend application's environment variable points to the `ngrok` URL and that both the frontend and backend servers are running. Access the frontend through the `ngrok` URL on your mobile device.

---

Please adjust as necessary to fit your project's specific setup and additional instructions.
# Micanopy Gallery

https://micanopyfl.com
A web application for showcasing and managing a photography gallery for the town of Micanopy.

## Features

- **Public Gallery**: Browse through a curated collection of photographs
- **Timeline**: View historical photographs in chronological order
- **About**: Learn about the Micanopy Gallery project
- **Contact**: Get in touch with the gallery administrators
- **Submit**: Submit your own photographs for consideration
- **Admin Dashboard**: Secure area for administrators to manage content

## Technology Stack

- React
- React Router
- Tailwind CSS for styling

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

   ```
   git clone https://github.com/kev1179/CIS4930-Micanopy.git
   cd micanopy-gallery
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Start the development server

   ```
   npm run dev
   ```

4. Setup Email

   The contact form uses nodemailer to send emails. To set up the email functionality:

   1. Create a `.env` file in the `server` directory with the following variables:

      ```
      PORT=3001
      EMAIL_USER=your-email@gmail.com
      EMAIL_PASSWORD="your-app-password"
      EMAIL_RECIPIENT=recipient-email@example.com
      ```

   2. For Gmail accounts, you'll need to use an App Password instead of your regular password:

      - https://myaccount.google.com/apppasswords

   3. If you're using a different email provider, you may need to adjust the transporter configuration in `server/index.js`.

   Note: The EMAIL_RECIPIENT variable is optional. If not provided, emails will be sent to the EMAIL_USER address.

5. Deployment
   ```
   docker compose up
   ```
   Then go to http://localhost:8080 in your browser to make sure it is working correctly. This will behave the same way it will behave in production assuming consistent database schema.

## Project Structure

- `src/components`: Reusable UI components
- `src/pages`: Page components for different routes
- `src/pages/admin`: Admin-specific pages with authentication

## License

[MIT License](LICENSE)

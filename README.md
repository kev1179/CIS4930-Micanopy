# Micanopy Gallery

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

## Getting Started

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

4. Deployment
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

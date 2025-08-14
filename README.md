# SocialWorld Newsletter Subscription

A simple and secure newsletter subscription landing page built with Express.js and SQLite.

## Features

- Clean and responsive landing page
- Newsletter subscription form with email validation
- SQLite database for storing subscriber information
- Security features including:
  - Rate limiting
  - Helmet security middleware
  - Payload size limiting
  - Input validation

## Prerequisites

- Node.js (v12 or higher)
- SQLite3

## Installation

1. Clone the repository:
```sh
git clone https://github.com/yourusername/socialworld.git
cd socialworld
```

2. Install dependencies:
```sh
npm install
```

3. Create environment file:
```sh
cp .env.example .env
```

4. Configure your environment variables in `.env` file:
```sh
PORT=3000
NODE_ENV=production
```

## Usage

### Development Mode
```sh
npm run dev
```

### Production Mode
```sh
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
.
├── public/                 # Static files
│   ├── app.js             # Frontend JavaScript
│   ├── index.html         # Landing page
│   └── styles.css         # Stylesheet
├── src/
│   ├── config.js          # Configuration
│   ├── server.js          # Express server
│   └── utils/
│       └── validation.js  # Input validation
├── .env.example           # Example environment variables
└── package.json           # Project dependencies
```

## Testing

Run the test suite:
```sh
npm test
```

## Security

This application implements several security measures:
- Rate limiting to prevent brute force attacks
- Helmet.js for HTTP header security
- Input validation for email addresses
- Payload size limiting
- SQLite with parameterized queries to prevent SQL injection

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
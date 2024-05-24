# MERN Blog Website

## Description

This is a blog website built using the MERN (MongoDB, Express.js, React, Node.js) stack with user authentication. Users can create an account, log in, write, edit, and delete their own blog posts.

## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)

## Features

- User authentication (register and log in)
- Create, edit, and delete blog posts
- View all posts or individual post details
- Responsive design

## Installation

### Backend Setup

1. Clone the repository:
    ```
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name/api
    ```
    
2. Install dependencies:
    `npm install`

3. Create a .env file in the api directory and add your environment variables:
    ```.env
    MONGO_URI=your_mongodb_uri
    PORT=5000
    ```
    
4. Start the backend server:
    `npm start`
   
### Frontend Setup

1. Navigate to the client directory:
    ```
    Copy code
    cd ../client
    ```
    
2. Install dependencies:
    ```
    npm install
    ```
    
    3.Strat the frontend server
      `npm start`
   
    The frontend server will start on `http://localhost:3000`.

## Usage

    1. Open your browser and navigate to http://localhost:3000.
    2. Register or log in to start using the application.
    3. Write, edit, and delete your blog posts as desired.

## Contributing
  Contributions are welcome! Please follow these steps:

    1. Fork the repository.
    2. Create a new branch (git checkout -b feature-branch).
    3. Make your changes.
    4. Commit your changes (git commit -m 'Add some feature').
    5. Push to the branch (git push origin feature-branch).
    6. Open a pull request.





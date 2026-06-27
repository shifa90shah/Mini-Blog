# Mini Blog 📝

A simple full-stack blog application built from scratch to learn and practice full-stack web development — including building a backend API, connecting it to a React frontend, and deploying it on GitHub.

## Features

- **Create posts** – Add a new blog post with a title and content
- **View posts** – See all posts in a clean card layout
- **Delete posts** – Remove any post
- **Detail view** – Click a post title to open it on its own page
- **Custom styling** – Gradient background, decorative elements, and a fade-in animated heading

## Tech Stack

**Frontend:** React (via CDN), HTML, CSS
**Backend:** Node.js, Express.js
**Storage:** JSON file (no database setup needed)

## Project Structure

mini-blog/

├── backend/

│   ├── server.js     -> Express server and API routes

│   ├── posts.json    -> Stores all blog post data

│   └── package.json

└── frontend/

└── index.html    -> React app (runs directly via CDN)



## How This Project Was Built

**1. Backend first**
A Node.js server was set up using Express. Three API routes were created:
- `GET /posts` – returns all blog posts
- `POST /posts` – adds a new blog post
- `DELETE /posts/:id` – deletes a specific post

Instead of a full database, posts are stored in a simple `posts.json` file, which keeps the project lightweight and beginner-friendly.

**2. Frontend**
The frontend was built with React, loaded directly through a CDN link (no `npm install` or build tools needed). Two React hooks power the app:
- `useState` – manages the list of posts and form inputs
- `useEffect` – automatically loads posts from the backend when the page opens

**3. Connecting Frontend and Backend**
The `fetch()` API is used to send requests from React to the Express server — to get posts, add new ones, and delete them.

**4. Styling**
Custom CSS was added for a card-based post layout, a gradient background with floating decorations, and a staggered fade-in animation for the main heading.

## How to Run This Project Locally

1. Clone this repository
2. Start the backend:



cd frontend

npx http-server


4. Open the link shown in the terminal (usually `http://127.0.0.1:8080`) in your browser

## What I Learned

- How REST APIs work (GET, POST, DELETE)
- Connecting a React frontend to a Node.js/Express backend
- React fundamentals: components, state, props, and hooks
- File-based data storage
- Using Git and GitHub to manage and publish a project

---
Built as a hands-on learning project to strengthen full-stack development skills.
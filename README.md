# Vivid Theory Coding Challenge

## Author
Jayden Shaw\
[Portfolio](https://jaydenshaw.com/) | [Github](https://github.com/jshaw990) | [LinkedIn](https://www.linkedin.com/in/jayden-shaw)

## Technologies Used
- Node.js
- TypeScript
- React
- React-router-dom v6
- Postgres
- Material UI
- dotenv
- Concurrently
- NPM

## Usage 
How to run this project:
- Clone or download this repository as a zip
- Open the project in any IDE, I recommend Visual Studio Code

### Local
1. Enter the 'server' directory with the command `cd server`
2. Install all NPM packages with the command `npm install`
3. Create a file in the server directory called `.env`
4. Copy the contents of the `.env.example` file and paste into the `.env` file you created
5. Enter your credentials into the space provided in your `.env` file
6. Move to the client directory with `cd ../` and then `cd client`
7. Complete steps 2 to 5 within the client directory
8. After you have installed NPM packages and have your `.env` file setup in the client directory, return to the route directory with `cd ../`
9. Install the route NPM package with `npm install`
10. Run the `npm run start` command
11. Navigate to [http://localhost:3000/](http://localhost:3000/) where you will see an instance of the application running

### Server Deployment


---

## Coding Challenge

# Vivid Theory Coding Challenge

# Introduction

The purpose of this assignment is to evaluate your full stack application development skills. Principles and best practices of front end design, responsive components, client server model, git-flow, user experience, and page performance will all be tested.

In a project such as this we want you to focus on the things that matter. Code structure, architecture, design patterns, and overall approach is more important than having a great custom webpack configuration. Focus on the main platform features.

Please spend time creating a simple and elegant solution rather than fighting with a framework or library!

## Timeline

The suggested time to complete this challenge is ~4-8 hours, although this is not a required limit. Upon receiving the challenge you will have three days to make a final submission.

## Problem Definition

Vivid Theory is in need of a simple blog build to display our user created content. This build will consist of a single Server that will fetch the blog data from the database, and a frontend React App to display the blog information received from our server.The database with Blog related data is provided.  

## Data

We have a dataset that includes blog information in a single database table `blogs`.

| Column           |  Type  |                   Explanation |
| ---------------- | :----: | ----------------------------: |
| id               | number |            Unique database id |
| title            | string |                    Blog Title |    
| slug             | string |            Unique string slug |       
| content          | string |        The blogs html content |
| image            | string |          The blogs main image |
| published_at     |  date  |   When the blog was published | (nullable)


**note**
- published_at is nullable and blogs that are not published should be ignored
- slug is unique, as is the column used to fetch a single blog

### Database Access
Data can be accessed in the `blogs` table at:

`host=vt-code-challenge.postgres.database.azure.com port=5432 dbname=challenge user=userchallenge@vt-code-challenge password=userchallenge sslmode=require`

## Business Requirements

Implement a responsive blog web application that has two main views. The first view is the blog search page, and the second is a view of a single blog.

- Blog Search Page
  - The Blog Search Page is a page that allows users to paginate through all blogs, 
    clicking on a blog on this page will route to a Single Blog Page for the 
    selected blog
  - The Blog Search Page should implement pagination with a limit of 6 blogs shown 
    at a time. This pagination should be done on the server. That is, the server will
    only ever return 6 blogs at a time.
  - Blogs should be ordered by published_at date, such that the newest published blogs
    are the first blogs to show up.
  - This page exists on the route "/"
  - An example of a blog search page "https://heyauto.com/blog" (This page contains 
    extra functionality not required in this challenge)

- Single Blog Page
  - The Single Blog Page is a page that displays the content of a specific blog.
  - The content of the blog is a html string and should be injected into your pages
    JSX.
  - These pages exist on the route "/<slug>", where slug is the current blogs slug.
    Such that if on the route "/top-5-cities" the blog with the slug "top-5-cities"
    should be fetched and displayed.
  - An example of a single blog page 
    "https://heyauto.com/blog/brain-fuel/car-glovebox-a-brief-history" 

## Project Requirements
  - Build a React Application to display the blog search page and single blog page
  - Build a Back End to serve the required blog data to the client
  - Connect to the provided database from your created server

## Technical Requirements

Construct a client server application that fulfils the business requirements. Typescript is recommended even if you are unfamiliar with it, however, Javascript is an acceptable alternative.

### Stack

- Front End
  - [React](https://reactjs.org/) 
    or [Next.js](https://nextjs.org/)
  - [MUI](https://mui.com/) 
    or any othe UI framework or no UI framework
- Back End
  - Framework
    - [Nest.js](https://nestjs.com/) 
      or [Express.js](https://expressjs.com/)
      or any other backend framework
    - [GraphQL](https://graphql.org/) or [REST]
  - ORM
    - [sequelize](https://sequelize.org/)
    - or [TypeORM](https://typeorm.io/#/)
    - or no ORM
- Database
  - [PostgreSQL](https://www.postgresql.org/) Provided

## Important Considerations

- Performance
  - You are not allowed to load all database rows into the browser at once. Your program should query and load data as needed.
- Patterns
  - Employ reusable/dry principles. Use OOP/Functional patterns as necessary.
- Deployment
  - Provide clear instructions on how to start your project in both a development and production setting

## Submission

When you have completed the coding challenge commit your code to GitHub in a public repository and contact us letting us know you have completed the challenge with the link to said repository/repositorys.

Feel free to make any reasonable assumptions about this assignment, innovate and add your personal touches as you see fit. Please reach out if you have any questions!

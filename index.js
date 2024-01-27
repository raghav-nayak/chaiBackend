strict = true;


const express = require("express");
// another way: import express from "express";

require("dotenv").config();

const userData = {
    "login": "github-user",
    "id": 25219200,
    "node_id": "MDQ6VXNlcjI1MjE5MjAw",
    "avatar_url": "https://avatars.githubusercontent.com/u/25219200?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/github-user",
    "html_url": "https://github.com/github-user",
    "followers_url": "https://api.github.com/users/github-user/followers",
    "following_url": "https://api.github.com/users/github-user/following{/other_user}",
    "gists_url": "https://api.github.com/users/github-user/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/github-user/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/github-user/subscriptions",
    "organizations_url": "https://api.github.com/users/github-user/orgs",
    "repos_url": "https://api.github.com/users/github-user/repos",
    "events_url": "https://api.github.com/users/github-user/events{/privacy}",
    "received_events_url": "https://api.github.com/users/github-user/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Github User",
    "company": null,
    "blog": "",
    "location": "Earth",
    "email": null,
    "hireable": true,
    "bio": "programmer",
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 4,
    "following": 4,
    "created_at": "2017-01-19T07:53:41Z",
    "updated_at": "2024-01-24T07:22:31Z"
}


// app contains different functionalities and methods which give various options
const app = express();

// const port = 3000;
const port = process.env.PORT;

// listen to / and send response
app.get("/", (req, res) => {
    res.send("Hello from home!");
});

app.get("/twitter", (req, res) => {
    res.send("Hello from twitter!");
});

app.get("/login", (req, res) => {
    res.send("<h1>Please login!</h1>");
})

app.get("/github", (req, res) => {
    res.json(userData);
})

// to listen to different events on the same port
app.listen(port, () => {
    console.log(`Backend application is started on port ${port}`);
});
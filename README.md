### To see  the project live

[OMDB Movie Search](https://chic-gelato-a47be7.netlify.app/)

**Using mock api for fetch data**

http://www.omdbapi.com/

### Create using React, Redux, Bootstrap, Axios, SCSS

A web application to allow user to search movies.

Features:

- input search using debounce to fetch the api
- button more to fetch more movies
- a slide modal to see movie detail
- allowed user to check their favourite movies and remove their favourite
- micro interaction on search input icon, star favourite when checked and unchecked

Libraries and dependency packages:

- redux
- react-redux
- redux-thunk 
- axios 
- bootstrap 
- react-bootstrap 
- lodash.debounce 
- node-sass


### To run in local

**Install package.**

```bash
$ npm install
```
**Running the development server:**

```bash
$ npm start
```

## Deploy

using netlify:
- add new site 
- choose Import an existing project 
- pick from a git repository
- click deploy


## Deploy Manually

```bash
$ npm run build
```

using netlify:
- add new site 
- choose Deploy manually 
- Drag and drop folder build 
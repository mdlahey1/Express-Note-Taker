<h1 align="center">Note Taking Application Using Node.js and express.js </h1>

## Description

A node.js express.js application that allows users to create, store and delete notes. 

Below is the picture of the application:

![Note Taker Express](./public/assets/images/screenshot.png)

Application deployed live on [heroku](https://whispering-cove-24377.herokuapp.com/notes)

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)

## Installation
  
`npm init`
  
`npm install node`

`npm install express`

`npm install uuid`

'`heroku create`

## Usage
  
Run the following command at the root of your project and answer the prompted questions:
  
`npm start`


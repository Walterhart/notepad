# Notepad Application

This repository contains code for a simple note-taking application built with React and Firebase. The application allows users to create, edit, and delete notes, while also providing synchronization with a remote database.

## Features

The starting code provided a basic note-taking application with the following features:

- Display a split view with a sidebar and an editor section.
- Notes can be selected from the sidebar to display their content in the editor.
- The editor section allows users to edit the selected note's content.
- New notes can be created by clicking a button in the sidebar.

Additional features added to the original code:

1. **Sync notes with Firebase**: The local storage functionality was replaced with Firebase to store and synchronize the notes. This ensures that the notes are persistent and accessible across different devices.

2. **Note Summary Titles**: Each note in the sidebar now displays a summary title, which represents the first line of the note's content. This provides a quick overview of each note's content.

3. **Sorting Notes by Modification**: The notes in the sidebar are sorted in descending order based on their last modified timestamp (`updatedAt`). This places the most recently modified notes at the top of the list, making it easier for users to access their recently edited notes.

4. **Delete Notes**: The sidebar now includes a delete button for each note, allowing users to delete unwanted notes. Clicking the delete button removes the corresponding note from the Firebase database.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Dependencies

The application relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- Firebase: The Firebase JavaScript SDK for interacting with the Firebase services.
- React-MDE: A React-based Markdown editor component.
- Showdown: A Markdown-to-HTML converter library.


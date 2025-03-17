# Todo App

A simple To-Do List application built with TypeScript, HTML, and CSS. This project helps you manage your tasks efficiently.

## Features

-   Add new tasks to the list.
-   Mark tasks as completed.
-   Delete tasks from the list.
-   Simple and intuitive user interface.

## Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/frksarkar/todo-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd todo-app
    ```

3. **Run the project:**

    - If you have a TypeScript compiler installed globally, you can compile the TypeScript files using:
        ```bash
        tsc
        ```
    - Alternatively, you can use a tool like webpack or parcel to bundle and serve the project. For example, using parcel:
        ```bash
        npx parcel src/index.html
        ```
    - Open your browser and navigate to http://localhost:1234 to view the application.

## Scripts

The following npm scripts are available in the package.json file:

-   build: Compiles the TypeScript files.
-   start: Starts the development server (if configured).

Example usage:

    ```bash
    npm run build
    npm start
    ```

## Usage

1. Open index.html in a web browser.
2. Use the input field to add new tasks.
3. Click on the "Add Task" button to add the task to the list.
4. Click on a task to mark it as completed or delete it.

## File Structure

```graphql
to-do-list/
├── src/
│ ├── index.html # The main HTML file for the application
│ ├── main.ts # The TypeScript file containing the application logic
│ └── style.css # The CSS file for styling the application
├── package.json # Node.js project configuration and dependencies
├── tsconfig.json # TypeScript configuration file
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

-   Inspired by various to-do list applications available online.
-   Built with TypeScript, HTML, and CSS.

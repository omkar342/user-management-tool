# User Management Tool

User Management Tool is a web application developed to manage user data by pulling data from a user API and displaying it in a table format. It provides functionalities like creating users, listing users with sorting and pagination, deleting users, and editing user details.

## Features

- Create new users with name, email, status, role, and last login fields.
- List users with sorting and pagination options.
- Delete users from the system.
- Edit user details including name and role.
- Display last login field as a string in RFC3339 format (optional).
- UI components include a badge for status and a button component.
- Pagination for easy navigation through the user list.

## Getting Started

These instructions will help you set up and run the User Management Tool on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone the repository to your local machine:

2. Navigate to the project directory:

3. Install the dependencies:

### Usage

1. Start the development server:

2. Open your web browser and visit `http://localhost:3000` to access the User Management Tool.

### Configuration

- You can modify the configuration settings of the User Management Tool in the `.env` file. Configure the API endpoints, authentication, or any other required settings in this file.

### Technologies Used

- React.js: JavaScript library for building user interfaces.
- React Query: Data fetching and state management library.
- Tailwind CSS: Utility-first CSS framework.
- ESLint: JavaScript and TypeScript linter.
- Prettier: Code formatter.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing a mock API service.
- [Create React App](https://create-react-app.dev/) for bootstrapping the React project.
- [React Table](https://react-table.tanstack.com/) for creating the user table component.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

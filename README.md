# Form Validator

A simple form validation project that validates the username, email, password, and password confirmation inputs in a form. The project uses basic HTML, CSS, and JavaScript to check for common validation rules such as minimum length and valid email formats. Error messages are displayed when input values are incorrect, and the input fields change colors to indicate valid or invalid states.

## Features

- **Username Validation**: Ensures the username is at least 3 characters long.
- **Email Validation**: Checks if the email input is a valid email format using a regular expression.
- **Password Validation**: Ensures the password is at least 6 characters long.
- **Password Confirmation**: Verifies that the password confirmation matches the original password.

## Technologies Used

- **HTML5**: For structuring the form and inputs.
- **CSS3**: For styling the form, error messages, and input field states.
- **JavaScript**: For handling form validation logic and adding/removing error classes dynamically.

## How It Works

1. The form listens for the `submit` event and prevents the default action.
2. The username is validated to ensure it's at least 3 characters long.
3. The email input is checked against a regular expression to verify it's a valid email address.
4. The password must be at least 6 characters long.
5. The password confirmation input must match the original password.
6. If any of the fields do not meet the criteria, error messages are shown and the corresponding input fields are highlighted in red. Successful validations highlight the fields in green.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/AEuphrates/validation-form
    ```
2. Navigate to the project directory:
    ```bash
    cd form-validator
    ```
3. Open `index.html` in your browser to view the form and test the validation.

## Customization

- You can adjust the validation rules in the `script.js` file, such as changing the minimum length for the username or password.
- You can also update the styles in `style.css` to match your design preferences.


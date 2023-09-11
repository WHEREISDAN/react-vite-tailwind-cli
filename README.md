# ReactJS-Vite-TailwindCSS Project Initializer CLI

This is a Command Line Interface (CLI) tool designed to automate the process of initializing a new ReactJS project with Vite and TailwindCSS. This tool can be very helpful for developers/users who frequently initiate ReactJS projects with these configurations.

## Features

1. Asks for your Project's name.
2. Asks you to pick JavaScript or TypeScript.
3. Asks if you want to initialize a Git repository.

## Usage

> Note: This tool requires [Node.js](https://nodejs.org/) installed.

1. Clone this repository to your local machine.
2. Navigate into the cloned repository using your Terminal/Command Prompt.
3. To install all necessary packages, run: `npm install`.
4. To start the CLI tool, run: `node index.js`.

### Using npx

You can invoke this package using `npx`:

```bash
npx create-vite-react-tailwind
```

## Development Journey

Working on this project was an exciting and fun journey. Challenges encountered during this project were primarily related to synchronously running shell commands in Node.js and overcoming the limitations of ES Modules with the Inquirer.js package.

During the early phase of the project I used the `child_process.exec` method from the Node.js Standard Library. However, this does not stream the output in real-time. I later used `child_process.spawn`, but this came with the challenge of executing commands consecutively only after the previous command has completed. The final solution was to use `child_process.execSync` which provides a synchronous way to execute shell commands and also handles output streaming.

There was also an incidence of running into an `ERR_REQUIRE_ESM` error. This happened due to the introduction of ECMAScript modules within Inquirer.js from version 9.2.11. This was resolved by reverting back to version 8.0.0 which employs CommonJS modules.

## Contribute

This project was built for fun, and everyone is more than welcome to use it as well as contribute. If you have any suggestions or find any bugs, please feel free to open a new issue and/or create a pull request.

## License

This project is open source and is licensed under the MIT License.
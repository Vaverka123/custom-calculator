# custom-calculator

1. Task: https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view

2. How to run the app: in terminal run the command "npm run build"

3. File structure:

## custom-calculator

- **src/**: Contains the source code and related assets for the project.
  - **commands.js**: Implements reusable functions following the Command design pattern, encapsulating actions or operations as objects to promote flexibility and decoupling.
  - **index.html**: HTML file for development mode.
  - **index.js**: The main JavaScript entry point for initializing and managing the app.
  - **style/**: Directory for CSS stylesheets.
  - **test.spec.js**: Test file for unit or integration testing using Jest.
- **.gitignore**: Specifies files and directories (e.g., `node_modules`, `dist`) to be excluded from version control.
- **jest.config.js**: Configuration for Jest, defining test environments, file patterns, and other settings.
- **package.json**: Defines project metadata, scripts, and dependencies.
- **package-lock.json**: Ensures consistent installation of dependencies across environments.
- **README.md**: Documentation for the project, including instructions, dependencies, and usage.
- **webpack.config.js**: Configuration for Webpack, handling bundling, module resolution, and optimization.
- **node_modules/**: Auto-generated directory for installed npm dependencies.
- **dist/**: Contains production-ready files.
  - **bundle.js**: Minified JavaScript bundle for deployment.
  - **index.html**: Production HTML file, typically referencing the bundled JavaScript.
- **.vscode/**: Contains Visual Studio Code-specific settings.
  - **settings.json**: Custom configuration for the editor (e.g., formatting, extensions).

# MiniTeveNyilvantartoApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Backend Connection

The backend API url is in the environment.ts file.
The backend needs to run on localhost port 3001.

```bash
http://localhost:3001/
```

## Model

The backend must use the same property names as written in the instructions.

## Running unit tests

To execute unit tests for the FormComponent with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test --include=src/app/components/shared/form/form.component.spec.ts
```

## Note

Due to lack of time the self implemented user-message feature for displaying success and error messages couldn't be used. Instead plain javascript alerts display these messages.  
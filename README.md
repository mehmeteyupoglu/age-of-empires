README

# Age of Empires

This project is called Age of Empires and it started on June 12, 2023, with an expected end date of June 20, 2023.

## Description

Age of Empires is a web application that retrieves data from a mock backend and implements various filtering combinations. The main functionality of the application is to allow users to explore and view details of different units. The client-side of the project is built using React and its ecosystem, while [json-server](https://github.com/typicode/json-server) is used as a mock server. For a complete list of packages used in the project, please refer to the [package.json](https://github.com/mehmeteyupoglu/age-of-empires/blob/main/package.json) file.

## Principles, Documentation, and Methodologies

Throughout the development process, the project has followed the principles of clean architecture and well-decomposed code on the client-side. The reactivity and reusability features of React have been leveraged to create a lightweight and performant web application.

### Tools, Conventions, Design Systems

The following tools, conventions, and design systems have been used in the project:

- [Conventional Commits](www.conventionalcommits.org/) have been adopted for clean and consistent versioning.
- The project has been documented using [JSDoc](https://jsdoc.app/) and the [React Style Guide](https://react-styleguidist.github.io/).
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles have been applied to ensure clean component reusability and a solid structure.

## Assumptions

- The dataset used in the application is not expected to be large.
- The data is served by a typical backend.

## Timeline

The project was developed over a couple of days. Here is a breakdown of the development timeline:

| Time Period                 |                         Work                          |
| --------------------------- | :---------------------------------------------------: |
| June 12, 2023 10:00-11.30pm |                 Initial setup, layout                 |
| June 13, 2023 10:00-12.30am |                   Add missing docs                    |
| June 13, 2023 19:00-11.30pm | Initiate json-server, configure axios, service, store |
| June 14, 2023 09:30-11.00am |                      Update docs                      |
| June 14, 2023 12:00-03.00pm |   Encapsulate components, add snackbar, unit tests    |
| June 15, 2023 03:30-06.00pm |      Render products, more styling and fix docs       |
| June 16, 2023 03:30-08.00pm |                     Refactor code                     |
| June 17, 2023 03:30-08.00pm |                 Filter functionality                  |
| June 18, 2023 07:00-08.00pm |                   Write unit tests                    |
| June 19, 2023 06:45-08.30pm |                 Finalize the project                  |

## Project Setup

### JSON-Server Setup

Make sure you have json-server installed globally on your computer:

```
npm install -g json-server
```

### React Project Setup

Install the project dependencies:

```
yarn install
```

### Compiles and Hot-Reloads for Development

Start the development server and json-server with hot-reloading:

```
yarn start
```

### Run Your Mock Backend

Launch the json-server to run the mock backend:

```
json-server --watch db.json
```

### Run Your Unit Tests

Execute the unit tests:

```
yarn test
```

## Deployment

The project is deployed to the following URL: [https://age-of-empires-orpin.vercel.app/](https://age-of-empires-orpin.vercel.app/).

Please note that even in

the deployed version, the json-server should be running locally to fetch the data.

---

Feel free to explore the project and provide your valuable feedback. Enjoy!

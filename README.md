# Rick and Morty Search
This application allows the user to search by name and see the detail of any character from the serie :  Rick and Morty.
**IMPORTANT :** All the 'items' routes or domains i decided to replaced for characters, so the route */items?q=* is now */characters?q=*
## Tech
- [React18](https://reactjs.org/)
- [React router DOM v6](https://reactrouter.com/en/main)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/guide/why.html)
- [Tailwind](https://tailwindcss.com/)
- **FULLY RESPONSIVE**
## Test environment
- [Vitest](https://vitest.dev/)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
- [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)
## Folder structure

- [7-1 for the SCSS architecture](https://sass-guidelin.es/es/#arquitectura)
- [A hexagonal architecture based on domain](https://markus.oberlehner.net/blog/vue-project-directory-structure-keep-it-flat-or-group-by-domain/)

## Conventions
- [Vue Style Guide](https://vuejs.org/style-guide/)
- [BEM](https://getbem.com/)
## Installation

**Running Frontend** : Install the dependencies and devDependencies and start the server.

```sh
cd r-m-search
npm i
npm run dev
```

**Running the backend** : In order to run the backend you need to clone the [Github Repository](https://github.com/jesusgabri3l/r-m-search-backend) and then :
```sh
cd r-m-search-backend
npm i
npm run dev
```

**Running the tests** :  There are some commands you might use in order to run the tests :
- `npm test` : Run all the test with *Vitest* and stays watching tests changes
- `npm run test:ui`: Run all the test with *Vitest* and launch a nice webview where you can see all your test, this also stays watching tests changes. **Highly recommended**
- `npm run coverage`: Run all the tests and make a coverage of all it, giving you details about the whole testing.

## Modules
*The modules are a abstract representation of pages/views*
- **Home Module** :  The home module contains a *Homeview*, which contains the form/search components for searching the characters by name, **Route : '/'**
- **Characters Modules** : The characters module contains 2 submodules which are:
    - **Results** : Contains the *CharacterResultsView* which contains the results from the form/search component, **Route: '/characters?q=...'**
    - **Detail**: Contains the *CharacterDetailView* which displays the details from a specifc character, **Route: '/characters/:id'**
    - There is a shared folder which contains reusable logic (for fetching character information from api) which is used for both submodules.

## Services/API instances
I am using axios, a there is an axios instance pointing to my local backend
- **Local Backend:** It is consuming the [Rick and morty public API](https://rickandmortyapi.com/).

## Components
Inside our `src/components/base` there are some components which we can use to make our UI development easier.

- **BaseCard** : reusable card component which has an *image, title, and description*, we can use it to show by now *characters*, but in the future might be useful to show more information.
- **BaseSearchForm**: reusable form to search by a string. It rececives 2 params: 
    - **errorHandler** : It is a void for handling the error, so you have to handle the error in the parent component, it returns an boolean which would tell you if there is an error or not.
    - **navigateTo**. When the form is submitted it will redirect to the *navigateTo* prop and the query string you typed for example: if you set the *navigateTo* prop with : *characters* then it will redirect to: */characters?q={inputString}*.
- **BaseAlert**: reusable alert component to display error or information messages, it receives : *title, description, icon, type*
- **BaseSpinner** : reusable spinner components to show something while something is loading.


 

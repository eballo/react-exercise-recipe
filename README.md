# Frontend - React Exercise Recipe

Front end application created using react that is using the Django backend
application to get the data.

## Rules
- Use Hooks not classes
- Create React App → [https://facebook.github.io/create-react-app/](https://facebook.github.io/create-react-app/)
- Style library → [Styled components](https://www.styled-components.com/)
- For routing use this library → [https://reacttraining.com/react-router/](https://reacttraining.com/react-router/)
- [React docs](https://react.dev/)
- [React testing library](https://github.com/kentcdodds/react-testing-library)
- [TravelPerk Styleguide](https://github.com/travelperk/styleguide)

## Usage

Requires Node 22.22+. The app expects the Django backend on `http://localhost:8000`.

```
cd recipe-app
npm install
npm start       # dev server on http://localhost:3000
npm test        # run the tests with Vitest
npm run build   # production build in build/
```

import { Home } from '../pages/Home';

const App = () => {
  console.log('app');
  const app = document.createElement('div');
  app.className = 'app';
  return app.appendChild(Home([1, 2, 3, 4]));
};

export default App;

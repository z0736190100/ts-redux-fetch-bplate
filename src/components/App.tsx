import { Provider } from 'react-redux';
import { store } from '../state';
import EntityList from './EntityList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Entity</h1>
        <EntityList />
      </div>
    </Provider>
  );
};

export default App;

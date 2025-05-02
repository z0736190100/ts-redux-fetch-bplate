import { Provider } from 'react-redux';
import { store } from './state';
import EntityFetchAndListContainer from "./components/EntityFetchAndListContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Entity</h1>
        <EntityFetchAndListContainer />
      </div>
    </Provider>
  );
};

export default App;

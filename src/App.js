import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Dashboard from './pages/Dashboard';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.thegraph.com/subgraphs/name/andrejrakic/quantstamp"
  });

  return (
    <div>
      <ApolloProvider client={client}>
        <Dashboard />
      </ApolloProvider>
    </div>
  );
}

export default App;

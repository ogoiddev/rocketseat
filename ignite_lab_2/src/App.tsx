import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo';
import Router from './Router';

// Exemplo de outra maneira de fazer uma query //
// import { client } from './lib/apollo'
// useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY,
  //   }).then((response) => {
  //     console.log(response.data);
  //   })
  // })s

function App() {
  
  
  

  return (
        <ApolloProvider client={client}>
          <Router />
        </ApolloProvider>
  )
}

export default App

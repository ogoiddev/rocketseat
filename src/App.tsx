import { gql, useQuery } from '@apollo/client'
import Event from './pages/Event';

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
    <Event/>
  )
}

export default App

import { ApolloClient   } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache  } from 'apollo-cache-inmemory'

const uri =
  {
    host: 'localhost',
    
    port: '4001',
    
    get: () =>  `http://${ uri.host }:${ uri.port }/graphql`
    
  };

const config =
  {
    link:  createHttpLink({ uri: uri.get() }),
    
    cache: new InMemoryCache()
  };

const client = new ApolloClient(config);


export default client;

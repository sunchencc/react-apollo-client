import React from 'react';
import
{
  Query,
  Mutation
}
from 'react-apollo';

import { query_demo } from './Graphql/graphql'

class App extends React.Component
{
  render()
  {
    const element =
      
      <Query query={ query_demo }  fetchPolicy={ 'cache-and-network' }>
        {
          ({ loading, error, data }) =>
          {
            if (loading)
            {
              return <p>加载中</p>;
            }
            
            if (error)
            {
              return <p>错误</p>;
            }
            
            console.log(data);
            
            return 'success';
          }
        }
      </Query>
    ;
    
    return element;
  }
  
}

export default App;

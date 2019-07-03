import React from 'react';
import
{
  Query
}
from 'react-apollo';

import { get_persons } from './Graphql/graphql'

import Table from './Component/Table';

class App extends React.Component
{
  render()
  {
    const element =
      
      <div className={ 'container' }>
        
        <div className={ 'row mt-4' }>
  
          <Query query={ get_persons }  fetchPolicy={ 'cache-and-network' }>
            {
              ({ loading, error, data, refetch }) =>
              {
                //refetch 是为了成功以后进行再次查询
                if (loading)
                {
                  return <p>加载中</p>;
                }
        
                if (error)
                {
                  return <p>错误</p>;
                }
        
                return <Table data={ data.get_persons } refetch={ refetch }/>;
              }
            }
          </Query>
          
        </div>
        
      </div>
    ;
    
    return element;
  }
  
}

export default App;

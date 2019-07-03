import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { remove_person } from '../Graphql/graphql'
import { add_person    } from '../Graphql/graphql'


class Table extends Component
{
  constructor()
  {
    super();
    
    this.state =
      {
        id:   '',
        age:  '',
        name: ''
      };
    
    this._change_id    =   this._change_id.bind(this);
    this._change_age   =   this._change_age.bind(this);
    this._change_name  =   this._change_name.bind(this);
    this._remove       =   this._remove.bind(this);
    this._add          =   this._add.bind(this);
  }
  
  _change_id(e)
  {
    this.setState({ id: Number(e.target.value) });
  }
  
  _change_age(e)
  {
    this.setState({ age: Number(e.target.value) });
  }
  
  _change_name(e)
  {
    this.setState({ name: e.target.value });
  }
  
  _remove(execute, id)
  {
    const variables = { id: id };
    
    execute({ variables: variables })
      .then(() => { this.props.refetch()})
      .catch((error)=> { console.log(error)})
  }
  
  _add(execute)
  {
    console.log(this.state);
    
    if (this.state.id === '' || this.state.age === '' || this.state.name === '')
    {
      alert('输入不能为空');
      
      return;
    }
    
    execute({ variables: this.state })
      .then(() =>
      {
        this.setState({ id: '', age: '', name: '' });

        this.props.refetch();
      })
      .catch((error)=> { console.log(error)})
  }
  
  render()
  {
    const Remove = (id)=>
    {
      const Button =
        
        <Mutation mutation={ remove_person }>
          {
            (execute)=>
            {
              const Button =
                <
                  button
                  className={ 'btn btn-info' }
                  type={ 'button' }
                  onClick={ ()=> this._remove(execute, id) }
                >
                  REMOVE
                </button>
              ;
              
              return Button;
            }
          }
        </Mutation>
      ;
      
      return Button;
    };
    
    const Add =
      
      <Mutation mutation={ add_person }>
        {
          (execute)=>
          {
            const Add =
              <
                button
                className={ 'btn btn-info' }
                type={ 'button' }
                onClick={ ()=> this._add(execute) }
              >
                ADD
              </button>
            ;
        
            return Add;
          }
        }
      </Mutation>
    ;
    
    const tr = (d, i)=>
    {
      return (
        <tr key={ i }>
          <td>{ d.id   }</td>
          <td>{ d.age  }</td>
          <td>{ d.name }</td>
          <td>{ Remove(d.id) }</td>
        </tr>
      );
    };
    
    const elements =
      <table className={ 'table table-bordered table-hover' }>
        <thead className={ 'table-info' }>
        <tr>
          <td>ID</td>
          <td>AGE</td>
          <td>NAME</td>
          <td>OPERACTION</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><input value={ this.state.id   } type={ 'number' } onChange={ this._change_id   }/></td>
          <td><input value={ this.state.age  } type={ 'number' } onChange={ this._change_age  }/></td>
          <td><input value={ this.state.name } onChange={ this._change_name }/></td>
          <td>{ Add }</td>
        </tr>
        {this.props.data.map(tr)}
        </tbody>
      </table>
    ;
    
    return elements;
  }
  
}

export default Table;

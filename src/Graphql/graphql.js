import gql from 'graphql-tag';

export const get_persons = gql`

    query
    {
        get_persons
        {
            id
            age
            name
        }
    }
`;

export const remove_person = gql`
  
  mutation($id: ID!)
  {
      remove_person(id: $id)
  }
`;

export const add_person = gql`

    mutation($id: ID!, $age: Int!, $name: String!)
    {
        add_person(id: $id, age: $age, name: $name)
    }
`;

import gql from "graphql-tag";
const PRODUCTS_QUERY = gql`
  query {
    products {
      id
      name
      price
      description
      productimage {
        id
        url
      }
      background {
        url
        id
      }
      createdAt
    }
  }
`;
export default PRODUCTS_QUERY;
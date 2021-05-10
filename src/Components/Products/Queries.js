import gql from "graphql-tag";
const PRODUCTS_QUERY = gql`
  query {
    products {
      prodid
      name
      price
      description
      quantity
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
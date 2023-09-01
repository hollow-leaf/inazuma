import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const axios = require('axios');

export async function fetch_cert_address(address) {
  try {
    const apiUrl = 'https://api.thegraph.com/subgraphs/name/hypercerts-admin/hypercerts-testnet';

    // Define your GraphQL query
    const graphqlQuery = `
      {
        claimTokens(where:{owner: ${"\""+address+"\""}}) {
          claim {
            uri
            tokenID
          }
          id
          tokenID
          units
        }
      }
    `;

    const response = await axios.post(apiUrl, {
      query: graphqlQuery,
    });

    // The response data will contain the results of your query
    const data = response.data.data;
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetch_cert_address("0x9A54A0804FEBf64162D5eBF771C5355622617437").then(list=>{
  list.claimTokens.forEach(element => {
    console.log(element)
    console.log(element.claim)
  });
})

export async function fetch_cert_uri(address, uri) {
  try {
    const apiUrl = 'https://api.thegraph.com/subgraphs/name/hypercerts-admin/hypercerts-testnet';

    // Define your GraphQL query
    const graphqlQuery = `
      {
        claims(
          where: {uri:${"\""+uri+"\""}, creator: ${"\""+address+"\""}}
        ) {
          tokenID
        }
      }
    `;

    const response = await axios.post(apiUrl, {
      query: graphqlQuery,
    });

    // The response data will contain the results of your query
    const data = response.data.data;
    return data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
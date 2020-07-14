import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom'

const client = new ApolloClient({
  uri: 'https://petgram-server.hectorf.vercel.app/graphql'
})

import { App } from './App'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app'))

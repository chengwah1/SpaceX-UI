import React from 'react';

// Apollo and GraphQL
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const Test = ()=>{
    const QUERY =gql`
    {
        launchesPast(limit: 3) {
          id
        }
      }      
    `
    return(
        <Query query={QUERY}>
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
        
            const linksToRender = data.launchesPast
        
            return (
                <div>
                {linksToRender.map(item=>item.id)}
                </div>
            )
            }}
        </Query>
    )
}

export default Test;
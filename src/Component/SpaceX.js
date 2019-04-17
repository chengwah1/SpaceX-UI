import React from 'react';
// component
import TableComponent from './TableComponent.js'
// ant import
import { Button } from 'antd';
import { PageHeader } from 'antd';
// apollo
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const SpaceX = () => {
    const QUERY =gql`
    {
        launchesPast(limit: 3) {
          id
        }
      }      
    `
    return(
        <div>
            <div>
                SpaceX Rockets
                <Button type="primary">Primary</Button>
            </div>
            <PageHeader
            onBack={() => null}
            title="List of SpaceX's Rockets"
            />
            <Query query={QUERY}>
            {({ loading, error, data })=>{
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return <TableComponent objdata={data}/>}}
            </Query>
            
        </div>
    )
}

export default SpaceX;
import React from 'react';
// component
import TableComponent from './TableComponent.js'
// ant import
import { Button } from 'antd';
import { PageHeader } from 'antd';
// apollo
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
// css
import '../styles/SpaceX.css';


const SpaceX = () => {
    const QUERY =gql`
    {
      launchesPast(limit: 2) {
        id
        rocket {
          rocket_name
          rocket {
            active
          }
        }
        links {
          wikipedia
        }
        details
      }
    }    
    `
    return(
        <div>
            <div className = "PageHeader">
                SpaceX Rockets
                <Button type="primary">Primary</Button>
            </div>
            <div className = "PageContainer">
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
        </div>
    )
}

export default SpaceX;
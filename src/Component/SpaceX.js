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
      launchesPast(limit: 7) {
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
        <div className="PageContent">
            <div className = "Header">
                SpaceX Rockets
            </div>
            <div className = "PageContainer">
            <Button className= "Logoutbtn" type="primary">Logout</Button>
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
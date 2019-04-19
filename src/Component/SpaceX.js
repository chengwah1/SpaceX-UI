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


const SpaceX = ({history, clearUserInfo}) => {
    const QUERY =gql`
    {
      launchesPast(limit: 3) {
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
    const logout=()=>{
      // clear local storage
      localStorage.clear();
      clearUserInfo();
      // redirect to login page
      history.push('/');
    }
    
    return(
      
        <div className="PageContent">
            <div className = "Header">
                SpaceX Rockets
            </div>
            <div className = "PageContainer">
            <Button 
            className= "Logoutbtn" 
            type="primary" 
            onClick={logout} >Logout</Button>
            <PageHeader
            className= "PageHeadercss"
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
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { query } from 'apollo-client'
import gql from 'graphql-tag'
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  sorter: true,
  render: name => `${name.first} ${name.last}`,
  width: '20%',
  },{
  title: 'Description',
  dataIndex: 'description',
  },{
    title: 'Status',
    dataIndex: 'status',
    filters: [
      { text: 'Active', value: 'true' },
      { text: 'Not Active', value: 'false' },
    ],
    width: '20%',
    }];

class TableComponent extends Component {
    state = {
        data: [],
        pagination: {},
        loading: false,
      };
      
      componentDidMount() {
        // fetch api
        
      }

      handleTableChange = (pagination, filters, sorter) => {
        // const pager = { ...this.state.pagination };
        // pager.current = pagination.current;
        // this.setState({
        //     pagination: pager,
        // });
        // this.fetch({
        //     results: pagination.pageSize,
        //     page: pagination.current,
        //     sortField: sorter.field,
        //     sortOrder: sorter.order,
        //     ...filters,
        // });
      }

      fetch=()=>{
        
      }

      render() {
        console.log(this.props)
        return (
          <Table
            columns={columns}
            rowKey={record => record.login.uuid}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange}
          />
        );
      }
}

export default TableComponent;
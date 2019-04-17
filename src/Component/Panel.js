import React, { Component } from 'react';
import { Table } from 'antd';

class Table extends Component {
    state = {
        data: [],
        pagination: {},
        loading: false,
      };
      
      componentDidMount() {
        // fetch api
      }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        });
    }

      render() {
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

export default Table;
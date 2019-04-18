import React, { Component } from 'react';
import { Table, Tag } from 'antd';


const columns = [
  {
    title: "Name",
    dataIndex: "rocket.rocket_name",
    key: "name",
    width: 130,

    render: (text, record) => (
      <div>
        {text} <br />
        <a className="wikilink" href={record.links.wikipedia}>wiki link</a>
      </div>
    ),
    sorter: (a, b) => a.rocket.rocket_name.length - b.rocket.rocket_name.length
  },
  {
    title: "Description",
    dataIndex: "details",
    key: "details"
  },
  {
    title: "Status",
    dataIndex: "rocket.rocket.active",
    key: "rocket.rocket.active",
    width: 100,
    render: text =>
      text ? (
        <Tag color="#34BE6F">ACTIVE</Tag>
      ) : (
        <Tag color="#34BE6F">NOT ACTIVE</Tag>
      ),
    filters: [
      {
        text: "Active",
        value: true
      },
      {
        text: "Not Active",
        value: false
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => {
      return record.rocket.rocket.active === value;
    }
  }
];

class TableComponent extends Component {
      render() {
        return (
          <Table
            columns={columns}
            rowKey={record => record.id}
            dataSource={this.props.objdata.launchesPast}
            pagination={false}
          />
        );
      }
}

export default TableComponent;
import React from 'react';
// component
import TableComponent from './TableComponent.js'
// ant import
import { Button } from 'antd';
import { PageHeader } from 'antd';

const SpaceX = () => {
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
            <TableComponent/>
        </div>
    )
}

export default SpaceX;
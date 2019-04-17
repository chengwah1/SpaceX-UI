import React from 'react';
// component
import Panel from './Panel.js'

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
            <Panel/>
        </div>
    )
}

export default SpaceX;
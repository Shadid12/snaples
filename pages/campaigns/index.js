import React, { Component } from 'react';
import factory from '../../etherium/factory';

export default class CampaignList extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };
    }

    render() {
        return(
            <div>
                Helllo Worlds!!!
            </div>
        )
    }
}
import React, { Component } from 'react';
import factory from '../../etherium/factory';

export default class CampaignList extends Component {
    static async getInitialProps() {
        const contractsCount = await factory.methods.getContractsCount().call();
        
        const campaigns = await Promise.all(
            Array(parseInt(contractsCount))
              .fill()
              .map((element, index) => {
                return factory.methods.deployedCampaigns(index).call();
              })
        );

        return { campaigns };
    }

    render() {
        console.log(this.props.campaigns);
        return(
            <div>
                Helllo Worlds!!!
            </div>
        )
    }
}
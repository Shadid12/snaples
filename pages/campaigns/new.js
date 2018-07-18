import React, { Component } from 'react';
import web3 from '../../etherium/web3';
import factory from '../../etherium/factory';
import {createCampaign} from '../../db/db';

export default class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        description: '',
        errorMessage: '',
        loading: false
    };

    createCampaing = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        // try {
        //     const accounts = await web3.eth.getAccounts();
        //     console.log('---> Accounts', accounts);
        //     await factory.methods
        //       .createCampaign(this.state.minimumContribution, this.state.description)
        //       .send({
        //         from: accounts[0]
        //       });
        //   } catch (err) {
        //     this.setState({ errorMessage: err.message });
        // }
        await createCampaign('someHash Address', this.state.description);
        this.setState({ loading: false });
    };

    render() {
        return(
            <div>
                <label>Minimum Contribution</label>
                <input value={this.state.minimumContribution}
                        onChange={event =>
                        this.setState({ minimumContribution: event.target.value })} />
                <br />
                <label>Description</label>
                <input value={this.state.description}
                        onChange={event =>
                        this.setState({ description: event.target.value })} />
                <br />
                <button onClick={this.createCampaing}>Submit</button>
            </div>
        )
    }
}
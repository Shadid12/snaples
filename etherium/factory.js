import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xdA29ab563EF7BCa2d20DcC33A3366583d0ebaF19'
);

export default instance;
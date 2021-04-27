const token = artifacts.require("../contracts/FDUToken.sol");
const crowdsale = artifacts.require("../contracts/FDUCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
    const openingTime = 1614764800; // Wednesday, March 3. 2021
    const closingTime = 1761939200; // Friday, October 31. 2025
    const rate = new web3.BigNumber(250); // 250 G0D per 1 wei
    const wallet = '0x1A17a71358B41AfbcaC2C1b891e1509554170640';
    return deployer
        .then(() => {
            return deployer.deploy(token);
        })
        .then(() => {
            return deployer.deploy(
                crowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                token.address
            );
        })
        .then(() => {
            // Make smart-contract an owner
            var tokenContract = web3.eth.contract(token.abi).at(token.address);
            web3.eth.defaultAccount = web3.eth.accounts[0];
            tokenContract.transferOwnership(crowdsale.address);
        });
};

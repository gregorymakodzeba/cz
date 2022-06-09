module.exports = async function ({getNamedAccounts, deployments}) {
    const {deploy} = deployments;

    const {deployer, dev} = await getNamedAccounts();

    const token = await ethers.getContract('Token');
    //  testnet
    //const btcAddress = "0x8BaBbB98678facC7342735486C851ABD7A0d17Ca";
    // mainnet
    const btcAddress = '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c';

    //testnet
    //const pairAddress = "0x742957Dd7b4D4bB7177CF63B61Fd5f0f050Ebaa4";
    //mainnet
    pairAddress = '0x6EEaD0D8D62be08d32B0Cbe7bB65193FcB7aaD9c';

    await deploy('TaxOracle', {
        from: deployer,
        args: [token.address, btcAddress, pairAddress],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ['TokenOracle'];

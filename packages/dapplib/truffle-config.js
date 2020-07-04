require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remind history grid gloom suspect slide'; 
let testAccounts = [
"0xa829bc151dbceaf53ff36a86f220200430b8f845c858ac092c35b1537f1f4dea",
"0xcb87748c571463e1e9e06324cef3a08404fb7f2e09d77482a36a7c45264912b0",
"0xde3d4dac2a883e1400029fd06481893c2849f4ec47fe37d6dbf0b90f9dcc8e6d",
"0x839ad387d1669ca98137118f50481200b4a9b7c0f0936b199d64d84e2e4fd214",
"0xfaaf10af881746a56c788748837bb876186adbdac60341aaca27ced1411c93fe",
"0x0c25e89a1f7bf1ea7f0b753c8a0d38788ababd5104bae39d7e4970a0bbdc4f9f",
"0x7762de2fe67a64c7d96d61d33ec0dc1a3a291b3c9096c8f55629163531e0c9d9",
"0x6873e666f712c81ac91f4117a7c31eb7b4e46f8a3502012a0aaea2aea811a78b",
"0xf5c0ee6d60c838eeb77a1b26edc085125f0f1e61c6485a426f6fe6af64f62d3b",
"0x6c1f5c2eaacf1fa2fa16d5019969ce2d09c040417a3ef169e8663ed9d3af9d1c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

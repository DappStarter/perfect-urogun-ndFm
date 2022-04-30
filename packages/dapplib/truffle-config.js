require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth still evil guess problem metal genuine'; 
let testAccounts = [
"0x45d983732bbf7b9e5106b33cdf231d0f0e60c4c38f5fe30eb1f397aeb13cbe0e",
"0xc03f30a151afc77c98bdc644689cfd6713e94bb8200d6456055cfc314554cb73",
"0x0b7d612f8e08704b45d69e2c0bf535a5c0d198f032887da194d8011cb1025de4",
"0xa8dfcbd7a90b4d4a1df77c453839465723e1ed4a4dc9e5b4c2d41d8f4446ea75",
"0xb07d2d827fdfe5ac355a9dfa6be80368adc1dbd4272334c6c68edbf2391680d5",
"0xcd45ec54b5bf07757e32c9db9ccee1620c3362590454f8200b10be6e71ae6ec1",
"0x0b974dec77d2c68a437557e688fa5eb1bb8b721f14fb635b738799159722ac1a",
"0x774b5aba1dc4cf13b48284c75089ec15a0d30549cf8103648d97896b4225a6ee",
"0x38fe1d2265d1cee91ce9f2583f0876278841f5c966caa54820dd630512064d89",
"0x80be989a19bbfa3529f159301ea13f80a2e89d98e799c3a6a80672fb19f406ba"
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
            version: '^0.8.0'
        }
    }
};


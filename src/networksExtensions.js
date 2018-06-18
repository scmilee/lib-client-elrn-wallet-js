// list of coins from Ian Coleman's bip39 cross referenced with shapeshift
// https://raw.githubusercontent.com/iancoleman/bip39/master/src/js/bitcoinjs-extensions.js
module.exports = {
    bitcoin: {
        type: "bitcoinjs",
        derivePath: "m/44'/0'/0'/0/0",
        symbol: "BTC",
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bech32: 'bc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        bip44: 0,
        pubKeyHash: 0x00,
        scriptHash: 0x05,
        wif: 0x80,
        p2wpkh: {
            baseNetwork: "bitcoin",
            messagePrefix: '\x18Bitcoin Signed Message:\n',
            bech32: 'bc',
            bip32: {
                public: 0x04b24746,
                private: 0x04b2430c
            },
            pubKeyHash: 0x00,
            scriptHash: 0x05,
            wif: 0x80
        },
        p2wpkhInP2sh: {
            baseNetwork: "bitcoin",
            messagePrefix: '\x18Bitcoin Signed Message:\n',
            bech32: 'bc',
            bip32: {
                public: 0x049d7cb2,
                private: 0x049d7878
            },
            pubKeyHash: 0x00,
            scriptHash: 0x05,
            wif: 0x80
        }
    },
    testnet: {
        type: "bitcoinjs",
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bech32: 'tb',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        bip44: 1,
        pubKeyHash: 0x6f,
        scriptHash: 0xc4,
        wif: 0xef,
        p2wpkh: {
            baseNetwork: "testnet",
            messagePrefix: '\x18Bitcoin Signed Message:\n',
            bech32: 'tb',
            bip32: {
                public: 0x045f1cf6,
                private: 0x045f18bc
            },
            pubKeyHash: 0x6f,
            scriptHash: 0xc4,
            wif: 0xef
        },
        p2wpkhInP2sh: {
            baseNetwork: "testnet",
            messagePrefix: '\x18Bitcoin Signed Message:\n',
            bech32: 'tb',
            bip32: {
                public: 0x044a5262,
                private: 0x044a4e28
            },
            pubKeyHash: 0x6f,
            scriptHash: 0xc4,
            wif: 0xef
        }
    },
    litecoin: {
        type: "bitcoinjs",
        symbol: "LTC",
        derivePath: "m/44'/2'/0'/0/0",
        messagePrefix: '\x19Litecoin Signed Message:\n',
        bip32: {
            public: 0x019da462,
            private: 0x019d9cfe
        },
        bip44: 2,
        pubKeyHash: 0x30,
        scriptHash: 0x32,
        wif: 0xb0,
        p2wpkhInP2sh: {
            baseNetwork: "litecoin",
            messagePrefix: '\x19Litecoin Signed Message:\n',
            bip32: {
                public: 0x01b26ef6,
                private: 0x01b26792
            },
            pubKeyHash: 0x30,
            scriptHash: 0x32,
            wif: 0xb0
        }
    },
    zcash: {
        type: "bitcoinjs",
        symbol: "ZEC",
        messagePrefix: '\x18Zcash Signed Message:\n',
        bip32: {
            public: 0x0488B21E,
            private: 0x0488ADE4,
        },
        bip44: 133,
        pubKeyHash: 0x1CB8,
        scriptHash: 0x1CBD,
        wif: 0x80
    },
    dogecoin: {
        type: "bitcoinjs",
        symbol: "DOGE",
        derivePath: "m/44'/3'/0'/0/0",
        messagePrefix: '\x19Dogecoin Signed Message:\n',
        bip32: {
            public: 0x02facafd,
            private: 0x02fac398
        },
        bip44: 3,
        pubKeyHash: 0x1e,
        scriptHash: 0x16,
        wif: 0x9e
    },
    bgold: {
        type: "bitcoinjs",
        symbol: "BTG",
        derivePath: "m/0/0",
        messagePrefix: 'unused',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4,
        },
        bip44: 156,
        pubKeyHash: 0x26,
        scriptHash: 0x17,
        wif: 0x80
    },
    // blackcoin seems to have an ERC20 version and bitcoinjs entry, so we're 
    // choosing one.  (we don't know if the choice is correct)
    // blackcoin: {
    //     symbol: "BLK",
    //     derivePath: "m/44'/10'/0'/0/0",
    //     messagePrefix: '\x18BlackCoin Signed Message:\n',
    //     bip32: {
    //         public: 0x02CFBEDE,
    //         private: 0x02CFBF60
    //     },
    //     bip44: 10,
    //     pubKeyHash: 0x19,
    //     scriptHash: 0x55,
    //     wif: 0x99
    // },
    clam: {
        type: "bitcoinjs",
        symbol: "CLAM",
        derivePath: "m/44'/23'/0'/0/0",
        messagePrefix: 'unused',
        bip32: {
            public: 0xa8c26d64,
            private: 0xa8c17826
        },
        bip44: 23,
        pubKeyHash: 0x89,
        scriptHash: 0x00, // TODO set this correctly
        wif: 0x85
    },
    dash: {
      type: "bitcoinjs",
      symbol: "DASH",
      derivePath: "m/44'/5'/0'/0/0",
      messagePrefix: 'unused',
      bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4
      },
      bip44: 5,
      pubKeyHash: 0x4c,
      scriptHash: 0x10,
      wif: 0xcc
    },
    digibyte: {
      type: "bitcoinjs",
      symbol: "DGB",
      derivePath: "m/44'/20'/0'/0/0",
      messagePrefix: '\x18DigiByte Signed Message:\n',
      bip32: {
          public: 0x0488B21E,
          private: 0x0488ADE4,
      },
      bip44: 20,
      pubKeyHash: 0x1e,
      scriptHash: 0x05,
      wif: 0x80,
    },
    game: {
      type: "bitcoinjs",
      symbol: "GAME",
      derivePath: "m/44'/101'/0'/0/0",
      messagePrefix: 'unused',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      bip44: 101,
      pubKeyHash: 0x26,
      scriptHash: 0x05,
      wif: 0xa6,
    },
    monacoin: {
      type: "bitcoinjs",
      symbol: "MONA",
      derivePath: "m/44'/22'/0'/0/0",
      messagePrefix: '\x18Monacoin Signed Message:\n',
      bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
      },
      bip44: 22,
      pubKeyHash: 0x32,
      scriptHash: 0x37,
      wif: 0xb0
    },
    omnicore: {
      type: "bitcoinjs",
      symbol: "MSC",
      derivePath: "m/44'/200'/0'/0/0",
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bip32: {
          public: 0x0488B21E,
          private: 0x0488ADE4,
      },
      bip44: 200,
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
    },
    neoscoin: {
      type: "bitcoinjs",
      symbol: "NEO",
      derivePath: "m/44'/25'/0'/0/0",
      messagePrefix: '\x18NeosCoin Signed Message:\n',
      bip32: {
          public: 0x0488B21E,
          private: 0x0488ADE4,
      },
      bip44: 25,
      pubKeyHash: 0x35,
      scriptHash: 0x05,
      wif: 0xb1,
    },
    namecoin: {
      type: "bitcoinjs",
      symbol: "NMC",
      derivePath: "m/44'/7'/0'/0/0",
      messagePrefix: 'unused',
      bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4
      },
      bip44: 7,
      pubKeyHash: 0x34,
      scriptHash: 0x00, // TODO set this correctly
      wif: 0x80
    },
    novacoin: {
      type: "bitcoinjs",
      symbol: "NVC",
      derivePath: "m/44'/50'/0'/0/0",
      messagePrefix: '\x18NovaCoin Signed Message:\n',
      bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
      },
      bip44: 50,
      pubKeyHash: 0x08,
      scriptHash: 0x14,
      wif: 0x88,
    },
    potcoin: {
      type: "bitcoinjs",
      symbol: "POT",
      derivePath: "m/44'/81'/0'/0/0",
      messagePrefix: '\x18Potcoin Signed Message:\n',
      bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
      },
      bip44: 81,
      pubKeyHash: 0x37,
      scriptHash: 0x05,
      wif: 0xb7,
    },
    peercoin: {
      type: "bitcoinjs",
      symbol: "PPC",
      derivePath: "m/44'/6'/0'/0/0",
      messagePrefix: 'unused',
      bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4
      },
      bip44: 6,
      pubKeyHash: 0x37,
      scriptHash: 0x00, // TODO set this correctly
      wif: 0xb7
    },
    komodo: {
      type: "bitcoinjs",
      symbol: "KMD",
      derivePath: "m/44'/141'/0'/0/0",
      messagePrefix: '\x18Komodo Signed Message:\n',
      bip32: {
          public: 0x0488B21E,
          private: 0x0488ADE4
      },
      bip44: 141,
      pubKeyHash: 0x3c,
      scriptHash: 0x55,
      wif: 0xbc
    },
    lbry: {
      type: "bitcoinjs",
      symbol: "LBC",
      derivePath: "m/44'/140'/0'/0/0",
      messagePrefix: '\x18LBRYcrd Signed Message:\n',
      bip32: {
          public: 0x0488B21E,
          private: 0x0488ADE4,
      },
      bip44: 140,
      pubKeyHash: 0x55,
      scriptHash: 0x7a,
      wif: 0x1c,
    },
    revolutionvr: {
      type: "bitcoinjs",
      symbol: "VOX",
      derivePath: "m/44'/129'/0'/0/0",
      messagePrefix: '\x18Voxels Signed Message:\n',
      bip32: {
          public: 0x0488B21E,
          private: 0x0488ADE4,
      },
      bip44: 129,
      pubKeyHash: 0x46,
      scriptHash: 0x05,
      wif: 0xc6,
    },
    vertcoin: {
      type: "bitcoinjs",
      symbol: "VTC",
      derivePath: "m/44'/28'/0'/0/0",
      messagePrefix: '\x18Vertcoin Signed Message:\n',
      bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
      },
      bip44: 28,
      pubKeyHash: 0x47,
      scriptHash: 0x05,
      wif: 0x80,
    },
    first : {
      symbol: "FIRST",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7"
    },
    ant: {
      symbol: "ANT",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x960b236A07cf122663c4303350609A66A7B288C0"
    },
    bnt: {
      symbol:  "BNT",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c"
    },
    blk: {
      symbol:  "BLK",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x9d09a8bb92f5b9dd10c562e58b8dd3661e8ea39e"
    },
    cvc: {
      symbol: "CVC",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x41e5560054824ea6b0732e656e3ad64e20e94e45"
    },
    dnt: {
      symbol: "DNT",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x0abdace70d3790235af448c88547603b945604ea"
    },
    gno: {
      symbol:"GNO",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x6810e776880c02933d47db1b9fc05908e5386b96"
    },
    gnt: {
      symbol:"GNT",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0xa74476443119A942dE498590Fe1f2454d7D4aC0d"
    },
    gup: {
      symbol:"GUP",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0xf7b098298f7c69fc14610bf71d5e02c60792894c"
    },
    nmr: {
      symbol: "NMR",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671"
    },
    omg: {
      symbol:"OMG",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
    },
    qtum: {
      symbol: "QTUM",
      type: "token",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x9a642d6b3368ddc662CA244bAdf32cDA716005BC"
    },
    rep: {
      symbol:"REP",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0xe94327d07fc17907b4db788e5adf2ed424addff6"
    },
    rlc: {
      symbol: "RLC",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x607F4C5BB672230e8672085532f7e901544a7375"
    },
    salt: {
      symbol: "SALT",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x4156D3342D5c385a87D264F90653733592000581"
    },
    snt: {
      symbol: "SNT",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x744d70fdbe2ba4cf95131626614a1763df805b9e"
    },
    storj: {
      symbol: "STORJ",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac"
    },
    swt: {
      symbol:"SWT",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0xb9e7f8568e08d5659f5d29c4997173d84cdf2607"
    },
    trst: {
      symbol: "TRST",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b"
    },
    usdt: {
      symbol:"USDT",
      type: "token",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7"
    },
    wings: {
      symbol:"WINGS",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0x667088b212ce3d06a1b553a7221E1fD19000d9aF"
    },
    zrx: {
      symbol: "ZRX",
      type: "erc20",
      derivePath: "m/44'/60'/0'/0/0",
      contractAddress: "0xe41d2489571d322189246dafa5ebde1f4699f498"
    }
}

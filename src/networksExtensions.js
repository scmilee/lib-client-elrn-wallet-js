// list of coins from Ian Coleman's bip39 cross referenced with shapeshift
// https://raw.githubusercontent.com/iancoleman/bip39/master/src/js/bitcoinjs-extensions.js
module.exports = {
    bitcoin: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bech32: 'bc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
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
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bech32: 'tb',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
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
        messagePrefix: '\x19Litecoin Signed Message:\n',
        bip32: {
            public: 0x019da462,
            private: 0x019d9cfe
        },
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
        messagePrefix: '\x18Zcash Signed Message:\n',
        bip32: {
            public: 0x0488B21E,
            private: 0x0488ADE4,
        },
        pubKeyHash: 0x1CB8,
        scriptHash: 0x1CBD,
        wif: 0x80
    },
    dogecoin: {
        messagePrefix: '\x19Dogecoin Signed Message:\n',
        bip32: {
            public: 0x02facafd,
            private: 0x02fac398
        },
        pubKeyHash: 0x1e,
        scriptHash: 0x16,
        wif: 0x9e
    },
    bgold: {
        messagePrefix: 'unused',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 38,
        scriptHash: 23,
        wif: 128
    },
    blackcoin: {
        messagePrefix: '\x18BlackCoin Signed Message:\n',
        bip32: {
            public: 0x02CFBEDE,
            private: 0x02CFBF60
        },
        pubKeyHash: 0x19,
        scriptHash: 0x55,
        wif: 0x99
    },
    clam: {
        messagePrefix: 'unused',
        bip32: {
            public: 0xa8c26d64,
            private: 0xa8c17826
        },
        pubKeyHash: 0x89,
        scriptHash: 0x00, // TODO set this correctly
        wif: 0x85
    },
    dash: {
        messagePrefix: 'unused',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x4c,
        scriptHash: 0x10,
        wif: 0xcc
    },
    digibyte: {
        messagePrefix: '\x18DigiByte Signed Message:\n',
        bip32: {
            public: 0x0488B21E,
            private: 0x0488ADE4,
        },
        pubKeyHash: 0x1e,
        scriptHash: 0x05,
        wif: 0x80,
    },
    game: {
        messagePrefix: 'unused',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x26,
        scriptHash: 0x05,
        wif: 0xa6
    },
    monacoin: {
        messagePrefix: '\x18Monacoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x32,
        scriptHash: 0x37,
        wif: 0xb0
    },
    omnicore: {
        messagePrefix: '\x18Bitcoin Signed Message:\n',
        bip32: {
            public: 0x0488B21E,
            private: 0x0488ADE4,
        },
        pubKeyHash: 0x00,
        scriptHash: 0x05,
        wif: 0x80,
    },
    neoscoin: {
        messagePrefix: '\x18NeosCoin Signed Message:\n',
        bip32: {
            public: 0x0488B21E,
            private: 0x0488ADE4,
        },
        pubKeyHash: 0x35,
        scriptHash: 0x05,
        wif: 0xb1,
    },
    nubits: {
        messagePrefix: '\x18Nu Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x19,
        scriptHash: 0x1a,
        wif: 0x96,
    },
    namecoin: {
        messagePrefix: 'unused',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x34,
        scriptHash: 0x00, // TODO set this correctly
        wif: 0x80
    },
    novacoin: {
        messagePrefix: '\x18NovaCoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4,
        },
        pubKeyHash: 0x08,
        scriptHash: 0x14,
        wif: 0x88,
    },
    potcoin: {
        messagePrefix: '\x18Potcoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4,
        },
        pubKeyHash: 0x37,
        scriptHash: 0x05,
        wif: 0xb7,
    },
    peercoin: {
        messagePrefix: 'unused',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x37,
        scriptHash: 0x00, // TODO set this correctly
        wif: 0xb7
    },
    reddcoin: {
        messagePrefix: '\x18Reddcoin Signed Message:\n',
        bip32: {
            public: 0x0488B21E,
            private: 0x0488ADE4,
        },
        pubKeyHash: 0x3d,
        scriptHash: 0x05,
        wif: 0xbd,
    },
    komodo: {
        messagePrefix: '\x18Komodo Signed Message:\n',
        bip32: {
            public: 0x0488B21E,
            private: 0x0488ADE4
        },
        pubKeyHash: 0x3c,
        scriptHash: 0x55,
        wif: 0xbc
    },
    lbry: {
        messagePrefix: '\x18LBRYcrd Signed Message:\n',
        bip32: {
            public: 0x0488B21E,
            private: 0x0488ADE4,
        },
        pubKeyHash: 0x55,
        scriptHash: 0x7a,
        wif: 0x1c,
    },
    revolutionvr: {
        messagePrefix: '\x18Voxels Signed Message:\n',
        bip32: {
            public: 0x0488B21E,
            private: 0x0488ADE4,
        },
        pubKeyHash: 0x46,
        scriptHash: 0x05,
        wif: 0xc6,
    },
    vertcoin: {
        messagePrefix: '\x18Vertcoin Signed Message:\n',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4,
        },
        pubKeyHash: 0x47,
        scriptHash: 0x05,
        wif: 0x80,
    }
}

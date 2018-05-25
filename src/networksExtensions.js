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
  zcash : {
    messagePrefix: '\x18Zcash Signed Message:\n',
    bip32: {
        public: 0x0488B21E,
        private: 0x0488ADE4,
    },
    pubKeyHash: 0x1CB8,
    scriptHash: 0x1CBD,
    wif: 0x80
  },
  dogecoin : {
    messagePrefix: '\x19Dogecoin Signed Message:\n',
    bip32: {
      public: 0x02facafd,
      private: 0x02fac398
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e
  },
  bgold : {
    messagePrefix: 'unused',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4
      },
      pubKeyHash: 38,
      scriptHash: 23,
      wif: 128
  }
}

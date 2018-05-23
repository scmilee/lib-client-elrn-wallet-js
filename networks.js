// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

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
    wif: 0x80
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
    wif: 0xef
  },
  litecoin: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0
  },
  zcash : {
    messagePrefix: '\x18Zcash Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1CB8,
    scriptHash: 0x1CBD,
    wif: 0x80,
  },
  shadow : {
    messagePrefix: 'unused',
    bip32: {
      public: 0xEE80286A,
      private: 0xEE8031E8
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0xbf
  },

  shadowtn : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x76C0FDFB,
      private: 0x76C1077A
    },
    pubKeyHash: 0x7f,
    scriptHash: 0xc4,
    wif: 0xff
  },

  clam : {
    messagePrefix: 'unused',
    bip32: {
      public: 0xa8c26d64,
      private: 0xa8c17826
    },
    pubKeyHash: 0x89,
    scriptHash: 0x00, // TODO set this correctly
    wif: 0x85
  },

  crown : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
  },

  dash : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x4c,
    scriptHash: 0x10,
    wif: 0xcc
  },

  maza : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x32,
    scriptHash: 0x09,
    wif: 0xe0
  },

  dashtn : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x8c,
    scriptHash: 0x13,
    wif: 0xef
  },

  game : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x26,
    scriptHash: 0x05,
    wif: 0xa6
  },

  namecoin : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x34,
    scriptHash: 0x00, // TODO set this correctly
    wif: 0x80
  },

  peercoin : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x37,
    scriptHash: 0x00, // TODO set this correctly
    wif: 0xb7
  },

  axe : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x37,
    scriptHash: 0x10, // TODO set this correctly
    wif: 0xcc
  },

  slimcoin : {
    messagePrefix: 'unused',
    bip32: {
      public: 0xef6adf10,
      private: 0xef69ea80
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0x46
  },

  slimcointn : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x043587CF,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0x57
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

  denarius : {
    messagePrefix: '\x19Denarius Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x5a,
    wif: 0x9e
  },

  neblio : {
    messagePrefix: '\x18Neblio Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x35,
    scriptHash: 0x70,
    wif: 0xb5
  },

  viacoin : {
    messagePrefix: '\x18Viacoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x47,
    scriptHash: 0x21,
    wif: 0xc7
  },

  viacointestnet : {
    messagePrefix: '\x18Viacoin Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x7f,
    scriptHash: 0xc4,
    wif: 0xff
  },

  gamerscoin : {
    messagePrefix: '\x19Gamerscoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x26,
    scriptHash: 0x05,
    wif: 0xA6
  },

  jumbucks : {
    messagePrefix: '\x19Jumbucks Signed Message:\n',
    bip32: {
      public: 0x037a689a,
      private: 0x037a6460
    },
    pubKeyHash: 0x2b,
    scriptHash: 0x05,
    wif: 0xab
  },

  zetacoin : {
    messagePrefix: '\x18Zetacoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x50,
    scriptHash: 0x09,
    wif: 0xe0
  },

  myriadcoin : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x32,
    scriptHash: 0x00, // TODO set this correctly
    wif: 0xb2
  },


  onixcoin : {
      messagePrefix: 'unused',
      bip32: {
        public: 0x049d7cb2,
        private: 0x049d7878
      },
      pubKeyHash: 0x4B,
      scriptHash: 0x05,
      wif: 0x80
  },

  pivx : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x022d2533,
      private: 0x0221312b
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x0d,
    wif: 0xd4
  },

  pivxtestnet : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x3a8061a0,
      private: 0x3a805837
    },
    pubKeyHash: 0x8b,
    scriptHash: 0x13,
    wif: 0xef
  },

  fujicoin : {
    messagePrefix: '\x19FujiCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x24,
    scriptHash: 0x10,
    wif: 0xa4
  },

  nubits : {
    messagePrefix: '\x18Nu Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x19,
    scriptHash: 0x1a,
    wif: 0x96,
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
  },

  monacoin : {
      messagePrefix: '\x18Monacoin Signed Message:\n',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4
      },
      pubKeyHash: 0x32,
      scriptHash: 0x37,
      wif: 0xb0
  },

  litecoinXprv : {
      messagePrefix: '\x19Litecoin Signed Message:\n',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 0x30,
      scriptHash: 0x32,
      wif: 0xb0
  },

  komodo : {
    messagePrefix: '\x18Komodo Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc
  },

  blackcoin : {
    messagePrefix: '\x18BlackCoin Signed Message:\n',
    bip32: {
      public: 0x02CFBEDE,
      private: 0x02CFBF60
    },
    pubKeyHash: 0x19,
    scriptHash: 0x55,
    wif: 0x99
  },

  beetlecoin : {
    messagePrefix: '\x19Beetlecoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1A,
    scriptHash: 0x55,
    wif: 0x99,
  },


  adcoin : {
    messagePrefix: '\x18AdCoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x05,
    wif: 0xb0,
  },

  asiacoin : {
    messagePrefix: '\x18AsiaCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x08,
    wif: 0x97,
  },

  auroracoin : {
    messagePrefix: '\x18AuroraCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x05,
    wif: 0x97,
  },

  bata : {
    messagePrefix: '\x18Bata Signed Message:\n',
    bip32: {
      public: 0xA40C86FA,
      private: 0xA40B91BD,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x05,
    wif: 0xa4,
  },

  belacoin : {
    messagePrefix: '\x18BelaCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x05,
    wif: 0x99,
  },

  atom : {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x17,
    scriptHash: 0x0a,
    wif: 0x80,
  },

  bitcoinplus : {
    messagePrefix: '\x18BitcoinPlus Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x08,
    wif: 0x99,
  },

  bitcore : {
    messagePrefix: '\x18BitCore Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
  },

  bitsend : {
    messagePrefix: '\x18Bitsend Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x66,
    scriptHash: 0x05,
    wif: 0xcc,
  },

  britcoin : {
    messagePrefix: '\x18BritCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x55,
    wif: 0x99,
  },

  canadaecoin : {
    messagePrefix: '\x18Canada eCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0x9c,
  },

  cannacoin : {
    messagePrefix: '\x18Cannacoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0x9c,
  },

  clubcoin : {
    messagePrefix: '\x18ClubCoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x55,
    wif: 0x99,
  },

  compcoin : {
    messagePrefix: '\x18CompCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x55,
    wif: 0x9c,
  },

  crave : {
    messagePrefix: '\x18DarkNet Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x46,
    scriptHash: 0x55,
    wif: 0x99,
  },

  defcoin : {
    messagePrefix: '\x18defcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x05,
    wif: 0x9e,
  },

  diamond : {
    messagePrefix: '\x18Diamond Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x5a,
    scriptHash: 0x08,
    wif: 0xda,
  },

  digibyte : {
    messagePrefix: '\x18DigiByte Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x05,
    wif: 0x80,
  },

  digitalcoin : {
    messagePrefix: '\x18Digitalcoin Signed Message:\n',
    bip32: {
      public: 0x9e0488B2,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x05,
    wif: 0x9e,
  },

  ecoin : {
    messagePrefix: '\x18eCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x5c,
    scriptHash: 0x14,
    wif: 0xdc,
  },

  edrcoin : {
    messagePrefix: '\x18EDRcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x5d,
    scriptHash: 0x1c,
    wif: 0xdd,
  },

  egulden : {
    messagePrefix: '\x18Egulden Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x05,
    wif: 0xb0,
  },

  einsteinium : {
    messagePrefix: '\x18Einsteinium Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x05,
    wif: 0xa1,
  },

  europecoin : {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x05,
    wif: 0xa8,
  },

  exclusivecoin : {
    messagePrefix: '\x18ExclusiveCoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x89,
    wif: 0xa1,
  },

  feathercoin : {
    messagePrefix: '\x18Feathercoin Signed Message:\n',
    bip32: {
      public: 0x0488BC26,
      private: 0x0488DAEE,
    },
    pubKeyHash: 0x0e,
    scriptHash: 0x05,
    wif: 0x8e,
  },

  firstcoin : {
    messagePrefix: '\x18FirstCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x23,
    scriptHash: 0x05,
    wif: 0xa3,
  },

  flashcoin : {
    messagePrefix: '\x18Flashcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x44,
    scriptHash: 0x82,
    wif: 0xc4,
  },

  gcr : {
    messagePrefix: '\x18GCR Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x61,
    wif: 0x9a,
  },

  gobyte : {
    messagePrefix: '\x18DarkCoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x0a,
    wif: 0xc6,
  },

  gridcoin : {
    messagePrefix: '\x18Gridcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3e,
    scriptHash: 0x55,
    wif: 0xbe,
  },

  gulden : {
    messagePrefix: '\x18Guldencoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x26,
    scriptHash: 0x62,
    wif: 0x62,
  },

  helleniccoin : {
    messagePrefix: '\x18helleniccoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x05,
    wif: 0xb0,
  },

  hempcoin : {
    messagePrefix: '\x18Hempcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x28,
    scriptHash: 0x08,
    wif: 0xa8,
  },

  insane : {
    messagePrefix: '\x18INSaNe Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x66,
    scriptHash: 0x39,
    wif: 0x37,
  },

  iop : {
    messagePrefix: '\x18IoP Signed Message:\n',
    bip32: {
      public: 0x2780915F,
      private: 0xAE3416F6,
    },
    pubKeyHash: 0x75,
    scriptHash: 0xae,
    wif: 0x31,
  },

  ixcoin : {
    messagePrefix: '\x18Ixcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x8a,
    scriptHash: 0x05,
    wif: 0x80,
  },

  kobocoin : {
    messagePrefix: '\x18Kobocoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x23,
    scriptHash: 0x1c,
    wif: 0xa3,
  },

  landcoin : {
    messagePrefix: '\x18Landcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x30,
    scriptHash: 0x7a,
    wif: 0xb0,
  },

  lbry : {
    messagePrefix: '\x18LBRYcrd Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x55,
    scriptHash: 0x7a,
    wif: 0x1c,
  },

  linx : {
    messagePrefix: '\x18LinX Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x4b,
    scriptHash: 0x05,
    wif: 0xcb,
  },

  litecoincash : {
    messagePrefix: '\x18Litecoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1c,
    scriptHash: 0x05,
    wif: 0xb0,
  },

  lynx : {
    messagePrefix: '\x18Lynx Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x2d,
    scriptHash: 0x32,
    wif: 0xad,
  },

  minexcoin : {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x4b,
    scriptHash: 0x05,
    wif: 0x80,
  },

  navcoin : {
    messagePrefix: '\x18Navcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x55,
    wif: 0x96,
  },

  neoscoin : {
    messagePrefix: '\x18NeosCoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x05,
    wif: 0xb1,
  },

  neurocoin : {
    messagePrefix: '\x18PPCoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x35,
    scriptHash: 0x75,
    wif: 0xb5,
  },

  newyorkc : {
    messagePrefix: '\x18newyorkc Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x16,
    wif: 0xbc,
  },

  novacoin : {
    messagePrefix: '\x18NovaCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x08,
    scriptHash: 0x14,
    wif: 0x88,
  },

  nushares : {
    messagePrefix: '\x18Nu Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x40,
    wif: 0x95,
  },

  okcash : {
    messagePrefix: '\x18OKCash Signed Message:\n',
    bip32: {
      public: 0x03CC23D7,
      private: 0x03CC1C73,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x1c,
    wif: 0x03,
  },

  omnicore : {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
  },

  pesobit : {
    messagePrefix: '\x18Pesobit Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x55,
    wif: 0xb7,
  },

  pinkcoin : {
    messagePrefix: '\x18Pinkcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x03,
    scriptHash: 0x1c,
    wif: 0x83,
  },

  poswcoin : {
    messagePrefix: '\x18Poswcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x55,
    wif: 0xb7,
  },

  potcoin : {
    messagePrefix: '\x18Potcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x05,
    wif: 0xb7,
  },

  putincoin : {
    messagePrefix: '\x18PutinCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x37,
    scriptHash: 0x14,
    wif: 0xb7,
  },

  reddcoin : {
    messagePrefix: '\x18Reddcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x3d,
    scriptHash: 0x05,
    wif: 0xbd,
  },

  revolutionvr : {
    messagePrefix: '\x18Voxels Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x46,
    scriptHash: 0x05,
    wif: 0xc6,
  },

  rubycoin : {
    messagePrefix: '\x18Rubycoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x3c,
    scriptHash: 0x55,
    wif: 0xbc,
  },

  smileycoin : {
    messagePrefix: '\x18Smileycoin Signed Message:\n',
    bip32: {
      public: 0x1E562D9A,
      private: 0x1E5631BC,
    },
    pubKeyHash: 0x19,
    scriptHash: 0x05,
    wif: 0x05,
  },

  solarcoin : {
    messagePrefix: '\x18SolarCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x12,
    scriptHash: 0x05,
    wif: 0x92,
  },

  stratis : {
    messagePrefix: '\x18Stratis Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x7d,
    wif: 0xbf,
  },

  syscoin : {
    messagePrefix: '\x18Syscoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x3f,
    scriptHash: 0x05,
    wif: 0xbf,
  },


  toa : {
    messagePrefix: '\x18TOA Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x41,
    scriptHash: 0x17,
    wif: 0xc1,
  },

  ultimatesecurecash : {
    messagePrefix: '\x18UltimateSecureCash Signed Message:\n',
    bip32: {
      public: 0xEE80286A,
      private: 0xEE8031E8,
    },
    pubKeyHash: 0x44,
    scriptHash: 0x7d,
    wif: 0xbf,
  },

  unobtanium : {
    messagePrefix: '\x18Unobtanium Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x82,
    scriptHash: 0x1e,
    wif: 0xe0,
  },

  vcash : {
    messagePrefix: '\x18Vcash Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x08,
    wif: 0xc7,
  },

  verge : {
    messagePrefix: '\x18VERGE Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x21,
    wif: 0x9e,
  },

  vertcoin : {
    messagePrefix: '\x18Vertcoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x05,
    wif: 0x80,
  },

  vivo : {
    messagePrefix: '\x18DarkCoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x46,
    scriptHash: 0x0a,
    wif: 0xc6,
  },

  vpncoin : {
    messagePrefix: '\x18VpnCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x47,
    scriptHash: 0x05,
    wif: 0xc7,
  },

  whitecoin : {
    messagePrefix: '\x18Whitecoin Signed Message:\n',
    bip32: {
      public: 0x04887F1E,
      private: 0x048894ED,
    },
    pubKeyHash: 0x49,
    scriptHash: 0x57,
    wif: 0xc9,
  },

  wincoin : {
    messagePrefix: '\x18WinCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4,
    },
    pubKeyHash: 0x49,
    scriptHash: 0x1c,
    wif: 0xc9,
  },

  zcoin : {
    messagePrefix: '\x18Zcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x52,
    scriptHash: 0x07,
    wif: 0xd2,
  },



  xuez : {
    messagePrefix: 'unused',
    bip32: {
      public: 0x022d2533,
      private: 0x0221312b
    },
    pubKeyHash: 0x4b,
    scriptHash: 0x12,
    wif: 0xd4
  },

  bitcoinprivate : {
    messagePrefix: '\x18BitcoinPrivate Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1325,
    scriptHash: 0x13AF,
    wif: 0x80,
  },

  bitcoinz : {
    messagePrefix: '\x18BitcoinZ Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1CB8,
    scriptHash: 0x1CBD,
    wif: 0x80,
  },

  zclassic : {
    messagePrefix: '\x18Zcash Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x1CB8,
    scriptHash: 0x1CBD,
    wif: 0x80,
  },

  zencash : {
    messagePrefix: '\x18Zcash Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4,
    },
    pubKeyHash: 0x2089,
    scriptHash: 0x2096,
    wif: 0x80,
  },

  energi : {
    messagePrefix: 'DarkCoin Signed Message:\n',
    bip32: {
      public: 0x03B8C856,
      private: 0xD7DC6E9F,
    },
    pubKeyHash: 0x21,
    scriptHash: 0x35,
    wif: 0x6a,
  }
}

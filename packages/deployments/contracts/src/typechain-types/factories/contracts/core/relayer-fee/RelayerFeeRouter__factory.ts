/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  RelayerFeeRouter,
  RelayerFeeRouterInterface,
} from "../../../../contracts/core/relayer-fee/RelayerFeeRouter";

const _abi = [
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFeeRouter__onlyConnext_notConnext",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFeeRouter__send_claimEmpty",
    type: "error",
  },
  {
    inputs: [],
    name: "RelayerFeeRouter__send_recipientEmpty",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "originAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "origin",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "transferIds",
        type: "bytes32[]",
      },
    ],
    name: "Receive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "transferIds",
        type: "bytes32[]",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "remote",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Send",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "connext",
        type: "address",
      },
    ],
    name: "SetConnext",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "connext",
    outputs: [
      {
        internalType: "contract IConnextHandler",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "enrollRemoteRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "remotes",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "_transferIds",
        type: "bytes32[]",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
    ],
    name: "setConnext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract XAppConnectionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ab0806100206000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063b1f8100d116100a2578063d1851c9211610071578063d1851c9214610221578063d232c22014610232578063d7d680a31461025b578063de4b05481461026e578063ffa1ad741461028157600080fd5b8063b1f8100d146101e0578063b49c53a7146101f3578063c4d66de814610206578063c5b350df1461021957600080fd5b80636a42b8f8116100e95780636a42b8f814610185578063715018a61461018e57806383bbb806146101965780638da5cb5b146101b6578063ab2dc3f5146101cd57600080fd5b80633339df961461011b5780633cf52ffb1461014b57806341bdc8b51461015d5780634d6f201314610172575b600080fd5b60345461012e906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6002545b604051908152602001610142565b61017061016b3660046114e5565b61029b565b005b6101706101803660046114e5565b6102ee565b62093a8061014f565b610170610369565b61014f6101a4366004611516565b60666020526000908152604090205481565b6000546201000090046001600160a01b031661012e565b6101706101db366004611547565b61042e565b6101706101ee3660046114e5565b6105dd565b610170610201366004611623565b610691565b6101706102143660046114e5565b6106db565b610170610757565b6001546001600160a01b031661012e565b61024b6000546201000090046001600160a01b03161590565b6040519015158152602001610142565b61017061026936600461164d565b6107b2565b60985461012e906001600160a01b031681565b610289600081565b60405160ff9091168152602001610142565b6000546201000090046001600160a01b031633146102cc576040516311a8a1bb60e31b815260040160405180910390fd5b603480546001600160a01b0319166001600160a01b0392909216919091179055565b6000546201000090046001600160a01b0316331461031f576040516311a8a1bb60e31b815260040160405180910390fd5b609880546001600160a01b0319166001600160a01b0383169081179091556040517f8ff00ea0f06ea523b8f4b80a53bb86b4967c9909b4e354b47a83371249ad57f390600090a250565b6000546201000090046001600160a01b0316331461039a576040516311a8a1bb60e31b815260040160405180910390fd5b6002546000036103bd57604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426103cf91906116f6565b116103ed576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b031615610417576040516323295ef960e01b815260040160405180910390fd5b60015461042c906001600160a01b0316610963565b565b610437336109d3565b6104735760405162461bcd60e51b8152602060048201526008602482015267217265706c69636160c01b60448201526064015b60405180910390fd5b838261047f8282610a48565b6104bc5760405162461bcd60e51b815260206004820152600e60248201526d10b932b6b7ba32903937baba32b960911b604482015260640161046a565b60006104d66104cb8583610a72565b62ffffff1916610a96565b905060006104e962ffffff198316610aaf565b905060006104fc62ffffff198416610ae0565b60985460405163d7aada8160e01b81529192506001600160a01b03169063d7aada819061052f9085908590600401611748565b600060405180830381600087803b15801561054957600080fd5b505af115801561055d573d6000803e3d6000fd5b50505050816001600160a01b03168963ffffffff166105918b8b63ffffffff1660209190911b67ffffffff00000000161790565b67ffffffffffffffff167fb29810b17f96b207e4d6c91fd73ec7ab882db28c3a239f2eb6c7c801c43d003b846040516105ca919061176c565b60405180910390a4505050505050505050565b6000546201000090046001600160a01b0316331461060e576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561063357506001600160a01b03811615155b15610651576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831662010000909204160361068557604051634a2fb73f60e11b815260040160405180910390fd5b61068e81610baf565b50565b6000546201000090046001600160a01b031633146106c2576040516311a8a1bb60e31b815260040160405180910390fd5b63ffffffff909116600090815260666020526040902055565b600054610100900460ff166106f65760005460ff16156106fa565b303b155b6107165760405162461bcd60e51b815260040161046a9061177f565b600054610100900460ff16158015610738576000805461ffff19166101011790555b61074182610bfd565b8015610753576000805461ff00191690555b5050565b6001546001600160a01b03163314610782576040516311a7f27160e11b815260040160405180910390fd5b62093a806002544261079491906116f6565b116104175760405163d39c12bb60e01b815260040160405180910390fd5b6098546001600160a01b031633146107dd5760405163014e189b60e41b815260040160405180910390fd5b60008190036107ff57604051635aef8ded60e01b815260040160405180910390fd5b6001600160a01b0383166108265760405163f7afa16f60e01b815260040160405180910390fd5b600061083185610c7d565b90506000610840858585610ccf565b9050603460009054906101000a90046001600160a01b03166001600160a01b0316639fa92f9d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610895573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b991906117cd565b6001600160a01b031663fa31de018784846040518463ffffffff1660e01b81526004016108e893929190611837565b600060405180830381600087803b15801561090257600080fd5b505af1158015610916573d6000803e3d6000fd5b505050507f90d6f02f078dba10aa43c39bf7a3d3bc9629a280b078d473da5486c6531ec6418686868686866040516109539695949392919061185c565b60405180910390a1505050505050565b600080546001600160a01b038381166201000081810262010000600160b01b031985161785556002859055600180546001600160a01b031916905560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b603454604051635190bc5360e01b81526001600160a01b0383811660048301526000921690635190bc5390602401602060405180830381865afa158015610a1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a4291906118d9565b92915050565b63ffffffff821660009081526066602052604081205482148015610a6b57508115155b9392505050565b815160009060208401610a8d64ffffffffff85168284610d03565b95945050505050565b6000610a42610aa483610d4a565b62ffffff1916610d7c565b6000816001610ac6815b62ffffff19841690610dd7565b50610ad862ffffff1985166001610eb0565b949350505050565b6060816001610aee81610ab9565b506000610b0462ffffff19861660156020610eba565b905060008167ffffffffffffffff811115610b2157610b21611531565b604051908082528060200260200182016040528015610b4a578160200160208202803683370190505b50905060005b82811015610ba557610b80610b666020836118fb565b610b7190603561191a565b62ffffff198916906020610eea565b828281518110610b9257610b92611932565b6020908102919091010152600101610b50565b5095945050505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600054610100900460ff16610c185760005460ff1615610c1c565b303b155b610c385760405162461bcd60e51b815260040161046a9061177f565b600054610100900460ff16158015610c5a576000805461ffff19166101011790555b603480546001600160a01b0319166001600160a01b038416179055610741611046565b63ffffffff811660009081526066602052604090205480610cca5760405162461bcd60e51b81526020600482015260076024820152662172656d6f746560c81b604482015260640161046a565b919050565b60606001604051610ceb91908690859087908290602001611948565b60405160208183030381529060405290509392505050565b600080610d10838561191a565b9050604051811115610d20575060005b80600003610d355762ffffff19915050610a6b565b5050606092831b9190911790911b1760181b90565b6000610d5582611075565b15610d72576301000000600160d81b038216600160d81b17610a42565b62ffffff19610a42565b6000610d87826110b0565b610dd35760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c656400000000000000604482015260640161046a565b5090565b6000610de383836110ed565b610ea9576000610e02610df68560d81c90565b64ffffffffff16611110565b9150506000610e178464ffffffffff16611110565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b815260040161046a91906119ae565b5090919050565b6000610a6b838360145b6000610ec78260206119c1565b610ed29060086119e4565b60ff16610ee0858585610eea565b901c949350505050565b60008160ff16600003610eff57506000610a6b565b610f128460181c6001600160601b031690565b6001600160601b0316610f2860ff84168561191a565b1115610f8c57610f73610f448560781c6001600160601b031690565b6001600160601b0316610f608660181c6001600160601b031690565b6001600160601b0316858560ff166111be565b60405162461bcd60e51b815260040161046a91906119ae565b60208260ff1611156110065760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000606482015260840161046a565b60088202600061101f8660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b600054610100900460ff1661106d5760405162461bcd60e51b815260040161046a90611a0d565b61042c6112e8565b6000601882901c6001600160601b031660558110801590610a6b5750602061109e6035836116f6565b6110a89190611a58565b159392505050565b60006110bc8260d81c90565b64ffffffffff1664ffffffffff036110d657506000919050565b60006110e183611318565b60405110199392505050565b60008164ffffffffff166111018460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff16111561116557600061112f8260086119e4565b60ff1685901c905061114081611351565b61ffff16841793508160ff1660101461115b57601084901b93505b5060001901611116565b50600f5b60ff8160ff1610156111b85760006111828260086119e4565b60ff1685901c905061119381611351565b61ffff16831792508160ff166000146111ae57601083901b92505b5060001901611169565b50915091565b606060006111cb86611110565b91505060006111d986611110565b91505060006111e786611110565b91505060006111f586611110565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b600054610100900460ff1661130f5760405162461bcd60e51b815260040161046a90611a0d565b61042c33610963565b600061132d8260181c6001600160601b031690565b6113408360781c6001600160601b031690565b016001600160601b03169050919050565b600061136360048360ff16901c611383565b60ff1661ffff919091161760081b61137a82611383565b60ff1617919050565b600060f08083179060ff8216900361139e5750603092915050565b8060ff1660f1036113b25750603192915050565b8060ff1660f2036113c65750603292915050565b8060ff1660f3036113da5750603392915050565b8060ff1660f4036113ee5750603492915050565b8060ff1660f5036114025750603592915050565b8060ff1660f6036114165750603692915050565b8060ff1660f70361142a5750603792915050565b8060ff1660f80361143e5750603892915050565b8060ff1660f9036114525750603992915050565b8060ff1660fa036114665750606192915050565b8060ff1660fb0361147a5750606292915050565b8060ff1660fc0361148e5750606392915050565b8060ff1660fd036114a25750606492915050565b8060ff1660fe036114b65750606592915050565b8060ff1660ff036114ca5750606692915050565b50919050565b6001600160a01b038116811461068e57600080fd5b6000602082840312156114f757600080fd5b8135610a6b816114d0565b803563ffffffff81168114610cca57600080fd5b60006020828403121561152857600080fd5b610a6b82611502565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561155d57600080fd5b61156685611502565b935061157460208601611502565b925060408501359150606085013567ffffffffffffffff8082111561159857600080fd5b818701915087601f8301126115ac57600080fd5b8135818111156115be576115be611531565b604051601f8201601f19908116603f011681019083821181831017156115e6576115e6611531565b816040528281528a60208487010111156115ff57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561163657600080fd5b61163f83611502565b946020939093013593505050565b6000806000806060858703121561166357600080fd5b61166c85611502565b9350602085013561167c816114d0565b9250604085013567ffffffffffffffff8082111561169957600080fd5b818701915087601f8301126116ad57600080fd5b8135818111156116bc57600080fd5b8860208260051b85010111156116d157600080fd5b95989497505060200194505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611708576117086116e0565b500390565b600081518084526020808501945080840160005b8381101561173d57815187529582019590820190600101611721565b509495945050505050565b6001600160a01b0383168152604060208201819052600090610ad89083018461170d565b602081526000610a6b602083018461170d565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6000602082840312156117df57600080fd5b8151610a6b816114d0565b6000815180845260005b81811015611810576020818501810151868301820152016117f4565b81811115611822576000602083870101525b50601f01601f19169290920160200192915050565b63ffffffff84168152826020820152606060408201526000610a8d60608301846117ea565b63ffffffff871681526001600160a01b038616602082015260a060408201819052810184905260006001600160fb1b0385111561189857600080fd5b8460051b808760c0850137808301905060c081016000815285606085015260c08483030160808501526118cb81866117ea565b9a9950505050505050505050565b6000602082840312156118eb57600080fd5b81518015158114610a6b57600080fd5b6000816000190483118215151615611915576119156116e0565b500290565b6000821982111561192d5761192d6116e0565b500190565b634e487b7160e01b600052603260045260246000fd5b60f886901b6001600160f81b0319168152606085901b6bffffffffffffffffffffffff191660018201526015810184905260006001600160fb1b0383111561198f57600080fd5b8260051b80856035850137600092016035019182525095945050505050565b602081526000610a6b60208301846117ea565b600060ff821660ff8416808210156119db576119db6116e0565b90039392505050565b600060ff821660ff84168160ff0481118215151615611a0557611a056116e0565b029392505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600082611a7557634e487b7160e01b600052601260045260246000fd5b50069056fea2646970667358221220a4ec579f89fb3b588b6371b407dfaba38200619d6d2c121d157ba4fa3654167864736f6c634300080f0033";

type RelayerFeeRouterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayerFeeRouterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayerFeeRouter__factory extends ContractFactory {
  constructor(...args: RelayerFeeRouterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayerFeeRouter> {
    return super.deploy(overrides || {}) as Promise<RelayerFeeRouter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RelayerFeeRouter {
    return super.attach(address) as RelayerFeeRouter;
  }
  override connect(signer: Signer): RelayerFeeRouter__factory {
    return super.connect(signer) as RelayerFeeRouter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayerFeeRouterInterface {
    return new utils.Interface(_abi) as RelayerFeeRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayerFeeRouter {
    return new Contract(address, _abi, signerOrProvider) as RelayerFeeRouter;
  }
}
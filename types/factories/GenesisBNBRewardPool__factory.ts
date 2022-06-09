/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GenesisBNBRewardPool,
  GenesisBNBRewardPoolInterface,
} from "../GenesisBNBRewardPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_poolStartTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "TOTAL_REWARDS",
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
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_lastRewardTime",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_fromTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_toTime",
        type: "uint256",
      },
    ],
    name: "getGeneratedReward",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "governanceRecoverUnsupported",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "operator",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
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
    inputs: [],
    name: "poolEndTime",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accTokenPerShare",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isStarted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolStartTime",
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
    inputs: [],
    name: "reserveFund",
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
    name: "runningTime",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_reserveFund",
        type: "address",
      },
    ],
    name: "setReserveFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPerSecond",
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
    inputs: [],
    name: "totalAllocPoint",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600555660c55f7aee42c006008556201518060095534801561002757600080fd5b50604051611a5e380380611a5e8339818101604052604081101561004a57600080fd5b508051602090910151428111610090576040805162461bcd60e51b815260206004808301919091526024820152636c61746560e01b604482015290519081900360640190fd5b6001600160a01b038216156100bb57600280546001600160a01b0319166001600160a01b0384161790555b6006819055600954016007555060008054336001600160a01b031991821681178355600180549092161790556119679081906100f790396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80635fa7b83f116100c357806398969e821161007c57806398969e821461036e578063b3ab15fb1461039a578063b7f92b71146103c0578063e2bbb158146103c8578063f498d8a6146103eb578063fc0c546a146104115761014d565b80635fa7b83f146102cf578063630b5ba1146102d75780636e271dd5146102df57806393f1a40b146102e7578063943f013d1461032c57806396805e54146103345761014d565b8063441a3e7011610115578063441a3e701461021057806351eb05a6146102335780635312ea8e1461025057806354575af41461026d578063570ca735146102a35780635f96dc11146102c75761014d565b806309cf6091146101525780631526fe271461016c57806317caf6f1146101c05780631ab06ee5146101c8578063231f0c6a146101ed575b600080fd5b61015a610419565b60408051918252519081900360200190f35b6101896004803603602081101561018257600080fd5b5035610426565b604080516001600160a01b039096168652602086019490945284840192909252606084015215156080830152519081900360a00190f35b61015a610471565b6101eb600480360360408110156101de57600080fd5b5080359060200135610477565b005b61015a6004803603604081101561020357600080fd5b5080359060200135610525565b6101eb6004803603604081101561022657600080fd5b50803590602001356105ea565b6101eb6004803603602081101561024957600080fd5b50356107a7565b6101eb6004803603602081101561026657600080fd5b5035610905565b6101eb6004803603606081101561028357600080fd5b506001600160a01b038135811691602081013591604090910135166109a1565b6102ab610ae8565b604080516001600160a01b039092168252519081900360200190f35b61015a610af7565b61015a610afd565b6101eb610b03565b61015a610b26565b610313600480360360408110156102fd57600080fd5b50803590602001356001600160a01b0316610b2c565b6040805192835260208301919091528051918290030190f35b61015a610b50565b6101eb6004803603608081101561034a57600080fd5b508035906001600160a01b0360208201351690604081013515159060600135610b56565b61015a6004803603604081101561038457600080fd5b50803590602001356001600160a01b0316610d53565b6101eb600480360360208110156103b057600080fd5b50356001600160a01b0316610eb4565b6102ab610f1f565b6101eb600480360360408110156103de57600080fd5b5080359060200135610f2e565b6101eb6004803603602081101561040157600080fd5b50356001600160a01b03166111d7565b6102ab611242565b681043561a882930000081565b6003818154811061043357fe5b6000918252602090912060059091020180546001820154600283015460038401546004909401546001600160a01b0390931694509092909160ff1685565b60055481565b6000546001600160a01b031633146104c05760405162461bcd60e51b815260040180806020018281038252602c815260200180611895602c913960400191505060405180910390fd5b6104c8610b03565b6000600383815481106104d757fe5b60009182526020909120600590910201600481015490915060ff161561051e5761051a82610514836001015460055461125190919063ffffffff16565b906112ae565b6005555b6001015550565b6000818310610536575060006105e4565b600754821061059e576007548310610550575060006105e4565b60065483116105835761057c60085461057660065460075461125190919063ffffffff16565b9061130f565b90506105e4565b61057c6008546105768560075461125190919063ffffffff16565b60065482116105af575060006105e4565b60065483116105d35761057c6008546105766006548561125190919063ffffffff16565b60085461057c906105768486611251565b92915050565b60003390506000600384815481106105fe57fe5b600091825260208083208784526004825260408085206001600160a01b0388168652909252922080546005909202909201925084111561067a576040805162461bcd60e51b81526020600482015260126024820152711dda5d1a191c985dce881b9bdd0819dbdbd960721b604482015290519081900360640190fd5b610683856107a7565b60006106c082600101546106ba670de0b6b3a76400006106b48760030154876000015461130f90919063ffffffff16565b90611368565b90611251565b90508015610712576106d284826113cf565b6040805182815290516001600160a01b038616917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b841561073c5781546107249086611251565b8255825461073c906001600160a01b03168587611485565b6003830154825461075a91670de0b6b3a7640000916106b49161130f565b600183015560408051868152905187916001600160a01b038716917ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689181900360200190a3505050505050565b6000600382815481106107b657fe5b90600052602060002090600502019050806002015442116107d75750610902565b8054604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561082157600080fd5b505afa158015610835573d6000803e3d6000fd5b505050506040513d602081101561084b57600080fd5b5051905080610861575042600290910155610902565b600482015460ff166108925760048201805460ff1916600190811790915582015460055461088e916112ae565b6005555b600554156108f95760006108aa836002015442610525565b905060006108cb6005546106b486600101548561130f90919063ffffffff16565b90506108f16108e6846106b484670de0b6b3a764000061130f565b6003860154906112ae565b600385015550505b50426002909101555b50565b60006003828154811061091457fe5b600091825260208083208584526004825260408085203380875293528420805485825560018201959095556005909302018054909450919291610964916001600160a01b03919091169083611485565b604080518281529051859133917fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959181900360200190a350505050565b6000546001600160a01b031633146109ea5760405162461bcd60e51b815260040180806020018281038252602c815260200180611895602c913960400191505060405180910390fd5b6007546276a70001421015610acf576002546001600160a01b0384811691161415610a44576040805162461bcd60e51b81526020600482015260056024820152643a37b5b2b760d91b604482015290519081900360640190fd5b60035460005b81811015610acc57600060038281548110610a6157fe5b6000918252602090912060059091020180549091506001600160a01b0387811691161415610ac3576040805162461bcd60e51b815260206004820152600a6024820152693837b7b6173a37b5b2b760b11b604482015290519081900360640190fd5b50600101610a4a565b50505b610ae36001600160a01b0384168284611485565b505050565b6000546001600160a01b031681565b60065481565b60085481565b60035460005b81811015610b2257610b1a816107a7565b600101610b09565b5050565b60075481565b60046020908152600092835260408084209091529082529020805460019091015482565b60095481565b6000546001600160a01b03163314610b9f5760405162461bcd60e51b815260040180806020018281038252602c815260200180611895602c913960400191505060405180910390fd5b610ba8836114d7565b8115610bb657610bb6610b03565b600654421015610be25780610bce5750600654610bdd565b600654811015610bdd57506006545b610bf6565b801580610bee57504281105b15610bf65750425b600060065482111580610c095750428211155b6040805160a0810182526001600160a01b03878116825260208201898152928201868152600060608401818152861580156080870190815260038054600181018255945295517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b600590940293840180546001600160a01b031916919096161790945594517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85c82015590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85d82015592517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85e84015590517fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85f909201805460ff191692151592909217909155909150610d4c57600554610d4890866112ae565b6005555b5050505050565b60008060038481548110610d6357fe5b60009182526020808320878452600480835260408086206001600160a01b038a811688529085528187206005969096029093016003810154815483516370a0823160e01b81523095810195909552925191985095969491909316926370a08231926024808201939291829003018186803b158015610de057600080fd5b505afa158015610df4573d6000803e3d6000fd5b505050506040513d6020811015610e0a57600080fd5b5051600285015490915042118015610e2157508015155b15610e7e576000610e36856002015442610525565b90506000610e576005546106b488600101548561130f90919063ffffffff16565b9050610e79610e72846106b484670de0b6b3a764000061130f565b85906112ae565b935050505b610ea983600101546106ba670de0b6b3a76400006106b486886000015461130f90919063ffffffff16565b979650505050505050565b6000546001600160a01b03163314610efd5760405162461bcd60e51b815260040180806020018281038252602c815260200180611895602c913960400191505060405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031681565b6000339050600060038481548110610f4257fe5b600091825260208083208784526004825260408085206001600160a01b0388168652909252922060059091029091019150610f7c856107a7565b805415611008576000610fb482600101546106ba670de0b6b3a76400006106b48760030154876000015461130f90919063ffffffff16565b9050801561100657610fc684826113cf565b6040805182815290516001600160a01b038616917fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486919081900360200190a25b505b831561116d578154604080516370a0823160e01b815230600482015290516001600160a01b039092169160009183916370a0823191602480820192602092909190829003018186803b15801561105d57600080fd5b505afa158015611071573d6000803e3d6000fd5b505050506040513d602081101561108757600080fd5b505190506110a06001600160a01b038316333089611571565b6000826001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156110ef57600080fd5b505afa158015611103573d6000803e3d6000fd5b505050506040513d602081101561111957600080fd5b50518281039750905060006111356127106106b48a606461130f565b6001548754919250611154916001600160a01b03908116911683611485565b84546111669082906106ba908b6112ae565b8555505050505b6003820154815461118b91670de0b6b3a7640000916106b49161130f565b600182015560408051858152905186916001600160a01b038616917f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159181900360200190a35050505050565b6000546001600160a01b031633146112205760405162461bcd60e51b815260040180806020018281038252602c815260200180611895602c913960400191505060405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b6000828211156112a8576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082820183811015611308576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b60008261131e575060006105e4565b8282028284828161132b57fe5b04146113085760405162461bcd60e51b81526004018080602001828103825260218152602001806118e76021913960400191505060405180910390fd5b60008082116113be576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b8183816113c757fe5b049392505050565b600254604080516370a0823160e01b815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561141a57600080fd5b505afa15801561142e573d6000803e3d6000fd5b505050506040513d602081101561144457600080fd5b505190508015610ae357808211156114725760025461146d906001600160a01b03168483611485565b610ae3565b600254610ae3906001600160a01b031684845b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610ae39084906115d1565b60035460005b81811015610ae357826001600160a01b0316600382815481106114fc57fe5b60009182526020909120600590910201546001600160a01b03161415611569576040805162461bcd60e51b815260206004820181905260248201527f546f6b656e47656e65736973506f6f6c3a206578697374696e6720706f6f6c3f604482015290519081900360640190fd5b6001016114dd565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526115cb9085906115d1565b50505050565b6060611626826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116829092919063ffffffff16565b805190915015610ae35780806020019051602081101561164557600080fd5b5051610ae35760405162461bcd60e51b815260040180806020018281038252602a815260200180611908602a913960400191505060405180910390fd5b60606116918484600085611699565b949350505050565b6060824710156116da5760405162461bcd60e51b81526004018080602001828103825260268152602001806118c16026913960400191505060405180910390fd5b6116e3856117ea565b611734576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106117735780518252601f199092019160209182019101611754565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146117d5576040519150601f19603f3d011682016040523d82523d6000602084013e6117da565b606091505b5091509150610ea98282866117f0565b3b151590565b606083156117ff575081611308565b82511561180f5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611859578181015183820152602001611841565b50505050905090810190601f1680156118865780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe546f6b656e47656e65736973506f6f6c3a2063616c6c6572206973206e6f7420746865206f70657261746f72416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220af03432d4606eca020a0efe21f7491796bc3b97042994726e104abd7f11541c764736f6c634300060c0033";

type GenesisBNBRewardPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GenesisBNBRewardPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GenesisBNBRewardPool__factory extends ContractFactory {
  constructor(...args: GenesisBNBRewardPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _token: string,
    _poolStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GenesisBNBRewardPool> {
    return super.deploy(
      _token,
      _poolStartTime,
      overrides || {}
    ) as Promise<GenesisBNBRewardPool>;
  }
  getDeployTransaction(
    _token: string,
    _poolStartTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _poolStartTime, overrides || {});
  }
  attach(address: string): GenesisBNBRewardPool {
    return super.attach(address) as GenesisBNBRewardPool;
  }
  connect(signer: Signer): GenesisBNBRewardPool__factory {
    return super.connect(signer) as GenesisBNBRewardPool__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenesisBNBRewardPoolInterface {
    return new utils.Interface(_abi) as GenesisBNBRewardPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenesisBNBRewardPool {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GenesisBNBRewardPool;
  }
}

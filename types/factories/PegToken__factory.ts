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
import type { PegToken, PegTokenInterface } from "../PegToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "_taxFund",
        type: "address",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOperator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "OperatorTransferred",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taxFund",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TaxAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "INITIAL_GENESIS_POOL_DISTRIBUTION",
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
    name: "addLiquidityEnabled",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "burnRate",
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
    name: "decimals",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_genesisPool",
        type: "address",
      },
    ],
    name: "distributeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenPrice",
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
    name: "getTokenUpdatedPrice",
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
    ],
    name: "governanceRecoverUnsupported",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isExcludedFromFee",
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
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isExcludedToFee",
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
    inputs: [],
    name: "isOperator",
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
        internalType: "address",
        name: "recipient_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
    name: "oracle",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPoolDistributed",
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
        internalType: "uint256",
        name: "_burnRate",
        type: "uint256",
      },
    ],
    name: "setBurnRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setExcludeBothDirectionsFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setExcludeFromFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "setExcludeToFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
        type: "address",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_taxFund",
        type: "address",
      },
    ],
    name: "setTaxFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_taxRate",
        type: "uint256",
      },
    ],
    name: "setTaxRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taxFund",
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
    name: "taxRate",
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
    name: "toggleAddLiquidityEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBurned",
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
    name: "totalSupply",
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
    name: "totalTaxAdded",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOperator_",
        type: "address",
      },
    ],
    name: "transferOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526006805461ffff60a01b191690553480156200001f57600080fd5b50604051620026a3380380620026a3833981810160405260808110156200004557600080fd5b81019080805160405193929190846401000000008211156200006657600080fd5b9083019060208201858111156200007c57600080fd5b82516401000000008111828201881017156200009757600080fd5b82525081516020918201929091019080838360005b83811015620000c6578181015183820152602001620000ac565b50505050905090810190601f168015620000f45780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011857600080fd5b9083019060208201858111156200012e57600080fd5b82516401000000008111828201881017156200014957600080fd5b82525081516020918201929091019080838360005b83811015620001785781810151838201526020016200015e565b50505050905090810190601f168015620001a65780820380516001836020036101000a031916815260200191505b50604090815260208281015192909101518651929450925085918591620001d3916003918501906200030a565b508051620001e99060049060208401906200030a565b50506005805460ff1916601217905550600062000205620002f0565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35062000265620002f0565b600680546001600160a01b0319166001600160a01b0392831617908190556040519116906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3620002bc82620002f4565b600a80546001600160a01b0319166001600160a01b039290921691909117905550506102ee600881905560095550620003a6565b3390565b6005805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200034d57805160ff19168380011785556200037d565b828001600101855582156200037d579182015b828111156200037d57825182559160200191906001019062000360565b506200038b9291506200038f565b5090565b5b808211156200038b576000815560010162000390565b6122ed80620003b66000396000f3fe608060405234801561001057600080fd5b50600436106102685760003560e01c8063771a3a1d11610151578063a9059cbb116100c3578063c732050911610087578063c7320509146106cf578063d89135cd146106d7578063dd62ed3e146106df578063e8d4a0f31461070d578063ee7e767114610733578063f2fde38b1461075957610268565b8063a9059cbb14610648578063af9549e014610674578063b90e32ee146106a2578063bed99850146106aa578063c6d69a30146106b257610268565b8063860139401161011557806386013940146105f45780638b93e49e146105fc5780638da5cb5b1461060457806395d89b411461060c5780639662676c14610614578063a457c2d71461061c57610268565b8063771a3a1d1461056c57806379cc6790146105745780637adbf973146105a05780637dc0d1d0146105c6578063844f30fb146105ce57610268565b806339509351116101ea5780634e20a02c116101ae5780634e20a02c146104be5780635342acb4146104c6578063570ca735146104ec5780636409de781461051057806370a082311461053e578063715018a61461056457610268565b8063395093511461043957806340c10f191461046557806342966c68146104915780634456eda2146104ae5780634b94f50e146104b657610268565b806318160ddd1161023157806318160ddd1461039a578063189d165e146103a257806323b872dd146103bf57806329605e77146103f5578063313ce5671461041b57610268565b80620321041461026d578063023176011461028757806306fdde03146102b7578063092193ab14610334578063095ea7b31461035a575b600080fd5b61027561077f565b60408051918252519081900360200190f35b6102b56004803603604081101561029d57600080fd5b506001600160a01b038135169060200135151561083d565b005b6102bf6108dd565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102f95781810151838201526020016102e1565b50505050905090810190601f1680156103265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102b56004803603602081101561034a57600080fd5b50356001600160a01b0316610973565b6103866004803603604081101561037057600080fd5b506001600160a01b038135169060200135610a90565b604080519115158252519081900360200190f35b610275610aae565b6102b5600480360360208110156103b857600080fd5b5035610ab4565b610386600480360360608110156103d557600080fd5b506001600160a01b03813581169160208101359091169060400135610b5d565b6102b56004803603602081101561040b57600080fd5b50356001600160a01b0316610be4565b610423610c4f565b6040805160ff9092168252519081900360200190f35b6103866004803603604081101561044f57600080fd5b506001600160a01b038135169060200135610c58565b6103866004803603604081101561047b57600080fd5b506001600160a01b038135169060200135610ca6565b6102b5600480360360208110156104a757600080fd5b5035610d20565b610386610d29565b610275610d4f565b610275610db8565b610386600480360360208110156104dc57600080fd5b50356001600160a01b0316610dc6565b6104f4610de4565b604080516001600160a01b039092168252519081900360200190f35b6102b56004803603604081101561052657600080fd5b506001600160a01b0381351690602001351515610df3565b6102756004803603602081101561055457600080fd5b50356001600160a01b0316610e80565b6102b5610e9b565b610275610f4d565b6102b56004803603604081101561058a57600080fd5b506001600160a01b038135169060200135610f53565b6102b5600480360360208110156105b657600080fd5b50356001600160a01b0316610faa565b6104f461102e565b610386600480360360208110156105e457600080fd5b50356001600160a01b031661103d565b61038661105b565b61027561106b565b6104f4611071565b6102bf611085565b6103866110e6565b6103866004803603604081101561063257600080fd5b506001600160a01b0381351690602001356110f6565b6103866004803603604081101561065e57600080fd5b506001600160a01b03813516906020013561115e565b6102b56004803603604081101561068a57600080fd5b506001600160a01b0381351690602001351515611172565b6102b56111ff565b610275611282565b6102b5600480360360208110156106c857600080fd5b5035611288565b6104f4611331565b610275611340565b610275600480360360408110156106f557600080fd5b506001600160a01b0381358116916020013516611346565b6102b56004803603602081101561072357600080fd5b50356001600160a01b0316611371565b6102b56004803603602081101561074957600080fd5b50356001600160a01b03166114da565b6102b56004803603602081101561076f57600080fd5b50356001600160a01b03166115a2565b6007546000906001600160a01b0316801561082d5760408051630d01142560e31b8152306004820152670de0b6b3a7640000602482015290516001600160a01b03831691636808a128916044808301926020929190829003018186803b1580156107e857600080fd5b505afa1580156107fc573d6000803e3d6000fd5b505050506040513d602081101561081257600080fd5b505171ffffffffffffffffffffffffffffffffffff16610837565b670de0b6b3a76400005b91505090565b6108456116b0565b6001600160a01b0316610856611071565b6001600160a01b03161461089f576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b6001600160a01b039091166000908152600d60209081526040808320805494151560ff199586168117909155600e9092529091208054909216179055565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156109695780601f1061093e57610100808354040283529160200191610969565b820191906000526020600020905b81548152906001019060200180831161094c57829003601f168201915b5050505050905090565b6006546001600160a01b031633146109bc5760405162461bcd60e51b81526004018080602001828103825260248152602001806122056024913960400191505060405180910390fd5b600654600160a01b900460ff1615610a1b576040805162461bcd60e51b815260206004820152601860248201527f6f6e6c792063616e2064697374726962757465206f6e63650000000000000000604482015290519081900360640190fd5b6001600160a01b038116610a66576040805162461bcd60e51b815260206004820152600d60248201526c0857d9d95b995cda5cd41bdbdb609a1b604482015290519081900360640190fd5b6006805460ff60a01b1916600160a01b179055610a8d81690bdbc41e0348b30000006116b4565b50565b6000610aa4610a9d6116b0565b84846117a4565b5060015b92915050565b60025490565b610abc6116b0565b6001600160a01b0316610acd611071565b6001600160a01b031614610b16576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b6105dc811115610b58576040805162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b604482015290519081900360640190fd5b600855565b6000610b6a848484611890565b610bda84610b766116b0565b610bd585604051806060016040528060288152602001612199602891396001600160a01b038a16600090815260016020526040812090610bb46116b0565b6001600160a01b031681526020810191909152604001600020549190611ae6565b6117a4565b5060019392505050565b610bec6116b0565b6001600160a01b0316610bfd611071565b6001600160a01b031614610c46576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b610a8d81611b7d565b60055460ff1690565b6000610aa4610c656116b0565b84610bd58560016000610c766116b0565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611c1a565b6006546000906001600160a01b03163314610cf25760405162461bcd60e51b81526004018080602001828103825260248152602001806122056024913960400191505060405180910390fd5b6000610cfd84610e80565b9050610d0984846116b4565b6000610d1485610e80565b91909111949350505050565b610a8d81611c7b565b6006546000906001600160a01b0316610d406116b0565b6001600160a01b031614905090565b6007546000906001600160a01b0316801561082d5760408051633ddac95360e01b8152306004820152670de0b6b3a7640000602482015290516001600160a01b03831691633ddac953916044808301926020929190829003018186803b1580156107e857600080fd5b690bdbc41e0348b300000081565b6001600160a01b03166000908152600d602052604090205460ff1690565b6006546001600160a01b031690565b610dfb6116b0565b6001600160a01b0316610e0c611071565b6001600160a01b031614610e55576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600e60205260409020805460ff1916911515919091179055565b6001600160a01b031660009081526020819052604090205490565b610ea36116b0565b6001600160a01b0316610eb4611071565b6001600160a01b031614610efd576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b60095481565b6006546001600160a01b03163314610f9c5760405162461bcd60e51b81526004018080602001828103825260248152602001806122056024913960400191505060405180910390fd5b610fa68282611c8c565b5050565b610fb26116b0565b6001600160a01b0316610fc3611071565b6001600160a01b03161461100c576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b600780546001600160a01b0319166001600160a01b0392909216919091179055565b6007546001600160a01b031681565b6001600160a01b03166000908152600e602052604090205460ff1690565b600654600160a81b900460ff1681565b600c5490565b60055461010090046001600160a01b031690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156109695780601f1061093e57610100808354040283529160200191610969565b600654600160a01b900460ff1681565b6000610aa46111036116b0565b84610bd585604051806060016040528060258152602001612293602591396001600061112d6116b0565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611ae6565b6000610aa461116b6116b0565b8484611890565b61117a6116b0565b6001600160a01b031661118b611071565b6001600160a01b0316146111d4576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b6001600160a01b03919091166000908152600d60205260409020805460ff1916911515919091179055565b6112076116b0565b6001600160a01b0316611218611071565b6001600160a01b031614611261576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b6006805460ff60a81b198116600160a81b9182900460ff1615909102179055565b60085481565b6112906116b0565b6001600160a01b03166112a1611071565b6001600160a01b0316146112ea576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b6105dc81111561132c576040805162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b604482015290519081900360640190fd5b600955565b600a546001600160a01b031681565b600b5490565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6113796116b0565b6001600160a01b031661138a611071565b6001600160a01b0316146113d3576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b806001600160a01b031663a9059cbb6113ea611071565b604080516370a0823160e01b815230600482015290516001600160a01b038616916370a08231916024808301926020929190829003018186803b15801561143057600080fd5b505afa158015611444573d6000803e3d6000fd5b505050506040513d602081101561145a57600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091525160448083019260209291908290030181600087803b1580156114ab57600080fd5b505af11580156114bf573d6000803e3d6000fd5b505050506040513d60208110156114d557600080fd5b505050565b6114e26116b0565b6001600160a01b03166114f3611071565b6001600160a01b03161461153c576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b6001600160a01b038116611580576040805162461bcd60e51b815260206004808301919091526024820152637a65726f60e01b604482015290519081900360640190fd5b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b6115aa6116b0565b6001600160a01b03166115bb611071565b6001600160a01b031614611604576040805162461bcd60e51b815260206004820181905260248201526000805160206121c1833981519152604482015290519081900360640190fd5b6001600160a01b0381166116495760405162461bcd60e51b81526004018080602001828103825260268152602001806120b96026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b3390565b6001600160a01b03821661170f576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61171b600083836114d5565b6002546117289082611c1a565b6002556001600160a01b03821660009081526020819052604090205461174e9082611c1a565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0383166117e95760405162461bcd60e51b815260040180806020018281038252602481526020018061226f6024913960400191505060405180910390fd5b6001600160a01b03821661182e5760405162461bcd60e51b81526004018080602001828103825260228152602001806120df6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166118d55760405162461bcd60e51b81526004018080602001828103825260248152602001806121276024913960400191505060405180910390fd5b6001600160a01b03821661191a5760405162461bcd60e51b81526004018080602001828103825260248152602001806121276024913960400191505060405180910390fd5b806119268484836114d5565b6001600160a01b0384166000908152600d602052604090205460ff1615801561196857506001600160a01b0383166000908152600e602052604090205460ff16155b15611ad557600061197761077f565b9050670de0b6b3a7640000811015611ad3576009548015611a9b5760006119aa6127106119a48785611ce1565b90611d3a565b600a549091506001600160a01b03166119c4888284611da1565b6119ce8583611efc565b600c549095506119de9083611c1a565b600c55600654600160a81b900460ff1615611a5257806001600160a01b03166351c6590a836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611a3957600080fd5b505af1158015611a4d573d6000803e3d6000fd5b505050505b604080516001600160a01b038381168252602082018590528251908b16927f3518075fae16f1bca7d9a1f28fede590b3ee4854c3c0bb4c5259b4ed62aa1674928290030190a250505b506008548015611ad1576000611ab76127106119a48785611ce1565b9050611ac38782611f59565b611acd8482611efc565b9350505b505b505b611ae0848483611da1565b50505050565b60008184841115611b755760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b3a578181015183820152602001611b22565b50505050905090810190601f168015611b675780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b038116611bc25760405162461bcd60e51b815260040180806020018281038252602d81526020018061214b602d913960400191505060405180910390fd5b6040516001600160a01b038216906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3600680546001600160a01b0319166001600160a01b0392909216919091179055565b600082820183811015611c74576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b610a8d611c866116b0565b82611f59565b6000611cc3826040518060600160405280602481526020016121e160249139611cbc86611cb76116b0565b611346565b9190611ae6565b9050611cd783611cd16116b0565b836117a4565b6114d58383611f59565b600082611cf057506000610aa8565b82820282848281611cfd57fe5b0414611c745760405162461bcd60e51b81526004018080602001828103825260218152602001806121786021913960400191505060405180910390fd5b6000808211611d90576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381611d9957fe5b049392505050565b6001600160a01b038316611de65760405162461bcd60e51b815260040180806020018281038252602581526020018061224a6025913960400191505060405180910390fd5b6001600160a01b038216611e2b5760405162461bcd60e51b81526004018080602001828103825260238152602001806120746023913960400191505060405180910390fd5b611e368383836114d5565b611e7381604051806060016040528060268152602001612101602691396001600160a01b0386166000908152602081905260409020549190611ae6565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611ea29082611c1a565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600082821115611f53576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b611f638282611f77565b600b54611f709082611c1a565b600b555050565b6001600160a01b038216611fbc5760405162461bcd60e51b81526004018080602001828103825260218152602001806122296021913960400191505060405180910390fd5b611fc8826000836114d5565b61200581604051806060016040528060228152602001612097602291396001600160a01b0385166000908152602081905260409020549190611ae6565b6001600160a01b03831660009081526020819052604090205560025461202b9082611efc565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365435a706567733a207472616e7366657220746f20746865207a65726f20616464726573736f70657261746f723a207a65726f206164647265737320676976656e20666f72206e6577206f70657261746f72536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e63656f70657261746f723a2063616c6c6572206973206e6f7420746865206f70657261746f7245524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212200f7dce14c5421146bdfa39e486c303c99222271e03002dbee3966a43a1cecd2364736f6c634300060c0033";

type PegTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PegTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PegToken__factory extends ContractFactory {
  constructor(...args: PegTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    _taxFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PegToken> {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      _taxFund,
      overrides || {}
    ) as Promise<PegToken>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    decimals_: BigNumberish,
    _taxFund: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      _taxFund,
      overrides || {}
    );
  }
  attach(address: string): PegToken {
    return super.attach(address) as PegToken;
  }
  connect(signer: Signer): PegToken__factory {
    return super.connect(signer) as PegToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PegTokenInterface {
    return new utils.Interface(_abi) as PegTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PegToken {
    return new Contract(address, _abi, signerOrProvider) as PegToken;
  }
}

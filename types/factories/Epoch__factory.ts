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
import type { Epoch, EpochInterface } from "../Epoch";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_period",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startEpoch",
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
    inputs: [],
    name: "getCurrentEpoch",
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
    name: "getLastEpochTime",
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
    name: "getPeriod",
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
    name: "getStartTime",
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
    inputs: [],
    name: "nextEpochPoint",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_epoch",
        type: "uint256",
      },
    ],
    name: "setEpoch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_period",
        type: "uint256",
      },
    ],
    name: "setPeriod",
    outputs: [],
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
  "0x608060405234801561001057600080fd5b506040516109443803806109448339818101604052606081101561003357600080fd5b5080516020820151604090920151909190600061004e61011c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506100a061011c565b600180546001600160a01b0319166001600160a01b0392831617908190556040519116906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a36002839055600382905560058190556101108284610120602090811b6105ac17901c565b6004555061017d915050565b3390565b600082821115610177576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6107b88061018c6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063715018a61161008c578063ba52245811610066578063ba522458146101a8578063c5967c26146101b0578063c828371e146101b8578063f2fde38b146101c0576100cf565b8063715018a6146101905780638da5cb5b14610198578063b97dd9e2146101a0576100cf565b80630ceb2cef146100d45780630f3a9f65146100f35780631ed241951461011057806329605e771461012a5780634456eda214610150578063570ca7351461016c575b600080fd5b6100f1600480360360208110156100ea57600080fd5b50356101e6565b005b6100f16004803603602081101561010957600080fd5b5035610234565b6101186102e0565b60408051918252519081900360200190f35b6100f16004803603602081101561014057600080fd5b50356001600160a01b03166102e6565b610158610366565b604080519115158252519081900360200190f35b61017461038c565b604080516001600160a01b039092168252519081900360200190f35b6100f161039b565b610174610459565b610118610468565b61011861046e565b610118610474565b610118610492565b6100f1600480360360208110156101d657600080fd5b50356001600160a01b0316610498565b6001546001600160a01b0316331461022f5760405162461bcd60e51b815260040180806020018281038252602481526020018061075f6024913960400191505060405180910390fd5b600555565b6001546001600160a01b0316331461027d5760405162461bcd60e51b815260040180806020018281038252602481526020018061075f6024913960400191505060405180910390fd5b610e10811015801561029257506202a3008111155b6102db576040805162461bcd60e51b81526020600482015260156024820152745f706572696f643a206f7574206f662072616e676560581b604482015290519081900360640190fd5b600255565b60025490565b6102ee610609565b6001600160a01b03166102ff610459565b6001600160a01b03161461035a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6103638161060d565b50565b6001546000906001600160a01b031661037d610609565b6001600160a01b031614905090565b6001546001600160a01b031690565b6103a3610609565b6001600160a01b03166103b4610459565b6001600160a01b03161461040f576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b60055490565b60045490565b600061048d6002546004546106aa90919063ffffffff16565b905090565b60035490565b6104a0610609565b6001600160a01b03166104b1610459565b6001600160a01b03161461050c576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166105515760405162461bcd60e51b815260040180806020018281038252602681526020018061070c6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600082821115610603576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b3390565b6001600160a01b0381166106525760405162461bcd60e51b815260040180806020018281038252602d815260200180610732602d913960400191505060405180910390fd5b6040516001600160a01b038216906000907f74da04524d50c64947f5dd5381ef1a4dca5cba8ed1d816243f9e48aa0b5617ed908290a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b600082820183811015610704576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573736f70657261746f723a207a65726f206164647265737320676976656e20666f72206e6577206f70657261746f726f70657261746f723a2063616c6c6572206973206e6f7420746865206f70657261746f72a26469706673582212209e29d9e5278ae9938fffb6ac44455e0b815822aae2ddb1651ffc98df1ba4226264736f6c634300060c0033";

type EpochConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EpochConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Epoch__factory extends ContractFactory {
  constructor(...args: EpochConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _period: BigNumberish,
    _startTime: BigNumberish,
    _startEpoch: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Epoch> {
    return super.deploy(
      _period,
      _startTime,
      _startEpoch,
      overrides || {}
    ) as Promise<Epoch>;
  }
  getDeployTransaction(
    _period: BigNumberish,
    _startTime: BigNumberish,
    _startEpoch: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _period,
      _startTime,
      _startEpoch,
      overrides || {}
    );
  }
  attach(address: string): Epoch {
    return super.attach(address) as Epoch;
  }
  connect(signer: Signer): Epoch__factory {
    return super.connect(signer) as Epoch__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EpochInterface {
    return new utils.Interface(_abi) as EpochInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Epoch {
    return new Contract(address, _abi, signerOrProvider) as Epoch;
  }
}

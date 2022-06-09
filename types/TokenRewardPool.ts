/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TokenRewardPoolInterface extends utils.Interface {
  functions: {
    "add(uint256,address,bool,uint256)": FunctionFragment;
    "deposit(uint256,uint256)": FunctionFragment;
    "emergencyWithdraw(uint256)": FunctionFragment;
    "epochEndTimes(uint256)": FunctionFragment;
    "epochTokenPerSecond(uint256)": FunctionFragment;
    "epochTotalRewards(uint256)": FunctionFragment;
    "getGeneratedReward(uint256,uint256)": FunctionFragment;
    "governanceRecoverUnsupported(address,uint256,address)": FunctionFragment;
    "massUpdatePools()": FunctionFragment;
    "operator()": FunctionFragment;
    "pendingBOMB(uint256,address)": FunctionFragment;
    "poolInfo(uint256)": FunctionFragment;
    "poolStartTime()": FunctionFragment;
    "set(uint256,uint256)": FunctionFragment;
    "setOperator(address)": FunctionFragment;
    "token()": FunctionFragment;
    "totalAllocPoint()": FunctionFragment;
    "updatePool(uint256)": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "add",
    values: [BigNumberish, string, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "epochEndTimes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "epochTokenPerSecond",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "epochTotalRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGeneratedReward",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "governanceRecoverUnsupported",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "massUpdatePools",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingBOMB",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolStartTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOperator", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalAllocPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochEndTimes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochTokenPerSecond",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochTotalRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGeneratedReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceRecoverUnsupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "massUpdatePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingBOMB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolStartTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposit(address,uint256,uint256)": EventFragment;
    "EmergencyWithdraw(address,uint256,uint256)": EventFragment;
    "RewardPaid(address,uint256)": EventFragment;
    "Withdraw(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardPaid"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; pid: BigNumber; amount: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; pid: BigNumber; amount: BigNumber }
>;

export type EmergencyWithdrawEventFilter =
  TypedEventFilter<EmergencyWithdrawEvent>;

export type RewardPaidEvent = TypedEvent<
  [string, BigNumber],
  { user: string; amount: BigNumber }
>;

export type RewardPaidEventFilter = TypedEventFilter<RewardPaidEvent>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { user: string; pid: BigNumber; amount: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface TokenRewardPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenRewardPoolInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    add(
      _allocPoint: BigNumberish,
      _token: string,
      _withUpdate: boolean,
      _lastRewardTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    epochEndTimes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    epochTokenPerSecond(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    epochTotalRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGeneratedReward(
      _fromTime: BigNumberish,
      _toTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    governanceRecoverUnsupported(
      _token: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    massUpdatePools(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    pendingBOMB(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, boolean] & {
        token: string;
        allocPoint: BigNumber;
        lastRewardTime: BigNumber;
        accTokenPerShare: BigNumber;
        isStarted: boolean;
      }
    >;

    poolStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalAllocPoint(overrides?: CallOverrides): Promise<[BigNumber]>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  add(
    _allocPoint: BigNumberish,
    _token: string,
    _withUpdate: boolean,
    _lastRewardTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emergencyWithdraw(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  epochEndTimes(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  epochTokenPerSecond(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  epochTotalRewards(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGeneratedReward(
    _fromTime: BigNumberish,
    _toTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  governanceRecoverUnsupported(
    _token: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  massUpdatePools(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  operator(overrides?: CallOverrides): Promise<string>;

  pendingBOMB(
    _pid: BigNumberish,
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber, boolean] & {
      token: string;
      allocPoint: BigNumber;
      lastRewardTime: BigNumber;
      accTokenPerShare: BigNumber;
      isStarted: boolean;
    }
  >;

  poolStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  set(
    _pid: BigNumberish,
    _allocPoint: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOperator(
    _operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

  updatePool(
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  withdraw(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    add(
      _allocPoint: BigNumberish,
      _token: string,
      _withUpdate: boolean,
      _lastRewardTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    epochEndTimes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochTokenPerSecond(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochTotalRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGeneratedReward(
      _fromTime: BigNumberish,
      _toTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governanceRecoverUnsupported(
      _token: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    massUpdatePools(overrides?: CallOverrides): Promise<void>;

    operator(overrides?: CallOverrides): Promise<string>;

    pendingBOMB(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber, boolean] & {
        token: string;
        allocPoint: BigNumber;
        lastRewardTime: BigNumber;
        accTokenPerShare: BigNumber;
        isStarted: boolean;
      }
    >;

    poolStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOperator(_operator: string, overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    updatePool(_pid: BigNumberish, overrides?: CallOverrides): Promise<void>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Deposit(address,uint256,uint256)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): DepositEventFilter;
    Deposit(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): DepositEventFilter;

    "EmergencyWithdraw(address,uint256,uint256)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): EmergencyWithdrawEventFilter;

    "RewardPaid(address,uint256)"(
      user?: string | null,
      amount?: null
    ): RewardPaidEventFilter;
    RewardPaid(user?: string | null, amount?: null): RewardPaidEventFilter;

    "Withdraw(address,uint256,uint256)"(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(
      user?: string | null,
      pid?: BigNumberish | null,
      amount?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    add(
      _allocPoint: BigNumberish,
      _token: string,
      _withUpdate: boolean,
      _lastRewardTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    epochEndTimes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochTokenPerSecond(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    epochTotalRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGeneratedReward(
      _fromTime: BigNumberish,
      _toTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governanceRecoverUnsupported(
      _token: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    massUpdatePools(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    pendingBOMB(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalAllocPoint(overrides?: CallOverrides): Promise<BigNumber>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      _allocPoint: BigNumberish,
      _token: string,
      _withUpdate: boolean,
      _lastRewardTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    epochEndTimes(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochTokenPerSecond(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    epochTotalRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGeneratedReward(
      _fromTime: BigNumberish,
      _toTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governanceRecoverUnsupported(
      _token: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    massUpdatePools(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingBOMB(
      _pid: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    set(
      _pid: BigNumberish,
      _allocPoint: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAllocPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updatePool(
      _pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ISpokeConnectorInterface extends utils.Interface {
  functions: {
    "acceptProposedOwner()": FunctionFragment;
    "dispatch(uint32,bytes32,bytes)": FunctionFragment;
    "outboundRoot()": FunctionFragment;
    "owner()": FunctionFragment;
    "processMessage(bytes)": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposed()": FunctionFragment;
    "proveAndProcess(bytes,bytes32[32],uint256)": FunctionFragment;
    "send()": FunctionFragment;
    "verifySender(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptProposedOwner"
      | "dispatch"
      | "outboundRoot"
      | "owner"
      | "processMessage"
      | "proposeNewOwner"
      | "proposed"
      | "proveAndProcess"
      | "send"
      | "verifySender"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dispatch",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "outboundRoot",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processMessage",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposeNewOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proveAndProcess",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "send", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifySender",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dispatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "outboundRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "processMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proveAndProcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifySender",
    data: BytesLike
  ): Result;

  events: {
    "AggregateRootUpdated(bytes32,bytes32)": EventFragment;
    "Dispatch(bytes32,uint256,bytes32,bytes)": EventFragment;
    "MessageProcessed(bytes,address)": EventFragment;
    "MessageSent(bytes,address)": EventFragment;
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Process(bytes32,bool,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AggregateRootUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Dispatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageProcessed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MessageSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Process"): EventFragment;
}

export interface AggregateRootUpdatedEventObject {
  current: string;
  previous: string;
}
export type AggregateRootUpdatedEvent = TypedEvent<
  [string, string],
  AggregateRootUpdatedEventObject
>;

export type AggregateRootUpdatedEventFilter =
  TypedEventFilter<AggregateRootUpdatedEvent>;

export interface DispatchEventObject {
  leaf: string;
  index: BigNumber;
  root: string;
  message: string;
}
export type DispatchEvent = TypedEvent<
  [string, BigNumber, string, string],
  DispatchEventObject
>;

export type DispatchEventFilter = TypedEventFilter<DispatchEvent>;

export interface MessageProcessedEventObject {
  data: string;
  caller: string;
}
export type MessageProcessedEvent = TypedEvent<
  [string, string],
  MessageProcessedEventObject
>;

export type MessageProcessedEventFilter =
  TypedEventFilter<MessageProcessedEvent>;

export interface MessageSentEventObject {
  data: string;
  caller: string;
}
export type MessageSentEvent = TypedEvent<
  [string, string],
  MessageSentEventObject
>;

export type MessageSentEventFilter = TypedEventFilter<MessageSentEvent>;

export interface OwnershipProposedEventObject {
  proposedOwner: string;
}
export type OwnershipProposedEvent = TypedEvent<
  [string],
  OwnershipProposedEventObject
>;

export type OwnershipProposedEventFilter =
  TypedEventFilter<OwnershipProposedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface ProcessEventObject {
  leaf: string;
  success: boolean;
  returnData: string;
}
export type ProcessEvent = TypedEvent<
  [string, boolean, string],
  ProcessEventObject
>;

export type ProcessEventFilter = TypedEventFilter<ProcessEvent>;

export interface ISpokeConnector extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISpokeConnectorInterface;

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
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    dispatch(
      _destinationDomain: PromiseOrValue<BigNumberish>,
      _recipientAddress: PromiseOrValue<BytesLike>,
      _messageBody: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    outboundRoot(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string] & { owner_: string }>;

    processMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposed(
      overrides?: CallOverrides
    ): Promise<[string] & { proposed_: string }>;

    proveAndProcess(
      _message: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    send(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifySender(
      _expected: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  dispatch(
    _destinationDomain: PromiseOrValue<BigNumberish>,
    _recipientAddress: PromiseOrValue<BytesLike>,
    _messageBody: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  outboundRoot(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  processMessage(
    _data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeNewOwner(
    newlyProposed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposed(overrides?: CallOverrides): Promise<string>;

  proveAndProcess(
    _message: PromiseOrValue<BytesLike>,
    _proof: PromiseOrValue<BytesLike>[],
    _index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  send(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifySender(
    _expected: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    dispatch(
      _destinationDomain: PromiseOrValue<BigNumberish>,
      _recipientAddress: PromiseOrValue<BytesLike>,
      _messageBody: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    outboundRoot(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    processMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proveAndProcess(
      _message: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    send(overrides?: CallOverrides): Promise<void>;

    verifySender(
      _expected: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AggregateRootUpdated(bytes32,bytes32)"(
      current?: null,
      previous?: null
    ): AggregateRootUpdatedEventFilter;
    AggregateRootUpdated(
      current?: null,
      previous?: null
    ): AggregateRootUpdatedEventFilter;

    "Dispatch(bytes32,uint256,bytes32,bytes)"(
      leaf?: null,
      index?: null,
      root?: null,
      message?: null
    ): DispatchEventFilter;
    Dispatch(
      leaf?: null,
      index?: null,
      root?: null,
      message?: null
    ): DispatchEventFilter;

    "MessageProcessed(bytes,address)"(
      data?: null,
      caller?: null
    ): MessageProcessedEventFilter;
    MessageProcessed(data?: null, caller?: null): MessageProcessedEventFilter;

    "MessageSent(bytes,address)"(
      data?: null,
      caller?: null
    ): MessageSentEventFilter;
    MessageSent(data?: null, caller?: null): MessageSentEventFilter;

    "OwnershipProposed(address)"(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;
    OwnershipProposed(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Process(bytes32,bool,bytes)"(
      leaf?: null,
      success?: null,
      returnData?: null
    ): ProcessEventFilter;
    Process(leaf?: null, success?: null, returnData?: null): ProcessEventFilter;
  };

  estimateGas: {
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    dispatch(
      _destinationDomain: PromiseOrValue<BigNumberish>,
      _recipientAddress: PromiseOrValue<BytesLike>,
      _messageBody: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    outboundRoot(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    processMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposed(overrides?: CallOverrides): Promise<BigNumber>;

    proveAndProcess(
      _message: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    send(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifySender(
      _expected: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    dispatch(
      _destinationDomain: PromiseOrValue<BigNumberish>,
      _recipientAddress: PromiseOrValue<BytesLike>,
      _messageBody: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    outboundRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    processMessage(
      _data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proveAndProcess(
      _message: PromiseOrValue<BytesLike>,
      _proof: PromiseOrValue<BytesLike>[],
      _index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    send(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifySender(
      _expected: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
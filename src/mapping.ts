import { BigInt } from "@graphprotocol/graph-ts"
import {
  TokenAddedToTrade as TokenAddedToTradeEvent,
  TokenRemovedFromTrade,
  TradeExtended,
  TradeFinalized,
  TradeStarted as TradeStartedEvent,
  UserTradeStateChange
} from "../generated/Core/Core"
import {
  TokenAddedToTrade,
  TradeStarted
} from "../generated/schema";

export function handleTokenAddedToTrade(event: TokenAddedToTradeEvent): void {
  let entity = new TokenAddedToTrade(event.transaction.hash.toHex())
  entity.blockNumber = event.block.number.toI32();
  entity.tradeId = event.params._tradeId.toString();
  entity.owner = event.params._owner;
  entity.tokenId = event.params._tokenId.toI32();
  entity.cell = event.params._cell.toI32();

  entity.save()
}

export function handleTokenRemovedFromTrade(
  event: TokenRemovedFromTrade
): void {}

export function handleTradeExtended(event: TradeExtended): void {}

export function handleTradeFinalized(event: TradeFinalized): void {}

export function handleTradeStarted(event: TradeStartedEvent): void {
  let entity = new TradeStarted(event.transaction.hash.toHex());
  entity.blockNumber = event.block.number.toI32();
  entity.tradeId = event.params._tradeId.toString();
  entity.starter = event.params._starter;
  entity.receiver = event.params._receiver;
  entity.starterContract = event.params._starterContract;
  entity.receiverContract = event.params._receiverContract;

  entity.save();
}

export function handleUserTradeStateChange(event: UserTradeStateChange): void {}

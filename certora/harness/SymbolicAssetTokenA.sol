// SPDX-License-Identifier: XXX ADD VALID LICENSE
pragma solidity ^0.8.0;

import "./DummyERC20Impl.sol";

/**
 * @title Certora's Symbolic Asset TokenA contract for comet
 * @notice Represent an ERC20 asset token.
 * @author Certora
 */
contract SymbolicAssetTokenA is DummyERC20Impl {
    // This contract represents a concrete ERC20 token with a unique address.
    // Such dummy implementaions of tokens are often used when comparing
    // two distinct tokens with distinct address that should retrieve values independently from one another
}
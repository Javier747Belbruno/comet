certoraRun certora/harness/CometHarness.sol \
    --verify CometHarness:certora/specs/validState.spec  \
    --solc solc8.10 --staging \
    --msg "Comet"
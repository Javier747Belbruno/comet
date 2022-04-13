# if [[ "$1" ]]
# then
#     RULE="--rule $1"
# fi

certoraRun certora/harness/CometHarnessWrappers.sol \
    --verify CometHarnessWrappers:certora/specs/userAssetIn.spec  \
    --solc solc8.11 \
    --cloud \
    --rule $1 \
    --optimistic_loop \
    --settings -useBitVectorTheory,-smt_hashingScheme=plainInjectivity,-deleteSMTFile=false,-postProcessCounterExamples=false \
    --solc_args '["--experimental-via-ir"]' \
    --msg "CometHarnessWrappers:userAssetIn.spec $1"
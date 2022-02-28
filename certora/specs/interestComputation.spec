import "A_setupNoSummarization.spec"

methods{
    getSpecificSupplyRateInternal(uint64,uint64,uint64,uint64) returns (uint64) envfree;
    getSpecificBorrowRateInternal(uint64,uint64,uint64,uint64) returns (uint64) envfree;
    getSpecificUtilizationInternal(uint64,uint64,uint64,uint64) returns (uint)  envfree;

    call_presentValue(int104) returns (int104) envfree;
    call_principalValue(int104) returns (int104) envfree;

    getAssetScaleByAsset(address) returns (uint64) envfree;

    getTotalBaseSupplyIndex() returns (uint64) envfree;
    getTotalBaseBorrowIndex() returns (uint64) envfree;
    getlastAccrualTime() returns (uint40) envfree;
    factorScale() returns (uint64) envfree;
    perSecondInterestRateBase() returns (uint64) envfree;
    perSecondInterestRateSlopeLow() returns (uint64) envfree;
    perSecondInterestRateSlopeHigh() returns (uint64) envfree;
    kink() returns (uint64) envfree;
    baseIndexScale() returns (uint64) envfree;
    targetReserves() returns (uint104) envfree;

    latestRoundData() returns uint256 => DISPATCHER(true);

}

 
/* 
 Description :  
        baseSupplyIndex increase with time
        baseBorrowIndex increase with time

 formula : 
        getNow(e) > getlastAccrualTime() => 
                   (base_supply_index_2 > base_supply_index_1 &&
                    base_borrow_index_2 > base_borrow_index_1);

 status : proved
 reason :
 link https://vaas-stg.certora.com/output/23658/497f4791d345a3dce667/?anonymousKey=43aadbf11d704a33e7143188189ea806a9d39d03#supplyRate_vs_UtilizationResults
*/
rule supplyIndex_borrowIndex_rise_with_time(){
    env e;
    uint64 base_supply_index_1 = getTotalBaseSupplyIndex();
    uint64 base_borrow_index_1 = getTotalBaseBorrowIndex();
    accrue(e);
    uint64 base_supply_index_2 = getTotalBaseSupplyIndex();
    uint64 base_borrow_index_2 = getTotalBaseBorrowIndex();

    assert getNow(e) > getlastAccrualTime() => 
                   (base_supply_index_2 > base_supply_index_1 &&
                    base_borrow_index_2 > base_borrow_index_1);
}

 
/* 
 Description :  
        baseSupplyIndex monotonic
        baseBorrowIndex monotonic

 formula : 
        base_supply_index_2 >= base_supply_index_1 &&
        base_borrow_index_2 >= base_borrow_index_1

 status : proved
 reason :
 link https://vaas-stg.certora.com/output/65782/5240447a217a62b1d892/?anonymousKey=cddebb60c69464b5d715c547ab600e08ea032c0c#isLiquidatable_false_should_not_changeResults
*/
rule supplyIndex_borrowIndex_monotonic(){
    env e;
    uint64 base_supply_index_1 = getTotalBaseSupplyIndex();
    uint64 base_borrow_index_1 = getTotalBaseBorrowIndex();
    accrue(e);
    uint64 base_supply_index_2 = getTotalBaseSupplyIndex();
    uint64 base_borrow_index_2 = getTotalBaseBorrowIndex();

    assert  base_supply_index_2 >= base_supply_index_1;
    assert  base_borrow_index_2 >= base_borrow_index_1;
}
 
/* 
 Description :  
        utilization increase implies supplyRate increase

 formula : 
        utilization_2 > utilization_1 => supplyRate_2 > supplyRate_1

 status : failed
 reason :
 link https://vaas-stg.certora.com/output/65782/5240447a217a62b1d892/?anonymousKey=cddebb60c69464b5d715c547ab600e08ea032c0c#isLiquidatable_false_should_not_changeResults
*/
rule supplyRate_vs_utilization(){
    env e;
   setup(e);

    uint64 baseSupplyIndex1;
    uint64 baseBorrowIndex1;
    uint64 trackingSupplyIndex1;
    uint64 trackingBorrowIndex1;

    uint   utilization_1 = getSpecificUtilizationInternal(baseSupplyIndex1,baseBorrowIndex1,trackingSupplyIndex1,trackingBorrowIndex1);
    uint64 supplyRate_1 = getSpecificSupplyRateInternal(baseSupplyIndex1,baseBorrowIndex1,trackingSupplyIndex1,trackingBorrowIndex1);

    uint64 baseSupplyIndex2;
    uint64 baseBorrowIndex2;
    uint64 trackingSupplyIndex2;
    uint64 trackingBorrowIndex2;

    uint utilization_2 = getSpecificUtilizationInternal(baseSupplyIndex2,baseBorrowIndex2,trackingSupplyIndex2,trackingBorrowIndex2);
    uint64 supplyRate_2 = getSpecificSupplyRateInternal(baseSupplyIndex2,baseBorrowIndex2,trackingSupplyIndex2,trackingBorrowIndex2);

    assert utilization_2 > utilization_1 => supplyRate_2 >= supplyRate_1;
}



/* 
 Description :  
     if borrowRate == base interest rate then utilization == 0    
formula : 
        borrowRate == perSecondInterestRateBase() => getUtilization(e) == 0;

 status : first assert proved , second failed
 reason : failed due to rounding down in utilization -> mulFactor
 link https://vaas-stg.certora.com/output/65782/b3fe39e314b1d0a592f5/?anonymousKey=877a0bbb8eea456fcacf3b5ed85d5c947d4cf890#utilization_zeroResults
*/

rule utilization_zero(){
env e;
   setup(e);

    uint64 borrowRate = getBorrowRate(e);

    // for debug
    uint64 perSecondInterestRateBase1 = perSecondInterestRateBase();
    uint64 perSecondInterestRateSlopeLow1 = perSecondInterestRateSlopeLow();
    uint64 perSecondInterestRateSlopeHigh1 = perSecondInterestRateSlopeHigh();
    uint64 kink1 = kink();

    assert getUtilization(e) == 0 => borrowRate == perSecondInterestRateBase() ;
}
    
/* 
 Description :  
     if accrue() with lower timestamp succeeds then accrue with higher timestamp should succeed as well

formula : 
        !lastReverted;

 status : failed
 reason : 
 link https://vaas-stg.certora.com/output/65782/5240447a217a62b1d892/?anonymousKey=cddebb60c69464b5d715c547ab600e08ea032c0c#accrue_not_revertedResults
*/
rule accrue_not_reverted(){
env e1;
env e2;
    setup(e1);
    require e2.msg.value == 0 && e1.msg.value == 0; // reverts if msg.value != 0
    require e2.block.timestamp == e1.block.timestamp + 1;
    require e2.block.timestamp < 2^40; // reverts if block.timestamp > 2^40
    accrue(e1);
    invoke accrue(e2);

    assert !lastReverted;
}


/* 
 Description :  
     if Borrow Base == 0 utilization should equal zero

formula : 
        getTotalBorrowBase(e) == 0 => getUtilization(e) == 0;

 status : proved
 reason : 
 link https://vaas-stg.certora.com/output/65782/6774efcf16e35405da9f/?anonymousKey=686dea1234bd5329ad336ca3f69b59f2ee02cea7
*/
rule borrowBase_vs_utilization(){
    env e;
    assert getTotalBorrowBase(e) == 0 => getUtilization(e) == 0;
}

/* 
 Description :  
     Verifies that isLiquidatable == false can change to true only if getPrice() has changed

formula : 
        isLiquidatable(e2,account) => price1 != price2;

 status : failed
 reason : 
 link https://vaas-stg.certora.com/output/65782/5240447a217a62b1d892/?anonymousKey=cddebb60c69464b5d715c547ab600e08ea032c0c#isLiquidatable_false_should_not_changeResults
*/
rule isLiquidatable_false_should_not_change(address account){
env e1;
env e2;
    require e2.block.timestamp > e1.block.timestamp;
    setup(e1);

    require isLiquidatable(e1,account) == false;
    uint price1 = getPrice(e1,baseTokenPriceFeed(e1));
    uint price2 = getPrice(e2,baseTokenPriceFeed(e2));

    assert isLiquidatable(e2,account) => price1 != price2;
}

/* 
 Description :  
     Verifies that TotalBaseSupplyIndex and getTotalBaseBorrowIndex always greater than baseIndexScale

formula : 
        getTotalBaseSupplyIndex() >= baseIndexScale() &&
        getTotalBaseBorrowIndex() >= baseIndexScale();

 status : proved
 reason : 
 link   : 
*/
rule supplyIndex_borrowIndex_GE_baseIndexScale(){
    env e;
    setup(e);
    require getTotalBaseSupplyIndex() >= baseIndexScale() &&
        getTotalBaseBorrowIndex() >= baseIndexScale();
    accrue(e);
    assert getTotalBaseSupplyIndex() >= baseIndexScale() &&
        getTotalBaseBorrowIndex() >= baseIndexScale();
}


/* 
 Description :  
     presentValue always greater than principalValue

formula : 
     presentValue >= _principalValue;

 status : proved
 reason : 
 link   : https://vaas-stg.certora.com/output/65782/f2f32f50a2bbf14deb79/?anonymousKey=494980dfd3ebcced1ee0d1088acf1a795f9f2a08#SupplyIndex_vs_BorrowIndexResults
*/
rule presentValue_GE_principal( int104 presentValue){
    env e;
   setup(e);

    int104 principalValue = call_principalValue(presentValue);
    require presentValue == call_presentValue(principalValue);

    require presentValue > 0;
    // https://vaas-stg.certora.com/output/65782/3bdac29a51e516bd3aec/?anonymousKey=0644f550abc407e9846eb7aed3b2eb501d557677

    assert presentValue >= principalValue;
}
rule presentValue_G_zero( int104 presentValue){
    env e;

    int104 principalValue = call_principalValue(presentValue);
    require presentValue == call_presentValue(principalValue);
    assert presentValue > 0 <=> principalValue > 0;
}

rule presentValue_EQ_principal( int104 presentValue){
    env e;
   setup(e);
    
    require getTotalBaseBorrowIndex() > getTotalBaseSupplyIndex();
    // https://vaas-stg.certora.com/output/65782/683fbc8491afe9dab5e0/?anonymousKey=4f9fb2a878f00e7301e64c53ff9e3d55c804aa6b#presentValue_EQ_principalResults
    
    int104 principalValue = call_principalValue(presentValue);
    require presentValue == call_presentValue(principalValue);

    require presentValue != 0;
    // https://vaas-stg.certora.com/output/65782/a9dfef3acdd36876a26f/?anonymousKey=4649138f310d0a7a36b20d7d146e0f9e23d6215e

assert presentValue == principalValue => getTotalBaseSupplyIndex() == baseIndexScale();
}

rule quote_Collateral(address asset, uint baseAmount ){
    env e;
    uint64 scale = getAssetScaleByAsset(asset);
    require scale == baseScale(e);
    require baseAmount > 0 && baseAmount < 2^255;
    uint quote1 = quoteCollateral(e,asset, baseAmount);
    uint quote2 = quoteCollateral(e,asset, baseAmount + 1);

    uint price = getPrice(e,asset);

    assert quote2 - quote1 <= scale * price;
}

// rule additivity_of_withdraw( uint x, uint y){
//     env e;
//     storage init = lastStorage;
    
//     require x + y < 2^255;

//     withdraw(e,baseToken(e), x);
//     int104 baseX = baseBalanceOf(e,e.msg.sender);
//     withdraw(e,baseToken(e), y);
//     int104 baseY = baseBalanceOf(e,e.msg.sender);
//     withdraw(e,baseToken(e), x + y) at init;
//     int104 baseXY = baseBalanceOf(e,e.msg.sender);

//     assert baseXY == baseY;
// }

// rule baseBalance(address account){
//     env e;

//     int104 baseB = baseBalanceOf(e,account);
//     accrue(e);
//     int104 baseB_ = baseBalanceOf(e,account);

//     assert baseB == baseB_;
// }


rule reserveRate(){
    env e;

        require reserveRate(e) > factorScale();
        //https://vaas-stg.certora.com/output/65782/cbe17cbd3ad5d102aa82/?anonymousKey=7e7fac8ec3cd530f2329ae8c4af394e874918af2

    getSupplyRate(e);

    assert false;
}

rule utilization_zero_supplyRate_zero(){
    env e;
    assert getUtilization(e) == 0 => getSupplyRate(e) == 0;
}


function setup(env e){
    require getTotalBaseSupplyIndex() >= baseIndexScale() &&
        getTotalBaseBorrowIndex() >= baseIndexScale();
    // require getTotalBaseBorrowIndex() > getTotalBaseSupplyIndex();
    // require getBorrowRate(e) > getSupplyRate(e);
    // require perSecondInterestRateSlopeLow() > 0 &&
    //         perSecondInterestRateSlopeLow() < perSecondInterestRateSlopeHigh();
    //     require reserveRate(e) > 0;
}
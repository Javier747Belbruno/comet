import hre from 'hardhat';
import { FaucetToken, FaucetToken__factory } from '../../../build/types';
import { BuildFile } from '../Types';
import { deploy, deployBuild } from '../Deploy';
export { deploy, deployBuild, hre };

export const faucetTokenBuildFile: BuildFile = {
  contract: 'FaucetToken',
  contracts: {
    'contracts/FaucetToken.sol:FaucetToken': {
      address: '0x5D746e0D9CB08bCac33A979A7d7D91cEfAB0d649',
      name: 'FaucetToken',
      abi: '[{"inputs":[{"internalType":"uint256","name":"_initialAmount","type":"uint256"},{"internalType":"string","name":"_tokenName","type":"string"},{"internalType":"uint8","name":"_decimalUnits","type":"uint8"},{"internalType":"string","name":"_tokenSymbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"allocateTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]',
      bin: '60806040523480156200001157600080fd5b50604051620009b7380380620009b78339810160408190526200003491620001fa565b60038490553360009081526005602090815260408220869055845186928692869286926200006892909190860190620000a1565b5080516200007e906001906020840190620000a1565b50506002805460ff191660ff9290921691909117905550620002d8945050505050565b828054620000af9062000285565b90600052602060002090601f016020900481019282620000d357600085556200011e565b82601f10620000ee57805160ff19168380011785556200011e565b828001600101855582156200011e579182015b828111156200011e57825182559160200191906001019062000101565b506200012c92915062000130565b5090565b5b808211156200012c576000815560010162000131565b600082601f83011262000158578081fd5b81516001600160401b0380821115620001755762000175620002c2565b604051601f8301601f19908116603f01168101908282118183101715620001a057620001a0620002c2565b81604052838152602092508683858801011115620001bc578485fd5b8491505b83821015620001df5785820183015181830184015290820190620001c0565b83821115620001f057848385830101525b9695505050505050565b6000806000806080858703121562000210578384fd5b845160208601519094506001600160401b03808211156200022f578485fd5b6200023d8883890162000147565b94506040870151915060ff8216821462000255578384fd5b6060870151919350808211156200026a578283fd5b50620002798782880162000147565b91505092959194509250565b600181811c908216806200029a57607f821691505b60208210811415620002bc57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6106cf80620002e86000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c8063313ce5671161007657806395d89b411161005b57806395d89b4114610182578063a9059cbb1461018a578063dd62ed3e1461019d57600080fd5b8063313ce5671461014357806370a082311461016257600080fd5b8063095ea7b3116100a7578063095ea7b3146100f657806318160ddd1461011957806323b872dd1461013057600080fd5b806306fdde03146100c357806308bca566146100e1575b600080fd5b6100cb6101c8565b6040516100d891906105c6565b60405180910390f35b6100f46100ef36600461059d565b610256565b005b61010961010436600461059d565b6102e0565b60405190151581526020016100d8565b61012260035481565b6040519081526020016100d8565b61010961013e366004610562565b61034c565b6002546101509060ff1681565b60405160ff90911681526020016100d8565b61012261017036600461050f565b60056020526000908152604090205481565b6100cb61044d565b61010961019836600461059d565b61045a565b6101226101ab366004610530565b600460209081526000928352604080842090915290825290205481565b600080546101d590610648565b80601f016020809104026020016040519081016040528092919081815260200182805461020190610648565b801561024e5780601f106102235761010080835404028352916020019161024e565b820191906000526020600020905b81548152906001019060200180831161023157829003601f168201915b505050505081565b6001600160a01b0382166000908152600560205260408120805483929061027e908490610619565b9250508190555080600360008282546102979190610619565b90915550506040518181526001600160a01b0383169030907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061033b9086815260200190565b60405180910390a350600192915050565b6001600160a01b038316600090815260046020908152604080832033845290915281205461037b908390610631565b6001600160a01b0385166000818152600460209081526040808320338452825280832094909455918152600590915220546103b7908390610631565b6001600160a01b0380861660009081526005602052604080822093909355908516815220546103e7908390610619565b6001600160a01b0380851660008181526005602052604090819020939093559151908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061043b9086815260200190565b60405180910390a35060019392505050565b600180546101d590610648565b33600090815260056020526040812054610475908390610631565b33600090815260056020526040808220929092556001600160a01b038516815220546104a2908390610619565b6001600160a01b0384166000818152600560205260409081902092909255905133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061033b9086815260200190565b80356001600160a01b038116811461050a57600080fd5b919050565b600060208284031215610520578081fd5b610529826104f3565b9392505050565b60008060408385031215610542578081fd5b61054b836104f3565b9150610559602084016104f3565b90509250929050565b600080600060608486031215610576578081fd5b61057f846104f3565b925061058d602085016104f3565b9150604084013590509250925092565b600080604083850312156105af578182fd5b6105b8836104f3565b946020939093013593505050565b6000602080835283518082850152825b818110156105f2578581018301518582016040015282016105d6565b818111156106035783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561062c5761062c610683565b500190565b60008282101561064357610643610683565b500390565b600181811c9082168061065c57607f821691505b6020821081141561067d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d0b6adaea7c2f58c3e014c61f3cd61d3f405ae9ef9b073a7cb88d525e687d79564736f6c63430008040033',
      constructorArgs:
        '00000000000000000000000000000000000000000000000000000000000186a00000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000003444149000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000034441490000000000000000000000000000000000000000000000000000000000',
      metadata:
        '{"compiler":{"version":"v0.8.4+commit.c7e474f2"},"language":"Solidity","output":{"abi":"[{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_initialAmount\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenName\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"uint8\\",\\"name\\":\\"_decimalUnits\\",\\"type\\":\\"uint8\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenSymbol\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"spender\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"allocateTo\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"allowance\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_spender\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"decimals\\",\\"outputs\\":[{\\"internalType\\":\\"uint8\\",\\"name\\":\\"\\",\\"type\\":\\"uint8\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"dst\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transfer\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"src\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"dst\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"amount\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}]"},"devdoc":{},"sources":{"contracts/FaucetToken.sol:FaucetToken":{"content":"{{\\r\\n  \\"language\\": \\"Solidity\\",\\r\\n  \\"sources\\": {\\r\\n    \\"contracts/asteroid/FaucetToken.sol\\": {\\r\\n      \\"content\\": \\"//SPDX-License-Identifier: Unlicense\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @title Standard ERC20 token\\\\n * @dev Implementation of the basic standard token.\\\\n *  See https://github.com/ethereum/EIPs/issues/20\\\\n */\\\\ncontract StandardToken {\\\\n    string public name;\\\\n    string public symbol;\\\\n    uint8 public decimals;\\\\n    uint256 public totalSupply;\\\\n    mapping (address => mapping (address => uint256)) public allowance;\\\\n    mapping(address => uint256) public balanceOf;\\\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\\\n\\\\n    constructor(uint256 _initialAmount, string memory _tokenName, uint8 _decimalUnits, string memory _tokenSymbol) {\\\\n        totalSupply = _initialAmount;\\\\n        balanceOf[msg.sender] = _initialAmount;\\\\n        name = _tokenName;\\\\n        symbol = _tokenSymbol;\\\\n        decimals = _decimalUnits;\\\\n    }\\\\n\\\\n    function transfer(address dst, uint256 amount) external returns (bool) {\\\\n        balanceOf[msg.sender] = balanceOf[msg.sender] - amount;\\\\n        balanceOf[dst] = balanceOf[dst] + amount;\\\\n        emit Transfer(msg.sender, dst, amount);\\\\n        return true;\\\\n    }\\\\n\\\\n    function transferFrom(address src, address dst, uint256 amount) external returns (bool) {\\\\n        allowance[src][msg.sender] = allowance[src][msg.sender] - amount;\\\\n        balanceOf[src] = balanceOf[src] - amount;\\\\n        balanceOf[dst] = balanceOf[dst] + amount;\\\\n        emit Transfer(src, dst, amount);\\\\n        return true;\\\\n    }\\\\n\\\\n    function approve(address _spender, uint256 amount) external returns (bool) {\\\\n        allowance[msg.sender][_spender] = amount;\\\\n        emit Approval(msg.sender, _spender, amount);\\\\n        return true;\\\\n    }\\\\n}\\\\n\\\\n/**\\\\n * @title The Compound Faucet Test Token\\\\n * @author Compound\\\\n * @notice A simple test token that lets anyone get more of it.\\\\n */\\\\ncontract FaucetToken is StandardToken {\\\\n    constructor(uint256 _initialAmount, string memory _tokenName, uint8 _decimalUnits, string memory _tokenSymbol)\\\\n        StandardToken(_initialAmount, _tokenName, _decimalUnits, _tokenSymbol) {\\\\n    }\\\\n\\\\n    function allocateTo(address _owner, uint256 value) public {\\\\n        balanceOf[_owner] += value;\\\\n        totalSupply += value;\\\\n        emit Transfer(address(this), _owner, value);\\\\n    }\\\\n}\\\\n\\"\\r\\n    }\\r\\n  },\\r\\n  \\"settings\\": {\\r\\n    \\"optimizer\\": {\\r\\n      \\"enabled\\": true,\\r\\n      \\"runs\\": 1000\\r\\n    },\\r\\n    \\"outputSelection\\": {\\r\\n      \\"*\\": {\\r\\n        \\"*\\": [\\r\\n          \\"evm.bytecode\\",\\r\\n          \\"evm.deployedBytecode\\",\\r\\n          \\"abi\\"\\r\\n        ]\\r\\n      }\\r\\n    },\\r\\n    \\"libraries\\": {}\\r\\n  }\\r\\n}}","keccak256":""}},"settings":{"optimizer":{"enabled":true,"runs":1000}},"version":1}',
      source: '',
    },
  },
  version: 'v0.8.4+commit.c7e474f2',
};

export const tokenArgs: [number, string, number, string] = [10000000, 'Test Token', 6, 'TEST'];

export async function buildToken() {
  return await deploy<FaucetToken, FaucetToken__factory, [number, string, number, string]>(
    'test/FaucetToken.sol',
    tokenArgs,
    hre
  );
}

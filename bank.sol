pragma solidity 0.8.10;
contract MyBank
{
    address public LastSender;
    mapping(address=>uint) private balances;

    

    function deposit() external payable {
        LastSender=msg.sender;
        balances[msg.sender] += msg.value;

    }
    
    function GetBalance() public view returns(uint){
    return address(this).balance;
    }
    
    function withdraw(address payable addr,uint amount) public payable{
        require(balances[addr]>= amount ," you don't have enough balance")
        (bool sent ,bytes memory data) = addr.call{value: amount }("");
        require(sent,"transaction failed due to insufficent fund")
        balances[msg.sender] -= amount
    }


}
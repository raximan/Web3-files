pragma solidity 0.8.10;
contract MyContract
{
    address public LastSender;
    function recieve() external payable {
        LastSender=msg.sender;
    }
    
    function GetBalance() public view returns(uint){
    return address(this).balance;
    }
    
    function pay(address payable addr) public payable{
    (bool sent, bytes memory data) = addr.call{value: 200000000 gwei }("");
        require(sent,"transaction failed due to insufficent fund");
    }


}
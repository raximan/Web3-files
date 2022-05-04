pragma solidity 0.8.10;



contract NftAuction{
    event Start();
    event End(address highestBidder,uint highestBid );
    event Bid(address indexed sender ,uint amount);
    event Withdraw(address indexed wihdrawer,uint amount);

    address payable public seller;
    address payable public highestBidder;
    uint public highestBid;
    bool public started;
    bool public ended;
    uint public endAt;
    mapping (address=>uint) public bids;
    constructor(){
        seller = payable(msg.sender);
    }
    
    function start(uint startingBid ) external{
        require(started==false,"you already started");

        require(msg.sender==seller,"you did not start the auction");
        started = true;
        endAt= block.timestamp + 7 days;
        highestBid=startingBid;
        emit Start();
    }
    
    function bid() external payable{
        require(started,"auction is not started");
        require(block.timestamp<endAt,"ended");
        require(msg.value>highestBid,"the bid is not enough");
        if (highestBidder!=address(0)){
            bids[highestBidder] += highestBid;
            }
        highestBidder=payable(msg.sender);
        highestBid = msg.value  ;
        emit Bid(highestBidder,highestBid);

        


        
    } 

    function withdraw() external payable{
    require(msg.sender!=highestBidder,"no man not you");
    (bool sent,bytes memory data) = payable(msg.sender).call{value:bids[msg.sender]}("");
    require(sent,"could not withdraw");
    
    emit Bid(msg.sender,bids[msg.sender]);
    bids[msg.sender]=0;
    }
    
    
    function end() external {
        require(started,"you need to start first");
        require(block.timestamp>=endAt,"you need to wait mate");
        require(!ended,"auction already ended");
        
        
        
        
        ended =true;
        emit End(highestBidder,highestBid);

    }


}


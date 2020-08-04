pragma solidity >= 0.5.0 < 0.7.0;

contract TestingTime {
  uint256 startTime;
  uint256 endTime;

  constructor(uint256 _startTime,
              uint256 _endTime) public {
    startTime = _startTime;
    endTime = _endTime;
  }

  function hasStarted() public view returns(bool) {
    return (block.timestamp >= startTime);
  }

  function hasEnded() public view returns(bool) {
    return (block.timestamp >= endTime);
  }
}
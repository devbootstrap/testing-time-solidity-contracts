const TestingTime = artifacts.require('TestingTime')

module.exports = function(_deployer) {
  endTime = Date.now()
  _deployer.deploy(TestingTime, endTime)
};

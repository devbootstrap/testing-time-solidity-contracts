const { contract } = require('@openzeppelin/test-environment');
const { time } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const TestingTime = contract.fromArtifact('TestingTime')

describe('TestingTime', () => {
  let tt, startTime, endTime;

  beforeEach(async () => {
    startTime = (await time.latest()).add(time.duration.hours(1))
    endTime = (await time.latest()).add(time.duration.hours(2))
    tt = await TestingTime.new(startTime, endTime)
  })

  describe('When deployed', () => {
    it('should not have started', async () => {
      expect(await tt.hasStarted()).to.be.false
    })
    it('should not have ended', async () => {
      expect(await tt.hasEnded()).to.be.false
    })
  })

  describe('When enough time has elapsed to start the contract', () => {
    beforeEach(async () => {
      await time.increaseTo(startTime.add(time.duration.seconds(1)))
    })
    it('should not have started', async () => {
      expect(await tt.hasStarted()).to.be.true
    })
    it('should not have ended', async () => {
      expect(await tt.hasEnded()).to.be.false
    })
  })

  describe('When enough time has elapsed to end the contract', () => {
    beforeEach(async () => {
      await time.increaseTo(endTime.add(time.duration.seconds(1)))
    })
    it('should not have started', async () => {
      expect(await tt.hasStarted()).to.be.true
    })
    it('should not have ended', async () => {
      expect(await tt.hasEnded()).to.be.true
    })
  })
})

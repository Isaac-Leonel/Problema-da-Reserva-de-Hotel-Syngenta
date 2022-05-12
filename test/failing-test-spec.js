'use strict'

const chai = require('chai')
const expect = chai.expect
const hotels = require('../src/main')
const getCheapestHotel = hotels.getCheapestHotel 

describe('test', function () {
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")).to.equal("Lakewood");
  });
  it('should return Bridgewood', function () {
    expect(getCheapestHotel("Regular: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Bridgewood");
  });
  it('should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")).to.equal("Ridgewood");
  });
})

describe('unit test | changing customer type', function () {
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Rewards: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")).to.equal("Lakewood");
  });
  it('should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun)")).to.equal("Ridgewood");
  });
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)")).to.equal("Lakewood");
  });
})

describe('unit test | changing for this year', function () {
  it('should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 07May2022(sat), 08May2022(sun), 09May2022(mon)")).to.equal("Ridgewood");
  });
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 15May2022(sun), 16May2022(mon), 17May2022(tues)")).to.equal("Lakewood");
  });
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 17May2022(tues), 18May2022(wed), 19May2022(thur)")).to.equal("Lakewood");
  });
})

describe('unit test | with more dates', function () {
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 07May2022(sat), 08May2022(sun), 09May2022(mon), 10May2022(tues)")).to.equal("Lakewood");
  });
  it('should return Ridgewood', function () {
    expect(getCheapestHotel("Rewards: 20Mar2009(fri), 21Mar2009(sat), 22Mar2009(sun), 23Mar2009(mon), 22Mar2009(tues)")).to.equal("Ridgewood");
  });
  it('should return Lakewood', function () {
    expect(getCheapestHotel("Regular: 17May2022(tues), 18May2022(wed), 19May2022(thur), 20May2022(fri), 21May2022(sat), 22May2022(sun)")).to.equal("Lakewood");
  });
})



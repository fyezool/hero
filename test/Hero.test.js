const Hero = artifacts.require("Hero")
contract('Hero', (accounts) => {
  let hero
  before(async () => {
    hero = await Hero.deployed()

  })

  it('It should return Hulk', async () => {
    const receiveHero = await hero.getHero()
    assert.equal(receiveHero, "Hulk")

  })

  it('It should return hero to iron man', async()=> {
    await hero.setHero("Iron man", {from:accounts[0]})
    const receivedHero = await hero.getHero()
    assert.equal(receivedHero, "Iron man")
  })

});

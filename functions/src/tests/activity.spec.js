const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const rewire = require('rewire');

const mongoose = require('mongoose');

const sandbox = sinon.createSandbox();


let Activity = rewire('../controllers/activity_controller');


describe('Testing /activities endpoint',()=>{
    let acitityVal;
    let findOneStub;
    const activity_id = '62d15544d160f5a2aed5ccfd';
    beforeEach(()=>{
        acitityVal={
            name:"voyage de luxe à kpalime",
            description: "Nous allons tous voyeger pour de belles vacances dans une ville ensolleillé comme jaja ",
        };
    });

    findOneStub = sandbox.stub(mongoose.Model, 'find').resolves(acitityVal);

    afterEach(()=>{
        Activity = rewire('../controllers/activity_controller');
        sandbox.restore();
    })

    describe('GET /:_id', () => {
        it('should return error when called without _id', async () => {
            Activity
                .find()
                .then(() => {
                    throw new Error('⚠️ Unexpected success!');
                })
                .catch((err) => {
                    expect(result).to.be.instanceOf(Error);
                    expect(err.message).to.equal('Invalid item id');
                });
        });

        it('should succeed when called with hash', async () => {
            Activity
                .findOne('someRandomHash')
                .then((activity) => {
                    console.log(activity)
                    console.log(activityVal)
                    expect(activity).to.equal(acitityVal);
                })
                .catch((err) => {
                    throw new Error('⚠️ Unexpected failure!');
                });
        });
    });

})
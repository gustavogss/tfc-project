import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import User from '../database/models/UserModel';
import StatusCodes from '../enums/statusCode';
import { userMock, userValidatedMock, invalidUserMock } from './mock/user.mock';
import Messages from '../enums/messages';
import { app } from '../app';
import token from '../auth/jwt';
chai.use(chaiHttp);
const { expect } = chai;

describe('TEST GET "/"', () => {
  describe('When sucess request', () => {
    it('Return ok:true', async () => {
      const response = await chai.request(app).get('/');
      expect(response.body).to.deep.equal({ ok: true });
    });
  });  
});
    describe(' TEST POST /login', () => {
      describe('Success test', () => {
        beforeEach(() => {
          sinon.stub(User, 'findOne').resolves(userMock as User);
          sinon.stub(token, 'sign').returns('validToken');
        });

        afterEach(() => {
          sinon.restore();
        });        

        it('Return a token', async () => {
          const response = await chai
            .request(app)
            .post('/login')
            .send(userMock);
          expect(response.body).to.deep.equal({ token: 'validToken' });
        });
        it('Return status code 200', async () => {
          const response = await chai
            .request(app)
            .post('/login')
            .send(userMock);
          expect(response.status).to.equal(StatusCodes.OK);
        });
      });
    });     

    describe('GET /login/validate', () => {
      describe('when it succeeds', () => {
        beforeEach(() => {
          sinon.stub(token, 'decode').returns({ email: userMock.email, password: '' });
          sinon.stub(User, 'findOne').resolves(userValidatedMock as User);
        });
    
        afterEach(() => {
          sinon.restore();
        });  
          
        it('Return the user role', async () => {
          const response = await chai
            .request(app)
            .get('/login/validate')
            .set('authorization', 'validToken');    
          expect(response.body).to.deep.equal({ role: userValidatedMock.role });
        });
        it('Return status code 200', async () => {
          const response = await chai
            .request(app)
            .get('/login/validate')
            .set('authorization', 'validToken');
          expect(response.status).to.equal(StatusCodes.OK);
        });
      });
    });

    describe ('ERRORS TESTS', () => {     
      describe('When user does not exist', () => {
        beforeEach(() => {
          sinon.stub(token, 'decode').returns({ email: '', password: userMock.password });
          sinon.stub(User, 'findOne').resolves(null);
        });
    
        afterEach(() => {
          sinon.restore();
        });
    
        it('Return status code 404 with the error message', async () => {
          const response = await chai
            .request(app)
            .get('/login/validate')
            .set('authorization', 'validToken');    
          expect(response.status).to.equal(StatusCodes.NOT_FOUND);
          expect(response.body).to.deep.equal({ message: Messages.USER_NOT_FOUND });
        });
      });
    });
      
   
   


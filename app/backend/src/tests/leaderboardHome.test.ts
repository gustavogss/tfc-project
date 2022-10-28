import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Team from '../database/models/TeamModel';
import StatusCode from '../enums/statusCode';
import {sequelizeHomeMock, formatHomeMock} from './mock/leaderboard.mock';
import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /leaderboard/home', () => {
  describe('when it succeeds', () => {
    beforeEach(() => {
      sinon.stub(Team, 'findAll').resolves(sequelizeHomeMock as unknown as Team[]);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should return status code 200', async () => {
      const response = await chai
        .request(app)
        .get('/leaderboard/home');
      expect(response.status).to.equal(StatusCode.OK);
    });

    it('should return the correct data', async () => {
      const response = await chai
        .request(app)
        .get('/leaderboard/home');
      expect(response.body).to.deep.equal(formatHomeMock);
    });
  });
});
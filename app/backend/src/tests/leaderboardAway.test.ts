import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Team from '../database/models/TeamModel';
import StatusCode from '../enums/statusCode';
import {sequelizeMock, formatAwayMock} from './mock/leaderboard.mock';
import { app } from '../app';
chai.use(chaiHttp);
const { expect } = chai;

describe('GET /leaderboard/away', () => {
  describe('when it succeeds', () => {
    beforeEach(() => {
      sinon.stub(Team, 'findAll').resolves(sequelizeMock as unknown as Team[]);
    });
    afterEach(() => {
      sinon.restore();
    });

    it('Return status code 200', async () => {
      const response = await chai
        .request(app)
        .get('/leaderboard/away');
      expect(response.status).to.equal(StatusCode.OK);
    });

    it('Return the correct data', async () => {
      const response = await chai
        .request(app)
        .get('/leaderboard/away');
      expect(response.body).to.deep.equal(formatAwayMock);
    });
  });
});
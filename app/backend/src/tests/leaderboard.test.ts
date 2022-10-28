import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import LeaderboardService from '../services/LeaderBoardService';
import StatusCode from '../enums/statusCode';
import {getAllHomeMock, getAllAwayMock, formatMock} from './mock/leaderboard.mock';

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('TEST GET /leaderboard', () => {
  describe('Sucess response', () => {
    beforeEach(() => {
      sinon.stub(LeaderboardService, 'getAllHome').resolves(getAllHomeMock);
      sinon.stub(LeaderboardService, 'getAllAway').resolves(getAllAwayMock);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('Return status code 200', async () => {
      const response = await chai
        .request(app)
        .get('/leaderboard');
      expect(response.status).to.equal(StatusCode.OK);
    });

    it('Return the correct format', async () => {
      const response = await chai
        .request(app)
        .get('/leaderboard');
      expect(response.body).to.deep.equal(formatMock);
    });
  });
});
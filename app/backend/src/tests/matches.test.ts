import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Match from '../database/models/MatcheModel';
import {
  matchesMock, 
  matchMockSent, 
  matchMockReturn, 
  invalidMockSent, 
  matchCreateMock,
  matchUpdatedMock,
} from './mock/matches.mock';
import {matchesInProgress} from './mock/matchesInProgress.mock';
import {matchesIsNotProgress} from './mock/matchesIsNotProgres.mock';
import IMatches from '../interfaces/IMatches';
import Team from '../database/models/TeamModel';
import { app } from '../app';
import StatusCodes from '../enums/statusCode';
import ValidateToken from '../middlewares/TokenValidated';
import token from '../auth/jwt';

chai.use(chaiHttp);

const { expect } = chai;

describe('TEST MATCHES GET /matches ', () => {
  describe('When it succeeds', () => {
    beforeEach(() => {
      sinon.stub(Match, 'findAll').resolves(matchesMock as IMatches[]);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('Return a list of matches', async () => {
      const response = await chai
        .request(app)
        .get('/matches');
      expect(response.body).to.deep.equal(matchesMock);
    });

    it('Return status code 200', async () => {
      const response = await chai
        .request(app)
        .get('/matches');
      expect(response.status).to.equal(StatusCodes.OK);
    });    
  });
});

describe('GET /matches?inProgress=<boolean> ', () => {
  describe('When matches InProgress ', () => {
    beforeEach(() => {
      sinon.stub(Match, 'findAll').resolves(matchesMock as IMatches[]);
    });

    afterEach(() => {
      sinon.restore();
    });    

    it('Retrun list of matches', async () => {
      const response = await chai
        .request(app)
        .get('/matches?inProgress=true');
      expect(response.body).to.deep.equal(matchesMock);
    });
    it('Return status code 200', async () => {
      const response = await chai
        .request(app)
        .get('/matches?inProgress=true');
      expect(response.status).to.equal(StatusCodes.OK);
    });
  });

  describe('When Matches NotInProgress', () => {
    beforeEach(() => {
      sinon.stub(Match, 'findAll').resolves(matchesInProgress as IMatches[]);
    });

    afterEach(() => {
      sinon.restore();
    });
    

    it('Return a list of matches NotInProgress', async () => {
      const response = await chai
        .request(app)
        .get('/matches?inProgress=false');
      expect(response.body).to.deep.equal(matchesIsNotProgress);
    });
  });
  it('should return status code 200', async () => {
    const response = await chai
      .request(app)
      .get('/matches?inProgress=false');
    expect(response.status).to.equal(StatusCodes.OK);
  });
});

describe('TEST POST /matches', () => {
  describe('When sucess', () => {
    beforeEach(() => {
      sinon.stub(Team, 'findByPk').resolves(matchCreateMock as Team);
      sinon.stub(Match, 'create').resolves(matchMockReturn as Match);
      sinon.stub(ValidateToken, 'validate');
      sinon.stub(token, 'decode').returns({ email: '', password: ''})
    });

    afterEach(() => {
      sinon.restore();
    });

    it('Return status code 201', async () => {
      const response = await chai
        .request(app)
        .post('/matches')
        .set('authorization', 'validToken')
        .send(matchMockSent);
      expect(response.status).to.equal(StatusCodes.CREATE);
    });

    it('Return the match', async () => {
      const response = await chai
        .request(app)
        .post('/matches')
        .set('authorization', 'validToken')
        .send(matchMockSent);
      expect(response.body).to.deep.equal(matchMockReturn);
    });
  });

  describe('When it fails', () => {
    beforeEach(() => {
      sinon.stub(Team, 'findByPk').resolves();
      sinon.stub(Match, 'create');
      sinon.stub(ValidateToken, 'validate');
      sinon.stub(token, 'decode').returns({ email: '', password: ''})
    });

    afterEach(() => {
      sinon.restore();
    });

    it('Return status code 401', async () => {
      const response = await chai
        .request(app)
        .post('/matches')
        .set('authorization', 'validToken')
        .send(invalidMockSent);
      expect(response.status).to.equal(StatusCodes.UNPROCESSABLE_ENTITY);
    });
  });
});

describe('TEST UPDATE /matches/:id/finish', () => {
  describe('when it succeeds', () => {
    beforeEach(() => {
      sinon.stub(Match, 'findByPk').resolves(matchUpdatedMock as Match);
      sinon.stub(Match, 'update').resolves([ 0 ] as any);
    });
    afterEach(() => {
      sinon.restore();
    });

    it('should return status code 200', async () => {
      const response = await chai
        .request(app)
        .patch('/matches/1/finish');
      expect(response.status).to.equal(StatusCodes.OK);
    });
  });

  describe('when it fails', () => {
    beforeEach(() => {
      sinon.stub(Match, 'findByPk').resolves(null);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('Return status code 404', async () => {
      const response = await chai
        .request(app)
        .patch('/matches/1/finish');
      expect(response.status).to.equal(StatusCodes.NOT_FOUND);
    });
  });
});

const matchUpdateSentDataMock = {
  homeTeamGoals: 3,
  awayTeamGoals: 1,
};

describe('TEST PATCH /matches/:id', () => {
  describe('When it succeeds', () => {
    beforeEach(() => {
      sinon.stub(Match, 'findByPk').resolves(matchUpdatedMock as Match);
      sinon.stub(Match, 'update');
    });

    afterEach(() => {
      sinon.restore();
    });

    it('Returns status code 200', async () => {
      const response = await chai
        .request(app)
        .patch('/matches/1')
        .send(matchUpdateSentDataMock);
      expect(response.status).to.equal(StatusCodes.OK);
    });
  });
});
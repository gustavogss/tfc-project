import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import Team from '../database/models/TeamModel';
import {teamsMock, teamIdMock} from './mock/team.mock';

import { app } from '../app';
import StatusCodes from '../enums/statusCode';
import Messages from '../enums/messages';

chai.use(chaiHttp);

const { expect } = chai;

describe('TEST TEAMS GET /teams', () => {
  describe('List Teams', () => {
    beforeEach(() => {
      sinon.stub(Team, 'findAll').resolves(teamsMock as Team[]);
    });

    afterEach(() => {
      sinon.restore();
    });
   
    it('Return a list of teams', async () => {
      const response = await chai
        .request(app)
        .get('/teams');
      expect(response.body).to.deep.equal(teamsMock);
    });
    it('Return status code 200', async () => {
      const response = await chai
        .request(app)
        .get('/teams');
      expect(response.status).to.equal(StatusCodes.OK);        
    });
  });
});
  describe('TEST TEAM ById teams/:id', () => {
    beforeEach(() => {
      sinon.stub(Team, 'findOne').resolves(teamIdMock as Team);
    });

    afterEach(() => {
      sinon.restore();
    });
    it('Return teamId', async () => {
      const response = await chai
        .request(app)
        .get('/teams/1');
      expect(response.body).to.deep.equal(teamIdMock);
    });
    it('Return status code 200', async () => {
      const response = await chai
        .request(app)
        .get('/teams');
      expect(response.status).to.equal(StatusCodes.OK);     
    });
  });

  describe('TEST TEAM NOT FOUND', () => {
    beforeEach(() => {
      sinon.stub(Team, 'findOne').resolves(null);
    });

    afterEach(() => {
      sinon.restore();
    });
    it('Return statusCode 404', async () => {
      const response = await chai
        .request(app)
        .get('/teams/50');
      expect(response.status).to.be.equal(StatusCodes.NOT_FOUND);
      expect(response.body).to.deep.equal({message: Messages.TEAM_NOT_FOUND});
    });
  });
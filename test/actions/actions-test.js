import nock from 'nock';
import { spy } from 'sinon';
import seasonsFixture from '../fixtures/seasons.json';
import {
  RECEIVE_ALL_SEASONS,
  receiveAllSeasons,
  requestAllSeasons,
} from '../../src/actions';

describe('actions', () => {
  describe('receiveAllSeasons', () => {
    it('should create an action to receive all seasons' ,() => {
      const action = receiveAllSeasons(seasonsFixture);
      action.should.eql({
        type: RECEIVE_ALL_SEASONS,
        seasons: seasonsFixture,
      });
    });
  });

  describe('requestAllSeasons', () => {
    it('should fetch all seasons', (done) => {
      nock('https://soccer-proxy.herokuapp.com')
        .get('/soccerseasons')
        .reply(200, seasonsFixture);

      const dispatch = spy();
      const getState = () => ({seasons: []});

      requestAllSeasons()(dispatch, getState).then(() => {
        dispatch.firstCall.args[0].should.eql({
          type: RECEIVE_ALL_SEASONS,
          seasons: seasonsFixture,
        });
        done();
      });
    });

    it('should not refetch all seasons', (done) => {
      nock('https://soccer-proxy.herokuapp.com')
        .get('/soccerseasons')
        .reply(200, seasonsFixture);

      const dispatch = spy();
      const getState = () => ({seasons: seasonsFixture});

      requestAllSeasons()(dispatch, getState).then(() => {
        dispatch.callCount.should.eql(0);
        done();
      });
    });
  });
});

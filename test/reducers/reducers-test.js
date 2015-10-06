import { seasons } from '../../src/reducers';
import { RECEIVE_ALL_SEASONS } from '../../src/actions';
import seasonsFixture from '../fixtures/seasons.json';

describe('reducers', () => {
  describe('seasons', () => {
    it('should return the initial state', () => {
      const state = seasons(undefined, {});
      state.should.eql([]);
    });

    it('should handle RECEIVE_ALL_SEASONS', () => {
      const action = {
        type: RECEIVE_ALL_SEASONS,
        seasons: seasonsFixture,
      };

      const state = seasons(undefined, action);

      state.should.eql(seasonsFixture);
    });
  });

});

import {rootReducer, initialState} from './root.reducer';

describe('RootReducer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = rootReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
});

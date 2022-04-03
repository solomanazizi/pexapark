import * as fromRootActions from './root.actions';

describe('loadFarms', () => {
  it('should return an action', () => {
    expect(fromRootActions.loadFarms().type).toBe('[RootActions] Load Farms');
  });
});

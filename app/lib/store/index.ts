import { actions } from './actions';
import { reducers } from './reducers';
import { state } from './state';
import { Store } from './store';

export const store = new Store({
  actions,
  reducers,
  state
});

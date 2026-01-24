import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.action';

/**
 * This is the initial value of the counter
 * When the app starts, counter = 0
 */
export const initialState = 0;

/**
 * The reducer is a pure function
 * It listens to actions and decides how the state should change
 */
export const counterReducer = createReducer(
  initialState,

  /**
   * When increment action is dispatched
   * We return a NEW state with +1
   */
  on(CounterActions.increment, (state) => state + 1),

  /**
   * When decrement action is dispatched
   * We return a NEW state with -1
   */
  on(CounterActions.decrement, (state) => state - 1),

  /**
   * When reset action is dispatched
   * We ignore the current state and return 0
   */
  on(CounterActions.reset, () => initialState)
);

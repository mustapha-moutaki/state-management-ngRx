import { createSelector } from '@ngrx/store';

/**
 * This selector gets the counter feature state
 * In our case, the counter state is just a number
 */
export const selectCounterState = (state: any) => state.counter;

/**
 * This selector is used to READ the counter value
 * Components will use this instead of accessing the store directly
 */
export const selectCounterValue = createSelector(
  selectCounterState,
  (counter) => counter
);

// it's simple as that hh
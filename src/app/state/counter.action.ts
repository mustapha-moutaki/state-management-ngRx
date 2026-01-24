import { createAction } from '@ngrx/store';

/**
 * This action is responsible for incrementing the counter value
 * Basically telling the store: add +1
 */
export const increment = createAction(
  '[Counter] Increment'
);

/**
 * This action is responsible for decrementing the counter value
 * Telling the store: subtract -1
 */
export const decrement = createAction(
  '[Counter] Decrement'
);

/**
 * This action resets the counter back to zero
 * Useful for reset, logout, or reinitializing state
 */
export const reset = createAction(
  '[Counter] Reset'
);

import { fork } from 'redux-saga/effects';
import { gallery } from './gallery';

/**
 * Saga root.
 */
export default function* root():void {
  yield fork(gallery);
}

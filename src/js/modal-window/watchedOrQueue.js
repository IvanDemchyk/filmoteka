import refs from './refs';
import { WATCHE, QUEUE } from '../local.js';

export default function watchedOrQueue() {
  if (refs.watchedBtn.classList.contains('active')) {
    return WATCHE;
  } else {
    return QUEUE;
  }
}

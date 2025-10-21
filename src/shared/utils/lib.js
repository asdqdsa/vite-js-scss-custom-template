import { BASE_FONT_SIZE } from './constants';

export const toRem = (px) => `${px / BASE_FONT_SIZE}rem`;

export const getScrollbarWidth = () =>
  window.innerWidth - document.documentElement.clientWidth;

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// docs: https://www.typescriptlang.org/docs/handbook/jsx.html

import { renderJSX, renderFragment } from '@jochamb/sjsx/renderer';
import { JSX } from '@jochamb/sjsx/jsx-runtime';

export type { JSX };

export const jsx = renderJSX;
export const jsxs = renderJSX;
export const jsxDEV = renderJSX;
export const Fragment = renderFragment;

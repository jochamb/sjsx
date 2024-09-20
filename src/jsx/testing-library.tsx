import { RenderedJSX } from './types.js';

export async function render(jsx: RenderedJSX | Promise<RenderedJSX>) {
  return jsx;
}

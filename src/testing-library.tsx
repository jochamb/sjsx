import { RenderedJSX } from './types';

export async function render(jsx: RenderedJSX | Promise<RenderedJSX>) {
  return jsx;
}

import { RenderedJSX } from '@sjsx/types';

export async function render(jsx: RenderedJSX | Promise<RenderedJSX>) {
  return jsx;
}

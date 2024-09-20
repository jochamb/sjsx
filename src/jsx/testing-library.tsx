import { RenderedJSX } from '@jochamb/sjsx/types';

export async function render(jsx: RenderedJSX | Promise<RenderedJSX>) {
  return jsx;
}

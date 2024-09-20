import { RenderedJSX } from '@jochamb/sjsx/types';

export async function renderToString(jsx: RenderedJSX | Promise<RenderedJSX>) {
  return jsx;
}

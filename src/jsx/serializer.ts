import { JSXNode, RenderedJSX } from './types.js';

export class SerializationError extends Error {
  public constructor(public readonly value: unknown) {
    super(`SerializationError: unknown value: ${value}`);
  }
}

interface RawHtmlNode {
  dangerouslySetUnescapedHtml?: string | undefined;
}

export async function serializer(
  value: JSXNode,
  escaper: (value: string) => string
): Promise<string> {
  if (value === null || value === undefined) {
    return '';
  }

  if (Array.isArray(value)) {
    return (await Promise.all(value.map((v) => serializer(v, escaper)))).join('');
  }

  if (typeof value === 'string') {
    return escaper(value);
  }

  if (typeof value === 'number') {
    return value.toString();
  }

  if (typeof value === 'bigint') {
    return value.toString();
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (typeof value === 'function') {
    return serializer(value(), escaper);
  }

  if (value instanceof Promise) {
    return serializer(await value, escaper);
  }

  if (value instanceof RenderedJSX) {
    return value.result instanceof Promise ? await value.result : value.result;
  }

  if (
    typeof value === 'object' &&
    typeof (value as RawHtmlNode).dangerouslySetUnescapedHtml === 'string'
  ) {
    return value.dangerouslySetUnescapedHtml;
  }

  throw new SerializationError(JSON.stringify(value, null, 2));
}

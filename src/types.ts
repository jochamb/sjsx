export type JSXNode =
  | JSXNode[]
  | RenderedJSX
  | Promise<RenderedJSX>
  | UnescapedHtml
  | (() => JSXNode)
  | boolean
  | number
  | bigint
  | string
  | null
  | undefined;

interface UnescapedHtml {
  dangerouslySetUnescapedHtml: string;
}

export type FunctionComponent = (props: Record<string, unknown>) => RenderedJSX;

export class RenderedJSX {
  public constructor(public readonly result: string | Promise<string>) {}
}

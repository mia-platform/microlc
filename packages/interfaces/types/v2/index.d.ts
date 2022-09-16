/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn make-types` to regenerate this file.
 */

export type Application =
  | {
      id: string
      integrationMode: "href"
      href: string
      target?: "_blank" | "_self" | "_parent" | "_top"
    }
  | {
      id: string
      integrationMode: "iframe"
      /**
       * iFrame src attribute value
       */
      src?: string
      /**
       * Path on which the iFrame will be rendered
       */
      route: string
      attributes?: {
        allow?: unknown
        allowfullscreen?: unknown
        allowpaymentrequest?: unknown
        csp?: unknown
        fetchpriority?: unknown
        [k: string]: unknown
      }
    }
  | {
      id: string
      integrationMode: "compose"
      config:
        | {
            [k: string]: unknown
          }
        | string
      /**
       * Path on which the plugin will be rendered
       */
      route: string
    }
  | {
      id: string
      integrationMode: "qiankun"
      /**
       * Entry of the plugin
       */
      entry:
        | string
        | (
            | {
                scripts: string | [string, ...string[]]
                styles?: string | string[]
                html?: string
              }
            | {
                scripts?: string | string[]
                styles?: string | string[]
                html: string
              }
          )
      /**
       * Qiankun activeRule
       */
      route: string
      container?: {
        [k: string]: unknown
      }
      /**
       * Data passed to the plugin
       */
      properties?: {
        [k: string]: unknown
      }
    }
/**
 * bar
 */
export type Content = ArrayContent | Component | (number | string)
/**
 * an html array node
 */
export type ArrayContent = (Component | (number | string))[]

/**
 * Version 2 of micro-lc configuration
 */
export interface Config {
  $schema?: string
  version: 2
  settings?: Settings
  css?: CSSConfig
  importmap?: GlobalImportmap
  applications?: Application[]
  layout?: PluginConfiguration
}
/**
 * Global micro-lc settings
 */
export interface Settings {
  /**
   * Query selector to plugins mounting DOM element
   */
  pluginMountPointSelector?: string
  defaultUrl?: string
}
/**
 * TODO
 */
export interface CSSConfig {
  nodes?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: {
      [k: string]: string | number
    }
  }
  global?: {
    /**
     * Becomes --micro-lc-primary-color
     */
    "primary-color"?: string
    "font-family"?: string
  }
}
/**
 * Import maps settings
 */
export interface GlobalImportmap {
  imports?: Imports
  scopes?: Scopes
}
/**
 * Allows control over what URLs get fetched by JavaScript import statements and import() expressions.
 */
export interface Imports {
  [k: string]: string
}
/**
 * It is often the case that you want to use the same import specifier to refer to multiple versions of a single library, depending on who is importing them. This encapsulates the versions of each dependency in use, and avoids dependency hell. We support this use case in import maps by allowing you to change the meaning of a specifier within a given scope.
 */
export interface Scopes {
  [k: string]: {
    [k: string]: string
  }
}
/**
 * Orchestrator main page layout DOM configuration
 */
export interface PluginConfiguration {
  sources?:
    | string
    | string[]
    | {
        uris: string | string[]
        importmap?: Importmap
      }
  content: Content
  [k: string]: unknown
}
export interface Importmap {
  imports?: Imports
  scopes?: Scopes
}
/**
 * an html element node
 */
export interface Component {
  sources?:
    | string
    | string[]
    | {
        uris: string | string[]
        importmap?: Importmap
      }
  tag:
    | string
    | (
        | "a"
        | "abbr"
        | "acronym"
        | "address"
        | "applet"
        | "area"
        | "article"
        | "aside"
        | "audio"
        | "base"
        | "basefont"
        | "bdo"
        | "bgsound"
        | "blink"
        | "blockquote"
        | "body"
        | "br"
        | "button"
        | "canvas"
        | "caption"
        | "center"
        | "col"
        | "colgroup"
        | "command"
        | "comment"
        | "datalist"
        | "dd"
        | "del"
        | "details"
        | "dir"
        | "div"
        | "dl"
        | "dt"
        | "embed"
        | "fieldset"
        | "figure"
        | "b"
        | "big"
        | "i"
        | "small"
        | "tt"
        | "font"
        | "footer"
        | "form"
        | "frame"
        | "frameset"
        | "head"
        | "header"
        | "hgroup"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "hr"
        | "html"
        | "isindex"
        | "iframe"
        | "ilayer"
        | "img"
        | "input"
        | "ins"
        | "keygen"
        | "label"
        | "layer"
        | "legend"
        | "li"
        | "link"
        | "map"
        | "mark"
        | "marquee"
        | "menu"
        | "meta"
        | "meter"
        | "multicol"
        | "nav"
        | "nobr"
        | "noembed"
        | "noframes"
        | "noscript"
        | "object"
        | "ol"
        | "optgroup"
        | "option"
        | "output"
        | "p"
        | "param"
        | "cite"
        | "code"
        | "dfn"
        | "em"
        | "kbd"
        | "samp"
        | "strong"
        | "var"
        | "plaintext"
        | "pre"
        | "progress"
        | "q"
        | "ruby"
        | "script"
        | "section"
        | "select"
        | "spacer"
        | "span"
        | "s"
        | "slot"
        | "strike"
        | "style"
        | "sub"
        | "sup"
        | "table"
        | "tbody"
        | "td"
        | "textarea"
        | "tfoot"
        | "th"
        | "thead"
        | "time"
        | "title"
        | "tr"
        | "u"
        | "ul"
        | "video"
        | "wbr"
        | "xmp"
      )
  /**
   * html5 attribute applied using setAttribute API
   */
  attributes?: {
    [k: string]: string
  }
  booleanAttributes?: string[]
  /**
   * DOM element property applied as object property after creating an element
   */
  properties?: {
    [k: string]: unknown
  }
  content?: Content
}

/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn make-types` to regenerate this file.
 */

export type Application = IFrameApplication | ComposableApplication | QiankunApplication
export type Content = ArrayContent | Component | (number | string)
/**
 * HTML5 tag name
 */
export type HTMLTag =
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
/**
 * HTML node children
 */
export type Content1 = ArrayContent | Component | (number | string)
/**
 * An HTML array node
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
  "import-map"?: GlobalImportMap
  /**
   * List of mounted applications
   */
  applications?: Application[]
  layout?: PluginConfiguration1
}
/**
 * Global micro-lc settings
 */
export interface Settings {
  /**
   * Query selector to plugins mounting DOM element
   */
  pluginMountPointSelector?:
    | string
    | {
        id: string
        slot?: string
      }
  /**
   * Landing URL
   */
  defaultUrl?: string
}
/**
 * CSS-related configuration
 */
export interface CSSConfig {
  /**
   * A map matching CSS selectors to rules
   */
  nodes?: {
    /**
     * A valid CSS selector
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: {
      /**
       * A valid CSS property
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".*".
       */
      [k: string]: string | number
    }
  }
  /**
   * Standard CSS variables globally available scoped with prefix '--micro-lc-'
   */
  global?: {
    "primary-color"?: string
    "font-family"?: string
  }
}
/**
 * Global import map
 */
export interface GlobalImportMap {
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
export interface IFrameApplication {
  /**
   * Unique identifier of the application
   */
  id: string
  /**
   * Type of the application: nested browsing context
   */
  integrationMode: "iframe"
  /**
   * iFrame src attribute value
   */
  src: string
  /**
   * Path on which the iFrame will be rendered
   */
  route: string
  /**
   * Valid attributes of iframe HTML element
   */
  attributes?: {
    [k: string]: unknown
  }
}
export interface ComposableApplication {
  /**
   * Unique identifier of the application
   */
  id: string
  /**
   * Type of the application: composition of HTML tags
   */
  integrationMode: "compose"
  config: PluginConfiguration | string
  /**
   * Path on which the plugin will be rendered
   */
  route: string
}
/**
 * Composer configuration. It can be an url or an in-line configuration
 */
export interface PluginConfiguration {
  /**
   * Global sources
   */
  sources?:
    | string
    | string[]
    | {
        /**
         * A single source uri or a list of source uris
         */
        uris: string | string[]
        "import-map"?: ImportMap
      }
  content: Content
}
/**
 * Specific import map for the component
 */
export interface ImportMap {
  imports?: Imports
  scopes?: Scopes
}
/**
 * An HTML node
 */
export interface Component {
  /**
   * Sources of custom HTML node
   */
  sources?:
    | string
    | string[]
    | {
        /**
         * A single source uri or a list of source uris
         */
        uris: string | string[]
        "import-map"?: ImportMap
      }
  /**
   * HTML node tag name
   */
  tag: string | HTMLTag
  /**
   * HTML5 attribute applied using setAttribute API
   */
  attributes?: {
    [k: string]: string
  }
  /**
   * HTML5 boolean attribute applied using setAttribute API
   */
  booleanAttributes?: string | string[]
  /**
   * DOM element property applied as object property after creating an element
   */
  properties?: {
    [k: string]: unknown
  }
  content?: Content1
}
export interface QiankunApplication {
  /**
   * Unique identifier of the application
   */
  id: string
  /**
   * Type of the application: micro front-end loaded using qiankun
   */
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
   * qiankun activeRule
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
 * Orchestrator main page layout DOM configuration
 */
export interface PluginConfiguration1 {
  /**
   * Global sources
   */
  sources?:
    | string
    | string[]
    | {
        /**
         * A single source uri or a list of source uris
         */
        uris: string | string[]
        "import-map"?: ImportMap
      }
  content: Content
}

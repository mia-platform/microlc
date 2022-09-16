/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run `yarn make-types` to regenerate this file.
 */

export interface Config {
  theming?: {
    header?: {
      pageTitle?: string
      favicon?: string
      [k: string]: unknown
    }
    logo: {
      /**
       * Light logo image url
       */
      url_light_image: string
      /**
       * Dark logo image url
       */
      url_dark_image?: string
      /**
       * Logo alt
       */
      alt: string
      /**
       * Link to the navigation page reached when the logo is clicked
       */
      navigation_url?: string
      [k: string]: unknown
    }
    variables: {
      /**
       * Main theme color
       */
      primaryColor?: string
      [k: string]: unknown
    }
    menuLocation?: "sideBar" | "topBar" | "fixedSideBar"
    enableDarkMode?: boolean
  }
  shared?: {
    props?: {
      [k: string]: unknown
    }
    [k: string]: unknown
  }
  plugins?: Plugin[]
  internalPlugins?: InternalPlugin[]
  analytics?: {
    /**
     * Url to the privacy information page
     */
    privacyLink: string
    /**
     * Informative message inside the banner
     */
    disclaimer: string
    /**
     * Google tag manager id of the current user needed to instaciate analytics
     */
    gtmId: string
  }
  helpMenu?: {
    /**
     * Link to the help page
     */
    helpLink: string
  }
  rightMenu?: {
    /**
     * Entry point of the web component
     */
    entry: string
    /**
     * Tag that will be used to mount the web component inside the DOM
     */
    tag: string
    attributes?: {
      [k: string]: unknown
    }
    properties?: {
      [k: string]: unknown
    }
  }[]
}
export interface Plugin {
  /**
   * Unique identifier of the plugin
   */
  id: string
  /**
   * Expression to evaluate the users that can access the plugin
   */
  aclExpression?: string
  /**
   * Plugin registration order
   */
  order?: number
  /**
   * Way in which the plugin is integrated.
   */
  integrationMode?: "href" | "qiankun" | "iframe"
  /**
   * Path on which the plugin will be rendered
   */
  pluginRoute?: string
  /**
   * Entry of the plugin
   */
  pluginUrl?: string
  /**
   * Data passed to the plugin
   */
  props?: {
    [k: string]: unknown
  }
  externalLink?: {
    /**
     * Url of the external application
     */
    url: string
    /**
     * States if the link should be opened in a new window
     */
    sameWindow: boolean
  }
  /**
   * Label visualized in the side menu
   */
  label: string
  /**
   * Icon visualized in the side menu
   */
  icon?: string
  /**
   * Sub-menu category in which insert the plugin
   */
  category?: string
  content?: Plugin[]
}
export interface InternalPlugin {
  /**
   * Unique identifier of the plugin
   */
  id: string
  /**
   * Expression to evaluate the users that can access the plugin
   */
  aclExpression?: string
  /**
   * Plugin registration order
   */
  order?: number
  /**
   * Way in which the plugin is integrated.
   */
  integrationMode?: "href" | "qiankun" | "iframe"
  /**
   * Path on which the plugin will be rendered
   */
  pluginRoute?: string
  /**
   * Entry of the plugin
   */
  pluginUrl?: string
  /**
   * Data passed to the plugin
   */
  props?: {
    [k: string]: unknown
  }
  externalLink?: {
    /**
     * Url of the external application
     */
    url: string
    /**
     * States if the link should be opened in a new window
     */
    sameWindow: boolean
  }
}

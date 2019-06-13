/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PstencilButton {
    'btnStyle': any;
    'cornerStyleClass': string;
    'disabled': any;
    'icon': string;
    /**
    * The first name
    */
    'iconPos': string;
    'label': string;
    'styleClass': string;
    'type': string;
  }
  interface ShowcaseApp {}
  interface ShowcaseButtonDemo {}
  interface ShowcaseHeader {}
  interface ShowcaseLayout {}
  interface ShowcaseSidebar {}
}

declare global {


  interface HTMLPstencilButtonElement extends Components.PstencilButton, HTMLStencilElement {}
  var HTMLPstencilButtonElement: {
    prototype: HTMLPstencilButtonElement;
    new (): HTMLPstencilButtonElement;
  };

  interface HTMLShowcaseAppElement extends Components.ShowcaseApp, HTMLStencilElement {}
  var HTMLShowcaseAppElement: {
    prototype: HTMLShowcaseAppElement;
    new (): HTMLShowcaseAppElement;
  };

  interface HTMLShowcaseButtonDemoElement extends Components.ShowcaseButtonDemo, HTMLStencilElement {}
  var HTMLShowcaseButtonDemoElement: {
    prototype: HTMLShowcaseButtonDemoElement;
    new (): HTMLShowcaseButtonDemoElement;
  };

  interface HTMLShowcaseHeaderElement extends Components.ShowcaseHeader, HTMLStencilElement {}
  var HTMLShowcaseHeaderElement: {
    prototype: HTMLShowcaseHeaderElement;
    new (): HTMLShowcaseHeaderElement;
  };

  interface HTMLShowcaseLayoutElement extends Components.ShowcaseLayout, HTMLStencilElement {}
  var HTMLShowcaseLayoutElement: {
    prototype: HTMLShowcaseLayoutElement;
    new (): HTMLShowcaseLayoutElement;
  };

  interface HTMLShowcaseSidebarElement extends Components.ShowcaseSidebar, HTMLStencilElement {}
  var HTMLShowcaseSidebarElement: {
    prototype: HTMLShowcaseSidebarElement;
    new (): HTMLShowcaseSidebarElement;
  };
  interface HTMLElementTagNameMap {
    'pstencil-button': HTMLPstencilButtonElement;
    'showcase-app': HTMLShowcaseAppElement;
    'showcase-button-demo': HTMLShowcaseButtonDemoElement;
    'showcase-header': HTMLShowcaseHeaderElement;
    'showcase-layout': HTMLShowcaseLayoutElement;
    'showcase-sidebar': HTMLShowcaseSidebarElement;
  }
}

declare namespace LocalJSX {
  interface PstencilButton extends JSXBase.HTMLAttributes<HTMLPstencilButtonElement> {
    'btnStyle'?: any;
    'cornerStyleClass'?: string;
    'disabled'?: any;
    'icon'?: string;
    /**
    * The first name
    */
    'iconPos'?: string;
    'label'?: string;
    'onOnBtnBlur'?: (event: CustomEvent<any>) => void;
    'onOnBtnClick'?: (event: CustomEvent<any>) => void;
    'onOnBtnFocus'?: (event: CustomEvent<any>) => void;
    'styleClass'?: string;
    'type'?: string;
  }
  interface ShowcaseApp extends JSXBase.HTMLAttributes<HTMLShowcaseAppElement> {}
  interface ShowcaseButtonDemo extends JSXBase.HTMLAttributes<HTMLShowcaseButtonDemoElement> {}
  interface ShowcaseHeader extends JSXBase.HTMLAttributes<HTMLShowcaseHeaderElement> {}
  interface ShowcaseLayout extends JSXBase.HTMLAttributes<HTMLShowcaseLayoutElement> {}
  interface ShowcaseSidebar extends JSXBase.HTMLAttributes<HTMLShowcaseSidebarElement> {}

  interface IntrinsicElements {
    'pstencil-button': PstencilButton;
    'showcase-app': ShowcaseApp;
    'showcase-button-demo': ShowcaseButtonDemo;
    'showcase-header': ShowcaseHeader;
    'showcase-layout': ShowcaseLayout;
    'showcase-sidebar': ShowcaseSidebar;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}



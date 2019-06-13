import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'pstencil-button',
  styleUrls: ['../../assets/primeicons.css','./button.css'],
  
  shadow: true
})
export class ButtonComponent {
  /**
   * The first name
   */
  @Prop() iconPos: string = 'left';
  
  @Prop() type: string;

  @Prop() btnStyle: any;

  @Prop() disabled: any;

  @Prop() icon: string;

  @Prop() styleClass: string;

  @Prop() cornerStyleClass: string = 'ui-corner-all';

  @Prop({ mutable: true, reflectToAttr: true }) label: string;
  
 

  @Event({ bubbles: true, composed: true }) onBtnClick: EventEmitter<any>;
  @Event({ bubbles: true, composed: true }) onBtnFocus: EventEmitter<any>;
  @Event({ bubbles: true, composed: true }) onBtnBlur: EventEmitter<any>;




  onButtonClickHandler = (ev: Event ) => {
    this.onBtnClick.emit(ev);
  }

  onButtonFocusHandler = (ev: Event) => {
    this.onBtnFocus.emit(ev);
  }


  onButtonBlurHandler = (ev: Event) => {
    this.onBtnBlur.emit(ev);
  }


  render() {
      let classes = this.styleClass ? this.styleClass : ''; 
      classes += ' ui-button ui-widget ui-state-default ui-corner-all ';
      classes += (this.icon && !this.label)? ' ui-button-icon-only ' : '';
      classes += (!this.icon && this.label)? ' ui-button-text-only ' : '';
      classes += (!this.icon && !this.label)? ' ui-button-text-empty ' : '';
      classes += (this.icon && this.label && this.iconPos === 'left')? ' ui-button-text-icon-left ' : '';
      classes += (this.icon && this.label && this.iconPos === 'right')? ' ui-button-text-icon-right ' : '';
      classes += (this.disabled)? ' ui-state-disabled ' : '';

      let innerSpan = '';
      if(this.icon){
        let innerSpanClass = this.icon ? this.icon : '';
        innerSpanClass += ' ui-clickable ';
        innerSpanClass += this.iconPos === 'left' ? ' ui-button-icon-left ' : '';
        innerSpanClass += this.iconPos === 'right' ? ' ui-button-icon-right ' : '';
            innerSpan = <span class={innerSpanClass} ></span>
      }
     


    
    return  <button type={this.type}
                      style={this.btnStyle}
                      disabled={this.disabled} onClick={this.onButtonClickHandler}
                      onFocus={this.onButtonFocusHandler}
                      onBlur={this.onButtonBlurHandler}
                      class={classes}>
                          <slot></slot>
                         {innerSpan}
                         <span class="ui-button-text ui-clickable">{this.label||'ui-btn'}</span>
              </button>
  }
}

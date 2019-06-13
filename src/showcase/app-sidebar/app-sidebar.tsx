import { Component,  h} from '@stencil/core';


@Component({
  tag: 'showcase-sidebar',
  shadow: false
})
export class appHeaderComponent {

    render(){
        return  <div id="layout-sidebar">
        <div class="layout-menu">
          <div class="layout-menu-search ui-fluid">
           
          </div>
  
          <a id="button_menutitle"  >
            <img src="assets/showcase/images/icons/button-active.svg" class="layout-menu-icon-active"/>
            <img src="assets/showcase/images/icons/button.svg" class="layout-menu-icon-inactive"/>
            <span>
            <li><stencil-route-link url="/button-demo" >Button</stencil-route-link> </li></span>
         </a>
      </div>
      </div>
    }
}


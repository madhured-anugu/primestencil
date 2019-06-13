import { Component,  h} from '@stencil/core';


@Component({
  tag: 'showcase-layout',
  styles: `
  pstencil-button {
    margin-right: .5em;
  }
  `,
  shadow: false
})
export class appHeaderComponent {

    render(){
        return    <div id="layout-content">
     <stencil-route-switch scrollTopOffset={0}>
     <stencil-route url="/button-demo" component="showcase-button-demo"  />
     </stencil-route-switch>
   
   
  
      </div>

    }
}


import { Component,  h} from '@stencil/core';


@Component({
  tag: 'showcase-button-demo',
  shadow: false
})
export class appHeaderComponent {

    render(){
        return   <div> <div class="content-section introduction">
        <div>
            <span class="feature-title">Button</span>
            <span>Button is an extension to standard input element with icons and theming.</span>
        </div>
    </div>

    <div class="content-section implementation">
        <h3 class="first">Button Component</h3>
        <pstencil-button label="Click" icon="pi pi-check"  ></pstencil-button>
        <pstencil-button label="Click" iconPos="right" icon="pi pi-check"  ></pstencil-button>
        <pstencil-button icon="pi pi-check"  ></pstencil-button>
        <pstencil-button label="Disabled" disabled="true" icon="pi pi-check"  ></pstencil-button>
       

      </div></div>
    }
}


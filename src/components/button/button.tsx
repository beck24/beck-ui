import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bui-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
    /**
     * Whether the button is disabled
     */
    @Prop({ reflectToAttr: true })
    disabled: boolean;

  render() {
    return (
        <button class="bui-button" disabled={this.disabled}>
            <slot />
        </button>
    );
  }
}

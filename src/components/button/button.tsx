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

    /**
     * Link href
     */
    @Prop()
    href: string;

    /**
     * Display as outline button
     */
    @Prop()
    outline: boolean;

    /**
     * Extend the button the full width of the container
     */
    @Prop()
    block: boolean;


  render() {
    const cssClasses = ['bui-button'];
    
    if (this.disabled) {
        cssClasses.push('disabled');
    }

    if (this.outline) {
        cssClasses.push('outline');
    }

    if (this.block) {
        cssClasses.push('block');
    }

    if (this.href) {
        return (
            <a
                href={this.href}
                class={cssClasses.join(' ')}
            >
                <slot />
            </a>
        );
    }

    return (
        <button
            class={cssClasses.join(' ')}
            disabled={this.disabled}
        >
            <slot />
        </button>
    );
  }
}

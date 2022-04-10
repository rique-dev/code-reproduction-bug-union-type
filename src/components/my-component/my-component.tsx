import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { Token } from './MyComplexTy';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() display: Token<'display'>;

  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    console.log(this.display)
    return (
      <div
        style={{
          display: this.display as unknown as string,
        }}
      >
        Hello, World! I'm {this.getText()}
      </div>
    );
  }
}

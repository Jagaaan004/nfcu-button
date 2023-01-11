import { NfcuButtonComponent } from "./nfcu-button.component";
import { moduleMetadata, Story } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: "NFCU Button",
  component: NfcuButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [NfcuButtonComponent],
      imports: [CommonModule],
    }),
    withKnobs
  ],
};

// This creates a Story for the component
const Template: Story<NfcuButtonComponent> = () => ({
  component: NfcuButtonComponent,
  props: {
    content: text('Text', 'Label'),
    color: select('Color', ['primary', 'secondary', 'tertiary', 'destructive'] , 'primary'),
    size: select('Size', ['xsmall', 'small', 'medium', 'large'], 'xsmall'),
  },
  template: `
  <app-nfcu-button
    [color]="color"
    [size]="[size]"
  >
    {{ content }}
  </app-nfcu-button>`,
});
export const Base = Template.bind({});
select(
  'Color',
  ['primary', 'secondary', 'tertiary', 'destructive'],
  'primary'
)
select(
  'Size',
  ['xsmall', 'small', 'medium', 'large'],
  'xsmall'
)

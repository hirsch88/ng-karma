import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { waitForComponent, waitForDesignSystem } from '@baloise/design-system-components';
import {
  BalAccordionModule,
  BalCoreModule,
  BalHeadingModule,
} from '@baloise/design-system-components-angular';
import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  beforeEach(async () => {
    const { container } = await render(AccordionComponent, {
      imports: [
        BrowserModule,
        BalCoreModule.forRoot(),
        BalHeadingModule,
        BalAccordionModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    await waitForDesignSystem(container);
  });

  it('should open accordion', async () => {
    // check that the content is not visible, could find a nicer way with jasmine
    const myElement = screen.getByText('My Content').parentNode
    const myElementStyle = window.getComputedStyle(myElement as any);
    expect(myElementStyle.getPropertyValue('display')).toEqual('none');

    // open the accordion and wait for the web component to be finished
    const accordion = screen.getByText('open');
    const user = userEvent.setup();
    await user.click(accordion);
    await waitForComponent(accordion);

    // assert that the content is now visible
    const myElement2 = screen.getByText('My Content').parentNode
    const myElementStyle2 = window.getComputedStyle(myElement2 as any);
    expect(myElementStyle2.getPropertyValue('display')).toEqual('block');
  });
});

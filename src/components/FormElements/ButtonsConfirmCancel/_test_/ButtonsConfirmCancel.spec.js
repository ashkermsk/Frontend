import React from 'react';
import { ButtonsConfirmCancel } from '../ButtonsConfirmCancel';

describe('ButtonsConfirmCancel component', () => {
  it('Renders ButtonsConfirmCancel with 2 buttons', () => {
    render(<ButtonsConfirmCancel />);
    expect(document.getElementsByTagName('button').length).toEqual(2);
  });

  it('Renders ButtonsConfirmCancel with Confirm button', async () => {
    const { getByText } = render(<ButtonsConfirmCancel />);
    expect(getByText('Confirm')).toBeInTheDocument();
  });
});

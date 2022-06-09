import React from 'react';
import { AreaChart } from '../AreaChart';
import { colors } from '../../../../theme/colors';

let data = [];
let visits = 10;

for (let i = 1; i < 366; i++) {
  visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  data.push({ date: new Date(2018, 0, i), name: 'name' + i, value: visits });
}

const props = {
  data: data,
  config: {
    bgColor: colors.white,
    bgOpacity: 0.5,
    colors: [colors.red, colors.blue, colors.orange],
    width: '100%',
    heigth: '100%',
    paddingRight: 20,
    dateAxisLocation: 0,
    valueAxisMinWidth: 35,
  },
};
describe('AreaChart', () => {
  beforeEach(() => {
    cleanup();
  });
  it('render content not to be null', async () => {
    window.SVGPathElement = () => {};
    render(<AreaChart {...props} />);
    expect(document.querySelector('#chartdiv').innerHTML).not.toBeNull();
  });
});

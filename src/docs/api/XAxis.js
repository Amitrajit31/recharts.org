export default {
  name: 'XAxis',
  examples: [],
  props: [
    {
      name: 'hide',
      type: 'Boolean',
      defaultVal: 'false',
      isOptional: false,
      desc: 'If set true, the axis do not display in the chart.',
    }, {
      name: 'dataKey',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The key of data displayed in the axis.',
    }, {
      name: 'xAxisId',
      type: 'String | Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The unique id of x-axis.',
    }, {
      name: 'width',
      type: 'Number',
      defaultVal: '0',
      isOptional: false,
      desc: 'The width of axis which is usually calculated internally.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: '30',
      isOptional: false,
      desc: 'The height of axis, which can be setted by user.',
    }, {
      name: 'orientation',
      type: `'bottom' , 'top'`,
      defaultVal: '\'bottom\'',
      isOptional: false,
      desc: 'The orientation of axis',
    }, {
      name: 'type',
      type: '\'number\' , \'category\'',
      defaultVal: '\'category\'',
      isOptional: false,
      desc: 'The type of axis.',
    }, {
      name: 'allowDecimals',
      type: 'Boolean',
      defaultVal: 'true',
      isOptional: false,
      desc: 'Allow the ticks of XAxis to be decimals or not.',
    }, {
      name: 'tickCount',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: 'The number of axis ticks.',
    }, {
      name: 'domain',
      type: 'Array',
      defaultVal: `[0, 'auto']`,
      isOptional: true,
      desc: `Specify the domain of axis when the axis is a number axis. The length of domain should be 2, and we will validate the values in domain. And each element in the array can be a number, 'auto', 'dataMin', 'dataMax' or string like 'dataMin - 20', 'dataMax + 100'. If any element of domain is set to be 'auto', comprehensible scale ticks will be calculated, and the final domain of axis is generated by the ticks.`,
      format: [
        `<XAxis type="number" domain={['dataMin', 'dataMax']} />`,
        `<XAxis type="number" domain={[0, 'dataMax']} />`,
        `<XAxis type="number" domain={['auto', 'auto']} />`,
        `<XAxis type="number" domain={[0, 'dataMax + 1000']} />`,
        `<XAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />`,
      ],
      examples: [{
        name: 'Numeric XAxis with specified domain',
        url: '/examples#VerticalLineChartWithSpecifiedDomain',
      }],
    }, {
      name: 'interval',
      type: 'String | Number',
      defaultVal: '\'auto\'',
      isOptional: false,
      desc: 'If set auto, the labels which is to be showed or hided will be calculated autoly.',
    }, {
      name: 'padding',
      type: 'Object',
      defaultVal: `{ left: 0, right: 0 }`,
      isOptional: false,
      desc: 'Specify the padding of x-axis.',
      format: [
        `<XAxis padding={{ left: 10 }} />`,
        `<XAxis padding={{ right: 20 }} />`,
        `<XAxis padding={{ left: 20, right: 20 }} />`,
      ],
      examples: [{
        name: 'XAxis with non-zero padding',
        url: '/examples#LineChartWithXAxisPading'
      }]
    }, {
      name: 'minTickGap',
      type: 'Number',
      defaultVal: '5',
      isOptional: false,
      desc: 'The minimum gab between two adjacent labels.',
    }, {
      name: 'axisLine',
      type: 'Boolean | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, no axis line will be drawn. If set a object, the option is the configuration of axis line.',
    }, {
      name: 'tickLine',
      type: 'Boolean | Object',
      defaultVal: 'true',
      isOptional: false,
      desc: 'If set false, no axis tick lines will be drawn. If set a object, the option is the configuration of tick lines.',
    }, {
      name: 'tickSize',
      type: 'Number',
      defaultVal: '6',
      isOptional: false,
      desc: 'The width or height of ticks.',
    }, {
      name: 'tickFormatter',
      type: 'Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The formatter function of tick.',
    }, {
      name: 'ticks',
      type: 'Array',
      defaultVal: 'null',
      isOptional: true,
      desc: 'Set the values of axis ticks manually.',
    }, {
      name: 'tick',
      type: 'Boolean | Object | ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set false, no ticks will be drawn. If set a object, the option is the configuration of ticks. If set a React element, the option is the custom react element of drawing ticks.',
      format: [
        `<XAxis tick={false} />`,
        `<XAxis tick={{stroke: 'red', strokeWidth: 2}} />`,
        `<XAxis tick={<CustomizedTick/>} />`,
      ],
      examples: [{
        name: 'A line chart with customized x-axis tick',
        url: '/examples#CustomizedLabelLineChart',
      }],
    }, {
      name: 'label',
      type: 'String | Number | ReactElement',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set a string or a number, default label will be drawn, and the option is content. If set a React element, the option is the custom react element of drawing label.',
      format: [
        `<XAxis label="Height" />`,
        `<XAxis label={<CustomizedLabel />} />`,
      ],
      examples: [
        {
          name: 'A composed chart with axis labels',
          url: '/examples#ComposedChartWithAxisLabels',
        },
      ],
    }, {
      name: 'unit',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The unit of data displayed in the axis. This option will be used to represent an index unit in a scatter chart.',
    }, {
      name: 'name',
      type: 'String | Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The name of data displayed in the axis. This option will be used to represent an index in a scatter chart.',
    },
  ],
};

// @see https://github.com/storybookjs/storybook/tree/next/addons/storyshots/storyshots-core#using-a-custom-renderer
import initStoryshots from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

const reactTestingLibrarySerializer: jest.SnapshotSerializerPlugin = {
  // @ts-expect-error unknown var val
  print: (val, serialize, indent) => serialize(val.container.firstChild),
  // eslint-disable-next-line no-prototype-builtins
  test: (val) => val && val.hasOwnProperty('container'),
};

initStoryshots({
  renderer: render,
  snapshotSerializers: [reactTestingLibrarySerializer],
});

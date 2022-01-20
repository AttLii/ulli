import type {Config} from '@jest/types';
import { defaults } from 'ts-jest/presets'

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    ...defaults.transform,
  },
};
export default config;
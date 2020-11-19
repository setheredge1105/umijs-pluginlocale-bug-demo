import { publish } from './lib/index';
import { join } from 'path';

export default function(pluginConfig, config, callback) {
  publish(join(process.cwd(), config.basePath), config, callback);
}

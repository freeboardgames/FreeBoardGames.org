import { encodeSitemap } from './encode';
import { generateSiteMapUrls } from './urls';

// eslint-disable-next-line no-console
console.log(encodeSitemap(generateSiteMapUrls()));

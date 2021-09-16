import fs from 'fs';
import { encodeSitemap } from './encode';
import { generateSiteMapUrls } from './urls';

export const generateSiteMapXML = (options: { staticDir: string; host: string }) => {
  const encodedSitemap = encodeSitemap(generateSiteMapUrls(), options.host);
  writeOnDisk(options.staticDir, encodedSitemap);
};

function writeOnDisk(staticDir: string, xml: string) {
  fs.writeFileSync(`${staticDir}/sitemap.xml`, xml);
}

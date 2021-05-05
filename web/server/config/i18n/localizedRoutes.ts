import translatedPaths from 'infra/i18n/paths';
import { buildLocalizedRoutes } from './buildLocalizedRoutes';

export const localizedRoutes = translatedPaths.map((r) => buildLocalizedRoutes(r));

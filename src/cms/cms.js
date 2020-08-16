import CMS from "netlify-cms-app"
import { fr } from "netlify-cms-locales";
import TeamPreview from './preview-templates/TeamPreview';
import NewsPreview from './preview-templates/NewsPreview';
import '../components/all.sass';

CMS.registerLocale('fr', fr);

CMS.registerPreviewTemplate('team', TeamPreview);
CMS.registerPreviewTemplate('actions', NewsPreview);
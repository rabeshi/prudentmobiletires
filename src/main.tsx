import {createRoot,hydrateRoot} from 'react-dom/client';
import {App,pageFromPath} from './app';
const root=document.getElementById('root')!,app=<App page={pageFromPath(location.pathname)}/>;
root.hasChildNodes()?hydrateRoot(root,app):createRoot(root).render(app);

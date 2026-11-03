import {renderToString} from 'react-dom/server';
import {App,pageFromPath} from './app';
export const render=(page:string)=>renderToString(<App page={pageFromPath(page)}/>);

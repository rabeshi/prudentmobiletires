import {build} from 'esbuild';
import {mkdir,writeFile,copyFile,cp} from 'node:fs/promises';
await mkdir('dist/assets',{recursive:true});
await cp('public/assets','dist/assets',{recursive:true});
await build({entryPoints:['src/main.tsx'],bundle:true,minify:true,outfile:'dist/assets/app.js',jsx:'automatic',target:'es2020'});
await copyFile('src/style.css','dist/assets/style.css');
for(const page of ['index','about','services','portfolio','contact']) await writeFile(`dist/${page}.html`,`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#123e30"><meta name="description" content="Prudent Mobile Tires — 24-hour mobile tire assistance at home or on the highway. Call 470 861-8892 or 470 422-7089. Decatur, Georgia."><title>${page==='index'?'Home':page[0].toUpperCase()+page.slice(1)} | Prudent Mobile Tires</title><link rel="icon" href="/assets/logo.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/style.css"></head><body><div id="root"></div><script type="module" src="/assets/app.js"></script></body></html>`);

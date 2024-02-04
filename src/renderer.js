/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // or any other theme you prefer

import './index.css';
//import './../public/prism/prism'
//import './../public/prism/prism.css'
import './client'
import './sdk'
// import './api'

import imagePath from './public_assets/morph_square.png';
const img = document.createElement('img');
img.src = imagePath;
const div = document.getElementById('imageContainer');
div.body.appendChild(img);


console.log('👋 This message is being logged by "renderer.js", included via webpack');

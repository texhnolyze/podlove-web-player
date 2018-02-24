/* globals BASE */
import { get, compose } from 'lodash'
import { iframeResizer } from 'iframe-resizer'
// eslint-disable-next-line
import iframeResizerContentWindow from 'raw-loader!iframe-resizer/js/iframeResizer.contentWindow.js'

import { findNode, tag } from 'utils/dom'
import requestConfig from 'utils/request'
import { sandbox, sandboxWindow } from 'utils/sandbox'

import loader from './loader'

const player = config => [
  // Config
  tag('script', `window.PODLOVE = ${JSON.stringify(config)}`),

  // Loader
  loader(config),

  // Entry
  tag('PodlovePlayer'),

  // Bundles
  tag('link', '', {rel: 'stylesheet', href: `${get(config.reference, 'base', BASE)}/style.css`}),
  tag('script', '', {type: 'text/javascript', src: `${get(config.reference, 'base', BASE)}/vendor.js`}),
  tag('script', '', {type: 'text/javascript', src: `${get(config.reference, 'base', BASE)}/window.js`}),

  // iFrameResizer
  tag('script', iframeResizerContentWindow)
].join('')

const resizer = sandbox => {
  iframeResizer({
    checkOrigin: false,
    log: false
  }, sandbox)

  return sandbox
}

const sandboxFromSelector = compose(sandbox, findNode)

window.podlovePlayer = (selector, episode) =>
  requestConfig(episode)
    .then(player)
    .then(sandboxFromSelector(selector))
    .then(resizer)
    .then(sandboxWindow(['PODLOVE_STORE', 'store']))
    .catch(() => {
      console.group(`Can't load player with config`)
      console.error('selector', selector)
      console.error('config', episode)
      console.groupEnd()
    })
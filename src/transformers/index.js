const inline = require('./inline')
const minify = require('./minify')
const prettify = require('./prettify')
const ensureSixHEX = require('./sixHEX')
const addURLParams = require('./addURLParams')
const removeUnusedCSS = require('./removeUnusedCSS')
const removeInlineSizes = require('./removeInlineSizes')
const applyBaseImageUrl = require('./applyBaseImageUrl')
const removeInlineBgColor = require('./removeInlineBgcolor')
const applyExtraAttributes = require('./applyExtraAttributes')

exports.process = async (html, config, env) => {

  html = await inline(html, config)
  html = await removeUnusedCSS(html, config)
  html = await removeInlineSizes(html, config)
  html = await removeInlineBgColor(html, config)
  html = await applyExtraAttributes(html, config)
  html = await applyBaseImageUrl(html, config)
  html = await addURLParams(html, config)
  html = await ensureSixHEX(html, env)
  html = await prettify(html, config)
  html = await minify(html, config)

  return html
}

const getToolCacheDir: () => string = () => {
  const dir = process.env['RUNNER_TOOL_CACHE']

  if (dir) {
    return dir
  }

  // Tweaked source code that is under MIT License.
  // https://github.com/ruby/setup-ruby/blob/dddacd7ec16cae1a8190380a744ef47cb2aa0bed/common.js#L120
  const imageOs = process.env['ImageOS']

  if (!imageOs) {
    throw new Error('ImageOS environment variable is required')
  }

  if (imageOs.startsWith('ubuntu')) {
    return '/opt/hostedtoolcache'
  } else if (imageOs.startsWith('macos')) {
    return '/Users/runner/hostedtoolcache'
  } else if (imageOs.startsWith('win')) {
    return 'C:/hostedtoolcache/windows'
  } else {
    throw new Error('Unknown platform')
  }
}

export {getToolCacheDir}

import * as tc from '@actions/tool-cache'
import * as path from 'path'

import * as platform from './platform'

const downloadAndExtact: (
  version: string // eslint-disable-line @typescript-eslint/no-unused-vars
) => Promise<string> = async version => {
  const toolCacheDir = platform.getToolCacheDir()
  const releaseUrl = `https://github.com/jmatsu/actions-toolkit-bash/releases/download/${version}/toolkit-scripts.tar.gz`

  const gzPath = await tc.downloadTool(releaseUrl)
  return await tc.extractTar(gzPath, path.join(toolCacheDir, 'actions-toolkit'))
}

export {downloadAndExtact}

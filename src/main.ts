import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'

import * as installer from './installer'

async function run(): Promise<void> {
  try {
    const version =
      core.getInput('version', {
        required: false
      }) || '1.0.0'

    let toolPath: string = tc.find('actions-toolkit-in-bash', version)

    if (!toolPath) {
      const extractDirPath = await installer.downloadAndExtact(version)
      toolPath = await tc.cacheDir(
        extractDirPath,
        'actions-toolkit-in-bash',
        version
      )
    }

    core.addPath(toolPath)
    core.setOutput('path', toolPath)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()

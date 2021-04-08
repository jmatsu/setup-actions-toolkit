# setup-actions-toolkit

This action sets up bash scripts for workflow commands for use in GitHub Actions.

ref: https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions

- Download the scripts from [jmatsu/actions-toolkit-bash](https://github.com/jmatsu/actions-toolkit-bash)

For the more details of the scripts, please refer to [jmatsu/actions-toolkit-bash](https://github.com/jmatsu/actions-toolkit-bash)

# Usage

```
- uses: jmatsu/setup-actions-toolkit@v1
```

## Inputs

### version

Optional. This action will find the specified version of [jmatsu/actions-toolkit-bash](https://github.com/jmatsu/actions-toolkit-bash).

## Outputs

### path

The path to the directory that contains the scripts.

# License

Under the [MIT](LICENSE) License. 

# Release

- Tweak `inputs#version` in [action.yml](action.yml) to the latest version if required
- Merge the default branch into `release/v1`
- Check if all tests are passed
- Tag and push `v1.x.y`
- Move the `v1` tag to the HEAD of `release/v1`

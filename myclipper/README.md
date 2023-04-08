oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g myclipper
$ myclipper COMMAND
running command...
$ myclipper (--version)
myclipper/0.0.0 darwin-x64 node-v19.8.1
$ myclipper --help [COMMAND]
USAGE
  $ myclipper COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`myclipper hello PERSON`](#myclipper-hello-person)
* [`myclipper hello world`](#myclipper-hello-world)
* [`myclipper help [COMMANDS]`](#myclipper-help-commands)
* [`myclipper plugins`](#myclipper-plugins)
* [`myclipper plugins:install PLUGIN...`](#myclipper-pluginsinstall-plugin)
* [`myclipper plugins:inspect PLUGIN...`](#myclipper-pluginsinspect-plugin)
* [`myclipper plugins:install PLUGIN...`](#myclipper-pluginsinstall-plugin-1)
* [`myclipper plugins:link PLUGIN`](#myclipper-pluginslink-plugin)
* [`myclipper plugins:uninstall PLUGIN...`](#myclipper-pluginsuninstall-plugin)
* [`myclipper plugins:uninstall PLUGIN...`](#myclipper-pluginsuninstall-plugin-1)
* [`myclipper plugins:uninstall PLUGIN...`](#myclipper-pluginsuninstall-plugin-2)
* [`myclipper plugins update`](#myclipper-plugins-update)

## `myclipper hello PERSON`

Say hello

```
USAGE
  $ myclipper hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/thudoan1706/myclipper/blob/v0.0.0/dist/commands/hello/index.ts)_

## `myclipper hello world`

Say hello world

```
USAGE
  $ myclipper hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ myclipper hello world
  hello world! (./src/commands/hello/world.ts)
```

## `myclipper help [COMMANDS]`

Display help for myclipper.

```
USAGE
  $ myclipper help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for myclipper.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.8/src/commands/help.ts)_

## `myclipper plugins`

List installed plugins.

```
USAGE
  $ myclipper plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ myclipper plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.3/src/commands/plugins/index.ts)_

## `myclipper plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ myclipper plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ myclipper plugins add

EXAMPLES
  $ myclipper plugins:install myplugin 

  $ myclipper plugins:install https://github.com/someuser/someplugin

  $ myclipper plugins:install someuser/someplugin
```

## `myclipper plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ myclipper plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ myclipper plugins:inspect myplugin
```

## `myclipper plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ myclipper plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ myclipper plugins add

EXAMPLES
  $ myclipper plugins:install myplugin 

  $ myclipper plugins:install https://github.com/someuser/someplugin

  $ myclipper plugins:install someuser/someplugin
```

## `myclipper plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ myclipper plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ myclipper plugins:link myplugin
```

## `myclipper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ myclipper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ myclipper plugins unlink
  $ myclipper plugins remove
```

## `myclipper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ myclipper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ myclipper plugins unlink
  $ myclipper plugins remove
```

## `myclipper plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ myclipper plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ myclipper plugins unlink
  $ myclipper plugins remove
```

## `myclipper plugins update`

Update installed plugins.

```
USAGE
  $ myclipper plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

# Getting Started

Welcome to the installation and usage for Logseq Terminal. This is a simple guide to help you quickly understand and start using it.

## What is it

Logseq Terminal is a terminal simulator for Logseq. It can be used to perform various operations in terminal, e.g. cat, ls, cd, tree, pwd and so on. These commands are similar with the real terminal commands in Linux but not the same. You can use help and `command --help` to learn more about the commands.

![](/assets/screenshot.png)

It would be getting more commands in the future.

## Features

- Support cd, ls, cat, pwd, tree, clear... commands
- Support command history and nagivate by up/down arrow key, or ctrl+p/ctrl+n
- Support command tab auto completion
- Support namespace autocompletion for cd, cat, ls and so on.
- Support line cursor and nagivate by left/right arrow key
- Support Emoji, CJK
- Support some common shortcuts. e.g. ctrl+a/ctrl+e, ctrl+d/ctrl+h, ctrl+f/ctrl+b, ctrl+k/ctrl+u, ctrl+l and so on.

## Installation

### Plugin Marketplace

Search for it in the plugin marketplace and install it from there.

### Manual Installation

1. Download the latest zip file from the release page.
2. Unzip the zip file into the folder where you want to store the plugin.
3. Enable developer mode in Logseq.
4. Load the unzipped folder by clicking the "Load unpacked plugin" button on the plugin modal.
5. You should now see that the plugin has been installed.

## Quick Start

There is an icon on Logseq top right corner to trigger the terminal UI. By default there is no shortcuts, but you can set a shortcut in the Logseq shortcut settings.

The first command you need to run may be the help command. After you run the help command, you can see all supported comands.

Then, you can check the terminal plugin settings. You can set font size or theme there.

## Shortcuts

| Shortcut           | Description                                 |
| ------------------ | ------------------------------------------- |
| ctrl+a             | Put cursor to the beginning of the line     |
| ctrl+e             | Put cursor to the end of the line           |
| ctrl+d             | Delete the character under the cursor       |
| ctrl+h, backspace  | Delete the character before the cursor      |
| ctrl+f             | Move cursor forward one character           |
| ctrl+b             | Move cursor backward one character          |
| ctrl+k             | Delete all characters after the cursor      |
| ctrl+u             | Delete all characters in current line       |
| ctrl+l             | Clear the terminal screen                   |
| ctrl+p, up arrow   | Navigate to the previous command in history |
| ctrl+n, down arrow | Navigate to the next command in history     |
| left arrow         | Move cursor backward one character          |
| right arrow        | Move cursor forward one character           |

## Commands

### help

Show help message. It will print all commands and their descriptions.

### cat

Print page or journal content.

```
$ cat -h
Show page or journal content. Usage: cat [PAGE_NAME|JOURNAL_DATE] [options].

  -h, --help   Displays help
  -i, --info   Show page or journal info in JSON format
  -c, --count  Count lines and chars
  -u, --uuid   Show page or journal content with block uuid
  -o, --only   Only first level block, without children
```

### block

Show block content.

```
$ block -h
Show block content. Usage: block BLOCK_UUID [options].

  -h, --help   Displays help
  -i, --info   Show block info in JSON format
  -c, --count  Count lines and chars
  -o, --only   Only current block, without children
```

### cd

Change the current working directory. It is simulated by Logseq namespace.

```
$ cd -h
Switch to page or journal and change pwd. Usage: cd PAGE_NAME|JOURNAL_DATE [options].

  -h, --help  Displays help
```

### ls

List pages under current namespace prefix. Support some filters.

```
$ ls -h
List pages under current namespace prefix. Usage: ls [NAMESPACE_PREFIX] [options].

  -h, --help        Displays help
  --limit Int       Number of pages limitation.
  --prefix String   Filter pages starts with prefix.
  --suffix String   Filter pages ends with suffix.
  --contain String  Filter pages contains string.
  --regexp String   Filter pages by regexp.
  --glob String     Filter pages by glob.
```

### pwd

Show current namespace prefix and graph.

### tree

Print namespace prefix and it's children in a tree-like format.

```
$ tree -h
Show namespace prefix in a tree-like format. Usage: tree [NAMESPACE_PREFIX] [options].

  -h, --help  Displays help
```

### clear

Clear the terminal screen.

### license

Show license status.

```
Show license state. Usage: license [options].

  -h, --help      Displays help
  -a, --activate  Activate license
```

### settings

Close the terminal window and open plugin settings modal.

### history

Show command history.

### quit, exit, bye

Close the terminal window.
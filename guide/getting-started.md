# Getting Started

Welcome to the installation and usage for Logseq Terminal. This is a simple guide to help you quickly understand and start using it.

## What is it

Logseq Terminal is a terminal simulator for Logseq. It can be used to perform various operations in terminal, e.g. cat, ls, cd, tree, pwd and so on. These commands are similar with the real terminal commands in Linux but not the same. You can use help and `command --help` to learn more about the commands.

![](/assets/screenshot.png)

It would be getting more commands in the future.

## Features

- Support cd, ls, cat, pwd, tree, clear... 20+ commands
- Support command history and nagivate by up/down arrow key, or ctrl+p/ctrl+n
- Support command tab auto completion
- Support namespace autocompletion for cd, cat, ls and so on.
- Support line cursor and nagivate by left/right arrow key
- Support Emoji, CJK
- Support some common shortcuts. e.g. ctrl+a/ctrl+e, ctrl+d/ctrl+h, ctrl+f/ctrl+b, ctrl+k/ctrl+u, ctrl+l and so on.
- Support pipeline command, output redirection, prompt, progress bar.

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

### block

Show block content.

```
$ block -h

Show block content.
Usage: block BLOCK_UUID [options].

  -h, --help   Displays help
  -i, --info   Show block info in JSON format
  -c, --count  Count lines and chars
  -o, --only   Only current block, without children
  --no-dashes  Output dashes prefix, if no-dashes, will not output dashes
  --no-spaces  Do not output spaces prefix, , if no-spaces, will not output spaces
```

### cat

Print page or journal content.

```
$ cat -h

Show page or journal content.
Usage: cat [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].

  -h, --help   Displays help
  -i, --info   Show page or journal info in JSON format
  -c, --count  Count lines and chars
  -u, --uuid   Show page or journal content with block uuid
  -o, --only   Only first level block, without children
  --no-dashes  Output dashes prefix, if no-dashes, will not output dashes
  --no-spaces  Do not output spaces prefix, , if no-spaces, will not output spaces
```

### cd

Change the current working directory. It is simulated by Logseq namespace.

```
$ cd -h

Switch to page or journal and change pwd.
Usage: cd PAGE_NAME|JOURNAL_DATE [options].

  -h, --help  Displays help
```

### change-case, cc

Change cases to types.

```
$ change-case -h

Change cases to types.
Usage: change-case BLOCK_UUID [options].

  -h, --help       Displays help
  -t, --to String  Type of case
  -a, --all-types  Show all supported case types
```

### clear

Clear screen.

```
$ clear -h

Clear screen.
Usage: clear [options].

  -h, --help  Displays help
```

### count

Count page or journal content lines.

```
$ count -h

Count page or journal content lines.
Usage: count [PAGE_NAME|JOURNAL_DATE] [options].

  -h, --help  Displays help
```

### echo

Write arguments to the standard output.

```
$ echo -h

Write arguments to the standard output.
Usage: echo [arguments] [options].

  -h, --help  Displays help
```

### head

Display first lines of a page or journal content.

```
$ head -h

Display first lines of a page or journal content.
Usage: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].

  -h, --help        Displays help
  --show-title      Displays page name as title
  -n, --number Int  Print count lines of each of the specified pages. - default: 10
```

### help

List all supported commands or specific command help information.

```
$ help -h

List all supported commands or specific command help information.
Usage: help [COMMAND] [options].

  -h, --help  Displays help
```

### history

Show history commands.

```
$ history -h

Show history commands.
Usage: history [options].

  -h, --help   Displays help
  -c, --clear  Clear history
```

### license

Show license state.

```
$ license -h

Show license state.
Usage: license [options].

  -h, --help      Displays help
  -a, --activate  Activate license
```

### ls

List pages under current namespace prefix.

```
$ ls -h

List pages under current namespace prefix.
Usage: ls [NAMESPACE_PREFIX] [options].

  -h, --help        Displays help
  -f, --file        Take input as page name to check if the page exist.
  --limit Int       Number of pages limitation.
  --prefix String   Filter pages starts with prefix.
  --suffix String   Filter pages ends with suffix.
  --contain String  Filter pages contains string.
  --regexp String   Filter pages by regexp.
  --glob String     Filter pages by glob.
  --max-size Int    Filter pages by max content chars.
  --min-size Int    Filter pages by min content chars.
  --absolute        Output absolute path (leading slash) except pure path name or journal date.
```

### mv

Change page name or journal date.

```
$ mv -h

Change page name or journal date.
Usage: mv [PAGE_NAME|JOURNAL_DATE] [NEW_PAGE_NAME|NEW_JOURNAL_DATE] [options].

  -h, --help       Displays help
  -j, --journal    Touch journal(s)
  -r, --recursive  Run removing recursively
  -f, --force      Process without prompting for confirmation
  --dry-run        Simulate the operation without making any changes.
```

### pwd

Show current page and/or block uuid.

```
$ pwd -h

Show current page and/or block uuid.
Usage: pwd [options].

  -h, --help  Displays help
```

### quit, exit, by

Quit terminal.

```
$ quit -h

Quit terminal.
Usage: quit [options].

  -h, --help  Displays help
```

### rm

Remove page or journal.

```
$ rm -h

Remove page or journal.
Usage: rm [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].

  -h, --help       Displays help
  -f, --force      Process without prompting for confirmation
  -r, --recursive  Run removing recursively
  --dry-run        Simulate the operation without making any changes.
```

### settings

Open terminal settings.

```
$ settings -h

Open terminal settings.
Usage: settings [options].

  -h, --help  Displays help
```

### tail

Display first lines of a page or journal content.

```
$ tail -h

Display first lines of a page or journal content.
Usage: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].

  -h, --help        Displays help
  -n, --number Int  Print count lines of each of the specified pages. - default: 10
```

### touch

Create page or journal.

```
$ touch -h

Create page or journal.
Usage: touch [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].

  -h, --help     Displays help
  -j, --journal  Touch journal(s)
  -f, --force    Process without prompting for confirmation
```

### tree

Show namespace prefix in a tree-like format.

```
$ tree -h

Show namespace prefix in a tree-like format.
Usage: tree [NAMESPACE_PREFIX] [options].

  -h, --help  Displays help
```

### whoami

Show current graph.

```
$ whoami -h

Show current graph.
Usage: whoami [options].

  -h, --help  Displays help
```

### xargs

Display first lines of a page or journal content.

```
$ xargs -h

Display first lines of a page or journal content.
Usage: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].

  -h, --help            Displays help
  -I, --replstr String  Replacing one or more occurrences of replstr in arguments - default: {}
```

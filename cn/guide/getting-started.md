# 入门指南

欢迎阅读 Logseq Terminal 的安装和使用指南。这是一个帮助您快速了解和开始使用它的简单指南。

## 它是什么

Logseq Terminal 是 Logseq 的一个终端模拟器。它可以用于在终端中执行各种操作，例如 cat、ls、cd、tree、pwd 等。这些命令与 Linux 真实的终端命令类似，但不完全相同。您可以使用 help 和 `command --help` 来了解更多关于这些命令的信息。

![](/assets/screenshot.png)

将来会有更多的命令加入。

## 功能

- 支持 cd、ls、cat、pwd、tree、clear 等 20 多个命令
- 支持命令历史记录并通过上下箭头键或 ctrl+p/ctrl+n 导航
- 支持命令 tab 自动完成
- 支持 cd、cat、ls 等命令的命名空间自动完成
- 支持行光标并通过左右箭头键导航
- 支持表情符号、CJK
- 支持一些常用的快捷键，例如 ctrl+a/ctrl+e、ctrl+d/ctrl+h、ctrl+f/ctrl+b、ctrl+k/ctrl+u、ctrl+l 等
- 支持管道命令，输出重定向，提示输入，进度条等终端特性

## 安装

### 插件市场

在插件市场中搜索并从那里安装它。

### 手动安装

1. 从发布页面下载最新的 zip 文件。
2. 将 zip 文件解压到您想要存储插件的文件夹中。
3. 在 Logseq 中启用开发者模式。
4. 在插件窗口中点击“加载未打包的插件”按钮，加载解压后的文件夹。
5. 现在您应该能看到插件已经安装了。

## 快速开始

Logseq 右上角有一个图标可以触发终端 UI。默认情况下没有快捷键，但您可以在 Logseq 的快捷键设置中设置一个快捷键。

您需要运行的第一个命令可能是 help 命令。运行 help 命令后，您可以看到所有支持的命令。

然后，您可以检查终端插件设置。在那里，您可以设置字体大小或主题。

## 快捷键

| 快捷键             | 描述                         |
| ------------------ | ---------------------------- |
| ctrl+a             | 将光标移到行首               |
| ctrl+e             | 将光标移到行尾               |
| ctrl+d             | 删除光标下的字符             |
| ctrl+h, backspace  | 删除光标前的字符             |
| ctrl+f             | 光标前移一个字符             |
| ctrl+b             | 光标后移一个字符             |
| ctrl+k             | 删除光标后的所有字符         |
| ctrl+u             | 删除当前行的所有字符         |
| ctrl+l             | 清除终端屏幕                 |
| ctrl+p, up arrow   | 导航到历史记录中的上一个命令 |
| ctrl+n, down arrow | 导航到历史记录中的下一个命令 |
| left arrow         | 光标后移一个字符             |
| right arrow        | 光标前移一个字符             |

## 命令

### block

显示块内容。

```
$ block -h

显示块内容。
用法: block BLOCK_UUID [选项]。

  -h, --help   显示帮助
  -i, --info   以JSON格式显示块信息
  -c, --count  计算行数和字符数
  -o, --only   仅当前块，不包括子块
  --no-dashes  输出时不带破折号前缀
  --no-spaces  输出时不带空格前缀
```

### cat

打印页面或日志内容。

```
$ cat -h

显示页面或日志内容。
用法: cat [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。

  -h, --help   显示帮助
  -i, --info   以JSON格式显示页面或日志信息
  -c, --count  计算行数和字符数
  -u, --uuid   显示带有块UUID的页面或日志内容
  -o, --only   仅一级块，不包括子块
  --no-dashes  输出时不带破折号前缀
  --no-spaces  输出时不带空格前缀
```

### cd

更改当前工作目录。通过 Logseq 命名空间模拟。

```
$ cd -h

切换到页面或日志并更改当前目录。
用法: cd PAGE_NAME|JOURNAL_DATE [选项]。

  -h, --help  显示帮助
```

### change-case, cc

更改大小写类型。

```
$ change-case -h

更改大小写类型。
用法: change-case BLOCK_UUID [选项]。

  -h, --help       显示帮助
  -t, --to String  大小写类型
  -a, --all-types  显示所有支持的大小写类型
```

### clear

清屏。

```
$ clear -h

清屏。
用法: clear [选项]。

  -h, --help  显示帮助
```

### count

计算页面或日志内容的行数。

```
$ count -h

计算页面或日志内容的行数。
用法: count [PAGE_NAME|JOURNAL_DATE] [选项]。

  -h, --help  显示帮助
```

### echo

将参数写入标准输出。

```
$ echo -h

将参数写入标准输出。
用法: echo [arguments] [选项]。

  -h, --help  显示帮助
```

### head

显示页面或日志内容的前几行。

```
$ head -h

显示页面或日志内容的前几行。
用法: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。

  -h, --help        显示帮助
  --show-title      显示页面名称作为标题
  -n, --number Int  打印每个指定页面的行数 - 默认: 10
```

### help

列出所有支持的命令或特定命令的帮助信息。

```
$ help -h

列出所有支持的命令或特定命令的帮助信息。
用法: help [COMMAND] [选项]。

  -h, --help  显示帮助
```

### history

显示历史命令。

```
$ history -h

显示历史命令。
用法: history [选项]。

  -h, --help   显示帮助
  -c, --clear  清除历史记录
```

### license

显示许可证状态。

```
$ license -h

显示许可证状态。
用法: license [选项]。

  -h, --help      显示帮助
  -a, --activate  激活许可证
```

### ls

列出当前命名空间前缀下的页面。

```
$ ls -h

列出当前命名空间前缀下的页面。
用法: ls [NAMESPACE_PREFIX] [选项]。

  -h, --help        显示帮助
  -f, --file        以页面名称作为输入以检查页面是否存在
  --limit Int       页面数量限制
  --prefix String   按前缀过滤页面
  --suffix String   按后缀过滤页面
  --contain String  按包含字符串过滤页面
  --regexp String   按正则表达式过滤页面
  --glob String     按glob模式过滤页面
  --max-size Int    按最大内容字符数过滤页面
  --min-size Int    按最小内容字符数过滤页面
  --absolute        输出绝对路径（前导斜杠），除了纯路径名或日志日期
```

### mv

更改页面名称或日志日期。

```
$ mv -h

更改页面名称或日志日期。
用法: mv [PAGE_NAME|JOURNAL_DATE] [NEW_PAGE_NAME|NEW_JOURNAL_DATE] [选项]。

  -h, --help       显示帮助
  -j, --journal    修改日志
  -r, --recursive  递归执行
  -f, --force      不提示确认直接处理
  --dry-run        模拟操作，不做任何更改
```

### pwd

显示当前页面和/或块的 UUID。

```
$ pwd -h

显示当前页面和/或块的UUID。
用法: pwd [选项]。

  -h, --help  显示帮助
```

### quit, exit, by

退出终端。

```
$ quit -h

退出终端。
用法: quit [选项]。

  -h, --help  显示帮助
```

### rm

删除页面或日志。

```
$ rm -h

删除页面或日志。
用法: rm [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。

  -h, --help       显示帮助
  -f, --force      不提示确认直接处理
  -r, --recursive  递归执行
  --dry-run        模拟操作，不做任何更改
```

### settings

打开终端设置。

```
$ settings -h

打开终端设置。
用法: settings [选项]。

  -h, --help  显示帮助
```

### tail

显示页面或日志内容的最后几行。

```
$ tail -h

显示页面或日志内容的最后几行。
用法: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。

  -h, --help        显示帮助
  -n, --number Int  打印每个指定页面的行数 - 默认: 10
```

### touch

创建页面或日志。

```
$ touch -h

创建页面或日志。
用法: touch [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。

  -h, --help     显示帮助
  -j, --journal  创建日志
  -f, --force    不提示确认直接处理
```

### tree

以树状格式显示命名空间前缀。

```
$ tree -h

以树状格式显示命名空间前缀。
用法: tree [NAMESPACE_PREFIX] [选项]。

  -h, --help  显示帮助
```

### whoami

显示当前图表。

```
$ whoami -h

显示当前图表。
用法: whoami [选项]。

  -h, --help  显示帮助
```

### xargs

显示页面或日志内容的前几行。

```
$ xargs -h

显示页面或日志内容的前几行。
用法: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。

  -h, --help            显示帮助
  -I, --replstr String  替换参数中的一个或多个replstr - 默认: {}
```

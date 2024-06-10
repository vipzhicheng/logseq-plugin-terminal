# 入门指南

欢迎阅读 Logseq Terminal 的安装和使用指南。这是一个帮助您快速了解和开始使用它的简单指南。

## 它是什么

Logseq Terminal 是 Logseq 的一个终端模拟器。它可以用于在终端中执行各种操作，例如 cat、ls、cd、tree、pwd 等。这些命令与 Linux 真实的终端命令类似，但不完全相同。您可以使用 help 和 `command --help` 来了解更多关于这些命令的信息。

![](/assets/screenshot.png)

将来会有更多的命令加入。

## 功能

- 支持 cd、ls、cat、pwd、tree、clear 等命令
- 支持命令历史记录并通过上下箭头键或 ctrl+p/ctrl+n 导航
- 支持命令 tab 自动完成
- 支持 cd、cat、ls 等命令的命名空间自动完成
- 支持行光标并通过左右箭头键导航
- 支持表情符号、CJK
- 支持一些常用的快捷键，例如 ctrl+a/ctrl+e、ctrl+d/ctrl+h、ctrl+f/ctrl+b、ctrl+k/ctrl+u、ctrl+l 等

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

### help

显示帮助信息。它会打印所有命令及其描述。

### cat

打印页面或日志内容。

```
$ cat -h
显示页面或日志内容。用法：cat [PAGE_NAME|JOURNAL_DATE] [选项]。

  -h, --help   显示帮助
  -i, --info   以 JSON 格式显示页面或日志信息
  -c, --count  统计行数和字符数
  -u, --uuid   显示带块 uuid 的页面或日志内容
  -o, --only   仅显示当前块，不包括子块
```

### block

显示块内容。

```
$ block -h
显示块内容。用法：block BLOCK_UUID [选项]。

  -h, --help   显示帮助
  -i, --info   以 JSON 格式显示块信息
  -c, --count  统计行数和字符数
  -o, --only   仅显示当前块，不包括子块
```

### cd

更改当前工作目录。它由 Logseq 命名空间模拟。

```
$ cd -h
切换到页面或日志并更改 pwd。用法：cd PAGE_NAME|JOURNAL_DATE [选项]。

  -h, --help  显示帮助
```

### ls

列出当前命名空间前缀下的页面。支持一些过滤器。

```
$ ls -h
列出当前命名空间前缀下的页面。用法：ls [NAMESPACE_PREFIX] [选项]。

  -h, --help        显示帮助
  --limit Int       限制页面数量
  --prefix String   过滤以指定前缀开头的页面
  --suffix String   过滤以指定后缀结尾的页面
  --contain String  过滤包含指定字符串的页面
  --regexp String   通过正则表达式过滤页面
  --glob String     通过 glob 过滤页面
```

### pwd

显示当前命名空间前缀和 Graph 名称。

### tree

以树状格式打印命名空间前缀及其子节点。

```
$ tree -h
以树状格式显示命名空间前缀。用法：tree [NAMESPACE_PREFIX] [选项]。

  -h, --help  显示帮助
```

### clear

清除终端屏幕。

### license

显示许可证状态。

```
显示许可证状态。用法：license [选项]。

  -h, --help      显示帮助
  -a, --activate  激活许可证
```

### settings

关闭终端窗口并打开插件设置窗口。

### history

显示命令历史记录。

### quit, exit, bye

关闭终端窗口。

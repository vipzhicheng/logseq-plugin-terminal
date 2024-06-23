import{_ as a,c as s,o as n,a5 as p,a6 as e}from"./chunks/framework.CXwJbHuV.js";const v=JSON.parse('{"title":"入门指南","description":"","frontmatter":{},"headers":[],"relativePath":"cn/guide/getting-started.md","filePath":"cn/guide/getting-started.md"}'),l={name:"cn/guide/getting-started.md"},i=p('<h1 id="入门指南" tabindex="-1">入门指南 <a class="header-anchor" href="#入门指南" aria-label="Permalink to &quot;入门指南&quot;">​</a></h1><p>欢迎阅读 Logseq Terminal 的安装和使用指南。这是一个帮助您快速了解和开始使用它的简单指南。</p><h2 id="它是什么" tabindex="-1">它是什么 <a class="header-anchor" href="#它是什么" aria-label="Permalink to &quot;它是什么&quot;">​</a></h2><p>Logseq Terminal 是 Logseq 的一个终端模拟器。它可以用于在终端中执行各种操作，例如 cat、ls、cd、tree、pwd 等。这些命令与 Linux 真实的终端命令类似，但不完全相同。您可以使用 help 和 <code>command --help</code> 来了解更多关于这些命令的信息。</p><p><img src="'+e+`" alt=""></p><p>将来会有更多的命令加入。</p><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><ul><li>支持 cd、ls、cat、pwd、tree、clear 等 20 多个命令</li><li>支持命令历史记录并通过上下箭头键或 ctrl+p/ctrl+n 导航</li><li>支持命令 tab 自动完成</li><li>支持 cd、cat、ls 等命令的命名空间自动完成</li><li>支持行光标并通过左右箭头键导航</li><li>支持表情符号、CJK</li><li>支持一些常用的快捷键，例如 ctrl+a/ctrl+e、ctrl+d/ctrl+h、ctrl+f/ctrl+b、ctrl+k/ctrl+u、ctrl+l 等</li><li>支持管道命令，输出重定向，提示输入，进度条等终端特性</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="插件市场" tabindex="-1">插件市场 <a class="header-anchor" href="#插件市场" aria-label="Permalink to &quot;插件市场&quot;">​</a></h3><p>在插件市场中搜索并从那里安装它。</p><h3 id="手动安装" tabindex="-1">手动安装 <a class="header-anchor" href="#手动安装" aria-label="Permalink to &quot;手动安装&quot;">​</a></h3><ol><li>从发布页面下载最新的 zip 文件。</li><li>将 zip 文件解压到您想要存储插件的文件夹中。</li><li>在 Logseq 中启用开发者模式。</li><li>在插件窗口中点击“加载未打包的插件”按钮，加载解压后的文件夹。</li><li>现在您应该能看到插件已经安装了。</li></ol><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><p>Logseq 右上角有一个图标可以触发终端 UI。默认情况下没有快捷键，但您可以在 Logseq 的快捷键设置中设置一个快捷键。</p><p>您需要运行的第一个命令可能是 help 命令。运行 help 命令后，您可以看到所有支持的命令。</p><p>然后，您可以检查终端插件设置。在那里，您可以设置字体大小或主题。</p><h2 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h2><table><thead><tr><th>快捷键</th><th>描述</th></tr></thead><tbody><tr><td>ctrl+a</td><td>将光标移到行首</td></tr><tr><td>ctrl+e</td><td>将光标移到行尾</td></tr><tr><td>ctrl+d</td><td>删除光标下的字符</td></tr><tr><td>ctrl+h, backspace</td><td>删除光标前的字符</td></tr><tr><td>ctrl+f</td><td>光标前移一个字符</td></tr><tr><td>ctrl+b</td><td>光标后移一个字符</td></tr><tr><td>ctrl+k</td><td>删除光标后的所有字符</td></tr><tr><td>ctrl+u</td><td>删除当前行的所有字符</td></tr><tr><td>ctrl+l</td><td>清除终端屏幕</td></tr><tr><td>ctrl+p, up arrow</td><td>导航到历史记录中的上一个命令</td></tr><tr><td>ctrl+n, down arrow</td><td>导航到历史记录中的下一个命令</td></tr><tr><td>left arrow</td><td>光标后移一个字符</td></tr><tr><td>right arrow</td><td>光标前移一个字符</td></tr></tbody></table><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><h3 id="block" tabindex="-1">block <a class="header-anchor" href="#block" aria-label="Permalink to &quot;block&quot;">​</a></h3><p>显示块内容。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ block -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>显示块内容。</span></span>
<span class="line"><span>用法: block BLOCK_UUID [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help   显示帮助</span></span>
<span class="line"><span>  -i, --info   以JSON格式显示块信息</span></span>
<span class="line"><span>  -c, --count  计算行数和字符数</span></span>
<span class="line"><span>  -o, --only   仅当前块，不包括子块</span></span>
<span class="line"><span>  --no-dashes  输出时不带破折号前缀</span></span>
<span class="line"><span>  --no-spaces  输出时不带空格前缀</span></span></code></pre></div><h3 id="cat" tabindex="-1">cat <a class="header-anchor" href="#cat" aria-label="Permalink to &quot;cat&quot;">​</a></h3><p>打印页面或日志内容。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cat -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>显示页面或日志内容。</span></span>
<span class="line"><span>用法: cat [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help   显示帮助</span></span>
<span class="line"><span>  -i, --info   以JSON格式显示页面或日志信息</span></span>
<span class="line"><span>  -c, --count  计算行数和字符数</span></span>
<span class="line"><span>  -u, --uuid   显示带有块UUID的页面或日志内容</span></span>
<span class="line"><span>  -o, --only   仅一级块，不包括子块</span></span>
<span class="line"><span>  --no-dashes  输出时不带破折号前缀</span></span>
<span class="line"><span>  --no-spaces  输出时不带空格前缀</span></span></code></pre></div><h3 id="cd" tabindex="-1">cd <a class="header-anchor" href="#cd" aria-label="Permalink to &quot;cd&quot;">​</a></h3><p>更改当前工作目录。通过 Logseq 命名空间模拟。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cd -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>切换到页面或日志并更改当前目录。</span></span>
<span class="line"><span>用法: cd PAGE_NAME|JOURNAL_DATE [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  显示帮助</span></span></code></pre></div><h3 id="change-case-cc" tabindex="-1">change-case, cc <a class="header-anchor" href="#change-case-cc" aria-label="Permalink to &quot;change-case, cc&quot;">​</a></h3><p>更改大小写类型。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ change-case -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更改大小写类型。</span></span>
<span class="line"><span>用法: change-case BLOCK_UUID [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help       显示帮助</span></span>
<span class="line"><span>  -t, --to String  大小写类型</span></span>
<span class="line"><span>  -a, --all-types  显示所有支持的大小写类型</span></span></code></pre></div><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h3><p>清屏。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ clear -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>清屏。</span></span>
<span class="line"><span>用法: clear [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  显示帮助</span></span></code></pre></div><h3 id="count" tabindex="-1">count <a class="header-anchor" href="#count" aria-label="Permalink to &quot;count&quot;">​</a></h3><p>计算页面或日志内容的行数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ count -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>计算页面或日志内容的行数。</span></span>
<span class="line"><span>用法: count [PAGE_NAME|JOURNAL_DATE] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  显示帮助</span></span></code></pre></div><h3 id="echo" tabindex="-1">echo <a class="header-anchor" href="#echo" aria-label="Permalink to &quot;echo&quot;">​</a></h3><p>将参数写入标准输出。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ echo -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将参数写入标准输出。</span></span>
<span class="line"><span>用法: echo [arguments] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  显示帮助</span></span></code></pre></div><h3 id="head" tabindex="-1">head <a class="header-anchor" href="#head" aria-label="Permalink to &quot;head&quot;">​</a></h3><p>显示页面或日志内容的前几行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ head -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>显示页面或日志内容的前几行。</span></span>
<span class="line"><span>用法: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help        显示帮助</span></span>
<span class="line"><span>  --show-title      显示页面名称作为标题</span></span>
<span class="line"><span>  -n, --number Int  打印每个指定页面的行数 - 默认: 10</span></span></code></pre></div><h3 id="help" tabindex="-1">help <a class="header-anchor" href="#help" aria-label="Permalink to &quot;help&quot;">​</a></h3><p>列出所有支持的命令或特定命令的帮助信息。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ help -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>列出所有支持的命令或特定命令的帮助信息。</span></span>
<span class="line"><span>用法: help [COMMAND] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  显示帮助</span></span></code></pre></div><h3 id="history" tabindex="-1">history <a class="header-anchor" href="#history" aria-label="Permalink to &quot;history&quot;">​</a></h3><p>显示历史命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ history -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>显示历史命令。</span></span>
<span class="line"><span>用法: history [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help   显示帮助</span></span>
<span class="line"><span>  -c, --clear  清除历史记录</span></span></code></pre></div><h3 id="license" tabindex="-1">license <a class="header-anchor" href="#license" aria-label="Permalink to &quot;license&quot;">​</a></h3><p>显示许可证状态。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ license -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>显示许可证状态。</span></span>
<span class="line"><span>用法: license [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help      显示帮助</span></span>
<span class="line"><span>  -a, --activate  激活许可证</span></span></code></pre></div><h3 id="ls" tabindex="-1">ls <a class="header-anchor" href="#ls" aria-label="Permalink to &quot;ls&quot;">​</a></h3><p>列出当前命名空间前缀下的页面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>列出当前命名空间前缀下的页面。</span></span>
<span class="line"><span>用法: ls [NAMESPACE_PREFIX] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help        显示帮助</span></span>
<span class="line"><span>  -f, --file        以页面名称作为输入以检查页面是否存在</span></span>
<span class="line"><span>  --limit Int       页面数量限制</span></span>
<span class="line"><span>  --prefix String   按前缀过滤页面</span></span>
<span class="line"><span>  --suffix String   按后缀过滤页面</span></span>
<span class="line"><span>  --contain String  按包含字符串过滤页面</span></span>
<span class="line"><span>  --regexp String   按正则表达式过滤页面</span></span>
<span class="line"><span>  --glob String     按glob模式过滤页面</span></span>
<span class="line"><span>  --max-size Int    按最大内容字符数过滤页面</span></span>
<span class="line"><span>  --min-size Int    按最小内容字符数过滤页面</span></span>
<span class="line"><span>  --absolute        输出绝对路径（前导斜杠），除了纯路径名或日志日期</span></span></code></pre></div><h3 id="mv" tabindex="-1">mv <a class="header-anchor" href="#mv" aria-label="Permalink to &quot;mv&quot;">​</a></h3><p>更改页面名称或日志日期。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ mv -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>更改页面名称或日志日期。</span></span>
<span class="line"><span>用法: mv [PAGE_NAME|JOURNAL_DATE] [NEW_PAGE_NAME|NEW_JOURNAL_DATE] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help       显示帮助</span></span>
<span class="line"><span>  -j, --journal    修改日志</span></span>
<span class="line"><span>  -r, --recursive  递归执行</span></span>
<span class="line"><span>  -f, --force      不提示确认直接处理</span></span>
<span class="line"><span>  --dry-run        模拟操作，不做任何更改</span></span></code></pre></div><h3 id="pwd" tabindex="-1">pwd <a class="header-anchor" href="#pwd" aria-label="Permalink to &quot;pwd&quot;">​</a></h3><p>显示当前页面和/或块的 UUID。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ pwd -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>显示当前页面和/或块的UUID。</span></span>
<span class="line"><span>用法: pwd [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  显示帮助</span></span></code></pre></div><h3 id="quit-exit-by" tabindex="-1">quit, exit, by <a class="header-anchor" href="#quit-exit-by" aria-label="Permalink to &quot;quit, exit, by&quot;">​</a></h3><p>退出终端。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ quit -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>退出终端。</span></span>
<span class="line"><span>用法: quit [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  显示帮助</span></span></code></pre></div><h3 id="rm" tabindex="-1">rm <a class="header-anchor" href="#rm" aria-label="Permalink to &quot;rm&quot;">​</a></h3><p>删除页面或日志。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ rm -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>删除页面或日志。</span></span>
<span class="line"><span>用法: rm [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help       显示帮助</span></span>
<span class="line"><span>  -f, --force      不提示确认直接处理</span></span>
<span class="line"><span>  -r, --recursive  递归执行</span></span>
<span class="line"><span>  --dry-run        模拟操作，不做任何更改</span></span></code></pre></div><h3 id="settings" tabindex="-1">settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;settings&quot;">​</a></h3><p>打开终端设置。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ settings -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>打开终端设置。</span></span>
<span class="line"><span>用法: settings [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  显示帮助</span></span></code></pre></div><h3 id="tail" tabindex="-1">tail <a class="header-anchor" href="#tail" aria-label="Permalink to &quot;tail&quot;">​</a></h3><p>显示页面或日志内容的最后几行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ tail -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>显示页面或日志内容的最后几行。</span></span>
<span class="line"><span>用法: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help        显示帮助</span></span>
<span class="line"><span>  -n, --number Int  打印每个指定页面的行数 - 默认: 10</span></span></code></pre></div><h3 id="touch" tabindex="-1">touch <a class="header-anchor" href="#touch" aria-label="Permalink to &quot;touch&quot;">​</a></h3><p>创建页面或日志。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ touch -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>创建页面或日志。</span></span>
<span class="line"><span>用法: touch [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help     显示帮助</span></span>
<span class="line"><span>  -j, --journal  创建日志</span></span>
<span class="line"><span>  -f, --force    不提示确认直接处理</span></span></code></pre></div><h3 id="tree" tabindex="-1">tree <a class="header-anchor" href="#tree" aria-label="Permalink to &quot;tree&quot;">​</a></h3><p>以树状格式显示命名空间前缀。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ tree -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>以树状格式显示命名空间前缀。</span></span>
<span class="line"><span>用法: tree [NAMESPACE_PREFIX] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  显示帮助</span></span></code></pre></div><h3 id="whoami" tabindex="-1">whoami <a class="header-anchor" href="#whoami" aria-label="Permalink to &quot;whoami&quot;">​</a></h3><p>显示当前图表。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ whoami -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>显示当前图表。</span></span>
<span class="line"><span>用法: whoami [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  显示帮助</span></span></code></pre></div><h3 id="xargs" tabindex="-1">xargs <a class="header-anchor" href="#xargs" aria-label="Permalink to &quot;xargs&quot;">​</a></h3><p>显示页面或日志内容的前几行。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ xargs -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>显示页面或日志内容的前几行。</span></span>
<span class="line"><span>用法: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [选项]。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help            显示帮助</span></span>
<span class="line"><span>  -I, --replstr String  替换参数中的一个或多个replstr - 默认: {}</span></span></code></pre></div>`,86),t=[i];function c(h,o,d,r,u,g){return n(),s("div",null,t)}const m=a(l,[["render",c]]);export{v as __pageData,m as default};

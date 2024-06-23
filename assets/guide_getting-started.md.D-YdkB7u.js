import{_ as a,c as s,o as n,a5 as e,a6 as p}from"./chunks/framework.CXwJbHuV.js";const b=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md"}'),t={name:"guide/getting-started.md"},l=e('<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><p>Welcome to the installation and usage for Logseq Terminal. This is a simple guide to help you quickly understand and start using it.</p><h2 id="what-is-it" tabindex="-1">What is it <a class="header-anchor" href="#what-is-it" aria-label="Permalink to &quot;What is it&quot;">​</a></h2><p>Logseq Terminal is a terminal simulator for Logseq. It can be used to perform various operations in terminal, e.g. cat, ls, cd, tree, pwd and so on. These commands are similar with the real terminal commands in Linux but not the same. You can use help and <code>command --help</code> to learn more about the commands.</p><p><img src="'+p+`" alt=""></p><p>It would be getting more commands in the future.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>Support cd, ls, cat, pwd, tree, clear... 20+ commands</li><li>Support command history and nagivate by up/down arrow key, or ctrl+p/ctrl+n</li><li>Support command tab auto completion</li><li>Support namespace autocompletion for cd, cat, ls and so on.</li><li>Support line cursor and nagivate by left/right arrow key</li><li>Support Emoji, CJK</li><li>Support some common shortcuts. e.g. ctrl+a/ctrl+e, ctrl+d/ctrl+h, ctrl+f/ctrl+b, ctrl+k/ctrl+u, ctrl+l and so on.</li><li>Support pipeline command, output redirection, prompt, progress bar.</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><h3 id="plugin-marketplace" tabindex="-1">Plugin Marketplace <a class="header-anchor" href="#plugin-marketplace" aria-label="Permalink to &quot;Plugin Marketplace&quot;">​</a></h3><p>Search for it in the plugin marketplace and install it from there.</p><h3 id="manual-installation" tabindex="-1">Manual Installation <a class="header-anchor" href="#manual-installation" aria-label="Permalink to &quot;Manual Installation&quot;">​</a></h3><ol><li>Download the latest zip file from the release page.</li><li>Unzip the zip file into the folder where you want to store the plugin.</li><li>Enable developer mode in Logseq.</li><li>Load the unzipped folder by clicking the &quot;Load unpacked plugin&quot; button on the plugin modal.</li><li>You should now see that the plugin has been installed.</li></ol><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h2><p>There is an icon on Logseq top right corner to trigger the terminal UI. By default there is no shortcuts, but you can set a shortcut in the Logseq shortcut settings.</p><p>The first command you need to run may be the help command. After you run the help command, you can see all supported comands.</p><p>Then, you can check the terminal plugin settings. You can set font size or theme there.</p><h2 id="shortcuts" tabindex="-1">Shortcuts <a class="header-anchor" href="#shortcuts" aria-label="Permalink to &quot;Shortcuts&quot;">​</a></h2><table><thead><tr><th>Shortcut</th><th>Description</th></tr></thead><tbody><tr><td>ctrl+a</td><td>Put cursor to the beginning of the line</td></tr><tr><td>ctrl+e</td><td>Put cursor to the end of the line</td></tr><tr><td>ctrl+d</td><td>Delete the character under the cursor</td></tr><tr><td>ctrl+h, backspace</td><td>Delete the character before the cursor</td></tr><tr><td>ctrl+f</td><td>Move cursor forward one character</td></tr><tr><td>ctrl+b</td><td>Move cursor backward one character</td></tr><tr><td>ctrl+k</td><td>Delete all characters after the cursor</td></tr><tr><td>ctrl+u</td><td>Delete all characters in current line</td></tr><tr><td>ctrl+l</td><td>Clear the terminal screen</td></tr><tr><td>ctrl+p, up arrow</td><td>Navigate to the previous command in history</td></tr><tr><td>ctrl+n, down arrow</td><td>Navigate to the next command in history</td></tr><tr><td>left arrow</td><td>Move cursor backward one character</td></tr><tr><td>right arrow</td><td>Move cursor forward one character</td></tr></tbody></table><h2 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h2><h3 id="block" tabindex="-1">block <a class="header-anchor" href="#block" aria-label="Permalink to &quot;block&quot;">​</a></h3><p>Show block content.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ block -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Show block content.</span></span>
<span class="line"><span>Usage: block BLOCK_UUID [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help   Displays help</span></span>
<span class="line"><span>  -i, --info   Show block info in JSON format</span></span>
<span class="line"><span>  -c, --count  Count lines and chars</span></span>
<span class="line"><span>  -o, --only   Only current block, without children</span></span>
<span class="line"><span>  --no-dashes  Output dashes prefix, if no-dashes, will not output dashes</span></span>
<span class="line"><span>  --no-spaces  Do not output spaces prefix, , if no-spaces, will not output spaces</span></span></code></pre></div><h3 id="cat" tabindex="-1">cat <a class="header-anchor" href="#cat" aria-label="Permalink to &quot;cat&quot;">​</a></h3><p>Print page or journal content.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cat -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Show page or journal content.</span></span>
<span class="line"><span>Usage: cat [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help   Displays help</span></span>
<span class="line"><span>  -i, --info   Show page or journal info in JSON format</span></span>
<span class="line"><span>  -c, --count  Count lines and chars</span></span>
<span class="line"><span>  -u, --uuid   Show page or journal content with block uuid</span></span>
<span class="line"><span>  -o, --only   Only first level block, without children</span></span>
<span class="line"><span>  --no-dashes  Output dashes prefix, if no-dashes, will not output dashes</span></span>
<span class="line"><span>  --no-spaces  Do not output spaces prefix, , if no-spaces, will not output spaces</span></span></code></pre></div><h3 id="cd" tabindex="-1">cd <a class="header-anchor" href="#cd" aria-label="Permalink to &quot;cd&quot;">​</a></h3><p>Change the current working directory. It is simulated by Logseq namespace.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ cd -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Switch to page or journal and change pwd.</span></span>
<span class="line"><span>Usage: cd PAGE_NAME|JOURNAL_DATE [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  Displays help</span></span></code></pre></div><h3 id="change-case-cc" tabindex="-1">change-case, cc <a class="header-anchor" href="#change-case-cc" aria-label="Permalink to &quot;change-case, cc&quot;">​</a></h3><p>Change cases to types.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ change-case -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Change cases to types.</span></span>
<span class="line"><span>Usage: change-case BLOCK_UUID [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help       Displays help</span></span>
<span class="line"><span>  -t, --to String  Type of case</span></span>
<span class="line"><span>  -a, --all-types  Show all supported case types</span></span></code></pre></div><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h3><p>Clear screen.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ clear -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Clear screen.</span></span>
<span class="line"><span>Usage: clear [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  Displays help</span></span></code></pre></div><h3 id="count" tabindex="-1">count <a class="header-anchor" href="#count" aria-label="Permalink to &quot;count&quot;">​</a></h3><p>Count page or journal content lines.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ count -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Count page or journal content lines.</span></span>
<span class="line"><span>Usage: count [PAGE_NAME|JOURNAL_DATE] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  Displays help</span></span></code></pre></div><h3 id="echo" tabindex="-1">echo <a class="header-anchor" href="#echo" aria-label="Permalink to &quot;echo&quot;">​</a></h3><p>Write arguments to the standard output.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ echo -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Write arguments to the standard output.</span></span>
<span class="line"><span>Usage: echo [arguments] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  Displays help</span></span></code></pre></div><h3 id="head" tabindex="-1">head <a class="header-anchor" href="#head" aria-label="Permalink to &quot;head&quot;">​</a></h3><p>Display first lines of a page or journal content.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ head -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Display first lines of a page or journal content.</span></span>
<span class="line"><span>Usage: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help        Displays help</span></span>
<span class="line"><span>  --show-title      Displays page name as title</span></span>
<span class="line"><span>  -n, --number Int  Print count lines of each of the specified pages. - default: 10</span></span></code></pre></div><h3 id="help" tabindex="-1">help <a class="header-anchor" href="#help" aria-label="Permalink to &quot;help&quot;">​</a></h3><p>List all supported commands or specific command help information.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ help -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>List all supported commands or specific command help information.</span></span>
<span class="line"><span>Usage: help [COMMAND] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  Displays help</span></span></code></pre></div><h3 id="history" tabindex="-1">history <a class="header-anchor" href="#history" aria-label="Permalink to &quot;history&quot;">​</a></h3><p>Show history commands.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ history -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Show history commands.</span></span>
<span class="line"><span>Usage: history [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help   Displays help</span></span>
<span class="line"><span>  -c, --clear  Clear history</span></span></code></pre></div><h3 id="license" tabindex="-1">license <a class="header-anchor" href="#license" aria-label="Permalink to &quot;license&quot;">​</a></h3><p>Show license state.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ license -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Show license state.</span></span>
<span class="line"><span>Usage: license [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help      Displays help</span></span>
<span class="line"><span>  -a, --activate  Activate license</span></span></code></pre></div><h3 id="ls" tabindex="-1">ls <a class="header-anchor" href="#ls" aria-label="Permalink to &quot;ls&quot;">​</a></h3><p>List pages under current namespace prefix.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ls -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>List pages under current namespace prefix.</span></span>
<span class="line"><span>Usage: ls [NAMESPACE_PREFIX] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help        Displays help</span></span>
<span class="line"><span>  -f, --file        Take input as page name to check if the page exist.</span></span>
<span class="line"><span>  --limit Int       Number of pages limitation.</span></span>
<span class="line"><span>  --prefix String   Filter pages starts with prefix.</span></span>
<span class="line"><span>  --suffix String   Filter pages ends with suffix.</span></span>
<span class="line"><span>  --contain String  Filter pages contains string.</span></span>
<span class="line"><span>  --regexp String   Filter pages by regexp.</span></span>
<span class="line"><span>  --glob String     Filter pages by glob.</span></span>
<span class="line"><span>  --max-size Int    Filter pages by max content chars.</span></span>
<span class="line"><span>  --min-size Int    Filter pages by min content chars.</span></span>
<span class="line"><span>  --absolute        Output absolute path (leading slash) except pure path name or journal date.</span></span></code></pre></div><h3 id="mv" tabindex="-1">mv <a class="header-anchor" href="#mv" aria-label="Permalink to &quot;mv&quot;">​</a></h3><p>Change page name or journal date.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ mv -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Change page name or journal date.</span></span>
<span class="line"><span>Usage: mv [PAGE_NAME|JOURNAL_DATE] [NEW_PAGE_NAME|NEW_JOURNAL_DATE] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help       Displays help</span></span>
<span class="line"><span>  -j, --journal    Touch journal(s)</span></span>
<span class="line"><span>  -r, --recursive  Run removing recursively</span></span>
<span class="line"><span>  -f, --force      Process without prompting for confirmation</span></span>
<span class="line"><span>  --dry-run        Simulate the operation without making any changes.</span></span></code></pre></div><h3 id="pwd" tabindex="-1">pwd <a class="header-anchor" href="#pwd" aria-label="Permalink to &quot;pwd&quot;">​</a></h3><p>Show current page and/or block uuid.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ pwd -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Show current page and/or block uuid.</span></span>
<span class="line"><span>Usage: pwd [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  Displays help</span></span></code></pre></div><h3 id="quit-exit-by" tabindex="-1">quit, exit, by <a class="header-anchor" href="#quit-exit-by" aria-label="Permalink to &quot;quit, exit, by&quot;">​</a></h3><p>Quit terminal.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ quit -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Quit terminal.</span></span>
<span class="line"><span>Usage: quit [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  Displays help</span></span></code></pre></div><h3 id="rm" tabindex="-1">rm <a class="header-anchor" href="#rm" aria-label="Permalink to &quot;rm&quot;">​</a></h3><p>Remove page or journal.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ rm -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Remove page or journal.</span></span>
<span class="line"><span>Usage: rm [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help       Displays help</span></span>
<span class="line"><span>  -f, --force      Process without prompting for confirmation</span></span>
<span class="line"><span>  -r, --recursive  Run removing recursively</span></span>
<span class="line"><span>  --dry-run        Simulate the operation without making any changes.</span></span></code></pre></div><h3 id="settings" tabindex="-1">settings <a class="header-anchor" href="#settings" aria-label="Permalink to &quot;settings&quot;">​</a></h3><p>Open terminal settings.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ settings -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Open terminal settings.</span></span>
<span class="line"><span>Usage: settings [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  Displays help</span></span></code></pre></div><h3 id="tail" tabindex="-1">tail <a class="header-anchor" href="#tail" aria-label="Permalink to &quot;tail&quot;">​</a></h3><p>Display first lines of a page or journal content.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ tail -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Display first lines of a page or journal content.</span></span>
<span class="line"><span>Usage: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help        Displays help</span></span>
<span class="line"><span>  -n, --number Int  Print count lines of each of the specified pages. - default: 10</span></span></code></pre></div><h3 id="touch" tabindex="-1">touch <a class="header-anchor" href="#touch" aria-label="Permalink to &quot;touch&quot;">​</a></h3><p>Create page or journal.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ touch -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Create page or journal.</span></span>
<span class="line"><span>Usage: touch [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help     Displays help</span></span>
<span class="line"><span>  -j, --journal  Touch journal(s)</span></span>
<span class="line"><span>  -f, --force    Process without prompting for confirmation</span></span></code></pre></div><h3 id="tree" tabindex="-1">tree <a class="header-anchor" href="#tree" aria-label="Permalink to &quot;tree&quot;">​</a></h3><p>Show namespace prefix in a tree-like format.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ tree -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Show namespace prefix in a tree-like format.</span></span>
<span class="line"><span>Usage: tree [NAMESPACE_PREFIX] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  Displays help</span></span></code></pre></div><h3 id="whoami" tabindex="-1">whoami <a class="header-anchor" href="#whoami" aria-label="Permalink to &quot;whoami&quot;">​</a></h3><p>Show current graph.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ whoami -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Show current graph.</span></span>
<span class="line"><span>Usage: whoami [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help  Displays help</span></span></code></pre></div><h3 id="xargs" tabindex="-1">xargs <a class="header-anchor" href="#xargs" aria-label="Permalink to &quot;xargs&quot;">​</a></h3><p>Display first lines of a page or journal content.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ xargs -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Display first lines of a page or journal content.</span></span>
<span class="line"><span>Usage: head [PAGE_NAME|JOURNAL_DATE] [OTHER_PAGE_NAME|OTHER_JOURNAL_DATE] [options].</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  -h, --help            Displays help</span></span>
<span class="line"><span>  -I, --replstr String  Replacing one or more occurrences of replstr in arguments - default: {}</span></span></code></pre></div>`,86),i=[l];function o(c,r,h,d,u,g){return n(),s("div",null,i)}const k=a(t,[["render",o]]);export{b as __pageData,k as default};

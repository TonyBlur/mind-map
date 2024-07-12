(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68de956c"],{"7e57":function(s,a,t){"use strict";t.r(a);var v=function(){var s=this;s._self._c;return s._m(0)},_=[function(){var s=this,a=s._self._c;return a("div",[a("h1",[s._v("开始")]),a("h2",[s._v("安装")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("npm i simple-mind-map\n")])]),a("p",[a("code",[s._v("0.2.0")]),s._v("版本之前的注意事项：")]),a("blockquote",[a("p",[s._v("注意：本项目为源码直接发布，并未进行打包，如果出现编译失败的情况，Vue CLI创建的项目可以在vue.config.js文件中增加如下配置来让babel-loader编译本依赖：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("module")]),s._v(".exports = {\n     "),a("span",{staticClass:"hljs-attr"},[s._v("transpileDependencies")]),s._v(": ["),a("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map'")]),s._v("]\n}\n")])]),a("p",[s._v("其他项目请自行修改打包配置。")])]),a("h2",[s._v("使用")]),a("blockquote",[a("p",[s._v("本仓库的"),a("code",[s._v("web")]),s._v("目录提供了一个基于"),a("code",[s._v("Vue2")]),s._v("的完整项目，如果你遇到了一些使用上的疑惑，可以参考该项目的实现。")])]),a("blockquote",[a("p",[s._v("想要了解在其他框架中的使用，你可以参考以下这些非官方的实现：")]),a("p",[s._v("1."),a("a",{attrs:{href:"https://github.com/huangyuanyin/hyy-vue3-mindMap"}},[s._v("https://github.com/huangyuanyin/hyy-vue3-mindMap")]),s._v("：一个基于 Vue3.2 +ElementPlus的思维导图。")])]),a("p",[s._v("首先提供一个宽高不为0的容器元素：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"mindMapContainer"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n")])]),a("p",[s._v("另外再设置一下"),a("code",[s._v("css")]),s._v("样式：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-selector-id"},[s._v("#mindMapContainer")]),s._v(" * {\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),a("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n}\n")])]),a("p",[s._v("然后引入"),a("code",[s._v("simple-mind-map")]),s._v("库，创建一个实例：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v('"simple-mind-map"')]),s._v(";\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" mindMap = "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" MindMap({\n  "),a("span",{staticClass:"hljs-attr"},[s._v("el")]),s._v(": "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),a("span",{staticClass:"hljs-string"},[s._v("'mindMapContainer'")]),s._v("),\n  "),a("span",{staticClass:"hljs-attr"},[s._v("data")]),s._v(": {\n    "),a("span",{staticClass:"hljs-string"},[s._v('"data"')]),s._v(": {\n        "),a("span",{staticClass:"hljs-string"},[s._v('"text"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"根节点"')]),s._v("\n    },\n    "),a("span",{staticClass:"hljs-string"},[s._v('"children"')]),s._v(": []\n  }\n});\n")])]),a("p",[s._v("这样即可得一个思维导图。")]),a("p",[s._v("如果你想要实现一个完整思维导图，那么通常你需要开发一些ui界面，通过"),a("code",[s._v("simple-mind-map")]),s._v("库提供的接口来实现更多功能。")]),a("p",[a("code",[s._v("simple-mind-map")]),s._v("支持丰富的配置、事件、命令，以及一些额外的插件扩展，阅读后续的文档来了解更多吧。")]),a("p",[s._v("默认引入的是未打包的"),a("code",[s._v("ES")]),s._v("模块，且只包含核心功能，不包含未注册的插件内容，能有效减小体积，不过你需要在你的项目中配置"),a("code",[s._v("babel")]),s._v("编译"),a("code",[s._v("simple-mind-map")]),s._v("，防止一些较新的"),a("code",[s._v("js")]),s._v("语法部分浏览器不支持。")]),a("p",[s._v("如果你不想一开始就加载所有插件，想在实例化了之后再异步加载和注册插件，可以这么做：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v("("),a("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map/src/plugins/Export.js'")]),s._v(").then("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("res")]),s._v(" =>")]),s._v(" {\n  mindMap.addPlugin(res.default)\n})\n")])]),a("p",[s._v("如果你需要"),a("code",[s._v("umd")]),s._v("模块格式的文件，比如以"),a("code",[s._v("CDN")]),s._v("的方式在浏览器上使用，那么你可以从"),a("code",[s._v("/simple-mind-map/dist/")]),s._v("目录中找到"),a("code",[s._v("simpleMindMap.umd.min.js")]),s._v("文件和"),a("code",[s._v("simpleMindMap.css")]),s._v("文件，复制到你的项目中，然后在页面中引入：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("link")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("rel")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"stylesheet"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("href")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"simpleMindMap.css"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("scr")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"simpleMindMap.umd.min.js"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])]),a("p",[s._v("会创建一个全局变量"),a("code",[s._v("window.simpleMindMap")]),s._v("，可以通过"),a("code",[s._v("window.simpleMindMap.default")]),s._v("获取到"),a("code",[s._v("MindMap")]),s._v("构造函数，详细信息可以把"),a("code",[s._v("window.simpleMindMap")]),s._v("打印出来看一下。")]),a("p",[s._v("这种方式的缺点是会包含所有的内容，包括你没有注册的插件，所以整体体积会比较大。")]),a("p",[s._v("（v0.5.4+）如果你想直接在浏览器端通过"),a("code",[s._v("ES")]),s._v("模块的方式来使用，你可以在"),a("code",[s._v("/simple-mind-map/dist/")]),s._v("目录中找到"),a("code",[s._v("simpleMindMap.esm.js")]),s._v("和"),a("code",[s._v("simpleMindMap.esm.css")]),s._v("文件。")]),a("p",[s._v("也可以使用在线cdn服务，比如：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("https://unpkg.com/browse/simple-mind-map@0.9.2/dist/\n")])]),a("p",[s._v("可以找到某个版本的所有打包后的文件。")]),a("h2",[s._v("开发")]),a("p",[s._v("如果你只是使用库的话可以不用阅读此小节。")]),a("h3",[s._v("本地开发")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("git "),a("span",{staticClass:"hljs-built_in"},[s._v("clone")]),s._v(" https://github.com/wanglin2/mind-map.git\n"),a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" mind-map\n"),a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" simple-mind-map\nnpm i\nnpm link\n"),a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" ..\n"),a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web\nnpm i\nnpm link simple-mind-map\nnpm run serve\n")])]),a("blockquote",[a("p",[s._v("如果安装依赖出错，可以尝试调整node版本，作者使用的是14.x版本。")])]),a("h3",[s._v("打包库")]),a("p",[s._v("自"),a("code",[s._v("0.2.0")]),s._v("版本开始增加了对核心库"),a("code",[s._v("simple-mind-map")]),s._v("的打包，复用了示例项目"),a("code",[s._v("web")]),s._v("的打包工具。")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web\nnpm run buildLibrary\n")])]),a("p",[s._v("打包入口为"),a("code",[s._v("simple-mind-map/full.js")]),s._v("，默认会引入所有插件，如果你不需要所有插件的话，那么可以修改该文件，只引入你需要的插件，这样可以减少打包后的文件体积。")]),a("p",[a("code",[s._v("simple-mind-map")]),s._v("库的"),a("code",[s._v("package.json")]),s._v("文件提供了两个导出字段：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("{\n  "),a("span",{staticClass:"hljs-attr"},[s._v('"module"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"index.js"')]),s._v(",\n  "),a("span",{staticClass:"hljs-attr"},[s._v('"main"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"./dist/simpleMindMap.umd.min.js"')]),s._v(",\n}\n")])]),a("p",[s._v("支持"),a("code",[s._v("module")]),s._v("字段的环境会以"),a("code",[s._v("index.js")]),s._v("为入口，否则会以打包后的"),a("code",[s._v("simpleMindMap.umd.min.js")]),s._v("为入口。")]),a("h4",[s._v("生成TypeScript类型文件")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" simple-mind-map\nnpm run types\n")])]),a("p",[s._v("即可得到"),a("code",[s._v("simple-mind-map/types/")]),s._v("目录下的类型文件。")]),a("h3",[s._v("编译文档")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web \nnpm run buildDoc\n")])]),a("h3",[s._v("打包demo")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("cd")]),s._v(" web\nnpm run build\n")])]),a("p",[s._v("会自动把"),a("code",[s._v("index.html")]),s._v("移动到根目录。")]),a("h2",[s._v("问题")]),a("h3",[s._v("1.在Vite中使用报错，提示xml-js依赖出错")]),a("p",[s._v("解决方法：使用如下引入方式：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v('"simple-mind-map/dist/simpleMindMap.umd.min"')]),s._v("\n")])]),a("p",[a("code",[s._v("simple-mind-map")]),s._v("包提供未打包的入口字段"),a("code",[s._v("module")]),s._v("，依赖的"),a("code",[s._v("xml-js")]),s._v("包需要引入"),a("code",[s._v("node")]),s._v("环境下的包，所以在"),a("code",[s._v("Vite")]),s._v("中获取不到会报错，所以指定引入打包后的入口，相关包都已打包进产物，所以不会报错。")]),a("p",[s._v("如果需要二次开发，也就是必须要使用未打包代码的话，如果你不需要解析"),a("code",[s._v("xmind")]),s._v("文件的话，可以去除"),a("code",[s._v("xmind")]),s._v("模块，如果需要的话那么可以尝试换成其他的解析"),a("code",[s._v("xml")]),s._v("为"),a("code",[s._v("json")]),s._v("的库。")]),a("h3",[s._v("2.报错"),a("code",[s._v("Getting bbox of element \"text\" is not possible: TypeError: Cannot read properties of undefined (reading 'apply')")])]),a("p",[s._v("原因为安装的"),a("code",[s._v("@svgdotjs/svg.js")]),s._v("版本太高，手动降到"),a("code",[s._v("3.0.16")]),s._v("版本即可。")]),a("h3",[s._v("3.TypeError: Cannot read properties of undefined (reading 'prototype') at sax.js:222:46")]),a("p",[s._v("可以在打包配置文件中增加如下配置：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("resolve: { "),a("span",{staticClass:"hljs-attr"},[s._v("alias")]),s._v(": { "),a("span",{staticClass:"hljs-attr"},[s._v("stream")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"stream-browserify"')]),s._v(" } }\n")])]),a("p",[s._v("不同的打包工具可能具体配置不一样，原理就是排除"),a("code",[s._v("stream")]),s._v("依赖。")]),a("h3",[s._v("4.点击【新建】、【打开】、【另存为】按钮时提示浏览器不支持，或者非https协议。")]),a("p",[s._v("浏览器上操作电脑本地文件使用的是"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/showOpenFilePicker"}},[s._v("window.showOpenFilePicker")]),s._v("api，如果不支持，要么是浏览器不支持这个API，要么是因为页面非https协议，你可以按F12，或者在页面通过鼠标右键菜单中的【检查】打开浏览器控制台，在其中的【控制台】或【console】tab中输入"),a("code",[s._v("window.showOpenFilePicker")]),s._v("按回车，如果返回"),a("code",[s._v("undefined")]),s._v("则代表不支持，如果返回的不是这个，而页面依旧提示提示浏览器不支持，或者非https协议，那么可以提交issue，或者联系作者。")]),a("h3",[s._v("5.引入simple-mind-map报错，报错信息如下：")]),a("img",{staticStyle:{width:"850px"},attrs:{src:t("bff3")}}),a("p",[s._v("这是因为你的构建环境不支持该js语法，该语法出自"),a("code",[s._v("@svgdotjs/svg.js")]),s._v("库，解决方法如下：")]),a("p",[s._v("1.手动降低"),a("code",[s._v("@svgdotjs/svg.js")]),s._v("库的版本，你可以在你的项目中手动安装低版本，比如："),a("code",[s._v("npm i @svgdotjs/svg.js@3.0.16")])]),a("p",[s._v("2.不降低版本的话，可以通过修改你的构建工具的相关配置，修改"),a("code",[s._v("babel")]),s._v("的配置，让它编译一下"),a("code",[s._v("node_modules")]),s._v("中的"),a("code",[s._v("simple-mind-map")]),s._v("库，或"),a("code",[s._v("@svgdotjs/svg.js")]),s._v("库，如果用的是"),a("code",[s._v("vue-cli")]),s._v("或"),a("code",[s._v("vite")]),s._v("，它们也直接提供了相关配置。另外需要安装编译该语法的"),a("code",[s._v("babel")]),s._v("插件，并且配置到"),a("code",[s._v("babel")]),s._v("的配置文件中：")]),a("p",[a("code",[s._v("@babel/plugin-proposal-nullish-coalescing-operator")]),s._v("、"),a("code",[s._v("@babel/plugin-proposal-optional-chaining")]),s._v("。")])])}],n={},i=n,e=t("2877"),l=Object(e["a"])(i,v,_,!1,null,null,null);a["default"]=l.exports},bff3:function(s,a,t){s.exports=t.p+"img/错误.jpg"}}]);
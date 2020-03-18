{
  /**************** LINTING / FORMATTING **************/
  "editor.formatOnSave": true,
  "eslint.run": "onSave",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
  ],
  "javascript.preferences.quoteStyle": "double",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "editor.autoIndent": "full",
  "editor.detectIndentation": false,
  "editor.useTabStops": true,
  "editor.formatOnPaste": true,
  "editor.matchBrackets": "always",
  "files.insertFinalNewline": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "html.format.enable": true,
  "html.format.preserveNewLines": true,
  "files.trimTrailingWhitespace": true,
  /*************  END LINTING / FORMATTING **************/
  /******************  THEME / STYLING ******************/
  "workbench.colorTheme": "Cobalt2",
  "editor.fontFamily": "Operator Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 22,
  "editor.quickSuggestionsDelay": 30,
  "workbench.editor.tabSizing": "shrink",
  "editor.tabSize": 2,
  "editor.cursorWidth": 5,
  "editor.cursorStyle": "line",
  "editor.wordWrap": "on",
  "editor.fontWeight": "400",
  "editor.cursorBlinking": "solid",
  "editor.colorDecorators": true,
  "editor.minimap.enabled": false,
  "workbench.activityBar.visible": true,
  "workbench.sideBar.location": "left",
  "editor.renderWhitespace": "none",
  "editor.rulers": [
    80,
    100
  ],
  "editor.minimap.showSlider": "always",
  "window.zoomLevel": 0,
  "window.closeWhenEmpty": true,
  "editor.showFoldingControls": "always",
  "workbench.editor.enablePreview": false,
  "editor.parameterHints.enabled": false,
  "editor.scrollBeyondLastLine": true,
  "workbench.editor.tabCloseButton": "right",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.snippetSuggestions": "top",
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "window.title": "${dirty} ${rootName} ${separator} ${activeEditorMedium} ${dirty}",
  "workbench.colorCustomizations": {
    "[Cobalt2]": {
      "titleBar.activeBackground": "#193549",
      "titleBar.activeForeground": "#ffc600",
    },
  },
  "window.titleBarStyle": "custom",
  /*************  END THEME / STYLING ************/
  /******************  TERMINAL ******************/
  "terminal.external.osxExec": "iTerm.app",
  "terminal.integrated.shell.osx": "/bin/zsh",
  "terminal.integrated.fontFamily": "Inconsolata for Powerline",
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.lineHeight": 1,
  "terminal.integrated.cursorBlinking": true,
  /****************  END TERMINAL ****************/
  /*****************  UTILITIES ******************/
  "editor.find.seedSearchStringFromSelection": true,
  "extensions.ignoreRecommendations": false,
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/.next": true
  }
  /***************  END UTILITIES ****************/
}

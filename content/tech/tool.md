---
title: "工具列表"
description: "紀錄使用的工具及設定"
tags: ["Dev"]
---

## VSCode

- font: [Monospace Neon](https://monaspace.githubnext.com/)

UI 顏色

```json title="settings.json"
{
  "workbench.colorCustomizations": {
    "activityBar.background": "#2a384e",
    "activityBar.activeBackground": "#026881",
    "activityBar.activeBorder": "#ffffff",
    "activityBar.foreground": "#ffffff",
    "statusBar.background": "#20686d",
    "tab.inactiveBackground": "#222222",
    "statusBar.foreground": "#ffffff",
    "activityBarBadge.background": "#00864e",
    "statusBar.border": "#00000000",
    "tab.activeBackground": "#284049",
    "tab.activeBorderTop": "#a6ff00"
  }
}
```

## wezterm

```lua title=".wezterm.lua"
local wezterm = require 'wezterm';

return {
    color_scheme = "ayu",

    font = wezterm.font('Monaspace Neon', { weight = 'DemiLight' }),
    font_size = 18,

    window_background_opacity = 0.95,

    initial_cols = 100,
    initial_rows = 30,

    clean_exit_codes = { 130 },

    colors = {
      tab_bar = {
        background = '#ffffff',

        inactive_tab = {
          bg_color = "#214358",
          fg_color = "#AEB8C4",
        },

        active_tab = {
          bg_color = "#151B25",
          fg_color = "#9CA6B8",
        },
      }
    },
  }
```

## starship

https://starship.rs/

```toml title="starship.toml"
add_newline = false
right_format = """$time"""

[character]
success_symbol = '[λ](bold green)'
error_symbol = '[λ](bold red)'
vimcmd_symbol = '[<](bold green)'
vimcmd_replace_one_symbol = '[<](bold purple)'
vimcmd_replace_symbol = '[<](bold purple)'
vimcmd_visual_symbol = '[<](bold yellow)'

[line_break]
disabled = false

[git_branch]
format = 'on [$branch(:$remote_branch)]($style) '

[time]
disabled = true
time_format = '%F %T'
format = '[$time]($style)'
```

## git

```plaintext title=".gitconfig"
[alias]
    sw = switch
    co = checkout
    st = status
```
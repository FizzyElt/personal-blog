---
title: "工具列表"
description: "紀錄使用的工具及設定"
tags: ["Dev"]
---

- OS: Pop!\_OS 24.04
- font: [Monospace Neon](https://monaspace.githubnext.com/)
- [Wezterm](#wezterm)
- zsh
- [zinit](https://github.com/zdharma-continuum/zinit)
  - [zdharma-continuum/fast-syntax-highlighting](https://github.com/zdharma-continuum/fast-syntax-highlighting)
  - [zsh-users/zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
- [starship](#starship)
- eza
- bat
- [VSCode](#vscode)

## Language

- JS/TS
  - [n (Node version management)](https://github.com/tj/n)
  - [nodejs](https://nodejs.org/)
  - [bun](https://bun.com/)
- [OCaml](https://ocaml.org)
- [Rust](https://rust-lang.org/)
- [Lean](https://lean-lang.org/)

## VSCode

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
  },
  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "name": "One Dark italic",
        "scope": [
          "comment",
          "entity.other.attribute-name",
          "keyword",
          "markup.underline.link",
          "storage.modifier",
          "storage.type",
          "string.url",
          "variable.language.super",
          "variable.language.this"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      }
    ]
  }
}
```

## Zed

```json title="settings.json"
// Zed settings
//
// For information on how to configure Zed, see the Zed
// documentation: https://zed.dev/docs/configuring-zed
//
// To see all of Zed's default settings without changing your
// custom settings, run `zed: open default settings` from the
// command palette (cmd-shift-p / ctrl-shift-p)
{
  "minimap": {
    "thumb": "always",
    "thumb_border": "none",
    "max_width_columns": 80,
    "show": "auto",
    "display_in": "all_editors"
  },
  "colorize_brackets": true,
  "git_panel": {
    "tree_view": true
  },
  "ui_font_family": "IBM Plex Sans",
  "ui_font_weight": 450.0,
  "agent_servers": {
    "codex-acp": {
      "type": "registry"
    }
  },
  "disable_ai": false,
  "icon_theme": "Material Icon Theme",
  "telemetry": {
    "metrics": false
  },

  "buffer_font_family": "Monaspace Neon",
  "buffer_font_weight": 300,
  "ui_font_size": 22.0,
  "buffer_font_size": 20.0,

  "theme": {
    "mode": "system",
    "light": "One Light",
    "dark": "One Dark Pro"
  },
  "experimental.theme_overrides": {
    "syntax": {
      "boolean": {
        "color": "#d19a66"
      },
      "keyword": {
        "font_style": "italic"
      }
    }
  },
  "terminal": {
    "font_family": "Monaspace Neon",
    "font_size": 18,
    "dock": "right"
  },
  "tabs": {
    "file_icons": true
  },
  "lsp": {
    "oxlint": {
      "initialization_options": {
        "settings": {
          "configPath": null,
          "run": "onType",
          "disableNestedConfig": false,
          "fixKind": "safe_fix",
          "unusedDisableDirectives": "deny"
        }
      }
    },
    "oxfmt": {
      "initialization_options": {
        "settings": {
          "fmt.configPath": null,
          "run": "onSave"
        }
      }
    }
  },
  "languages": {
    "OCaml": {
      "formatter": "language_server",
      "format_on_save": "on"
    },
    "CSS": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "GraphQL": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "Handlebars": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "HTML": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "JavaScript": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        },
        {
          "code_action": "source.fixAll.oxc"
        }
      ]
    },
    "JSON": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "JSON5": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "JSONC": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "Less": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "Markdown": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "MDX": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "SCSS": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "TypeScript": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "TSX": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    },
    "YAML": {
      "format_on_save": "on",
      "prettier": {
        "allowed": false
      },
      "formatter": [
        {
          "language_server": {
            "name": "oxfmt"
          }
        }
      ]
    }
  },
  "git": {
    "inline_blame": {
      "min_column": 0,
      "enabled": false
    }
  }
}
```

```json title="keymap.json"
// Zed keymap
//
// For information on binding keys, see the Zed
// documentation: https://zed.dev/docs/key-bindings
//
// To see the default key bindings run `zed: open default keymap`
// from the command palette.
[
  {
    "context": "Editor",
    "bindings": {
      "alt-shift-up": "editor::DuplicateLineUp",
      "alt-shift-down": "editor::DuplicateLineDown",
      "alt-shift-ctrl-up": "editor::AddSelectionAbove",
      "alt-shift-ctrl-down": "editor::AddSelectionBelow"
    }
  }
]
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

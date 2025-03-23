---
title: "OCaml 相關資源設定"
description: "OCaml 相關資源及設定"
tags: 
  - OCaml
---

## Language

- [Standard Lib API 5.3](https://ocaml.org/manual/5.3/api/index.html)
- [OCaml Manual 5.3](https://ocaml.org/manual/5.3/index.html)

## Learning

- [Unix System programming in OCaml](https://ocaml.github.io/ocamlunix/index.html)
- [cs3110](https://cs3110.github.io/textbook/cover.html)

## Books

- [Learn Programming with OCaml](https://usr.lmf.cnrs.fr/lpo/)


## Tools

### ocamlformat

預設 janestreet 但部份會參考[官方](https://ocaml.org/docs/guidelines#formatting-guidelines)建議作調整，由於 ocamlformat 說明相對簡陋，因此需要反覆對照調整確定參數，所以在此紀錄目前理想的設定。

```plaintext title=".ocamlformat"
profile=janestreet
sequence-blank-line=preserve-one
module-item-spacing=preserve
exp-grouping=preserve
```

[測試網址](https://ocamlformat-online-editor.pages.dev/)
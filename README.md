# Dev stack pro Single-page aplikace

## Závislosti

Je třeba mít nainstalované následující programy:

  * [Node.js][node] (^8.11.4)

## Spuštění

**Před prvním spuštení je třeba provést příkaz**

```bash
npm install
```

Pak už jen stačí spustit příkaz

```bash
npm run dev
```

## Vytvoření produkčního balíčku

```bash
npm run build
```

## Vývoj

### i18n - message ID convention
component/_general_.item[.modifier]

#### Examples:
`general.description`
`homepage.title`
`signInForm.usernameError.valueMissing`
`signInForm.usernameError.tooShort`


[node]: https://nodejs.org/en/ "Node.js"

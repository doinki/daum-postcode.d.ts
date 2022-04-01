# daum-postcode.d.ts

## 1. Install

```bash
yarn add -D daum-postcode.d.ts
```

```bash
npm i -D daum-postcode.d.ts
```

## 2. Setting

You can choose between 1 and 2.

### 2.1 Triple-Slash Directives

tsconfig.json

```
{
  ...,
  include: [..., "somewhere/global.d.ts"]
}
```

global.d.ts

```typescript
/// <reference types="daum-postcode.d.ts" />
```

### 2.2 tsconfig.json

```
{
  ...,
  "files": [
    ...,
    "node_modules/daum-postcode.d.ts/daum-postcode.d.ts"
  ]
}
```

or

```
{
  ...,
  "compilerOptions": {
    ...,
    "types": [
      ...,
      "daum-postcode.d.ts"
    ]
  }
}
```

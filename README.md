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

global.d.ts

```typescript
/// <reference types="daum-postcode.d.ts" />
```

### 2.2 tsconfig.json

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

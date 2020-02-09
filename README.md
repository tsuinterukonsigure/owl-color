## OWL-COLOR

> 较为完善的守望先锋联赛队伍配色，包含RGB颜色和Hex两种
>
> 可以用于build和守望先锋联赛相关的项目

<div align="left">
    <img src="https://camo.githubusercontent.com/3ccf4c50a1576b0dd30b286717451fa56b783512/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667">
</div>

---

## Install

```bash
$ npm install owl-color
```

或者是

```bash
$ yarn add owl-color
```

---

## Usage

你可以按照如下方式使用（仅为示例，具体使用方法请阅读**API**部分后按照喜好使用）

```javascript
import chalk from 'chalk'
import {
    getMaincolor,
    getFullName,
    getSeconcolor
} from 'owl-color'

const spark = 'HZS'
const { hex: sparkColorHex } = getMaincolor(spark)
const { hex: sparkNameHex } = getSeconcolor(spark)
const sparkFullName = getFullName(spark)

console.log(chalk.bgHex(sparkColorHex).Hex(sparkNameHex).bold(sparkFullName))
```

该例会在console界面输出白色背景和粉色样式的`'Hangzhou Spark'`。

---

## APIs

### `getAllColors()` => `Object`

返回一个含有全部owl队伍颜色数据的Object，
这个Object的key值为**大写的队伍缩写**。

### `getMaincolor(teamAbbreviation)` => `Object`

参数类型：`string`
需要传入**大写的队伍缩写**作为参数。

返回类型：`Object`
包含了**Hexadecimal Colors Code**和**RGB Color Code**两种取法的队伍主要配色。

*Example:*

```javascript
import {getMaincolor} from 'owl-color'

console.log(getMaincolor('SHD'))
//Output Shanghai Drangon's MainColor code on console.
```

### `getSeconcolor(teamAbbreviation)` => `Object`

参数类型：`string`
需要传入**大写的队伍缩写**作为参数。

返回类型：`Object`
包含了**Hexadecimal Colors Code**和**RGB Color Code**两种取法的队伍次要配色。

*Example:*

```javascript
import {getSeconcolor} from 'owl-color'

console.log(getSeconcolor('SEO'))
//Output Seoul Dynasty's SeconderyColor code on console.
```

### `getColors(teamAbbreviation)` => `Object`

参数类型：`string`
需要传入**大写的队伍缩写**作为参数。

返回类型：`Object`
包含了**Hexadecimal Colors Code**和**RGB Color Code**两种取法的队伍主要配色和次要配色。

*Example:*

```javascript
import {getColors} from 'owl-color'

console.log(getColor('SEO'))
//Output Seoul Dynasty's all colors' code on console.
```

### `getFullName(teamAbbreviation)` => `string`

参数类型：`string`
需要传入**大写的队伍缩写**作为参数。

返回类型：`string`
返回该队伍的**全称**。

*Example:*

```javascript
import {getFullName} from 'owl-color'

console.log(getColor('LDN'))
//Output "London Spitfire" on console.
```

### `getColorList(teamAbbreviation)` => `string[]`

参数类型：`string`
需要传入**大写的队伍缩写**作为参数。

返回类型：`string[]`
返回该队伍所有**配色的名称**。

*Example:*

```javascript
import {getColorList} from 'owl-color'

console.log(getColor('SEO'))
//Output Seoul Dynasty's all colors' name on console.
```

---

## License

MIT © [Yans_ly](https://github.com/tsuinterukonsigure)
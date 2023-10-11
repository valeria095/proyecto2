# Manejo de NPM

<https://semver.org/lang/es/>

> 3.7.2

1. MAYOR => 3
2. MENOR => 7
3. PARCHE => 2

# Para instalar un dependencia (librería) de PROYECTO 
Se va agregar una propieades en package.json => dependencies

<https://www.npmjs.com/package/bootstrap>

```sh
npm i <nombre-de-dependencia>
npm i bootstrap@latest # la última versión de bootstrap
npm i bootstrap@5.0.1 # Va a instalar una versión en especifico
```

# Para instalar una dependencia (librería) de DESARROLLO

```sh
npm i <nombre-de-dependencia> --save-dev # versión de la bandera (flag)
npm i vite@latest -D # versión corta
```

## Para desinstalar una dependencia (librería, biblioteca)

```sh
npm uninstall <nombre-el-paquete>
npm uninstall bootstrap
```

# ¿Qué significan los símbolos en las devDependencies y depedencies?

## = o (sin símbolo)
Congelo la versión actual. Y no se actualizar

## ^ (caret) [acento circunflejo]
Va a congelar solo la versión mayor. Va poder actualizarse a versiones compatibles y parches

## ~ (tilde) [virgurilla]
Va a congelar la versión mayor y menor. Solo se va a poder actualizar los parches. 

# IMPORTANTE: Es que hay varias herramientas para el manejo de dependencias

* npm 
* yarn
* pnpm

**NOTA**: Si empiezo a trabajar un proyecto con npm, no cambio de herramienta durante todo el proceso o ciclo de vida del desarrollo. Y así con yarn y pnpm.

# Para verificar si hay una nueva versión de la librería que tengo.

```sh
npm outdated # Me permite chequear con respecto al repositorio de npmjs, si hay una actualización de las librerías que estoy usando
```






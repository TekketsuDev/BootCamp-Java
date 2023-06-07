# Git Guide

<svg xmlns="http://www.w3.org/2000/svg" width="92pt" height="92pt" viewBox="0 0 92 92"><defs><clipPath id="a"><path d="M0 .113h91.887V92H0Zm0 0"/></clipPath></defs><g clip-path="url(#a)"><path style="stroke:none;fill-rule:nonzero;fill:#f03c2e;fill-opacity:1" d="M90.156 41.965 50.036 1.848a5.918 5.918 0 0 0-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.034 7.034 0 0 1 1.669 7.277l10.187 10.184a7.028 7.028 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.05 7.05 0 0 1-9.965 0 7.044 7.044 0 0 1-1.528-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.06 7.06 0 0 1 2.304-1.539V33.926a7.049 7.049 0 0 1-3.82-9.234L29.242 14.272 1.73 41.777a5.925 5.925 0 0 0 0 8.371L41.852 90.27a5.925 5.925 0 0 0 8.37 0l39.934-39.934a5.925 5.925 0 0 0 0-8.371"/></g></svg>
<br>
<br>
Guia de los primeros pasos para usar Git 
-
<br>

# 📖Tabla de Contenidos

- [⚙️ Setup: Primeros pasos](#%EF%B8%8F-setup-primeros-pasos)
- [👨‍💻 Crear repositorio](#-crear-repositorio)
   - [☁️ Copiar repositorio existente](#%EF%B8%8F-copiar-repositorio-existente)
   - [📟 Crear localmente un repositorio](#-crear-localmente-un-repositorio)
- [📋 Workflow](#-workflow)
  - [📂 Directorios](#-directorios)
  - [🎢 Controlar Cambios](#-controlar-cambios)
  - [🌲 Ramas](#-ramas)
  - [⚙️ Estado](#%EF%B8%8F-estado)

<br>

  # ⚙️ Setup: Primeros pasos
<style>


  button {
    align-items:center;
    margin: 20px;
  }
  .custom-btn {
    width: 110px;
    height: 70px;
    color: #ffff;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
    
  }
  .btn-1 {
    background: rgb(6,14,131);
    background: linear-gradient(0deg, rgba(12,134,131,1) 0%, rgba(12,25,78,0) 100%);
    border: none;
  }
  .btn-1:hover {
    background: rgb(0,3,255);
    background: linear-gradient(0deg, rgba(12,134,131,1) 43%, rgba(12,25,78,0) 100%);
  }

  a, a:hover {
    color:white;
    text-decoration: none;
    font-size: 14px;
  }
  </style>
 Que es git?
 -
 Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.
 <br>
 <br>
 Su propósito es llevar registro de los cambios en archivos de computadora incluyendo coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código.
 <br>
 Estos repositorios locales plenamente funcionales permiten trabajar sin conexión o de forma remota con facilidad.
<br>
<br>
 Para empezar a utilizar Git instalamos globalmente con nuestro sistema operativo correspondiente. Tambien necesitaremos crearnos una cuenta en GitHub 
<br>

<button class="custom-btn btn-1"><a href='https://git-scm.com/download/mac'>Descargar Git - OSX</a></button>
<button class="custom-btn btn-1"><a href='https://gitforwindows.org'>Descargar Git - Windows</a></button>
<button class="custom-btn btn-1"><a href='https://git-scm.com/book/en/v2/Getting-Started-Installing-Git'>Descargar Git - Linux</a></button>
<br>
Para configurar nuestra cuenta utilizaremos los siguientes comandos abriendo git Bash

```shell
  git config --global user.name "NAME"
  git config --global user.email email@example.com
```

  # 👨‍💻 Crear repositorio

Para crear un repositorio podemos hacerlo de distintas maneras.

  ## ☁️ Copiar repositorio existente
Si queremos descargar un repositorio ya existente primero abrimos git bash y introducimos los siguientes comandos
```shell
  git init 
  //Aseguramos primeros que estamos en la carpeta deseada donde queremos copiar los archivos
  //Si añadimos un nombre nos creara una carpeta 

  git clone username@host:/path/to/repository
  //Hacemos una copia local del repositorio

  git remote add origin 
  //Añadimos el repositorio a nuestro repositorio remoto

  git branch -M main
  //Creamos una rama principal desde donde podremos realizar distintas snapshots/versiones de nuestro proyecto
```
·Tambien podemos realizar este proceso haciendo un fork desde el propio GitHub y añadiremos el repositorio a nuestra cuenta.

  ## 📟 Crear localmente un repositorio
Iniciamos el repositorio localmente para luego trabajar con el

  ```shell
  mkdir repo01
  cd repo01/
  $git init
```

  # 📋 Workflow
Para controlar los ficheros tenemos 4 estados posibles:  
--
**·Working Directory:** ficheros existentes localmente en nuestro pc  
**·Staging Area:** archivos listos para ser revisados al ser modificados  
**·Local Repository:** contiene los archivos guardados con sus correspondientes modificaciones, hora de modificacion u otros detalles  
**·Remote Repository:** Este repositorio contine los ficheros en la nube  
<br>
<img src="https://images.viblo.asia/8293dc5c-edbb-483c-a951-386bcfdc354d.png">
<br>
  

  ## 📂 Directorios
  ## 🎢 Controlar Cambios
  ## 🌲 Ramas
  ## ⚙️ Estado
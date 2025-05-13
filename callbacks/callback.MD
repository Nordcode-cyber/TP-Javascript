### ¿Qué es un callback?
Como hemos dicho, las funciones callback no son más que un tipo de funciones que se pasan,
por parámetro a otras funciones. Además, los parámetros de esos callbacks, 
toman un valor especial en el interior de la función.Así que una función que se pasa a otra, 
función como parámetro es una función callback.

### Por qué necesitamos funciones callback?
JavaScript ejecuta el código secuencialmente en orden descendente. Sin embargo, hay algunos casos en los que el código se ejecuta (o debe ejecutarse) después de que ocurra otra cosa y también de forma no secuencial. Esto se llama programación asíncrona.
Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado. Nos ayuda a desarrollar código JavaScript asíncrono y nos mantiene a salvo de problemas y errores.
### Cómo crear un callback
Para entender lo que he explicado arriba, déjame empezar con un ejemplo sencillo. Queremos registrar un mensaje en la consola, pero debe aparecer después de 3 segundos.
```const mensaje = function(){```
    ```console.log("Este mensaje se muestra después de 3 segundos");```
```}```
```setTimeout(mensaje, 3000);```
### Metoo setTimeout
setTimeout", que llama a una función o evalúa una expresión después de un período de tiempo determinado (en milisegundos). 
Así que aquí, la función "mensaje" está siendo llamada después de que hayan pasado 3 segundos. (1 segundo = 1000 milisegundos)
En otras palabras, la función de mensaje está siendo llamada después de que algo sucedió (después de que pasaron 3 segundos para este ejemplo), pero no antes. Así que la función de mensaje es un ejemplo de una función callback.
### Funcion anonima 
Como podemos ver, la función callback aquí no tiene nombre y una definición de función sin nombre en JavaScript se llama "función anónima". Esto hace exactamente la misma tarea que el ejemplo anterior.
```setTimeout(function() { ```
    ```console.log('este mensaje aparece despues de 3 segundos');```
    ```},3000);```
### Callback en forma de función de flecha
Si lo prefiere, también puede escribir la misma función callback como una función de flecha ES6, que es un tipo de 
función más reciente en JavaScript:
```setTimeout(() => { ```
```console.log("Este mensaje se muestra después de 3 segundos");```
```}, 3000);```
### ¿Qué pasa con los eventos?
JavaScript es un lenguaje de programación basado en eventos. También utilizamos funciones callbacks para las declaraciones de eventos. Por ejemplo, digamos que queremos que los usuarios hagan clic en un botón:
```<button id="callback-btn">Haga clic aquí</button>```
```document.queryselector("#callback-btn")```
 ```.addEventListener("click", function() { ```   
 ```     console.log("El usuario ha hecho clic en el botón.");```
```});```



### Set/Map
Los Set en Javascript son estructuras de datos nativas muy interesantes para representar conjuntos de datos. 
La característica principal es que los datos insertados no se pueden repetir.
En los sets se puede incluir cualquier tipo de elemento, sin embargo, existe otra estructura derivada de los Set, 
que veremos más adelante que tiene ciertas diferencias y restricciones.

## Que es un  Set
Como hemos dicho, la característica principal de los conjuntos es que es una estructura que no 
permite valores repetidos, por lo que si intentamos insertar un valor que ya existe, no se insertará de nuevo y, 
por lo tanto, puedes tener la seguridad que un Set nunca tendrá el mismo elemento almacenado, despreocupándote,
 por ejemplo, si tienes que asegurarte de que no existan elementos duplicados, ya que es un caso que no puede ocurrir.

 
## tipo          Propiedad o Método	           Descripción
   Number  |            .size          |	Propiedad que devuelve el número de elementos que tiene el conjunto.
   Set     |         .add(element)     |	Añade un elemento al conjunto (si no está repetido) y devuelve el set. Muta
  Boolean  |         .has(element)     |	Comprueba si element ya existe en el conjunto. Devuelve si existe.
  Boolean  |        .delete(element)   | 	Elimina el element del conjunto. Devuelve si lo eliminó correctamente.
  -------  |         .clear()	       |    Vacía el conjunto completo.
  ## Propiedad size
  
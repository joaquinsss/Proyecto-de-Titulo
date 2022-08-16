# Angular 13 And Firebase

VERSION 1.3.0 MyM


lo gin =

- Inicia sesión con Google
- Iniciar sesión con nombre de usuario/contraseña
- Regístrate con usuario/contraseña
- Recuperar contraseña olvidada
- Enviar correo de verificación a un usuario recién creado
- Impedir que el usuario acceda al panel de la aplicación a menos que se verifique el correo electrónico
- Impedir que el usuario acceda a las páginas internas a menos que el usuario no haya iniciado sesión
- Impedir que el usuario acceda a los componentes de inicio de sesión y registro cuando un usuario ya ha iniciado sesión
- Guarde los datos del usuario en el almacenamiento local cuando el usuario haya iniciado sesión

Menu = dirijase al icono de menu en la esquina superior derecha de la app-web

- El menu se compone por un navbar que nos permite navegar por los diferentes formularios disponibles. tanto mineros como metalurgicos
- Actualmente existe solo un protoripo de formulario el cual  es el componente "cant-explo" que nos permite calcular la cantidad de explosivos necesario par una tronadura.
      

Obtener PDF=

- ingresar al formulario "cant-explo" completar todos los campos correctamente
-para calcular la cantidad de explosivos basta con introducir los datos que se piden en sus unidades correspondientas y darle al boton de obtener resultado.
        -continuo a la anterior se genrara unn pdf con el resultado obtenido.
        - si necesita ayuda puede recurrir al boton de ayuda que dsplegara un glosario de los datos que se piden.
        si desea limpiar los datos existe un boton para ello.


Subir PDF= 
- Primero que todo debe descargar el pdf generado por la App.
- En el formulario donde se trabajo existe un una funcionalidad que perrmite subir archivos a firebase Storage.
- Seleccione el PDF creado anteriormente.
- El archivo se subira automaticamente a firebase Storage.


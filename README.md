# 3316 Atelier

Sitio web estatico para GitHub Pages.

Galeria personal de obra grafica y dibujo, con consulta directa para adquisicion. La pagina no muestra precios publicos ni funciona como tienda.

## Como actualizar obras

1. Editar `script.js`.
2. Cambiar la informacion de cada obra: titulo, tecnica, medidas, anio y disponibilidad.
3. Subir las imagenes nuevas a `assets/images/watermarked/`.
4. Actualizar el nombre del archivo de imagen en cada ficha.

## Ediciones digitales

El sitio puede recibir consultas para archivos digitales sin marca de agua, pero esos archivos no deben subirse al repositorio.

Flujo recomendado:

1. Mostrar en el sitio solo imagenes con marca de agua.
2. Recibir la consulta por Formspree o correo directo.
3. Confirmar disponibilidad, condiciones de uso y pago por conversacion privada.
4. Enviar un link de pago externo.
5. Entregar el archivo limpio por correo o enlace privado despues del pago.

Guarda los archivos sin marca de agua en una carpeta privada fuera de GitHub, por ejemplo Google Drive, OneDrive o un disco local.

## Red 3316

Los compradores pueden enviar una fotografia de como vive la obra en su espacio.

Por ahora esas fotografias se guardan como archivo privado. Si alguna se quiere publicar en el sitio o en redes, primero debe existir autorizacion clara de la persona.

Registro sugerido:

- Nombre
- Correo
- Obra
- Tipo de compra
- Fecha
- Link de pago usado
- Foto recibida
- Descuento o promocion ofrecida
- Permiso de contacto

## Publicacion

El sitio se publica con GitHub Pages desde el archivo `index.html`.

## Contacto y pagos

El flujo recomendado es:

obra -> consultar adquisicion -> conversacion privada -> link de pago externo.

Se pueden usar links externos de Stripe, PayPal, Mercado Pago, Shopify Buy Button o transferencia bancaria, manteniendo la experiencia visual como galeria y no como tienda.

## Seguridad de archivos

No subir a GitHub archivos originales sin marca de agua si se quieren vender o entregar solo despues del pago.

Si estos archivos aparecen en GitHub, conviene borrarlos del repositorio publico:

- `assets/images/obra-3316-01.jpeg`
- `assets/images/obra-3316-02.jpg`
- `assets/images/obra-3316-03.jpeg`
- `assets/images/obra-3316-04.jpeg`
- `assets/images/obra-3316-05.jpg`
- `assets/images/obra-3316-06.jpg`
- `assets/images/gallery-hero.png`

El sitio debe usar solamente rutas dentro de `assets/images/watermarked/` para mostrar obra publica.

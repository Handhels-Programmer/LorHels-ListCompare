# LorHels ListCompare

1. Sistema de Usuarios y Base de Datos
Autenticación Segura: Los usuarios pueden registrarse e iniciar sesión con su correo electrónico y contraseña gracias a Firebase Auth.

Perfil Personalizado: La base de datos guarda automáticamente el historial de las listas a las que el usuario pertenece (Mis Listas) para que no tenga que recordar los códigos.

Colaboración en Tiempo Real: Varias personas pueden estar conectadas a la misma lista usando un "Código" y ver cómo se tachan productos o cambian precios al instante.

Modo Sin Conexión (Offline): La aplicación tiene memoria caché. Si el usuario pierde la señal de internet dentro del supermercado, puede seguir trabajando (aparece un indicador rojo "☁️ Offline") y la app sincronizará todo automáticamente en cuanto regrese la señal.

2. Gestión Inteligente de Compras
Productos Detallados: Puedes añadir nombre, cantidad, unidad de medida (kg, L, uds, etc.), notas, categoría y hasta una URL de imagen para ver la foto del producto.

Navegación por Pestañas (Tabs): Los productos se agrupan automáticamente por su "Categoría" (Lácteos, Limpieza, etc.). Creamos un menú deslizable arriba de la lista para filtrar los pasillos del súper con un solo toque.

Comparador Dinámico: Puedes configurar el nombre y la cantidad de supermercados que quieras comparar (ej. Walmart, Target, Costco). La app divide las casillas de precios automáticamente.

Resumen de Carrito: Un panel que te dice, según el supermercado seleccionado, cuánto dinero llevas en el carrito (Marcados), cuánto te falta por gastar (Faltan) y el total.

3. Modelo de Negocio (SaaS Freemium)
Plan Básico (Gratis): Está limitado a tener máximo 2 listas guardadas, comparar solo 2 supermercados a la vez, y no tiene acceso a funciones avanzadas.

Plan PRO (Premium): Desbloquea listas infinitas, múltiples supermercados, fotos en los artículos y el panel de estadísticas.

Monetización Práctica: Un botón de "Mejorar a PRO" que le da al usuario instrucciones para hacerte una transferencia bancaria y un botón que abre WhatsApp con un mensaje pre-armado para enviarte el comprobante.

4. Panel de Administración Secreto
Tu Centro de Control: Al iniciar sesión con tu correo personal (el del dueño), se desbloquea un botón con un escudo (🛡️).

Gestión de Clientes: Desde ahí puedes ver a todos los usuarios registrados, aprobarles el plan PRO por 30 días, o revocarles el acceso. El sistema calcula los días y les quita el Premium automáticamente cuando se les vence el mes.

5. Herramientas PRO Exclusivas
Estadísticas Avanzadas (📊): Un panel que muestra el progreso de la compra, el ahorro máximo logrado, cuál es el producto que más está afectando el bolsillo y un resumen de gastos dividido por categorías.

Compartir por WhatsApp: Un botón que escanea la lista, ignora lo que ya se compró, agrupa lo que falta por pasillos y arma un mensaje de texto perfecto para enviarlo por WhatsApp con el enlace de la lista.

6. Diseño Moderno (UI/UX)
Está construida con Tailwind CSS y vive en un Modo Oscuro (Dark Mode) exclusivo y permanente, lo que la hace lucir sumamente elegante, como una app nativa moderna. Utiliza iconos de Lucide y FontAwesome para ser súper intuitiva.

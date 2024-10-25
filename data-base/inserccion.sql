-- Agregar categorias

INSERT INTO category (category_name) VALUES ('Accesorios'),('Farmacia'),('Alimento'),('Cuidado'),('Juguetes');

-- Insertar productos 

-- Accesorios
INSERT INTO product (id_category, product_name, description, price, img_url, stock) VALUES
(1, 'Tula Marley', 'Totto Pets - Tula Marley Cargador De Mascotas Verde', 161910, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/567ba1a96672c53c69f5d4fb0aad665c_1688046128.jpg', 10),
(1, 'Protector Silla', 'Totto Pets - Protector Silla Trasera Carro Trip', 161910, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/6b858f3b28905f2dd7601e5f7db59c8a_1671142901.jpg', 10),
(1, 'Comedor Travel', 'Il Can - Comedero Travel Bowl Gris', 88110, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/2bdef82897ca5ee52eeac87db93dabc2_1697232054.jpg', 10),
(1, 'Dispensador comida', 'Dispensador de Comida Inteligente Doble Platón', 376785, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/fdb24e834f161ddf6ea7ae746b5b49cf_1710519475.jpg', 10),
(1, 'Cama Alina', 'La base aerodinámica está rellena de poliéster hilado elástico y proporciona a tu perro un lugar', 260910, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/99d2a4e13a47a0262eb341cfd5f11930_1688135358.jpg', 10),
(1, 'Bolso Mascotas', 'Primavera - Bolso Mascotas 11'' Disney', 164700, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/28c618b230501b9886b7b8f286ad9834_1699990853.jpg', 10),
(1, 'Comedero Anti-Reflujo', 'Comedero Anti-Reflujo con Pesa para Macotas', 131760, 'https://laikapp.s3.amazonaws.com/dev_images_products/cf2e8cc5dbf1f718132f687c7e1b72ec_1717775223.jpg', 10),
(1, 'Coche Premium', 'Calabaza Pets - Coche Premium Deluxe Plegable', 1068210, 'https://laikapp.s3.amazonaws.com/dev_images_products/1a592c37a45a50fe3ef59a5c443168f5_1715196741.jpg', 10),
(1, 'Tula Marley', 'Totto Pets - Tula Marley Cargador De Mascotas Negro', 161910, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/0aa8d631b13558b5d1cbcf0c8fc6bafd_1688046516.jpg', 10),
(1, 'Arnés Impermeable', 'Il Can - Arnés Impermeable Verde Militar y Amarillo Neon', 85500, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/948aea2a7dd6af41325dfac2cf695ee2_1697231000.jpg', 10);

-- Farmacia

INSERT INTO product (id_category, product_name, description, price, img_url, stock) VALUES
(2, 'Promoción NexGard + Pañitos Húmedos', '¡Protege a tu perro y a tu familia con NexGard®!, esta tableta masticable contra parásitos ofrece una solución mensual efectiva y segura para combatir pulgas y garrapatas. ¡Y lo mejor de todo es que a tu perro le encantará!', 50000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/799bad5a3b514f096e69bbc4a7896cd9_1696601684.jpg', 10),
(2, 'Traumeel ad us vet Tabletas', '¿Quieres ver a tu mascota disfrutar de una vida más saludable y activa? Imagina cómo sería si pudieras aliviar su dolor y mejorar su calidad de vida de manera natural. Traumeel ad us vet Tabletas es la respuesta que estabas buscando.', 70000, 'https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/10053_144346_Traumeel_Gotas_1647268581_500x500.jpg', 10),
(2, 'SUPLEMENTO VETERINARIO RENALOF', 'SUPLEMENTO VETERINARIO RENALOF', 97500, 'https://animalsveterinaria.vtexassets.com/arquivos/ids/161256-1200-auto?v=637696532643470000&width=1200&height=auto&aspect=true', 10),
(2, 'Zeel ad us vet Tabletas', '¿Quieres que tu mascota viva una vida sin dolor y llena de vitalidad? ¿Sabías que las enfermedades osteoarticulares crónicas pueden afectar su movilidad y bienestar? Con Zeel ad us vet Tabletas, puedes darle a tu compañero peludo el cuidado que se merece.', 137500, 'https://animalsveterinaria.vtexassets.com/arquivos/ids/163334-1200-auto?v=638138007060500000&width=1200&height=auto&aspect=true', 10),
(2, 'Esencia Floral Stress', '¿Quieres ayudar a tu mascota a enfrentar los desafíos emocionales con una solución natural y armonizadora? Introducimos EF STRESS SPRAY 250ML de Magnovet, exclusivamente en Animal''s Veterinaria, diseñado para tranquilizar a tu compañero peludo o emplumado. Este spray vibracional de esencias florales, no solo modula los estados emocionales sino que también armoniza el campo energético de tu mascota, brindando un refugio de paz en momentos de cambio o enfermedad.', 18500, 'https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/9623_160560_Esencia_Floral_Paz_Y_Calma_1652908396_500x500.jpg', 10),
(2, 'Suplemento Alimenticio', 'SUPLEMENTO ALIMENTICIO CONDROMEG', 57500, 'https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/80e3b6178319591c690052e94be3c811_1690404717.jpg', 10),
(2, 'CUTAMYCON VF', '¿Sabías que la solución para esas molestas afecciones de piel en tus animales está a solo un clic de distancia? En Animal''s Veterinaria, tu tienda de confianza, te traemos la revolución dermatológica: CUTAMYCON VF. Esta no es una crema cualquiera, es la aliada perfecta que has estado buscando para tus bovinos, equinos, perros y gatos.', 18200, 'https://animalsveterinaria.vtexassets.com/arquivos/ids/163035-1200-auto?v=638103677288670000&width=1200&height=auto&aspect=true', 10),
(2, 'Previcox', 'Antiinflamatorio no esteroideo (AINE) para el alivio del dolor y de la inflamación asociados', 66600, 'https://animalsveterinaria.vtexassets.com/arquivos/ids/163228-1200-auto?v=638132091866900000&width=1200&height=auto&aspect=true', 10),
(2, 'Previcox Dog S', '¿Quieres que tu perro viva sin dolor e inflamación, disfrutando al máximo cada día? ¡Tienes en tus manos la solución! En Animal''s Veterinaria presentamos el PREVICOX Dog S. Diseñado específicamente para nuestros amigos caninos, este producto es la respuesta definitiva a esas molestias que impiden que tu peludo compañero disfrute de una vida plena y feliz.', 76000, 'https://animalsveterinaria.vtexassets.com/arquivos/ids/163228-1200-auto?v=638132091866900000&width=1200&height=auto&aspect=true', 10),
(2, 'ENGYSTOL', 'ENGYSTOL', 82400, 'https://animalsveterinaria.vtexassets.com/arquivos/ids/157559-1200-auto?v=638040558526300000&width=1200&height=auto&aspect=true', 10);

-- Alimento

INSERT INTO product (id_category, product_name, description, price, img_url, stock) VALUES
(3, 'Whole Barf', 'Alimento Crudo Para Perro Whole Barf Tasty Tilapia - 500 Gr', 5200, 'https://puppiscolombia.vteximg.com.br/arquivos/ids/181879-150-150/alimento-crudo-para-perro-whole-barf-tasty-tilapia-1.png?v=637914385798970000', 10),
(3, 'Agility', 'Alimento Para Perro Agility Gold Pequeños Adultos Piel - 1.5 Kg', 156510, 'https://puppiscolombia.vteximg.com.br/arquivos/ids/185225-210-210/agilitygoldfront.png?v=638071491297230000', 10),
(3, 'Pixie', 'Alimento Húmedo Para Perro Pixie Dieta De Pollo Al Horno - 500 Gr', 10900, 'https://puppiscolombia.vteximg.com.br/arquivos/ids/183185-1000-1000/7709376807642.png?v=637970528315700000', 10),
(3, 'Chunky', 'Alimento Para Perro Chunky Adulto Nuggets Pollo - 2 kg', 18900, 'https://puppiscolombia.vteximg.com.br/arquivos/ids/166729-1000-1000/EAN-7707205156855.jpg?v=637353519327230000', 10),
(3, 'Wow Can', 'Alimento Húmedo Para Perro Pouch Wow Can Sabor Pollo - 300 Gr', 6000, 'https://puppiscolombia.vteximg.com.br/arquivos/ids/176738-1000-1000/wow-can-pollo.png?v=637692156538100000', 10),
(3, 'Felix', 'Alimento Húmedo Para Gato Felix Classic Atún - 85 Gr', 3150, 'https://puppiscolombia.vteximg.com.br/arquivos/ids/169911-1000-1000/7501072209801_FX_ATUNSALSA_Pouch_85g_F.png?v=637453773325630000', 10),
(3, 'Max Cat', 'Alimento Para Gato Max Adultos Pollo Y Arroz - 1 Kg', 28900, 'https://puppiscolombia.vteximg.com.br/arquivos/ids/158407-1000-1000/max-cat-p-line-adulto-frango-e-arroz-101-kg-940259b5e638ce97bc1de10876a4e7e6.jpg?v=636937257056570000', 10),
(3, 'Orijen', 'Alimento Para Gato Orijen Original Cat - 1.8 Kg', 158900, 'https://puppiscolombia.vteximg.com.br/arquivos/ids/184763-1000-1000/ACANA.png?v=638043017074200000', 10),
(3, 'Fancy Feast', 'Alimento Húmedo Gatofancy Feast Mousse Pescado Y Camarón - 3 Onzas', 5700, 'https://puppiscolombia.vteximg.com.br/arquivos/ids/161090-150-150/_59A1523.jpg?v=637274294096400000', 10),
(3, 'BR Cat', 'Alimento Para Gato BR Cat Castrados - 1 Kg', 30900, 'https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/ba528f6232e621530cc5d058b6e837dc_1691700604.jpg', 10);

-- Cuidado e higiene

INSERT INTO product (id_category, product_name, description, price, img_url, stock) VALUES
(4, 'Shampoo Antipulgas', 'CanAmor - Shampoo contra pulgas', 24500, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/27976_Shampoo_CanAmor_Pelo_Claro_1611856438_2048x2048.jpg', 10),
(4, 'Talco Desodorante', 'CanAmor - Talco baño seco', 20600, 'https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/3738_36200_TALCO_CANAMOR_DESODORANTE_1609619051_213x278.png', 10),
(4, 'Pañitos humedos', 'Petys - Pañitos humeros aroma lavanda', 13000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/b33b8ed35d344c55f2c5e093e4a4f763_1675978521.jpg', 10),
(4, 'Jabon', 'Allegry Pets - Jabon para el pelo de tu mascota', 18000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/b29bc43a0b3a1f862b7a4198ee4560ab_1705697469.jpg', 10),
(4, 'Kit oral', 'Cuida los dientes de tu mascota', 129000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/16982_KIT_FRESH_BREATH_DE_CUIDADO_ORAL_PARA_PERRO_ADULTO_PEQUE%C3%91O_1600643438_500x500.jpg', 10),
(4, 'Perfume', 'CanAmor - perfume para perros', 25000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/23702_36498_Perfume_Canamor_Perros_1609942816_213x278.png', 10),
(4, 'Cepillo peinar', 'Peina a tu mascota', 21700, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/10213_100983_Cepillo_Lujo_1623630290_500x500.jpeg', 10),
(4, 'Bolsa repuesto', 'Repuesto de bolsas para tu mascota', 10000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/80342_Pet_Spa___Repuesto_Tradicional_Bolsa_1658845155_0_500x500.jpg', 10),
(4, 'Dispensador bolsas', 'Dispensador para las bolsas de tu mascota', 25000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/b318dc6011436767ff3a0665472bfb59_1695411124.jpg', 10),
(4, 'Pañal', 'Pañal para perros tapete entrenador', 25500, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/3604_169693_Argos___Pa__al_Para_Perro_Tapete_Entrenador_1657732911_500x500.jpg', 10);

-- Juguetes

INSERT INTO product (id_category, product_name, description, price, img_url, stock) VALUES
(5, 'Vara Peces Con Láser', 'El KONG Láser Teaser es el último láser interactivo dos en uno disfrazado de juguete teaser. El atractivo movimiento del colorido teaser atrae a los gatos, mientras que el impredecible movimiento del láser fomenta el juego activo y la diversión duradera. Medidas: 49 x 9.6 x 5 cm.', 51500, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/16883_KONG_GATO_BARA_PECES_CON_LASER_1600231636_225x225.jpg', 10),
(5, 'Pelota Metálica con Ratón', 'Pelota interactiva metálica con aberturas para que tu gato se desestrese y juegue todo el día. Tamaño de la mascota: Todos los Tamaños. Etapa de la vida: Todas las Edades.', 4000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/26adfcf093d2959cd8693c8c34c8a4d2_1710856102.jpg', 10),
(5, 'Rascador Para Gato', 'Una manera eficaz de mantener alejado de los muebles: este rascador viene con un poste rascador totalmente envuelto y la tabla rascadora permite que tus felinos rayen y afilen sus garras desde cualquier ángulo. Medidas: Alto 52cm, Ancho 40cm, Fondo 40cm.', 78000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/e8c82fa0008a0336b0a0db56c6cd1031_1688662434.jpg', 10),
(5, 'Rascador Esfera Para Gato', 'Rascadera con una esfera de fique que gira atrayendo la atención del gato. Esfera giratoria en fique de 6 mm de diámetro, base en madera cubierta con alfombra. Medidas: 24x33x35 cm.', 138000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/d6f8946fd63823beca8988ee1f853c08_1698758468.jpg', 10),
(5, 'Tumblr para Gato', 'Juguete interactivo para gatos de todos los tamaños, dispensador de comida y ajustable. Ayuda al desarrollo físico y mental de tu gato.', 33000, 'https://laikapp.s3.amazonaws.com/dev_images_products/c60f4e4f7b55009cacf80358a59f4e8c_1717773956.jpg', 10),
(5, 'Lazo Elástico Con Aro Mordedor', 'Bungee Puppy es un juguete de halar elástico ideal para perros destructores. Incluye un aro en caucho natural super resistente.', 30000, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/e7b0aa50730cb10d9b07a85a43fe7082_1707860807.jpg', 10),
(5, 'Pelota - Let\'s Play', 'Pelota en goma, completamente maciza con textura en forma de huella. Pelota de alta resistencia para razas pequeñas.', 15500, 'https://laika.com.co/cdn-cgi/image/fit=scale-down,width=250,format=auto,quality=80,onerror=redirect/https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/de1d295d34182828d3745be12422f98e_1702922110.jpg', 10),
(5, 'Aro de Goma', 'Juguete aro de goma, que hará que tu amigo perro pase horas entretenido. Resistente y duradera, ideal para juegos interactivos.', 20750, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/729b86bef1a86b6616e236687561111d_1710789638.jpg', 10),
(5, 'Pelota Fuga de Comida', 'Divertido juguete en colores surtidos. Podrá pasar horas de diversión con este juguete diseñado especialmente para nuestro querido peludo.', 11500, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/79301f2d685319576cf69e644aea2113_1710854375.jpg', 10),
(5, 'Hueso Plástico Nudo', 'Hueso plástico nudo argos normal, juguete en forma de hueso hecho de goma. Resistente y de primera calidad.', 19700, 'https://d23qt3x1ychzdy.cloudfront.net/dev_images_products/11054_161627_Hueso_Pl__stico_Nudo_Argos_1653669156_500x500.png', 10);

-- Insertar usuarios

INSERT INTO users (name, last_name, address, email, dog, cat) VALUES 
('Carolina','Lopez','cra 1 #2b-3','carolina@gmail.com',true,true),
('Jesneth','Torres','cra 3 #5b-3','jesneth@gmail.com',true,true),
('Jonathan','Lopez','cra 4 #2b-3','jonathan@gmail.com',true,false),
('Tatiana','Campos','cra 5 #2b-3','tatiana@gmail.com',true,false),
('Walter','Daza','cra 6 #2b-3','walter@gmail.com',false,false);

-- Insertar favoritos

INSERT INTO favorites (id_user, id_product) values 
(1,2),(1,45),(1,2),(2,2),(3,2),(3,18),(4,2),(5,28),(5,2);

-- Insertar carrito de compras

INSERT INTO shopping_cart (id_user, id_product, quantity) VALUES
(1, 27, 2),(1, 48, 1),(1, 45, 2),(2, 5, 2),(2, 45, 1),(3, 5, 1),(3, 4, 1),(4, 45, 1),(5, 15, 1),(5, 42, 1);

-- insertar mis compras y detalle compra

INSERT INTO my_shopping (id_factura, id_user, order_date, delivery_date, state, delivery_address, total) VALUES
(1, 1, '2024-10-01', '2024-10-05', 'Entregado', 'Calle 123, Bogota', 66000),
(2, 2, '2024-10-02', '2024-10-06', 'Entregado', 'Avenida 456, Soacha', 485730),
(3, 3, '2024-10-03', '2024-10-07', 'Entregado', 'Calle 789, Cali', 140000),
(4, 4, '2024-10-04', '2024-10-08', 'Entregado', 'Carrera 321, Bogota', 300000),
(5, 5, '2024-10-05', '2024-10-09', 'Entregado', 'Calle 654, Cali', 85500);

INSERT INTO detail_shopping (id_my_shopping, id_product, quantity, unit_price) VALUES
(1, 45, 2, 33000),
(2, 5, 1, 260910),
(3, 2, 3, 161910),
(4, 12, 2, 70000),
(5, 10, 1, 85500);

-- Insertar adopciones

INSERT INTO adoptions (img1, img2, img3, name, species, gender, age, breed, conditions, description) VALUES
('https://img.freepik.com/foto-gratis/hermoso-perro-escuchando-mirando-arriba_23-2149448210.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540',
 'https://img.freepik.com/foto-gratis/entrenador-perros-al-aire-libre-su-perro-sesion_23-2149448251.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540',
 'https://img.freepik.com/foto-gratis/hermoso-perro-escuchando-mirando-arriba_23-2149448212.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540',
 'Zeus',
 'Canino',
 'Macho',
 3,
 'Criollo, American bully',
 'Ninguna',
 'Este es Zeus, un amigo tan especial que requiere los mejores cuidados. Es muy activo, muy dócil y juguetón. Es un verdadero compañero que adora la compañía de los niños y siempre está listo para jugar.<br><br>Nuestro querido Zeus fue rescatado en 2022 y ha estado esperando una buena familia que le dé todo el amor que necesita. Con su ternura y energía, seguro llenará tu hogar de alegría.'),

('https://img.freepik.com/foto-gratis/retrato-perro-disfraz-halloween_329181-16984.jpg?t=st=1729527906~exp=1729531506~hmac=5f3147d9a26345b9b9a0cca0d08eaee3aa90426f3264cd70df3f176a4f776054&w=360',
 'https://img.freepik.com/foto-gratis/retrato-perro-negro-mirando-arriba_329181-17013.jpg?t=st=1729526150~exp=1729529750~hmac=f7b1fb56d0d4257c972c8e8aba88ca21d82532e92d8412a9deba6860d33224cd&w=360',
 'https://img.freepik.com/foto-gratis/retrato-perro-negro-halo-halloween_329181-17054.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540',
 'Matilda',
 'Canino',
 'Hembra',
 8,
 'Criollo',
 'Otitis',
 'Esta es Matilda, una perrita encantadora que busca un hogar lleno de amor. A pesar de sus 8 años, Matilda es muy cariñosa y le encanta disfrutar de paseos tranquilos. Es una excelente compañía para quienes buscan un amigo leal y tierno.<br><br> Matilda fue rescatada recientemente y, aunque enfrenta un pequeño problema de otitis, su espíritu sigue siendo fuerte. Está lista para compartir su cariño con una familia que le dé la atención que necesita.'),

('https://img.freepik.com/foto-gratis/caniche-alto-angulo-sentado-regazo-propietario_23-2148415182.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540',
 'https://img.freepik.com/foto-gratis/perro-feliz-divirtiendose-parque_23-2147997358.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540',
 'https://img.freepik.com/foto-gratis/perro-feliz-divirtiendose-parque_23-2147997362.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540',
 'Bruno',
 'Canino',
 'Macho',
 5,
 'French poodle',
 'Ninguna',
 'Este es Bruno, un encantador perrito que busca un hogar donde se sienta seguro. A sus 5 años, es un compañero leal y lleno de energía. Sin embargo, es un poco nervioso con los niños, por lo que se recomienda un hogar sin pequeños o con adultos que puedan ayudarlo a adaptarse.<br><br>Rescatado recientemente, Bruno está listo para encontrar una familia que lo quiera y le dé el espacio que necesita para prosperar. Su ternura y lealtad seguramente llenarán tu hogar de alegría.'),

('https://img.freepik.com/foto-gratis/disparo-vertical-lindo-perro-teddy-roosevelt-terrier-sentado-cesped_181624-15721.jpg?t=st=1729530255~exp=1729533855~hmac=a600bc448b14b0b6d6d8e785a32b980179044513c45ad23dd1060fef958e231a&w=360',
 'https://img.freepik.com/foto-gratis/disparo-vertical-lindo-perro-teddy-roosevelt-terrier-sentado-cesped_181624-15272.jpg?t=st=1729530250~exp=1729533850~hmac=66e3640673b621075f13869c17134c689d553cfbb31425fec89fcc52cf978013&w=360',
 'https://img.freepik.com/foto-gratis/disparo-vertical-lindo-perro-teddy-roosevelt-terrier-sentado-cesped_181624-15272.jpg?t=st=1729530250~exp=1729533850~hmac=66e3640673b621075f13869c17134c689d553cfbb31425fec89fcc52cf978013&w=360',
 'Manolo',
 'Canino',
 'Macho',
 9,
 'Criollo',
 'Ninguna',
 'Este es Manolo, un encantador perrito de 9 años que busca un hogar cálido y amoroso. Ha pasado casi toda su vida en la calle, enfrentando desafíos, hasta que finalmente fue rescatado y ahora está listo para disfrutar de su merecido descanso.<br><br>Es muy dormilón por su edad y le encanta estar acompañado, así que buscará la compañía de su familia para sentirse seguro y amado. Manolo es un perro muy consentido, listo para compartir su cariño y alegrar tu hogar. ¡Permítele convertirse en tu fiel compañero!'),

('https://img.freepik.com/fotos-premium/disparo-selectivo-perro-hibrido-raza-negra-martingala-roja_181624-55175.jpg?w=360',
 'https://img.freepik.com/fotos-premium/primer-plano-lindo-perro-staffordshire-bull-terrier-collar-rojo-acostado-sobre-guijarros_210726-340.jpg?w=360',
 'https://img.freepik.com/foto-gratis/disparo-selectivo-perro-hibrido-raza-negra-martingala-roja_181624-55244.jpg?t=st=1729529937~exp=1729533537~hmac=1f34573af4d9cc72d29f1e327073aba3244b1149c0a81a58f669af57c51cc464&w=740',
 'Deisy',
 'Canino',
 'Hembra',
 8,
 'Criollo',
 'Ninguna',
 'Esta es Deisy, una dulce perrita de 8 años que busca un hogar donde pueda sentirse amada y tranquila. A pesar de su edad, sigue siendo un compañero cariñoso y juguetón. Es una perra sociable y se lleva bien con otros perros, lo que la convierte en una excelente compañera para aquellos que ya tienen mascotas en casa.<br><br>Rescatada recientemente, Deisy está lista para encontrar una familia que le brinde el cariño y la atención que merece. Su ternura y su energía suave llenarán tu hogar de amor y calidez. ¡No dudes en darle una oportunidad!.'),
(
    "https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-sobre-fondo-blanco-estudio_155003-22073.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/gato-sobre-fondo-blanco_155003-20496.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/gato-sobre-fondo-blanco_155003-15385.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540",
    "Ariana",
    "Felino",
    "Hembra",
    0,
    "Criollo",
    "Ninguna",
    "Esta es Ariana, una adorable gatita de medio año que está lista para encontrar su hogar definitivo. A pesar de su corta edad, ya muestra una personalidad juguetona y curiosa. Fue encontrada en la calle, pero ahora está lista para recibir todo el amor y cuidado que se merece. <br><br>Ariana es una felina muy sociable que disfruta de la compañía de las personas y le encanta jugar con cualquier cosa que encuentre a su alrededor. Esta dulce gatita seguramente traerá alegría y ternura a tu hogar, convirtiéndose en la compañera perfecta."
),
(
    "https://img.freepik.com/foto-gratis/perro-relajando-naturaleza_23-2148199178.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/retrato-perro-labrador-negro-contra-telon-fondo-oscuro_155003-8737.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/retrato-perro-boca-abierta_23-2147902046.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "Chocolate",
    "Canino",
    "Macho",
    2,
    "Labrador Retriever",
    "Ninguna",
    "Este es Manolo, un energético labrador retriever de 2 años que está buscando un hogar lleno de amor y diversión. Fue recogido en pésimas condiciones, pero después de su rehabilitación, ha florecido en un perrito obediente y cariñoso.<br><br>Su entusiasmo por la vida se nota, especialmente cuando va al parque, donde corre y juega con alegría. Manolo está en perfectas condiciones de salud y listo para encontrar una familia. Le encanta la compañía de otros perros y humanos, lo que lo convierte en un compañero ideal para paseos y juegos."
),
(
    "https://img.freepik.com/foto-gratis/acercamiento-al-estilo-vida-mascotas_23-2149180532.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/acercamiento-al-estilo-vida-mascotas_23-2149180531.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/acercamiento-al-estilo-vida-mascotas_23-2149180529.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540",
    "Rita",
    "Felino",
    "Hembra",
    1,
    "Criollo",
    "Ninguna",
    "Esta es Rita, una gatita de 1 año que busca un hogar cariñoso. Es muy dormilona y disfruta acurrucarse, pero también le gusta jugar e interactuar con perros, así que sería una gran compañera para los que ya tienen mascotas. <br><br> Su familia actual no puede tenerla, así que está lista para encontrar un nuevo hogar donde la cuiden y le den el amor que necesita. Su dulzura y cariño llenarán tu hogar de alegría. ¡Dale una oportunidad a Rita!."
),
(
    "https://img.freepik.com/foto-gratis/cerrar-lindo-gato-interior_23-2148882585.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/hermoso-gato-acostado-sobre-almohada_23-2148882583.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/lindo-gato-sentado-silla_23-2148882589.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540",
    "Roki",
    "Felino",
    "Macho",
    6,
    "Criollo",
    "Ninguna",
    "Este es Roki, un encantador gatito de 6 años que busca un hogar donde se sienta cómodo. Es un felino independiente que no disfruta de que lo miman demasiado, prefiriendo recibir caricias solo cuando él lo desea. <br><br> Sin condiciones especiales, Roki está listo para encontrar una familia que respete su espacio y le brinde el cariño que le gusta. Su carácter único y su presencia segura harán que tu hogar sea un lugar especial. ¡Dale la oportunidad de conocerte y formar parte de tu vida!."
),
(
    "https://img.freepik.com/foto-gratis/lindo-gato-piso_144627-7871.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/lindo-gato-piso_144627-7876.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/lindo-gato-peludo_144627-7872.jpg?t=st=1729528842~exp=1729532442~hmac=9a66a13519a7d9909201ff6b73ddcee36d05f364f61fa96629aa7dbbc5e5a715&w=360",
    "Garfiel",
    "Felino",
    "Macho",
    3,
    "Criollo",
    "Dermatitis",
    "Este es Garfiel, un cariñoso gatito de 3 años que busca un hogar lleno de amor. Es muy consentido y le encanta dormir, pasando la mayor parte del día acurrucado y disfrutando de la tranquilidad. <br><br> Aunque tiene dermatitis, eso no le impide ser un compañero dulce y juguetón. Garfiel está listo para encontrar una familia que le brinde los cuidados especiales que necesita y, a cambio, llenará tu hogar de cariño y alegría. ¡Dale la oportunidad de ser parte de tu vida!."
),
(
    "https://img.freepik.com/foto-gratis/perro-pequeno-siendo-adorable-estudio_23-2149016882.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "https://img.freepik.com/psd-gratis/lindo-perro-retrato-aislado_23-2150194076.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "https://img.freepik.com/psd-gratis/lindo-perro-retrato-aislado_23-2150194039.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "Lucas",
    "Canino",
    "Macho",
    6,
    "Criollo",
    "Ninguna",
    "Este es Lucas, un cariñoso perrito criollo de 6 años que está en busca de un hogar amoroso. Es un compañero muy protector, siempre alerta y listo para cuidar de su familia. A pesar de su naturaleza vigilante, Lucas es juguetón y disfruta pasar tiempo jugando y explorando. <br><br>Le encanta la compañía de gatos y niños, lo que lo convierte en un excelente amigo para todos en el hogar. Lucas es ideal para una familia que valore tanto su lado protector como su espíritu juguetón. Con su lealtad y alegría, seguramente llenará tu hogar de amor y diversión."
),
(
    "https://img.freepik.com/foto-gratis/perro-lindo-alto-angulo-al-aire-libre_23-2148699615.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/perro-sentado-cesped_23-2148144457.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/manos-primer-plano-sosteniendo-perro-sonriente_23-2148699695.jpg?t=st=1729527694~exp=1729531294~hmac=1155e17ff5aa3761dcd67ae151b0ec116243761806fc688a779fe8d2e0471c7b&w=740",
    "Antonia",
    "Canino",
    "Hembra",
    2,
    "Criollo",
    "Ninguna",
    "Esta es Antonia, una perrita de 2 años que busca un hogar lleno de diversión. Le encanta jugar, especialmente con discos para saltar, y no hay nada que disfrute más que un buen rato de actividad. Sin embargo, no le gusta la compañía de otros perros, así que sería ideal para una familia que busque una mascota única. Antonia está lista para encontrar un hogar que le dé amor y le permita disfrutar de sus juegos. ¡Dale la oportunidad de compartir su alegría contigo!"
),
(
    "https://img.freepik.com/foto-gratis/retrato-gato-hermoso-cerca_23-2149214422.jpg?t=st=1729530544~exp=1729534144~hmac=1b346c5a318ef83aacc5f50bbe9f1595bba68c94cb100c830408b6d357a94962&w=360",
    "https://img.freepik.com/foto-gratis/retrato-gato-hermoso-cerca_23-2149214411.jpg?t=st=1729530513~exp=1729534113~hmac=62195bdd276b758a81d10608174ac24824b510a779890bfd4594b496a38b8794&w=360",
    "https://img.freepik.com/foto-gratis/retrato-gato-hermoso-cerca_23-2149214412.jpg?t=st=1729530370~exp=1729533970~hmac=c4becfa9c787fb95c77337c207bf894b23b8fac7fc010fb1e519fc7872b8dceb&w=360",
    "Danna",
    "Felino",
    "Hembra",
    3,
    "Criollo",
    "Ninguna",
    "Esta es Danna, una hermosa gatita criolla de 3 años que busca un hogar acogedor. Es una felina independiente que disfruta de su espacio y, por lo tanto, no le gustan los perros. Danna es cariñosa y le encanta explorar su entorno, así que sería ideal para un hogar tranquilo donde pueda sentirse cómoda. Si buscas una compañera que valore su independencia y te brinde cariño a su manera, ¡Danna es la gatita perfecta para ti!"
),
(
    "https://img.freepik.com/foto-gratis/vista-adorable-perro-chihuahua-casa_23-2149880060.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/retrato-perro-chihuahua-lindo_23-2149880011.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540&semt=ais_hybrid",
    "https://img.freepik.com/foto-gratis/retrato-perro-chihuahua-lindo_23-2149880010.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540&semt=ais_hybrid",
    "Tony",
    "Canino",
    "Macho",
    3,
    "Chihuahua",
    "Queratoconjuntivitis",
    "Este es Tony, un adorable chihuahua de 3 años que busca un hogar lleno de tranquilidad. Fue rescatado de un criadero, lo que lo ha hecho un poco asustadizo. Además, padece queratoconjuntivitis, por lo que necesita cuidados especiales para mantener sus ojos limpios y saludables. Es ideal que encuentre un hogar tranquilo y amoroso, preferiblemente sin niños, donde pueda sentirse seguro y cómodo. A pesar de su timidez, Tony tiene un corazón cariñoso y está listo para encontrar una familia que le brinde el amor y la paciencia que necesita."
),
(
    "https://img.freepik.com/foto-gratis/disparo-vertical-shih-poo-sentado-casa_181624-34995.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/disparo-vertical-shih-poo-sentado-casa_181624-45577.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "https://img.freepik.com/foto-gratis/disparo-vertical-shih-poo-sentado-casa_181624-44413.jpg?uid=R165272234&ga=GA1.2.1348421391.1729213540",
    "Toby",
    "Canino",
    "Macho",
    6,
    "Zuchon",
    "Dermatis",
    "Este es Toby, un dulce perrito de 6 años que busca un hogar lleno de tranquilidad. Antes de ser rescatado, sufrió maltrato, lo que lo ha dejado un poco asustado y le hace preferir un ambiente calmado donde se sienta seguro. Toby es muy dócil y cariñoso, pero también padece dermatitis, por lo que necesita cuidados especiales para mantener su piel saludable. Si le brindas el amor y la atención que necesita, Toby será un compañero leal y lleno de ternura. ¡Permítele ser parte de tu familia y darle la vida que merece!"
),
(
    "https://img.freepik.com/foto-gratis/lindo-perro-gafas-sol-sentado_23-2148332389.jpg?t=st=1729529625~exp=1729533225~hmac=88ee130a344e4343542acd99a43f9fb78857dc07438e4416d0c0a4460a063335&w=740",
    "https://img.freepik.com/foto-gratis/perro-parque-jugando-dueno_23-2148332381.jpg?t=st=1729529468~exp=1729533068~hmac=9185752568d68dd909687268632508ef0f2b41d7784788d2e2f2642443937b83&w=740",
    "https://img.freepik.com/fotos-premium/lindo-perro-jugando-amigo-gato_23-2148332380.jpg?w=360",
    "Mailo",
    "Canino",
    "Macho",
    1,
    "Jack Russell terrier",
    "Ninguna",
    "Este es Mailo, un enérgico perrito de 1 año que busca un hogar activo. Es un perrito muy juguetón, ideal para deportistas que disfrutan de la aventura y el ejercicio. Le encanta jugar con todo lo que encuentra y también es muy sociable, incluso le gustan los gatos. Mailo está listo para encontrar una familia que comparta su energía y entusiasmo por la vida. ¡No te pierdas la oportunidad de tener a este pequeño compañero lleno de vitalidad!"
);

-- Insertar eventos

INSERT INTO events (name, img, date, hour, city, address, description_text) VALUES
(
    "Jornada de Vacunación",
    "../img/vacunacion.png",
    "2024-11-24",
    "10:00:00",
    "Bogotá",
    "Parque Buenavista",
    "Este es el momento perfecto para asegurar la salud de tus peludos. Trae a tus mascotas y permíteles recibir sus vacunas en un ambiente amigable y seguro.<br><br>Además, contaremos con la presencia de vendedores locales que ofrecerán una variedad de productos y servicios para consentir a tus animales.<br><br>Lo mejor de todo es que una parte de lo recaudado irá destinada a la Fundación Huellitas, que trabaja incansablemente por el bienestar de los animales.<br><br>¡No te lo pierdas! Ven, cuida de tu mascota y apoya una noble causa."
),
(
    "¡Feria de Adopción Animal!",
    "https://img.freepik.com/foto-gratis/lindo-perro-jugando-mujer-refugio-adopcion_23-2148682996.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540&semt=ais_hybrid",
    "2024-11-16",
    "10:00:00",
    "Bogotá",
    "Parque Simon Bolivar",
    "Te invitamos a un evento único donde podrás encontrar a tu compañero perfecto. Esta feria es la oportunidad ideal para conocer a perros y gatos que esperan un hogar lleno de amor.<br><br>A lo largo del día, ofreceremos actividades educativas sobre el bienestar animal, así como consejos prácticos para el cuidado de tus mascotas. Veterinarios y expertos estarán disponibles para resolver tus dudas y brindarte información valiosa.<br><br>¡No dejes pasar la oportunidad de cambiar la vida de un animal y hacer una gran diferencia! Ven y únete a nosotros en este hermoso evento."
),
(
    "Feria Gastronómica",
    "../img/feriagastronomica.png",
    "2024-11-29",
    "19:00:00",
    "Bogotá",
    "Corferias",
    "Ven y disfruta de una deliciosa variedad de comidas y bebidas, ¡tanto para ti como para tus mascotas! Esta feria no solo será un festín para tus sentidos, sino que también tiene un propósito noble.<br><br>Todo lo recaudado se destinará a una jornada de esterilización en los barrios con mayor cantidad de animales en abandono y donde muchas personas no pueden costear estos servicios. Tu participación hará una gran diferencia en la vida de muchos animales y sus dueños."
),
(
    "Concierto Benéfico",
    "https://example.com/concierto.png",
    "2024-12-05",
    "18:00:00",
    "Bogotá",
    "Auditorio Nacional",
    "Únete a nosotros para una noche de música y solidaridad. Disfruta de actuaciones en vivo mientras apoyas a refugios de animales locales. Los fondos recaudados irán destinados a ayudar a mascotas en situación de abandono."
),
(
    "Taller de Cuidado de Mascotas",
    "https://example.com/taller.png",
    "2024-12-12",
    "11:00:00",
    "Bogotá",
    "Centro Cultural",
    "Participa en nuestro taller sobre el cuidado y la educación de mascotas. Aprende de expertos sobre cómo mejorar la calidad de vida de tus compañeros peludos. ¡Un evento educativo y entretenido para toda la familia!"
);

-- Insertar educacion

INSERT INTO education (title, focus, img_education, description) VALUES
('¿Es bueno dormir con mi mascota?', 'perro', 'https://img.freepik.com/fotos-premium/seccion-media-hombre-durmiendo-perro_1048944-30888310.jpg?w=740', 'Dormir con tu mascota puede tener tanto beneficios como consideraciones a tener en cuenta. Aquí te presentamos algunos puntos clave para ayudarte a decidir:<br><br>• Beneficios emocionales: La cercanía con tu mascota puede proporcionar una sensación de confort y seguridad, ayudando a reducir el estrés y la ansiedad.<br>• Vínculo afectivo: Compartir la cama puede fortalecer el vínculo entre tú y tu mascota, promoviendo una relación más cercana.<br>• Calor y compañía: La presencia de tu mascota puede ofrecer calidez y compañía durante la noche, haciendo que el sueño sea más placentero.<br>• Consideraciones de higiene: Ten en cuenta la higiene. Asegúrate de que tu mascota esté limpia y libre de pulgas o parásitos para mantener un ambiente saludable.<br>• Problemas de sueño: Algunos dueños pueden experimentar interrupciones en el sueño si su mascota se mueve mucho durante la noche o si ocupa demasiado espacio.<br>• Tamaño y comportamiento: Considera el tamaño y comportamiento de tu mascota. Un perro grande o un gato inquieto pueden dificultar el sueño.<br>• Salud y alergias: Si tienes alergias o problemas de salud, es posible que debas reconsiderar la idea de dormir con tu mascota.'),
('¿Qué es la depresión en animales, cuáles son sus cuidados y qué alertas debes tener?', 'ambos', 'https://img.freepik.com/foto-gratis/vista-cerca-lindo-perro-marron-cara-triste_181624-17928.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540&semt=ais_hybrid', 'La depresión en animales puede afectar su bienestar físico y emocional. Es importante reconocer los signos y proporcionar el cuidado adecuado. Aquí te dejamos algunos aspectos clave a considerar:<br><br>• Identificación de síntomas: Presta atención a cambios en el comportamiento, como falta de interés en jugar, reducción del apetito, letargo o cambios en los hábitos de sueño.<br>• Causas comunes: La depresión puede ser provocada por cambios en el entorno, pérdida de un compañero (humano o animal), estrés, enfermedades o falta de estimulación.<br>• Estimulación mental y física: Asegúrate de que tu mascota tenga suficiente ejercicio y actividades para mantenerla mentalmente activa, como juguetes interactivos y paseos regulares.<br>• Rutina estable: Mantener una rutina diaria puede ayudar a tu mascota a sentirse más segura y disminuir la ansiedad.<br>• Interacción social: Proporciona oportunidades para socializar con otros animales y personas, lo que puede ayudar a mejorar su estado de ánimo.<br>• Consulta veterinaria: Si los síntomas persisten, consulta a un veterinario. Pueden ser necesarios tratamientos o terapias específicas, incluida la medicación si es necesario.<br>• Paciencia y cariño: Muestra comprensión y paciencia mientras tu mascota se adapta o se recupera. Bríndale cariño y atención extra.'),
('¿Cuál es la importancia de sacar a tu perro a diario?', 'perro', 'https://img.freepik.com/fotos-premium/mujer-esta-acariciando-perro-lengua-fuera_795871-22299.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540&semt=ais_hybrid', 'Sacar a tu perro a pasear al parque es fundamental para su bienestar físico y mental. Aquí te presentamos algunas razones clave por las que esto es tan importante:<br><br>• Ejercicio físico: Los paseos regulares ayudan a mantener a tu perro en buena forma física, previniendo la obesidad y fomentando la salud cardiovascular.<br>• Estimulación mental: Explorar nuevos olores, sonidos y vistas estimula la mente de tu perro, lo que es esencial para su bienestar emocional.<br>• Socialización: El parque es un lugar ideal para que tu perro interactúe con otros perros y personas, ayudando a desarrollar habilidades sociales y reducir la timidez o agresividad.<br>• Alivio del estrés: Pasear al aire libre puede ayudar a reducir la ansiedad y el estrés tanto en los perros como en sus dueños, proporcionando una oportunidad para relajarse y disfrutar del entorno.<br>• Mejora del comportamiento: Un perro que recibe suficiente ejercicio tiende a ser más equilibrado y menos propenso a comportamientos destructivos, como morder muebles o ladrar en exceso.<br>• Oportunidad para entrenar: Los paseos son excelentes momentos para practicar obediencia y entrenamiento, reforzando comandos y enseñando buenos modales.<br>• Conexión con el dueño: Pasear juntos fortalece el vínculo entre tú y tu perro, creando momentos de calidad que mejoran la relación.'),
('¿Cómo bañar a mi gato?', 'gato', 'https://img.freepik.com/fotos-premium/pequeno-gatito-mojado-asustado-negro-limpia-toalla-despues-bano_98725-1403.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540&semt=ais_hybrid', 'Bañar a un gato puede ser un desafío, pero con la preparación adecuada, se puede hacer de manera efectiva. Aquí te dejamos una guía paso a paso para lograrlo sin estrés:<br><br>• Prepara el espacio: Elige un lugar adecuado, como un lavabo o una bañera. Ten a mano todo lo necesario: shampoo para gatos, toallas y una jarra o manguera de ducha.<br>• Usa agua tibia: Llena el recipiente con agua tibia. Evita temperaturas extremas que puedan incomodar a tu gato.<br>• Moja suavemente: Comienza a mojar al gato despacio, comenzando por la parte posterior y evitando la cabeza. Usa una jarra o una manguera de ducha con poca presión.<br>• Aplica shampoo: Utiliza un shampoo específico para gatos. Aplica una pequeña cantidad y masajea suavemente su pelaje, evitando el contacto con los ojos y oídos.<br>• Enjuaga bien: Asegúrate de eliminar completamente el shampoo, ya que los residuos pueden irritar su piel.<br>• Sécalo adecuadamente: Usa una toalla para secar al gato. Si lo tolera, puedes usar un secador de pelo en una configuración baja y a una distancia segura.<br>• Premia a tu gato: Después del baño, ofrece una golosina o caricias para crear una asociación positiva con la experiencia.'),
('¿Qué cuidado dar a mi gata en embarazo?', 'gato', 'https://images.pexels.com/photos/2646483/pexels-photo-2646483.jpeg?auto=compress&cs=tinysrgb&w=600', 'Durante el embarazo, es esencial brindar a tu gata un cuidado especial para asegurar su salud y la de sus gatitos. Aquí te dejamos algunos aspectos clave a considerar:<br><br>• Alimentación adecuada: Proporciona un alimento específico para gatos gestantes, rico en nutrientes y proteínas.<br>• Veterinario: Realiza chequeos regulares con el veterinario para monitorear la salud de la madre y el desarrollo de los gatitos.<br>• Ambiente tranquilo: Crea un espacio tranquilo y cómodo donde pueda descansar y sentirse segura.<br>• Ejercicio moderado: Permite que haga ejercicio ligero, pero evita actividades demasiado intensas.<br>• Hidratación: Asegúrate de que siempre tenga acceso a agua fresca.<br>• Preparación para el parto: Investiga sobre el proceso de parto y ten listos los materiales necesarios, como una caja de parto.<br>Brindar estos cuidados ayudará a tu gata a tener un embarazo saludable y a preparar el camino para el nacimiento de sus gatitos.'),
('¿Cómo cuidar a mi gata y sus crías?', 'gato', 'https://img.freepik.com/fotos-premium/primer-plano-gato-descansando-cama_1048944-2317937.jpg?w=740', 'Cuidar de una gata y sus crías es fundamental para asegurar su salud y bienestar. Aquí tienes algunas pautas clave para hacerlo correctamente:<br><br>• Alimentación adecuada: Proporciona a la gata un alimento específico para gatos gestantes o lactantes, rico en nutrientes y calorías para apoyar su salud y la de sus crías.<br>• Agua fresca: Asegúrate de que tenga acceso constante a agua limpia y fresca para mantenerse hidratada.<br>• Ambiente seguro: Crea un espacio tranquilo y seguro para que la gata dé a luz y críe a sus gatitos. Asegúrate de que esté libre de corrientes de aire y peligros.<br>• Supervisión: Observa a la gata y a sus crías, pero evita interrumpir demasiado su privacidad. Permítele cuidar de ellos sin estrés.<br>• Control de salud: Lleva a la gata y a los gatitos al veterinario para chequeos de salud. Es importante monitorear el desarrollo de los gatitos y la salud de la madre.<br>• Socialización: A medida que los gatitos crezcan, empieza a socializarlos con personas y otros animales para ayudarles a adaptarse al mundo que les rodea.<br>• Educación: Asegúrate de educar a los nuevos dueños sobre el cuidado de los gatitos una vez que estén listos para ser adoptados.'),
('¿Es bueno dar dulces a mi perro?', 'perro', 'https://img.freepik.com/fotos-premium/cachorro-perro-mirando-hombre-feliz-sostenido_32960-1629.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540&semt=ais_hybrid', 'Dar dulces a tu perro puede ser tentador, pero es crucial hacerlo con precaución. Aquí tienes algunas pautas que debes seguir:<br><br>• Moderación: Ofrecer golosinas en pequeñas cantidades y no reemplazar su comida regular. Los dulces deben ser solo un complemento.<br>• Elige opciones saludables: Busca golosinas específicas para perros que sean saludables y estén diseñadas para su dieta. Evita los alimentos humanos, ya que algunos pueden ser tóxicos para ellos.<br>• Considera la salud de tu perro: Si tu perro tiene problemas de salud, como diabetes o sobrepeso, consulta a tu veterinario antes de ofrecerle cualquier dulce.<br>• Introducción gradual: Si decides introducir un nuevo dulce, hazlo de manera gradual para evitar problemas digestivos.<br>• Premios para entrenamiento: Usa golosinas como premios durante el entrenamiento, pero mantén un equilibrio en la cantidad total de comida que recibe.<br>• Siempre agua: Asegúrate de que tu perro tenga acceso a agua fresca después de recibir dulces.'),
('¿Cómo hacer un collar para mi gato?', 'gato', 'https://img.freepik.com/foto-gratis/gato-negro-banda-verde-paisaje-verde_6372800.jpg?auto=compress&cs=tinysrgb&w=600', 'Hacer un collar para tu gato puede ser una actividad divertida y útil. Aquí tienes una guía sencilla para hacerlo tú mismo:<br><br>• Materiales necesarios: Necesitarás una cinta métrica, tela o cinta resistente, tijeras y un cierre o broche.<br>• Medir: Mide el cuello de tu gato con la cinta métrica. Agrega un par de centímetros para asegurarte de que el collar no esté demasiado ajustado.<br>• Cortar la tela: Corta un trozo de tela o cinta de acuerdo con la medida que tomaste. Asegúrate de que sea lo suficientemente resistente para soportar el uso diario.<br>• Añadir el cierre: Si utilizas una tela que no se puede atar fácilmente, asegúrate de coser o pegar un cierre seguro en cada extremo del collar.<br>• Personaliza: Puedes añadir elementos decorativos como campanas o etiquetas con tu información de contacto, para que tu gato esté siempre identificado.<br>• Prueba el collar: Coloca el collar en tu gato y asegúrate de que se ajuste correctamente, permitiendo que puedas introducir dos dedos entre el collar y su cuello.'),
('¿Qué hacer si mi gato se siente triste?', 'gato', 'https://img.freepik.com/foto-gratis/gato-triste_140725-4226.jpg?auto=compress&cs=tinysrgb&w=600', 'Los gatos pueden experimentar tristeza por diversas razones. Si notas que tu gato está triste, aquí tienes algunas acciones que puedes tomar para ayudarlo:<br><br>• Observa el comportamiento: Presta atención a los cambios en su comportamiento. Si se esconde, deja de jugar o come menos, puede estar experimentando tristeza.<br>• Proporciona atención: Dedica tiempo a jugar y acariciar a tu gato. A veces, simplemente necesita un poco de atención extra para sentirse mejor.<br>• Estimulación ambiental: Proporciona juguetes nuevos o diferentes para mantener su mente activa y estimularlo a jugar.<br>• Considera la compañía: Si tu gato está solo durante mucho tiempo, considera la posibilidad de adoptar otro gato o pasar más tiempo con él para evitar la soledad.<br>• Consulta al veterinario: Si la tristeza persiste, consulta a un veterinario. Podría haber problemas de salud subyacentes que necesiten atención.<br>• Cambios en la rutina: A veces, los gatos son sensibles a cambios en su entorno. Intenta mantener una rutina estable para que se sienta más seguro.'),
('¿Cómo elegir un perro para adoptar?', 'perro', 'https://img.freepik.com/fotos-premium/pequeno-perro-adoptado_6502-1745.jpg?uid=R165272234&ga=GA1.1.1348421391.1729213540&semt=ais_hybrid', 'Adoptar un perro es una decisión emocionante y responsable. Aquí te ofrecemos algunos consejos para elegir el perro adecuado para ti:<br><br>• Evalúa tu estilo de vida: Considera cuánto tiempo pasas en casa y el nivel de actividad que puedes ofrecer a un perro. Algunas razas requieren más ejercicio que otras.<br>• Investiga sobre razas: Infórmate sobre diferentes razas y sus características. Algunas son más adecuadas para familias, mientras que otras pueden ser mejores para personas solas o con experiencia.<br>• Considera la edad: Los perros jóvenes pueden ser más enérgicos y requerir más entrenamiento, mientras que los mayores pueden ser más tranquilos y requerir menos ejercicio.<br>• Conoce al perro: Visita refugios y conoce a los perros que están disponibles para adopción. Interactúa con ellos y observa su comportamiento.<br>• Pregunta al personal: Habla con el personal del refugio o criador sobre el perro, su historia y su comportamiento. Ellos pueden ofrecerte información valiosa.<br>• Ten en cuenta la salud: Asegúrate de que el perro tenga un buen estado de salud y que haya sido revisado por un veterinario antes de adoptarlo.'),
('¿Cómo cuidar a un perro anciano?', 'perro', 'https://img.freepik.com/fotos-premium/perro-anciano-jugando-patio-jardin_8043-5592.jpg?w=740', 'Cuidar a un perro anciano requiere atención y comprensión. Aquí hay algunos consejos para asegurar su bienestar:<br><br>• Consulta al veterinario: Realiza chequeos regulares para monitorear su salud y detectar cualquier problema a tiempo.<br>• Alimentación adecuada: Proporciona una dieta formulada para perros mayores, que contenga menos calorías y más nutrientes específicos para su edad.<br>• Ejercicio moderado: Asegúrate de que haga ejercicio regular, pero evita actividades extenuantes que puedan causarles fatiga o lesiones.<br>• Comodidad: Proporciona un lugar cómodo para descansar, con una cama adecuada que ofrezca soporte a sus articulaciones.<br>• Atención especial: Observa su comportamiento para detectar cambios en su movilidad, apetito o estado de ánimo. Cualquier cambio puede ser un signo de problemas de salud.<br>• Estimulación mental: Proporciona juguetes interactivos y actividades para mantener su mente activa y prevenir el aburrimiento.<br>• Amor y paciencia: Brinda amor y atención extra, ya que los perros ancianos pueden necesitar más apoyo emocional en esta etapa de sus vidas.');

-- Insertar formulario

INSERT INTO form (document, name, last_name, age, address, profession, type_of_house, email, pet, description_family) VALUES
('12345678', 'Juan', 'Pérez', 30, 'Calle Falsa 123', 'Ingeniero', 'Casa', 'juan.perez@example.com', TRUE, 'Familia pequeña con un perro y una gata. Nos gusta pasar tiempo juntos en el parque.'),
('87654321', 'María', 'Gómez', 28, 'Avenida Siempre Viva 456', 'Maestra', 'Departamento', 'maria.gomez@example.com', TRUE, 'Familia de cuatro, con dos gatos. Disfrutamos de actividades al aire libre los fines de semana.'),
('23456789', 'Carlos', 'López', 45, 'Boulevard de los Sueños 789', 'Médico', 'Casa', 'carlos.lopez@example.com', FALSE, 'Familia tradicional, nos gusta pasar tiempo en casa viendo películas.'),
('98765432', 'Ana', 'Torres', 35, 'Calle de la Paz 321', 'Abogada', 'Departamento', 'ana.torres@example.com', TRUE, 'Familia con un perro y una niña pequeña. Amamos las excursiones y paseos al aire libre.'),
('34567890', 'Luis', 'Martínez', 50, 'Plaza Central 654', 'Empresario', 'Casa', 'luis.martinez@example.com', TRUE, 'Familia numerosa con varios animales. Nos encanta compartir tiempo y cuidar de nuestros animales.');









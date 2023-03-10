//Version=1.01b04
//Language=Spanish
//Date=Tue, 11, Sep, 2012
//Merged=FALSE
//Merged Fw=FALSE
var msg = new Array ( //_NO_SHARE_NAME_
	"¿Salir del asistente de configuración y descartar los ajustes?", //MSG0
	"La verificación de contraseña no coincide con la contraseña nueva.", //MSG1
	"La dirección IP y el %s  no están en el mismo dominio.", //MSG2
	"El %s y la dirección IP de la LAN no están en el mismo dominio.", //MSG3
	"La dirección IP final debe ser mayor que la dirección IP de inicio.", //MSG4
	"No es una válido direcciones de MAC. Por favor, compruebe. Los caracteres jurídicos de la dirección MAC debe ser 0 ~ 9, A ~ F, o un ~ f.", //MSG5
	"No puede dejar vacía la SSID.", //MSG6
	"La dirección IP y la dirección IP de la puerta de enlace no están en la misma subred.", //MSG7
	"La contraseña confirmada no coincide con la nueva contraseña de Administrador.", //MSG8
	"La contraseña confirmada no coincide con la nueva contraseña de Usuario.", //MSG9
	"El campo seleccionado de la clave WEP no puede estar en blanco.", //MSG10
	"La contraseña confirmada no coincide con la Contraseña.", //MSG11
	"La longitud de la frase de contraseña debe tener entre 8 y 64 caracteres.", //MSG12
	"La frase de contraseña debe ser 0 ~ 9, A ~ F, o un ~ f.", //MSG13
	"Por favor, introduzca otro servidor SMTP u otra dirección IP.", //MSG14
	"Por favor, introduzca una dirección de correo-e válida.", //MSG15
	"¿Esta seguro de querer eliminar esto %s?", //MSG16
	"¿Cargar la configuración desde el archivo de configuración guardado?", //MSG17
	"Por favor, escriba otro nombre.", //MSG18
	"Por favor, escriba otra palabra clave.", //MSG19
	"---Esta palabra clave ya existe en la lista de palabras clave.", //MSG20
	"¿Esta seguro de querer eliminar este filtro IP?", //MSG21
	"", //MSG22
	"Esta %s  ya existe en la lista.", //MSG23
	"¿Esta seguro de querer eliminar este filtro de protocolo?", //MSG24
	"Por favor, introduzca otro número de puerto.", //MSG25
	"Por favor, introduzca otra privada Número de puerto.", //MSG26
	"Por favor, introduzca otro número de puerto público.", //MSG27
	"%s conflicto de puerto.", //MSG28
	"¿Esta seguro de querer eliminar esta AP especial?", //MSG29
	"Rango de puertos es wrong.Please entrar en el disparo número de puerto entre 1-65534", //MSG30
	"Por favor, introduzca otro número de Puerto de entrada.", //MSG31
	"¿Desea reiniciar este router?", //MSG32
	"Por favor seleccione un archivo configuración guardado para cargarlo.", //MSG33
	"¿Recuperar la configuración de fábrica por defecto?", //MSG34
	"Por favor, seleccione un archivo para actualizar el router.", //MSG35
	"Por favor, introduzca un nombre de sistema anfitrión o una dirección IP.", //MSG36
	"¿Esta seguro de querer eliminar esta regla del cortafuegos?", //MSG37
	"La Comunidad no puede quedar en blanco,", //MSG38
	"El nombre de host debe ser 0 ~ 9, A a Z, o un ~ z.", //MSG39
	"La dirección IP del servidor introducida es inválida.", //MSG40
	"El%s tiene el mismo nombre.", //MSG41
	"El %s  tiene la misma MAC.", //MSG42
	"% s está en conflicto con la dirección IP LAN, por favor escribe de nuevo", //MSG43
	"Nombre de la regla no puede ser una cadena vacía!", //MSG44
	"No ha cambiado nada, salvo de todos modos?", //MSG45
	"La dirección IP y la reserva de direcciones IP no están en la misma subred.", //MSG46
	"La dirección MAC no es válida.", //MSG47
	"Are you sure that you want to delete", //MSG48
	"% s está en conflicto con la dirección IP LAN, por favor escribe de nuevo", //MSG49
	"Por favor, introduzca otro nombre", //MSG50
	"Por favor ingrese nombre de usuario", //MSG51
	"Por favor, introduzca otro número de puerto de inicio", //MSG52
	"Por favor, introduzca otro número de puerto final", //MSG53
	"Por favor, seleccione un tipo de acción", //MSG54
	"Presione el botón Apply (Aplicar) para que tenga lugar el cambio.", //MSG55
	"Usted no puede elegir otra tecla cuando WPS está habilitado", //MSG56
	"La aplicación de la configuración no se llevó a cabo.  Debe haber al menos una dirección MAC en la tabla de MAC.", //MSG57
	"La aplicación de la configuración no se llevó a cabo.  Debe haber al menos una dirección MAC en la tabla de MAC. Para eliminar la última dirección MAC en la tabla de MAC,\"desactive\" el primer filtro de MAC.", //MSG58
	"No es una válido direcciones de MAC. Por favor, compruebe. Los caracteres jurídicos de la dirección MAC debe ser 0 ~ 9, A ~ F, o un ~ f.", //MSG59
	"Especifique una dirección IP en lugar del rango de IP inicial de la LAN*", //MSG60
	"" //MAX
);
var MSG0=0;
var MSG1=1;
var MSG2=2;
var MSG3=3;
var MSG4=4;
var MSG5=5;
var MSG6=6;
var MSG7=7;
var MSG8=8;
var MSG9=9;
var MSG10=10;
var MSG11=11;
var MSG12=12;
var MSG13=13;
var MSG14=14;
var MSG15=15;
var MSG16=16;
var MSG17=17;
var MSG18=18;
var MSG19=19;
var MSG20=20;
var MSG21=21;
var MSG22=22;
var MSG23=23;
var MSG24=24;
var MSG25=25;
var MSG26=26;
var MSG27=27;
var MSG28=28;
var MSG29=29;
var MSG30=30;
var MSG31=31;
var MSG32=32;
var MSG33=33;
var MSG34=34;
var MSG35=35;
var MSG36=36;
var MSG37=37;
var MSG38=38;
var MSG39=39;
var MSG40=40;
var MSG41=41;
var MSG42=42;
var MSG43=43;
var MSG44=44;
var MSG45=45;
var MSG46=46;
var MSG47=47;
var MSG48=48;
var MSG49=49;
var MSG50=50;
var MSG51=51;
var MSG52=52;
var MSG53=53;
var MSG54=54;
var MSG55=55;
var MSG56=56;
var MSG57=57;
var MSG58=58;
var MSG59=59;
var MSG60=60;

var all_ip_addr_msg = new Array ( //_NO_SHARE_NAME_
	"La %s es una dirección inválida.", //INVALID_IP
	"%s no puede ser cero.", //ZERO_IP
	"La 1ª dirección de %s debe ser un número entero.", //FIRST_IP_ERROR
	"La 2ª dirección de %s debe ser un número entero.", //SECOND_IP_ERROR
	"La 3ª dirección de %s debe ser un número entero.", //THIRD_IP_ERROR
	"La 4ª dirección de %s debe ser un número entero.", //FOURTH_IP_ERROR
	"El 1er intervalo de %s debe estar entre ", //FIRST_RANGE_ERROR
	"El 2º intervalo de  %s debe estar entre ", //SECOND_RANGE_ERROR
	"El 3º intervalo de  %s debe estar entre", //THIRD_RANGE_ERROR
	"El 4º intervalo de  %s debe estar entre", //FOURTH_RANGE_ERROR
	"El puerto de %s es inválido.", //RADIUS_SERVER_PORT_ERROR
	"El Secreto compartido de %s no puede quedar en blanco.", //RADIUS_SERVER_SECRET_ERROR
	"El %s no puede permitir introducir una IP de lazo cerrado o una IP multidifusión(127.x.x.x, 224.x.x.x ~ 239.x.x.x).", //MULTICASE_IP_ERROR
	"" //MAX
);
var INVALID_IP=0;
var ZERO_IP=1;
var FIRST_IP_ERROR=2;
var SECOND_IP_ERROR=3;
var THIRD_IP_ERROR=4;
var FOURTH_IP_ERROR=5;
var FIRST_RANGE_ERROR=6;
var SECOND_RANGE_ERROR=7;
var THIRD_RANGE_ERROR=8;
var FOURTH_RANGE_ERROR=9;
var RADIUS_SERVER_PORT_ERROR=10;
var RADIUS_SERVER_SECRET_ERROR=11;
var MULTICASE_IP_ERROR=12;

var subnet_mask_msg = new Array ( //_SHARE_NAME_
	"La máscara subred es una dirección inválida.", //INVALID_IP
	"La máscara subred no puede ser cero.", //ZERO_IP
	"La 1ª dirección de la máscara subred debe ser un número entero.", //FIRST_IP_ERROR
	"La 2ª dirección de la máscara subred debe ser un número entero.", //SECOND_IP_ERROR
	"La 3ª dirección de la máscara subred debe ser un número entero.", //THIRD_IP_ERROR
	"La 4ª dirección de la máscara subred debe ser un número entero.", //FOURTH_IP_ERROR
	"El primer campo de la máscara subred debe ser 128,  192, 224, 240, 248, 252, 254, 255.", //FIRST_RANGE_ERROR
	"El 2º campo de la máscara subred debe ser 0, 128, 192, 224, 240, 248, 252, 254, 255. ", //SECOND_RANGE_ERROR
	"El 3º campo de la máscara subred debe ser 0, 128, 192, 224, 240, 248, 252, 254, 255.", //THIRD_RANGE_ERROR
	"El 4º campo de la máscara subred debe ser 0, 128, 192, 224, 240, 248, 252.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var src_start_ip_msg = new Array ( //_SHARE_NAME_
	"La dirección IP de Inicio de la Fuente es una dirección inválida.", //INVALID_IP
	"La dirección IP de inicio de la Fuente no puede ser cero.", //ZERO_IP
	"La 1ª dirección IP de Inicio de la Fuente debe ser un número entero.", //FIRST_IP_ERROR
	"La 2ª dirección IP de Inicio de la Fuente debe ser un número entero.", //SECOND_IP_ERROR
	"La 3ª dirección IP de Inicio de la Fuente debe ser un número entero.", //THIRD_IP_ERROR
	"La 4ª dirección IP de Inicio de la Fuente debe ser un número entero.", //FOURTH_IP_ERROR
	"El 1er campo de la dirección IP de Inicio de la Fuente debe estar entre 1 y 254.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección IP de Inicio de Fuente debe estar entre 0 y 254.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección IP de Inicio de Fuente debe estar entre 0 y 255.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección IP de Inicio de Fuente debe estar entre 1 y 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var src_end_ip_msg = new Array ( //_SHARE_NAME_
	"La dirección IP final de la Fuente es una dirección inválida.", //INVALID_IP
	"La dirección IP final de la Fuente no puede ser cero.", //ZERO_IP
	"La 1ª dirección IP final de la Fuente debe ser un número entero.", //FIRST_IP_ERROR
	"La 2ª dirección IP final de la Fuente debe ser un número entero.", //SECOND_IP_ERROR
	"La 3ª dirección IP final de la Fuente debe ser un número entero.", //THIRD_IP_ERROR
	"La 4ª dirección IP final de la Fuente debe ser un número entero.", //FOURTH_IP_ERROR
	"El 1er campo de la dirección IP final de la Fuente debe estar entre 1 y 254.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección IP final la Fuente debe estar entre 0 y 254.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección IP final la Fuente debe estar entre 0 y 254.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección IP final la Fuente debe estar entre 1 y 254.", //FOURTH_RANGE_ERROR
	"La dirección IP final de origen debe ser mayor que la dirección IP inicial de origen. ", //START_IP_BIG_THAN_END_IP
	"" //MAX
);
	
var dst_start_ip_msg = new Array ( //_SHARE_NAME_
	"La dirección IP de Inicio del Destino es una dirección inválida.", //INVALID_IP
	"La dirección IP de inicio del Destino no puede ser cero.", //ZERO_IP
	"La 1ª dirección IP de Inicio del Destino debe ser un número entero.", //FIRST_IP_ERROR
	"La 2ª dirección IP de Inicio del Destino debe ser un número entero.", //SECOND_IP_ERROR
	"La 3ª dirección IP de Inicio del Destino debe ser un número entero.", //THIRD_IP_ERROR
	"La 4ª dirección IP de Inicio del Destino debe ser un número entero.", //FOURTH_IP_ERROR
	"El 1er campo de la dirección IP de Inicio del Destino debe estar entre 1 y 254.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección IP de Inicio del Destino debe estar entre 0 y 254.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección IP de Inicio del Destino debe estar entre 0 y 254.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección IP de Inicio del Destino debe estar entre 1 y 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var dst_end_ip_msg = new Array ( //_SHARE_NAME_
	"La dirección IP final del Destino es una dirección inválida.", //INVALID_IP
	"La dirección IP de inicio del Destino no puede ser cero.", //ZERO_IP
	"La 1ª dirección IP final del Destino debe ser un número entero.", //FIRST_IP_ERROR
	"La 2ª dirección IP final del Destino debe ser un número entero.", //SECOND_IP_ERROR
	"La 3ª dirección IP final del Destino debe ser un número entero.", //THIRD_IP_ERROR
	"La 4ª dirección IP final del Destino debe ser un número entero.", //FOURTH_IP_ERROR
	"El 1er campo de la dirección IP final del Destino debe estar entre 1 y 254.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección IP final del Destino debe estar entre 0 y 254.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección IP final del Destino debe estar entre 0 y 254.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección IP final del Destino debe estar entre 1 y 254.", //FOURTH_RANGE_ERROR
	"La dirección IP final de destino debe ser mayor que la dirección IP inicial de destino. ", //START_IP_BIG_THAN_END_IP
	"" //MAX
);
	
var syslog_server_msg = new Array ( //_SHARE_NAME_
	"La dirección del servidor de protocolo de red no es válida.", //INVALID_IP
	"La dirección del servidor de protocolo de red no puede ser cero.", //ZERO_IP
	"La 1ª dirección del Servidor de protocolo de red debe ser un número entero.", //FIRST_IP_ERROR
	"La 2ª dirección del Servidor de protocolo de red debe ser un número entero.", //SECOND_IP_ERROR
	"La 3ª dirección del Servidor de protocolo de red debe ser un número entero.", //THIRD_IP_ERROR
	"La 4ª dirección del Servidor de protocolo de red debe ser un número entero.", //FOURTH_IP_ERROR
	"El 1er campo del Servidor de protocolo de red debe estar entre 1 y 254.", //FIRST_RANGE_ERROR
	"El 2º campo del Servidor de protocolo de red debe estar entre 0 y 255.", //SECOND_RANGE_ERROR
	"El 3º campo del Servidor de protocolo de red debe estar entre 0 y 255.", //THIRD_RANGE_ERROR
	"El 4º campo del Servidor de protocolo de red debe estar entre 1 y 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var http_form_ip_addr_msg = new Array ( //_SHARE_NAME_
	"La dirección IP de procedencia es una dirección inválida en la sección HTTP.", //INVALID_IP
	"La dirección IP de procedencia no puede ser cero en la sección HTTP.", //ZERO_IP
	"La primera dirección de la dirección IP de partida debe ser un número entero en la sección HTTP. ", //FIRST_IP_ERROR
	"La segunda dirección de la dirección IP de partida debe ser un número entero en la sección HTTP. ", //SECOND_IP_ERROR
	"La tercera dirección de la dirección IP de partida debe ser un número entero en la sección HTTP. ", //THIRD_IP_ERROR
	"La cuarta dirección de la dirección IP de partida debe ser un número entero en la sección HTTP. ", //FOURTH_IP_ERROR
	"El 1er campo de la dirección IP de procedencia debe estar entre 1 y 254 en la sección HTTP.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección IP de procedencia debe estar entre 0 y 255 en la sección HTTP.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección IP de procedencia debe estar entre 0 y 255 en la sección HTTP.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección IP de procedencia debe estar entre 1 y 254 en la sección HTTP.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var http_to_ip_addr_msg = new Array ( //_SHARE_NAME_
	"La dirección IP de destino es una dirección inválida en la sección HTTP.", //INVALID_IP
	"La dirección IP de destino no puede ser cero en la sección HTTP.", //ZERO_IP
	"La 1ª dirección IP de destino debe ser un número entero en la sección HTTP.", //FIRST_IP_ERROR
	"La 2ª dirección IP de destino debe ser un número entero en la sección HTTP.", //SECOND_IP_ERROR
	"La 3ª dirección IP de destino debe ser un número entero en la sección HTTP.", //THIRD_IP_ERROR
	"La 4ª dirección IP de destino debe ser un número entero en la sección HTTP.", //FOURTH_IP_ERROR
	"El 1er campo de la dirección IP de destino debe estar entre 1 y 254 en la sección HTTP.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección IP de destino debe estar entre 0 y 255 en la sección HTTP.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección IP de destino debe estar entre 0 y 255 en la sección HTTP.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección IP de destino debe estar entre 1 y 254 en la sección HTTP.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var allow_form_ip_addr_msg = new Array ( //_SHARE_NAME_
	"La dirección IP de procedencia es una dirección inválida en la sección Permitir comprobación del puerto WAN.", //INVALID_IP
	"La dirección IP de procedencia no puede ser cero en la sección Permitir comprobación del puerto WAN.", //ZERO_IP
	"La 1ª dirección IP de procedencia debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //FIRST_IP_ERROR
	"La 2ª dirección IP de procedencia debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //SECOND_IP_ERROR
	"La 3ª dirección IP de procedencia debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //THIRD_IP_ERROR
	"La 4ª dirección IP de procedencia debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //FOURTH_IP_ERROR
	"El 1er campo de la dirección IP de procedencia debe estar entre 1 y 254 en la sección Permitir comprobación del puerto WAN.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección IP de procedencia debe estar entre 0 y 254 en la sección Permitir comprobación del puerto WAN.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección IP de procedencia debe estar entre 0 y 254 en la sección Permitir comprobación del puerto WAN.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección IP de procedencia debe estar entre 1 y 254 en la sección Permitir comprobación del puerto WAN.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var allow_to_ip_addr_msg = new Array ( //_SHARE_NAME_
	"La dirección IP de destino es una dirección inválida en la sección Permitir comprobación del puerto WAN.", //INVALID_IP
	"La dirección IP de destino no puede ser cero en la sección Permitir comprobación del puerto WAN.", //ZERO_IP
	"La 1ª dirección IP de destino debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //FIRST_IP_ERROR
	"La 2ª dirección IP de destino debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //SECOND_IP_ERROR
	"La 3ª dirección IP de destino debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //THIRD_IP_ERROR
	"La 4ª dirección IP de destino debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //FOURTH_IP_ERROR
	"El 1er campo de la dirección IP de destino debe estar entre 1 y 254 en la sección Permitir comprobación del puerto WAN.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección IP de procedencia debe estar entre 0 y 255 en la sección Permitir comprobación del puerto WAN.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección IP de procedencia debe estar entre 0 y 255 en la sección Permitir comprobación del puerto WAN.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección IP de procedencia debe estar entre 1 y 254 en la sección Permitir comprobación del puerto WAN.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var trap1_addr_msg = new Array ( //_SHARE_NAME_
	"La dirección del Receptor de trampas 1 es una dirección inválida.", //INVALID_IP
	"La dirección del Receptor de trampas 1 no puede ser cero.", //ZERO_IP
	"La 1ª dirección del Receptor de trampas 1 debe ser un número entero.", //FIRST_IP_ERROR
	"La 2ª dirección del Receptor de trampas 1 debe ser un número entero.", //SECOND_IP_ERROR
	"La 3ª dirección del Receptor de trampas 1 debe ser un número entero.", //THIRD_IP_ERROR
	"La 4ª dirección del Receptor de trampas 1 debe ser un número entero.", //FOURTH_IP_ERROR
	"El 1er campo de la dirección del Receptor de trampas 1 debe estar entre 1 y 254.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección del Receptor de trampas 1 debe estar entre 0 y 255.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección del Receptor de trampas 1 debe estar entre 0 y 255.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección del Receptor de trampas 1 debe estar entre 1 y 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var trap2_addr_msg = new Array ( //_SHARE_NAME_
	"La dirección del Receptor de trampas 2 es una dirección inválida.", //INVALID_IP
	"La dirección del Receptor de trampas 2 no puede ser cero.", //ZERO_IP
	"La 1ª dirección del Receptor de trampas 2 debe ser un número entero.", //FIRST_IP_ERROR
	"La 2ª dirección del Receptor de trampas 2 debe ser un número entero.", //SECOND_IP_ERROR
	"La 3ª dirección del Receptor de trampas 2 debe ser un número entero.", //THIRD_IP_ERROR
	"La 4ª dirección del Receptor de trampas 2 debe ser un número entero.", //FOURTH_IP_ERROR
	"El 1er campo de la dirección del Receptor de trampas 2 debe estar entre 1 y 254.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección del Receptor de trampas 2 debe estar entre 0 y 255.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección del Receptor de trampas 2 debe estar entre 0 y 255.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección del Receptor de trampas 2 debe estar entre 1 y 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var trap3_addr_msg = new Array ( //_SHARE_NAME_
	"La dirección del Receptor de trampas 3 es una dirección inválida.", //INVALID_IP
	"La dirección del Receptor de trampas 3 no puede ser cero.", //ZERO_IP
	"La 1ª dirección del Receptor de trampas 3 debe ser un número entero.", //FIRST_IP_ERROR
	"La 2ª dirección del Receptor de trampas 3 debe ser un número entero.", //SECOND_IP_ERROR
	"La 3ª dirección del Receptor de trampas 3 debe ser un número entero.", //THIRD_IP_ERROR
	"La 4ª dirección del Receptor de trampas 3 debe ser un número entero.", //FOURTH_IP_ERROR
	"El 1er campo de la dirección del Receptor de trampas 3 debe estar entre 1 y 254.", //FIRST_RANGE_ERROR
	"El 2º campo de la dirección del Receptor de trampas 3 debe estar entre 0 y 255.", //SECOND_RANGE_ERROR
	"El 3º campo de la dirección del Receptor de trampas 3 debe estar entre 0 y 255.", //THIRD_RANGE_ERROR
	"El 4º campo de la dirección del Receptor de trampas 3 debe estar entre 1 y 254.", //FOURTH_RANGE_ERROR
	"" //MAX
);
	
var check_num_msg = new Array ( //_NO_SHARE_NAME_
	"Por favor, escriba otro %s valor.", //EMPTY_VARIBLE_ERROR
	"El valor de %s debe ser numérico!", //INVALID_VARIBLE_ERROR
	"El rango de %s es de %1n ~ %2n.", //VARIBLE_RANGE_ERROR
	"El valor de %s  sólo es un número par.", //EVEN_NUMBER_ERROR
	"" //MAX
);
var EMPTY_VARIBLE_ERROR=0;
var INVALID_VARIBLE_ERROR=1;
var VARIBLE_RANGE_ERROR=2;
var EVEN_NUMBER_ERROR=3;

var metric_msg = new Array ( //_SHARE_NAME_
	"Por favor, escriba otro valor Métrico.", //EMPTY_VARIBLE_ERROR
	"El valor Métrico debe ser un número entero.", //INVALID_VARIBLE_ERROR
	"El intervalo de valores Métrico es 1 ~ 15.", //VARIBLE_RANGE_ERROR
	"" //MAX
);
	
var key1_len_error = new Array ( //_SHARE_NAME_
	"La longitud de la Clave1 debe tener 5 caracteres.", //wep_key_len_err_1
	"La longitud de la Clave1 debe tener 13 caracteres.", //wep_key_len_err_2
	"La longitud de la Clave1 debe tener 10 caracteres.", //wep_key_len_err_3
	"La longitud de la Clave1 debe tener 26 caracteres.", //wep_key_len_err_4
	"" //MAX
);
	
var key2_len_error = new Array ( //_SHARE_NAME_
	"La longitud de la Clave2 debe tener 5 caracteres.", //wep_key_len_err_1
	"La longitud de la Clave2 debe tener 13 caracteres.", //wep_key_len_err_2
	"La longitud de la Clave2 debe tener 10 caracteres.", //wep_key_len_err_3
	"La longitud de la Clave2 debe tener 26caracteres.", //wep_key_len_err_4
	"" //MAX
);
	
var key3_len_error = new Array ( //_SHARE_NAME_
	"La longitud de la Clave3 debe tener 5 caracteres.", //wep_key_len_err_1
	"La longitud de la Clave3 debe tener 13 caracteres.", //wep_key_len_err_2
	"La longitud de la Clave3 debe tener 10 caracteres.", //wep_key_len_err_3
	"La longitud de la Clave3 debe tener 26 caracteres.", //wep_key_len_err_4
	"" //MAX
);
	
var key4_len_error = new Array ( //_SHARE_NAME_
	"La longitud de la Clave4 debe tener 5 caracteres.", //wep_key_len_err_1
	"La longitud de la Clave4 debe tener 13 caracteres.", //wep_key_len_err_2
	"La longitud de la Clave4 debe tener 10 caracteres.", //wep_key_len_err_3
	"La longitud de la Clave4 debe tener 26 caracteres.", //wep_key_len_err_4
	"" //MAX
);
	
var illegal_key_error = new Array ( //_SHARE_NAME_
	"La Clave 1 es errónea, los caracteres posibles son 0~9, A~F, o a~f.", //wep_key_len_err_1
	"La Clave 2 es errónea, los caracteres posibles son 0~9, A~F, o a~f.", //wep_key_len_err_2
	"La Clave 3 es errónea, los caracteres posibles son 0~9, A~F, o a~f.", //wep_key_len_err_3
	"La Clave 4 es errónea, los caracteres posibles son 0~9, A~F, o a~f.", //wep_key_len_err_4
	"" //MAX
);
	
var which_lang = new Array ( //_NO_SHARE_NAME_
	"128 bits", //_128bit 
	"1º", //_1st 
	"20 MHz", //_20MHz 
	"2º", //_2nd 
	"3º", //_3rd 
	"4º", //_4th 
	"5º", //_5th 
	"64 bits", //_64bit 
	"6º", //_6th 
	"mixto 802.11b/g", //_80211bg 
	"modo mixto 802.11b/g", //_80211bgMix 
	"mixto 802.11b/g/n", //_80211bgn 
	"modo mixto 802.11b/g/n", //_80211bgnMix 
	"sólo modo 802.11b", //_80211bOnly 
	"sólo modo 802.11g", //_80211gOnly 
	"modo 802.11", //_80211mode 
	"sólo modo 802.11n", //_80211nOnly 
	"acceso", //_Access 
	"Control de acceso", //_AccessCon 
	"Acción", //_Action 
	"Añadir", //_Add 
	"Añadir DHCP estática", //_AddStaticDHCP 
	"administrador", //_Admin 
	"contraseñadel administrador", //_AdmPwd 
	"Avanzado", //_Advanced 
	"AES", //_AES 
	"Permite", //_Allow 
	"Permitir comprobación puerto WAN", //_AllowPingWAN 
	"Siempre-encendido", //_AlwaysOn 
	"Siempre-encendido", //_AlwaysOn 
	"AM", //_AM 
	"Aplicar", //_Apply 
	"Abr", //_Apr 
	"ASCII", //_ASCII 
	"en", //_at 
	"ataques", //_Attacks 
	"Ago", //_Aug 
	"Autenticación", //_Authentication 
	"Servidor Aut", //_AuthSer 
	" tipo de autenticación.: ", //_AuthType 
	"Auto", //_Auto 
	"20/40 MHz Auto", //_Auto20_40MHz 
	"Canal Auto", //_AutoChannel 
	"Automático", //_Automatic 
	"Reconexión automática", //_AutoReconn 
	"Atrás", //_Back
	"básica", //_Basic 
	"Intervalo de baliza", //_BeaconInterval 
	"BigPond Cable", //_BigPondCable
	"Ambos", //_Both 
	"bytes", //_bytes 
	"Cancelar", //_Cancel 
	"Canales", //_Channel 
	"Ancho de canal", //_ChannelWidth 
	"Elija su zona horaria", //_ChooseTimeZone 
	"Borrar", //_Clear 
	"Borrar registro", //_ClearLog 
	"Número PIN del cliente", //_ClientPIN 
	"Clonar dirección MAC", //_CloneMAC 
	"Cerrar", //_Close 
	"Cerrado", //_Closed 
	"Comunidad", //_Community 
	"configuración", //_Config 
	"Configurado", //_Configured 
	"Contraseña confirmada", //_ConfirmPassphrase 
	"Confirmar contraseña", //_ConfirmPwd 
	"Conexión", //_Conn 
	"Conectar", //_Connect
	"no conectar tipo", //_connectTypeNone
	"Tiempo conectado", //_ConnTime 
	" tipo de conexión", //_conntype 
	"Día", //_Day 
	"Horario de verano", //_DaylightSaving 
	"Días", //_Days 
	"dce-server", //_dceSer 
	"DDNS", //_DDNS 
	"Lista de selección de servidor DDNS", //_DDNSserverList 
	"Información de depuración", //_DebugInfo 
	"Dic", //_Dec 
	"defecto", //_default 
	"Puerta de enlace por defecto", //_DefaultGW 
	"Eliminar", //_Delete 
	"negar", //_Deny 
	"Destino", //_Dest 
	"Información del dispositivo", //_DevInfo 
	"DHCP", //_DHCP 
	"Cliente DHCP", //_DHCPclient 
	"Cliente DHCP o IP fija", //_DHCPClient_FixedIP 
	"Lista de clientes DHCP", //_DHCPclientList 
	"Cliente DHCP o IP fija", //_DHCPorFix
	"Versión DHCP", //_DHCPrelease
	"Renovación DHCP", //_DHCPrenew
	"servidor DHCP ", //_DHCPSer 
	"IP terminal del servidor DHCP", //_DHCPserEndIP 
	"IP inicial del servidor DHCP", //_DHCPserStartIP 
	"Tabla DHCP", //_DHCPTable 
	"Desactivado", //_Disable 
	"Inhabilitado", //_Disabled 
	"Desconectado", //_Disconnect
	"DMZ   ", //_DMZ 
	"IP del sistema anfitrión DMZ", //_DMZHost
	"DNS", //_DNS 
	"error dns", //_dns_err 
	"DNS 1", //_DNS1 
	"DNS 2", //_DNS2 
	"Dirección 1 del servidor DNS", //_DNSAddr1 
	"Dirección 2 del servidor DNS", //_DNSAddr2 
	"Dirección 1 del servidor DNS", //_DNSServer1 
	"Dirección 2 del servidor DNS", //_DNSServer2 
	"Dominio", //_domain 
	"Nombre del dominio", //_DomainName 
	"Dominio/Bloqueo URL   ", //_DomainUrlBlocking 
	"Dominios/Lista URL", //_DomainUrlList 
	"Paquetes perdidos", //_DropPacket 
	"Intervalo DTIM", //_DTIMinterval 
	"IP dinámica", //_DynamicIP 
	"Lista DHCO dinámica", //_DynDHCPlist 
	"DNS dinámica", //_dyndns 
	"EAP", //_EAP 
	"Enviar Registros por Correo-e", //_EmailLog 
	"Enviar registro ahora", //_EmailLogNow 
	"Activado", //_Enable 
	"Habilitado", //_Enabled 
	"encriptación", //_Encryption 
	"Tipo de codificación", //_EncryptionType 
	"terminal", //_End 
	"IP terminal", //_EndIP 
	"Dirección IP terminal", //_EndIPaddr 
	"Todos los fías", //_EveryDay 
	"Todos los viernes", //_EveryFri 
	"Todos los lunes", //_EveryMon 
	"Todos los sábados", //_EverySat 
	"Todos los domingos", //_EverySun 
	"Todos los jueves", //_EveryThur 
	"Todos los martes", //_EveryTues 
	"Todos los miércoles", //_EveryWed 
	"salir", //_Exit 
	"Plazo vencido", //_ExpiredTime 
	"Feb", //_Feb 
	"filtro", //_Filter 
	"nombre de filtro", //_FilterName 
	"filtrados", //_Filters 
	"Firewall", //_firewall 
	"reglas de Firewall", //_FirewallRule
	"Configuración del cortafuegos", //_FirewallSet 
	"Configuración del cortafuegos", //_FirewallSettings 
	"firmware", //_Firmware 
	"Versión del Firmware", //_FirmwareVer 
	"Primera página", //_FirstPage 
	"IP fija", //_FixedIP
	"Dirección IP fija", //_FixedIP 
	"Umbral de fragmentación", //_FragThreshold 
	"viernes", //_Fri 
	"Desde", //_From 
	"Desde la dirección de correo-e", //_FromEmail 
	"FTP", //_FTP
	"(GMT-12:00) Eniwetok, Kwajalein", //_GMT_01 
	"(GMT-11:00) Midway Island, Samoa", //_GMT_02 
	"(GMT-10:00) Hawaii", //_GMT_03 
	"(GMT-09:00) Alaska", //_GMT_04 
	"(GMT-08:00) Pacific Time (US/Canada), Tijuana", //_GMT_05 
	"(GMT-07:00) Arizona", //_GMT_06 
	"(GMT-07:00) Mountain Time (US/Canada)", //_GMT_07 
	"(GMT-06:00) Central America", //_GMT_08 
	"(GMT-06:00) Central Time (US/Canada)", //_GMT_09 
	"(GMT-06:00) Mexico City", //_GMT_10 
	"(GMT-06:00) Saskatchewan", //_GMT_11 
	"(GMT-05:00) Bogota, Lima, Quito", //_GMT_12 
	"(GMT-05:00) Eastern Time (US/Canada)", //_GMT_13 
	"(GMT-05:00) Indiana (East)", //_GMT_14 
	"(GMT-04:00) Atlantic Time (Canada)", //_GMT_15 
	"(GMT-04:00) Caracas, La Paz", //_GMT_16 
	"(GMT-04:00) Santiago", //_GMT_17 
	"(GMT-03:30) Newfoundland", //_GMT_18 
	"(GMT-03:00) Brazilia", //_GMT_19 
	"(GMT-03:00) Buenos Aires, Georgetown", //_GMT_20 
	"(GMT-03:00) Greenland", //_GMT_21 
	"(GMT-02:00) Mid-Atlantic", //_GMT_22 
	"(GMT-01:00) Azores", //_GMT_23 
	"(GMT-01:00) Cape Verde Is.", //_GMT_24 
	"(GMT) Casablanca, Monrovia", //_GMT_25 
	"(GMT) Greenwich Time: Dublin, Edinburgh, Lisbon, London", //_GMT_26 
	"(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm", //_GMT_27 
	"(GMT+01:00) Belgrade, Brastislava, Ljubljana", //_GMT_28 
	"(GMT+01:00) Brussels, Copenhagen, Madrid, Paris", //_GMT_29 
	"(GMT+01:00) Sarajevo, Skopje, Sofija, Vilnus, Zagreb", //_GMT_30 
	"(GMT+01:00) Budapest, Vienna, Prague, Warsaw", //_GMT_31 
	"(GMT+01:00) West Central Africa", //_GMT_32 
	"(GMT+02:00) Athens, Istanbul, Minsk", //_GMT_33 
	"(GMT+02:00) Bucharest", //_GMT_34 
	"(GMT+02:00) Cairo", //_GMT_35 
	"(GMT+02:00) Harare, Pretoria", //_GMT_36 
	"(GMT+02:00) Helsinki, Riga, Tallinn", //_GMT_37 
	"(GMT+02:00) Jerusalem", //_GMT_38 
	"(GMT+03:00) Baghdad", //_GMT_39 
	"(GMT+03:00) Kuwait, Riyadh", //_GMT_40 
	"(GMT+03:00) Moscow, St. Petersburg, Volgograd", //_GMT_41 
	"(GMT+03:00) Nairobi", //_GMT_42 
	"(GMT+03:00) Tehran", //_GMT_43 
	"(GMT+04:00) Abu Dhabi, Muscat", //_GMT_44 
	"(GMT+04:00) Baku, Tbilisi, Yerevan", //_GMT_45 
	"(GMT+04:30) Kabul", //_GMT_46 
	"(GMT+05:00) Ekaterinburg", //_GMT_47 
	"(GMT+05:00) Islamabad, Karachi, Tashkent", //_GMT_48 
	"(GMT+05:30) Calcutta, Chennai, Mumbai, New Delhi", //_GMT_49 
	"(GMT+05:45) Kathmandu", //_GMT_50 
	"(GMT+06:00) Almaty, Novosibirsk", //_GMT_51 
	"(GMT+06:00) Astana, Dhaka", //_GMT_52 
	"(GMT+06:00) Sri Jayawardenepura", //_GMT_53 
	"(GMT+06:30) Rangoon", //_GMT_54 
	"(GMT+07:00) Bangkok, Hanoi, Jakarta", //_GMT_55 
	"(GMT+07:00) Krasnoyarsk", //_GMT_56 
	"(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi", //_GMT_57 
	"(GMT+08:00) Irkutsk, Ulaan Bataar", //_GMT_58 
	"(GMT+08:00) Kuala Lumpur, Singapore", //_GMT_59 
	"(GMT+08:00) Perth", //_GMT_60 
	"(GMT+08:00) Taipei", //_GMT_61 
	"(GMT+09:00) Osaka, Sapporo, Tokyo", //_GMT_62 
	"(GMT+09:00) Seoul", //_GMT_63 
	"(GMT+09:00) Yakutsk", //_GMT_64 
	"(GMT+09:30) Adelaide", //_GMT_65 
	"(GMT+09:30) Darwin", //_GMT_66 
	"(GMT+10:00) Brisbane", //_GMT_67 
	"(GMT+10:00) Canberra, Melbourne, Sydney", //_GMT_68 
	"(GMT+10:00) Guam, Port Moresby", //_GMT_69 
	"(GMT+10:00) Hobart", //_GMT_70 
	"(GMT+10:00) Vladivostok", //_GMT_71 
	"(GMT+11:00) Magadan, Solomon Is., New Caledonia", //_GMT_72 
	"(GMT+12:00) Auckland, Wellington", //_GMT_73 
	"(GMT+12:00) Fiji, Kamchatka, Marshall Is.", //_GMT_74 
	"(GMT+13:00) Nuku'alofa, Tonga", //_GMT_75 
	"Puerta de enlace", //_GW 
	"Dirección de la puerta de enlace", //_GWAddr 
	"Ayuda", //_Help 
	"HEX", //_HEX 
	"Nombre el servidor ", //_HostName 
	"Nombre el servidor anfitrión o dirección IP ", //_HostName_IP 
	"Hora", //_Hour 
	"Horas", //_Hours 
	"HTTP", //_HTTP 
	"ICMP", //_ICMP 
	"IDENT", //_IDENT 
	"Tiempo muerto de inactividad", //_IdleTimeOut 
	"Recibido", //_Incoming 
	"Puerto de entrada", //_IncomingPort 
	"Interfaz", //_Interface 
	"Nombre de sistema anfitrión inválido", //_InvalidHostName 
	"Número PIN inválido.", //_InvalidPIN 
	"IP", //_IP 
	"dirección IP ", //_IP_Addr 
	"Obtener IP automáticamente (Cliente DHCP)", //_IPAuto
	"Intervalo de IPs", //_IPRange 
	"Fin del intervalo de IPs", //_IPRangeEnd 
	"Inicio del intervalo de IPs", //_IPRangeStart 
	"IPSec", //_IPSec 
	"Ene", //_Jan 
	"Jul", //_Jul 
	"Jun", //_Jun 
	"Tecla", //_Key 
	"L2TP", //_L2TP 
	"Cuenta L2TP", //_L2TPaccount 
	"Contraseña L2TP", //_L2TPpwd 
	"LAN", //_LAN 
	"Servidor LAN y DHCP", //_LAN_DHCPSer 
	"Servidor LAN", //_LAN_Serv 
	"Dirección IP de LAN", //_LANipAddr 
	"Máscara Subred LAN", //_LANsubnet 
	"Última página", //_LastPage 
	"Periodo de alquiler", //_LeaseTime 
	"Cargar", //_Load 
	"Configuración de carga", //_LoadSettngs 
	"Hora local", //_LocalTime 
	"Registro", //_Log 
	"Cuando el registro está lleno", //_LogFull 
	"Iniciar sesión", //_Login 
	"Nombre de usuario o contraseña incorrectos", //_loginErrMsg 
	"El nombre inicio de sesión es 'admin'", //_LoginIsAdmin 
	"El nombre de inicio de sesión es 'user'", //_LoginIsUser 
	"IP del servidor de inicio de sesión", //_LoginSer 
	"Servidor de protocolo de red", //_LogSer 
	"Configuración del registro", //_LogSet 
	"Configuración del registro", //_LogSettings 
	"Tipo de registro", //_LogType 
	"El nombre inicio de sesión es 'admin'", //_LonginAdmin 
	"El nombre de inicio de sesión es 'user'", //_LonginUser 
	"MAC", //_MAC 
	"dirección MAC", //_MACAddr 
	"Filtros MAC", //_MacFilter 
	"tabla MAC", //_MacTable 
	"manual", //_Manual 
	"Ajuste manual de Fecha y Hora", //_ManualTimeSet 
	"Mar", //_Mar 
	"Máscara", //_Mask 
	"May", //_May 
	"Mensaje", //_Message
	"Métrico", //_Metric 
	"minuto ", //_Minute 
	"minutos", //_minutes 
	"Lun", //_Mon 
	"Mes", //_Month 
	"MPPE Activado", //_MPPE 
	"msec", //_msec 
	"Por favor, espere", //_MSG1 
	"Filtro del punto final del UDP", //_MSG10 
	"No puede dejar vacía la contraseña.", //_MSG100 
	"La    es una dirección inválida.", //_MSG101 
	"El     no puede ser cero.", //_MSG102 
	"La 1ª dirección de debe ser un número entero.", //_MSG103 
	"La 2ª dirección de debe ser un número entero.", //_MSG104 
	"La 3ª dirección de debe ser un número entero.", //_MSG105 
	"La 4ª dirección de debe ser un número entero.", //_MSG106 
	"El 1er intervalo de debe estar entre ", //_MSG107 
	"El 2º intervalo de  debe estar entre ", //_MSG108 
	"El 3º intervalo de  debe estar entre", //_MSG109 
	"Punto final independiente", //_MSG11 
	"El 4º intervalo de debe estar entre ", //_MSG110 
	"El puerto de es inválido.", //_MSG111 
	"El Secreto compartido de no puede quedar en blanco.", //_MSG112 
	"El no puede permitir introducir una IP de lazo cerrado o una IP multidifusión(127.x.x.x, 224.x.x.x ~ 239.x.x.x, 255.x.x.x).", //_MSG113 
	"La máscara subred es una dirección inválida.", //_MSG114 
	"La máscara subred no puede ser cero.", //_MSG115 
	"La 1ª dirección de la máscara subred debe ser un número entero.", //_MSG116 
	"La 2ª dirección de la máscara subred debe ser un número entero.", //_MSG117 
	"La 3ª dirección de la máscara subred debe ser un número entero.", //_MSG118 
	"La 4ª dirección de la máscara subred debe ser un número entero.", //_MSG119 
	"Dirección restringida", //_MSG12 
	"El primer campo de la máscara subred debe ser 128,  192, 224, 240, 248, 252, 254, 255.", //_MSG120 
	"El 2º campo de la máscara subred debe ser 0, 128, 192, 224, 240, 248, 252, 254, 255. ", //_MSG121 
	"El 3º campo de la máscara subred debe ser 0, 128, 192, 224, 240, 248, 252, 254, 255.", //_MSG122 
	"El 4º campo de la máscara subred debe ser 0, 128, 192, 224, 240, 248, 252.", //_MSG123 
	"La dirección IP de Inicio de la Fuente es una dirección inválida.", //_MSG124 
	"La dirección IP de inicio de la Fuente no puede ser cero.", //_MSG125 
	"La 1ª dirección IP de Inicio de la Fuente debe ser un número entero.", //_MSG126 
	"La 2ª dirección IP de Inicio de la Fuente debe ser un número entero.", //_MSG127 
	"La 3ª dirección IP de Inicio de la Fuente debe ser un número entero.", //_MSG128 
	"La 4ª dirección IP de Inicio de la Fuente debe ser un número entero.", //_MSG129 
	"Puerto y dirección restringidos", //_MSG13 
	"El 1er campo de la dirección IP de Inicio de la Fuente debe estar entre 1 y 254.", //_MSG130 
	"El 2º campo de la dirección IP de Inicio de Fuente debe estar entre 0 y 254.", //_MSG131 
	"El 3º campo de la dirección IP de Inicio de Fuente debe estar entre 0 y 255.", //_MSG132 
	"El 4º campo de la dirección IP de Inicio de Fuente debe estar entre 1 y 254.", //_MSG133 
	"La dirección IP final de la Fuente es una dirección inválida.", //_MSG134 
	"La dirección IP final de la Fuente no puede ser cero.", //_MSG135 
	"La 1ª dirección IP final de la Fuente debe ser un número entero.", //_MSG136 
	"La 2ª dirección IP final de la Fuente debe ser un número entero.", //_MSG137 
	"La 3ª dirección IP final de la Fuente debe ser un número entero.", //_MSG138 
	"La 4ª dirección IP final de la Fuente debe ser un número entero.", //_MSG139 
	"TCP Endpoint Filtering", //_MSG14 
	"El 1er campo de la dirección IP final de la Fuente debe estar entre 1 y 254.", //_MSG140 
	"El 2º campo de la dirección IP final la Fuente debe estar entre 0 y 254.", //_MSG141 
	"El 3º campo de la dirección IP final la Fuente debe estar entre 0 y 254.", //_MSG142 
	"El 4º campo de la dirección IP final la Fuente debe estar entre 1 y 254.", //_MSG143 
	"La dirección IP estática es una dirección inválida.", //_MSG144 
	"La dirección IP estática no puede ser cero.", //_MSG145 
	"La 1ª dirección IP estática debe ser un número entero.", //_MSG146 
	"La 2ª dirección IP estática debe ser un número entero.", //_MSG147 
	"La 3ª dirección IP estática debe ser un número entero.", //_MSG148 
	"La 4ª dirección IP estática debe ser un número entero.", //_MSG149 
	"Solamente la cuenta del administrador puede cambiar la configuración.", //_MSG15 
	"El 1er campo de la dirección IP estática debe estar entre 1 y 254.", //_MSG150 
	"El 2º campo de la dirección IP estática debe estar entre 0 y 255.", //_MSG151 
	"El 3º campo de la dirección IP estática debe estar entre 0 y 255.", //_MSG152 
	"El 4º campo de la dirección IP estática debe estar entre 1 y 254.", //_MSG153 
	"La dirección IP de Inicio del Destino es una dirección inválida.", //_MSG154 
	"La dirección IP de inicio del Destino no puede ser cero.", //_MSG155 
	"La 1ª dirección IP de Inicio del Destino debe ser un número entero.", //_MSG156 
	"La 2ª dirección IP de Inicio del Destino debe ser un número entero.", //_MSG157 
	"La 3ª dirección IP de Inicio del Destino debe ser un número entero.", //_MSG158 
	"La 4ª dirección IP de Inicio del Destino debe ser un número entero.", //_MSG159 
	"Inhabilitar la retransmisión SSID hará que el WPS no funcione. ¿Seguro que desea continuar con los nuevos ajustes?", //_MSG16 
	"El 1er campo de la dirección IP de Inicio del Destino debe estar entre 1 y 254.", //_MSG160 
	"El 2º campo de la dirección IP de Inicio del Destino debe estar entre 0 y 254.", //_MSG161 
	"El 3º campo de la dirección IP de Inicio del Destino debe estar entre 0 y 254.", //_MSG162 
	"El 4º campo de la dirección IP de Inicio del Destino debe estar entre 1 y 254.", //_MSG163 
	"La dirección IP final del Destino es una dirección inválida.", //_MSG164 
	"La dirección IP de inicio del Destino no puede ser cero.", //_MSG165 
	"La 1ª dirección IP final del Destino debe ser un número entero.", //_MSG166 
	"La 2ª dirección IP final del Destino debe ser un número entero.", //_MSG167 
	"La 3ª dirección IP final del Destino debe ser un número entero.", //_MSG168 
	"La 4ª dirección IP final del Destino debe ser un número entero.", //_MSG169 
	"No se puede cambiar de modo 802.11 a modo 802.11n mientras exista una SSID con seguridad WEP o TKIP.", //_MSG17 
	"El 1er campo de la dirección IP final del Destino debe estar entre 1 y 254.", //_MSG170 
	"El 2º campo de la dirección IP final del Destino debe estar entre 0 y 254.", //_MSG171 
	"El 3º campo de la dirección IP final del Destino debe estar entre 0 y 254.", //_MSG172 
	"El 4º campo de la dirección IP final del Destino debe estar entre 1 y 254.", //_MSG173 
	"La dirección del servidor de protocolo de red no es válida.", //_MSG174 
	"La dirección del servidor de protocolo de red no puede ser cero.", //_MSG175 
	"La 1ª dirección del Servidor de protocolo de red debe ser un número entero.", //_MSG176 
	"La 2ª dirección del Servidor de protocolo de red debe ser un número entero.", //_MSG177 
	"La 3ª dirección del Servidor de protocolo de red debe ser un número entero.", //_MSG178 
	"La 4ª dirección del Servidor de protocolo de red debe ser un número entero.", //_MSG179 
	"El 1er campo del Servidor de protocolo de red debe estar entre 1 y 254.", //_MSG180 
	"El 2º campo del Servidor de protocolo de red debe estar entre 0 y 255.", //_MSG181 
	"El 3º campo del Servidor de protocolo de red debe estar entre 0 y 255.", //_MSG182 
	"El 4º campo del Servidor de protocolo de red debe estar entre 1 y 254.", //_MSG183 
	"La dirección IP de procedencia es una dirección inválida en la sección HTTP.", //_MSG184 
	"La dirección IP de procedencia no puede ser cero en la sección HTTP.", //_MSG185 
	"La 1ª dirección IP de procedencia debe ser un número entero en la sección HTTP.", //_MSG186 
	"La 2ª dirección IP de procedencia debe ser un número entero en la sección HTTP.", //_MSG187 
	"La 3ª dirección IP de procedencia debe ser un número entero en la sección HTTP.", //_MSG188 
	"La 4ª dirección IP de procedencia debe ser un número entero en la sección HTTP.", //_MSG189 
	"El 1er campo de la dirección IP de procedencia debe estar entre 1 y 254 en la sección HTTP.", //_MSG190 
	"El 2º campo de la dirección IP de procedencia debe estar entre 0 y 255 en la sección HTTP.", //_MSG191 
	"El 3º campo de la dirección IP de procedencia debe estar entre 0 y 255 en la sección HTTP.", //_MSG192 
	"El 4º campo de la dirección IP de procedencia debe estar entre 1 y 254 en la sección HTTP.", //_MSG193 
	"La dirección IP de destino es una dirección inválida en la sección HTTP.", //_MSG194 
	"La dirección IP de destino no puede ser cero en la sección HTTP.", //_MSG195 
	"La 1ª dirección IP de destino debe ser un número entero en la sección HTTP.", //_MSG196 
	"La 2ª dirección IP de destino debe ser un número entero en la sección HTTP.", //_MSG197 
	"La 3ª dirección IP de destino debe ser un número entero en la sección HTTP.", //_MSG198 
	"La 4ª dirección IP de destino debe ser un número entero en la sección HTTP.", //_MSG199 
	"Por favor, inicie WPS en el dispositivo inalámbrico que ha insertado en su red inalámbrica", //_MSG2 
	"El 1er campo de la dirección IP de destino debe estar entre 1 y 254 en la sección HTTP.", //_MSG200 
	"El 2º campo de la dirección IP de destino debe estar entre 0 y 255 en la sección HTTP.", //_MSG201 
	"El 3º campo de la dirección IP de destino debe estar entre 0 y 255 en la sección HTTP.", //_MSG202 
	"El 4º campo de la dirección IP de destino debe estar entre 1 y 254 en la sección HTTP.", //_MSG203 
	"La dirección IP de procedencia es una dirección inválida en la sección Permitir comprobación del puerto WAN.", //_MSG204 
	"La dirección IP de procedencia no puede ser cero en la sección Permitir comprobación del puerto WAN.", //_MSG205 
	"La 1ª dirección IP de procedencia debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //_MSG206 
	"La 2ª dirección IP de procedencia debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //_MSG207 
	"La 3ª dirección IP de procedencia debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //_MSG208 
	"La 4ª dirección IP de procedencia debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //_MSG209 
	"El 1er campo de la dirección IP de procedencia debe estar entre 1 y 254 en la sección Permitir comprobación del puerto WAN.", //_MSG210 
	"El 2º campo de la dirección IP de procedencia debe estar entre 0 y 254 en la sección Permitir comprobación del puerto WAN.", //_MSG211 
	"El 3º campo de la dirección IP de procedencia debe estar entre 0 y 254 en la sección Permitir comprobación del puerto WAN.", //_MSG212 
	"El 4º campo de la dirección IP de procedencia debe estar entre 1 y 254 en la sección Permitir comprobación del puerto WAN.", //_MSG213 
	"La dirección IP de destino es una dirección inválida en la sección Permitir comprobación del puerto WAN.", //_MSG214 
	"La dirección IP de destino no puede ser cero en la sección Permitir comprobación del puerto WAN.", //_MSG215 
	"La 1ª dirección IP de destino debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //_MSG216 
	"La 2ª dirección IP de destino debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //_MSG217 
	"La 3ª dirección IP de destino debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //_MSG218 
	"La 4ª dirección IP de destino debe ser un número entero en la sección Permitir comprobación del puerto WAN.", //_MSG219 
	"El 1er campo de la dirección IP de destino debe estar entre 1 y 254 en la sección Permitir comprobación del puerto WAN.", //_MSG220 
	"El 2º campo de la dirección IP de procedencia debe estar entre 0 y 255 en la sección Permitir comprobación del puerto WAN.", //_MSG221 
	"El 3º campo de la dirección IP de procedencia debe estar entre 0 y 255 en la sección Permitir comprobación del puerto WAN.", //_MSG222 
	"El 4º campo de la dirección IP de procedencia debe estar entre 1 y 254 en la sección Permitir comprobación del puerto WAN.", //_MSG223 
	"La dirección del Receptor de trampas 1 es una dirección inválida.", //_MSG224 
	"La dirección del Receptor de trampas 1 no puede ser cero.", //_MSG225 
	"La 1ª dirección del Receptor de trampas 1 debe ser un número entero.", //_MSG226 
	"La 2ª dirección del Receptor de trampas 1 debe ser un número entero.", //_MSG227 
	"La 3ª dirección del Receptor de trampas 1 debe ser un número entero.", //_MSG228 
	"La 4ª dirección del Receptor de trampas 1 debe ser un número entero.", //_MSG229 
	"El 1er campo de la dirección del Receptor de trampas 1 debe estar entre 1 y 254.", //_MSG230 
	"El 2º campo de la dirección del Receptor de trampas 1 debe estar entre 0 y 255.", //_MSG231 
	"El 3º campo de la dirección del Receptor de trampas 1 debe estar entre 0 y 255.", //_MSG232 
	"El 4º campo de la dirección del Receptor de trampas 1 debe estar entre 1 y 254.", //_MSG233 
	"La dirección del Receptor de trampas 2 es una dirección inválida.", //_MSG234 
	"La dirección del Receptor de trampas 2 no puede ser cero.", //_MSG235 
	"La 1ª dirección del Receptor de trampas 2 debe ser un número entero.", //_MSG236 
	"La 2ª dirección del Receptor de trampas 2 debe ser un número entero.", //_MSG237 
	"La 3ª dirección del Receptor de trampas 2 debe ser un número entero.", //_MSG238 
	"La 4ª dirección del Receptor de trampas 2 debe ser un número entero.", //_MSG239 
	"No se puede establecer la seguridad WEP o TKIP para una SSID, mientras que el modo 802.11 sólo es 802.11n.", //_MSG24 
	"El 1er campo de la dirección del Receptor de trampas 2 debe estar entre 1 y 254.", //_MSG240 
	"El 2º campo de la dirección del Receptor de trampas 2 debe estar entre 0 y 255.", //_MSG241 
	"El 3º campo de la dirección del Receptor de trampas 2 debe estar entre 0 y 255.", //_MSG242 
	"El 4º campo de la dirección del Receptor de trampas 2 debe estar entre 1 y 254.", //_MSG243 
	"La dirección del Receptor de trampas 3 es una dirección inválida.", //_MSG244 
	"La dirección del Receptor de trampas 3 no puede ser cero.", //_MSG245 
	"La 1ª dirección del Receptor de trampas 3 debe ser un número entero.", //_MSG246 
	"La 2ª dirección del Receptor de trampas 3 debe ser un número entero.", //_MSG247 
	"La 3ª dirección del Receptor de trampas 3 debe ser un número entero.", //_MSG248 
	"La 4ª dirección del Receptor de trampas 3 debe ser un número entero.", //_MSG249 
	"La clave compartida no puede ser soportada por WPS. Si usa esta configuración la WPS quedará inhabilitada. ¿Seguro que desea continuar con los nuevos ajustes?", //_MSG25 
	"El 1er campo de la dirección del Receptor de trampas 3 debe estar entre 1 y 254.", //_MSG250 
	"El 2º campo de la dirección del Receptor de trampas 3 debe estar entre 0 y 255.", //_MSG251 
	"El 3º campo de la dirección del Receptor de trampas 3 debe estar entre 0 y 255.", //_MSG252 
	"El 4º campo de la dirección del Receptor de trampas 3 debe estar entre 1 y 254.", //_MSG253 
	"Por favor, escriba otro valor.", //_MSG254 
	"¡El valor debe ser un número!", //_MSG255 
	"El valor de   sólo es un número par.", //_MSG257 
	"Por favor, escriba otro valor Métrico.", //_MSG258 
	"El valor Métrico debe ser un número entero.", //_MSG259 
	"La autenticación EAP no puede ser soportada por WPS. Si usa esta configuración la WPS quedará inhabilitada. ¿Seguro que desea continuar con los nuevos ajustes?", //_MSG26 
	"El intervalo de valores Métrico es 1 ~ 15.", //_MSG260 
	"La longitud de la Clave1 debe tener 5 caracteres.", //_MSG261 
	"La longitud de la Clave1 debe tener 13 caracteres.", //_MSG262 
	"La longitud de la Clave1 debe tener 10 caracteres.", //_MSG263 
	"La longitud de la Clave1 debe tener 26 caracteres.", //_MSG264 
	"La longitud de la Clave2 debe tener 5 caracteres.", //_MSG265 
	"La longitud de la Clave2 debe tener 13 caracteres.", //_MSG266 
	"La longitud de la Clave2 debe tener 10 caracteres.", //_MSG267 
	"La longitud de la Clave2 debe tener 26caracteres.", //_MSG268 
	"La longitud de la Clave3 debe tener 5 caracteres.", //_MSG269 
	"El tipo de cifrado automático no puede ser soportado por WPS. Si usa esta configuración la WPS quedará inhabilitada. ¿Seguro que desea continuar con los nuevos ajustes?", //_MSG27 
	"La longitud de la Clave3 debe tener 13 caracteres.", //_MSG270 
	"La longitud de la Clave3 debe tener 10 caracteres.", //_MSG271 
	"La longitud de la Clave3 debe tener 26 caracteres.", //_MSG272 
	"La longitud de la Clave4 debe tener 5 caracteres.", //_MSG273 
	"La longitud de la Clave4 debe tener 13 caracteres.", //_MSG274 
	"La longitud de la Clave4 debe tener 10 caracteres.", //_MSG275 
	"La longitud de la Clave4 debe tener 26 caracteres.", //_MSG276 
	"La Clave 1 es errónea, los caracteres posibles son 0~9, A~F, o a~f.", //_MSG277 
	"La Clave 2 es errónea, los caracteres posibles son 0~9, A~F, o a~f.", //_MSG278 
	"La Clave 3 es errónea, los caracteres posibles son 0~9, A~F, o a~f.", //_MSG279 
	"WPS no soporta la Clave compartida-WEP y la autenticación WPA /WPA2 TKIP/AES/Auto-EAP, por favor cambie su codificación inalámbrica si espera mantener activar la WPS.", //_MSG28 
	"La Clave 4 es errónea, los caracteres posibles son 0~9, A~F, o a~f.", //_MSG280 
	"Éxito, sistema reiniciando.", //_MSG281 
	"Fallo, sistema reiniciando.", //_MSG282 
	"Fallo, error de tamaño del Firmware.", //_MSG283 
	"Éxito, subida de archivos finalizada.", //_MSG284 
	"Fallo, error del archivo de configuración.", //_MSG285 
	"Obtener IP automáticamente ", //_MSG286 
	"Conectando con el servidor para información del firmware.", //_MSG287 
	"Esperando la respuesta del sistema anfitrión remoto...", //_MSG288 
	"Enviar Éxito del mensaje de registro", //_MSG289 
	"WPS no puede funcionar cuando utiliza autenticación EAP. Necesita ir a la página Inalámbrico/Seguridad para modificar la configuración para que WPS tenga efecto.", //_MSG29 
	"Por favor, escriba el código de autenticación gráfico correcto.", //_MSG290 
	"Escriba su nueva contraseña", //_MSG291 
	"Elija su zona horaria", //_MSG292 
	"Determine la conexión LAN y el Servidor DHCP", //_MSG293 
	"Determine la conexión de Internet", //_MSG294 
	"Determine la conexión LAN inalámbrica", //_MSG295 
	"PPPoE para obtener IP automáticamente", //_MSG296 
	"PPPoE con una dirección IP fija", //_MSG297 
	"¿Mostrar el Asistente la próxima vez?", //_MSG298 
	"Haga 'clic' en el botón de Reinicio para guardar los ajustes y reiniciar el Router Inalámbrico.", //_MSG299 
	"Los filtros se utilizan para permitir o denegar el acceso a usuarios LAN/WLAN a la red local (LAN/WLAN), gestión de la red o Internet. ", //_MSG3 
	"WPS no puede funcionar cuando la retransmisión SSID está inhabilitada. Necesita ir a la página Inalámbrico/Básico para modificar la configuración para que WPS tenga efecto.", //_MSG30 
	"Establecer el Servidor LAN y DHCP", //_MSG300 
	"Editar Protocolo/Filtro IP en la Lista", //_MSG301 
	"Por favor, introduzca el servidor NTP", //_MSG302 
	"Asistente de configuración de TEW-731BR", //_MSG303 
	"obtenido por Tipo de conexión_wz24", //_MSG304 
	"Establecer BigPond", //_MSG305 
	"Establecer PPPoE(Rusia)", //_MSG306 
	"Establecer PPTP Cliente (Rusia)", //_MSG307 
	"Establecer L2TP Cliente (Rusia)", //_MSG308 
	"Nota: Por favor, añada primero la dirección MAC en la Tabla MAC de abajo, luego seleccione \"sólo permitir\" o \"sólo denegar\", y haga 'clic' en \"Aplicar\".", //_MSG309 
	"Por favor, establezca sus datos de BigPond Cable y luego pulse 'Siguiente' para continuar.", //_MSG309 
	"WPS no puede funcionar con la conexión inalámbrica inhabilitada. Necesita ir a la página Inalámbrico/Básico para modificar la configuración para que WPS tenga efecto.", //_MSG31 
	"Esta pantalla le permite ver el estado de las conexiones <A HREF=\"glossary.htm#def_LAN\">LAN</A>, <A HREF=\"glossary.htm#def_WAN\">WAN</A> y LAN inalámbrica del router, y ver los registros y estadísticas relativos a las conexiones y a la transferencia de datos.", //_MSG310 
	"Haga 'clic' en los siguientes elementos para más información:", //_MSG311 
	"Esta pantalla le permite ver la configuración <A HREF=\"glossary.htm#def_LAN\">LAN</A>, <A HREF=\"glossary.htm#def_wireless_lan\"> LAN inalámbrica</A> y <A HREF=\"glossary.htm#def_WAN\">WAN</A> del router.", //_MSG312
	"<SPAN STYLE=\"font-weight : bold;\">Versión del Firmware:</SPAN><A NAME=\"status_firmware_version\"></A> Muestra la última construcción de la interfaz del <A HREF=\"glossary.htm#def_firmware\">firmware</A> del router inalámbrico. Después de actualizar el Firmware en <A HREF=\"help_tools.htm#tools_firmware\">Herramientas - Firmware</A>, compruebe esto para asegurar que su Firmware se ha actualizado correctamente", //_MSG313 
	"<SPAN STYLE=\"font-weight : bold;\">WAN:</SPAN><A NAME=\"status_devinfo_WAN\"></A>  Este campo muestra la <A HREF=\"glossary.htm#def_MAC_address\">dirección MAC</A> de la interfaz <A HREF=\"glossary.htm#def_WAN\">WAN</A> del router, es estado del cliente <A HREF=\"glossary.htm#def_dhcp\">DHCP</A>, la <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A>, la <A HREF=\"glossary.htm#def_subnet_mask\">máscara subred</A>, la <A HREF=\"glossary.htm#def_gateway\">puerta de enlace por defecto</A> y la <A HREF=\"glossary.htm#def_DNS\">DNS</A>.", //_MSG314 
	" Haga 'clic' en Autorización DHCP para autorizar a todas las direcciones IP asignadas a las estaciones de los clientes conectados al WAN a través del router. Haga 'clic' sobre <SPAN STYLE=\"font-style : italic;\">Renovar DHCP</A> para reasignar las direcciones IP a las estaciones de los cliente conectados a la WAN.", //_MSG315 
	"<SPAN STYLE=\"font-weight : bold;\">Inalámbrico:</SPAN><A NAME=\"status_devinfo_wireless\"></A> Muestra la información de la conexión inalámbrica del router, incluyendo la <A HREF=\"glossary.htm#def_MAC_address\">dirección MAC</A> de la interfaz inalámbrica del router, el estado de la conexión, el estado de <A HREF=\"glossary.htm#def_ssid\">SSID</A>, qué canal se está usando y si la <A HREF=\"glossary.htm#def_WEP\">WEP</A> está habilitada o no.", //_MSG316 
	"<SPAN STYLE=\"font-weight : bold;\">LAN:</SPAN><A NAME=\"status_devinfo_lan\"></A> Este campo muestra la <A HREF=\"glossary.htm#def_MAC_address\">dirección MAC</A> de la interfaz <A HREF=\"glossary.htm#def_LAN\">LAN</A> del router, la <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A>, la <A HREF=\"glossary.htm#def_subnet_mask\">máscara subred</A>, y el estado del servidor <A HREF=\"glossary.htm#def_dhcp\">DHCP</A>. Haga 'clic' sobre la <SPAN STYLE=\"font-style : italic;\"><A HREF=\"help_main.htm#lanski_dhcp_server\">Tabla DHCP</A> para ver las estaciones de clientes actualmente conectadas el la interfaz LAN del router.", //_MSG317 
	"volver arriba", //_MSG318 
	"Esta pantalla le permite vez una registro activo de las estadísticas, eventos y actividades del sistema del router. El registro muestra hasta 200 entradas. Las entradas más antiguas se sobrescriben por las nuevas. Puede guardar los registros a través de la pantalla de Configuración del Registro (Enviar a). Las órdenes de la pantalla del registro son las siguientes:", //_MSG319
	"¡Cambio realizado con éxito!", //_MSG32 
	"<SPAN STYLE=\"font-weight : normal;\">Haga 'clic' </SPAN>sobre <SPAN STYLE=\"font-style : italic;font-weight : normal;\">Primera Página</SPAN><SPAN STYLE=\"font-weight : normal;\"> para ver la primera página del registro</SPAN>", //_MSG320 
	"<SPAN STYLE=\"font-weight : normal;\">Haga 'clic'</SPAN> sobre <SPAN STYLE=\"font-style : italic;font-weight : normal;\">Última Página</SPAN><SPAN STYLE=\"font-weight : normal;\"> para ver la página final del registro</SPAN>", //_MSG321 
	"<SPAN STYLE=\"font-weight : normal;\">Haga 'clic'</SPAN> sobre <SPAN STYLE=\"font-style : italic;font-weight : normal;\">Página Anterior</SPAN><SPAN STYLE=\"font-weight : normal;\"> para ver la página inmediatamente anterior a la página actual</SPAN>", //_MSG322 
	"<SPAN STYLE=\"font-weight : normal;\">Haga 'clic' sobre </SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">Página Siguiente</SPAN><SPAN STYLE=\"font-weight : normal;\"> para ver la página inmediatamente posterior a la página actual</SPAN>", //_MSG323 
	"<SPAN STYLE=\"font-weight : normal;\">Haga 'clic' sobre </SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">Borrar Registro</SPAN><SPAN STYLE=\"font-weight : normal;\"> para eliminar el contenido del registro y empezar un registro nuevo.</SPAN>", //_MSG324 
	"<SPAN STYLE=\"font-weight : normal;\">Haga 'clic' sobre </SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">Refrescar</SPAN><SPAN STYLE=\"font-weight : normal;\"> para actualizar las estadísticas del registro</SPAN>", //_MSG325 
	"<SPAN STYLE=\"font-weight :</SPAN><A NAME=\"status_log_time\"></A> bold;\">hora :Muestra la fecha y la hora en la que se creó la entrada del registro.", //_MSG326 
	"<SPAN STYLE=\"font-weight : bold;\">Mensaje:</SPAN><A NAME=\"status_log_message\"></A> Muestra la información resumen de la entrada de registro.", //_MSG327 
	"<SPAN STYLE=\"font-weight : bold;\">Nota:</SPAN><A NAME=\"status_log_note\"></A> Muestra la <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> de la comunicación.", //_MSG328 
	"Esta pantalla le permite establecer los parámetros de inicio de sesión del router.", //_MSG329 
	"Por favor, pulse el Botón 'Pulsar' (físico o virtual) en el dispositivo inalámbrico <br> que está agregando a la red inalámbrica en menos de", //_MSG33 
	"<strong>autenticación SMTP : </strong>Seleccione 'Habilitado' si su servidor SMTP necesita que usted inicie sesión para enviar un corre-e. Escriba el nombre de la cuenta y la contraseña en los campos 'Cuenta SMTP' y 'Contraseña SMTP. ", //_MSG330 
	"<strong>Cuenta SMTP:</strong>  Si la autenticación SMTP está habilitada, escriba aquí el nombre de la cuenta SMTP.", //_MSG331 
	"<strong>Contraseña SMTP:</strong> Si la autenticación SMTP está habilitada, escriba aquí la contraseña de la cuenta SMTP.", //_MSG332 
	"<SPAN STYLE=\"font-weight : bold;\">Servidor SMTP:</SPAN><A NAME=\"status_logset_smtp_server\"></A> Escriba en el campo siguiente la dirección del servidor <A HREF=\"glossary.htm#def_SMTP\">SMTP</A> para el correo-e que enviará el registro. ", //_MSG333 
	"<SPAN STYLE=\"font-weight : bold;\">Enviar a:</SPAN><A NAME=\"status_logset_sent_to\"></A> Escriba la dirección de correo-e a la que se enviará el registro. Haga 'clic' sobre <SPAN STYLE=\"font-style : italic;\">Enviar registro ahora</SPAN>, para enviar el registro actual por correo-e.", //_MSG334 
	"<SPAN STYLE=\"font-weight : bold;\">Enviar Registros por correo-e: Cuando el registro está completo - </SPAN>sin tiempo fijo. Se enviará el registro cuando esté completo, lo que dependerá del volumen de tráfico. ", //_MSG335 
	"<SPAN STYLE=\"font-weight : bold;\">Todos los días, Todos los lunes ... -</SPAN> El registro se enviará según el intervalo especificado. ", //_MSG336 
	"Si selecciona \"Todos los días\", el registro se envía a la hora especificada.", //_MSG337 
	"Si especifica un día, el registro se envía una vez por semana el día especificado.", //_MSG338 
	"Seleccione la hora del día a la que desea envía el correo-e.", //_MSG339 
	"No ha añadido el dispositivo inalámbrico a su red inalámbrica dentro del periodo habilitado para ello, por favor haga 'clic' en el botón de abajo para hacerlo otra vez.", //_MSG34 
	"Si el registro está completo antes de la hora especificada para enviarlo, se enviará de todas formas.", //_MSG340 
	"<SPAN STYLE=\"font-weight : bold;\">Servidor de protocolo de red:</SPAN><A NAME=\"status_logset_syslog_server\"></A> Escriba la <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> del Servidor de protocolo de red (<A HREF=\"glossary.htm#def_SysLog_Server\">Syslog</A>) si desea que el router oiga y reciba los mensajes de protocolo de red entrantes.", //_MSG341 
	"<SPAN STYLE=\"font-weight : bold;\">Tipo de registro:</SPAN><A NAME=\"status_logset_log_type\"></A> Le permite seleccionar que elementos se incluirán en el registro:", //_MSG342 
	"<SPAN STYLE=\"font-weight : bold;\">Actividad del sistema:</SPAN> Muestra la información relacionada con el funcionamiento del router.", //_MSG343 
	"<SPAN STYLE=\"font-weight : bold;\">Información de depuración:</SPAN> Muestra la información relacionada con los errores y fallos de funcionamiento del sistema.", //_MSG344 
	"<SPAN STYLE=\"font-weight : bold;\">Ataques:</SPAN> Muestra la información sobre cualquier actividad maliciosa en la red.", //_MSG345 
	"<SPAN STYLE=\"font-weight : bold;\">Paquetes perdidos:</SPAN> Muestra la información de los paquetes que no se han transferido satisfactoriamente.", //_MSG346 
	"<SPAN STYLE=\"font-weight : bold;\">Aviso:</SPAN> Muestra los avisos importantes del <A HREF=\"glossary.htm#def_administrator\">administrador</A> del sistema.", //_MSG347 
	"Esta pantalla muestra una tabla que presenta la velocidad de transmisión de paquetes a través de los puertos <A HREF=\"glossary.htm#def_LAN\">LAN</A>, <A HREF=\"glossary.htm#def_wireless_lan\">LAN inalámbrico</A> y <A HREF=\"glossary.htm#def_WAN\">WAN</A> del router (en bytes por segundo). ", //_MSG348 
	"Haga 'clic' en Puesta a cero para <SPAN STYLE=\"font-style : italic;\">borrar</SPAN> todas las estadísticas y empezar el registro de estadísticas de nuevo.", //_MSG349 
	"Conflicto del puerto HTTP de Administración Remota con el puerto público del servidor virtual.", //_MSG35 
	"<SPAN STYLE=\"font-weight : bold;\">Utilización:</SPAN><A NAME=\"status_statistics_utilization\"></A> Separa las estadísticas de transmisión de paquetes en las categorías de enviar y recibir. Pico indica la transmisión máxima de paquetes registrada desde que se inicio la toma de muestras, durante la transmisión desde que se inició el registro.", //_MSG350 
	"<strong>Cancelar:</strong> Haga 'clic' en el botón <em>Cancelar</em> para borrar todos los campos y escribir información nueva.", //_MSG351 
	"Esta pantalla le permite ver información sobre los dispositivos inalámbricos que están conectados a la interfaz inalámbrica del router.", //_MSG352 
	"<SPAN STYLE=\"font-weight : bold;\">Tiempo conectado:</SPAN><A NAME=\"status_wireless_connected_time\"></A> Muestra cuanto tiempo ha estado conectado el dispositivo inalámbrico al <A HREF=\"glossary.htm#def_LAN\">LAN</A> a través del router.", //_MSG353 
	"<SPAN STYLE=\"font-weight : bold;\">dirección MAC:</SPAN><A NAME=\"status_wireless_mac_address\"></A> Muestra la <A HREF=\"glossary.htm#def_MAC_address\">dirección MAC</A> de interfaz <A HREF=\"glossary.htm#def_wireless_lan\">LAN inalámbrica</A> de los dispositivos.", //_MSG354 
	"Esta página le permite establecer los parámetros de comunicaciones inalámbricas para la función LAN <A HREF=\"glossary.htm#def_wireless_lan\">inalámbrica</A> del router.", //_MSG355 
	"Esta página le permite habilitar e inhabilitar la función <A HREF=\"glossary.htm#def_wireless_lan\">LAN inalámbrica</A>, escribir una <A HREF=\"glossary.htm#def_ssid\">SSID</A>, y establecer el canal para las comunicaciones inalámbricas.", //_MSG356 
	"<SPAN STYLE=\"font-weight : bold;\">Activado/Desactivado:</SPAN><A NAME=\"Wireless_enable_disable\"></A>Habilita e inhabilita la <A HREF=\"glossary.htm#def_wireless_lan\">LAN inalámbrica</A> a través del router.", //_MSG357 
	"<SPAN STYLE=\"font-weight : bold;\">SSID:</SPAN><A NAME=\"wireless_SSID\"></A> Escriba una <A HREF=\"glossary.htm#def_ssid\">SSID</A> en la ventana de texto. La SSID de cualquier dispositivo inalámbrico debe coincidir con la SSID que escriba aquí para que el dispositivo inalámbrico acceda a la LAN y a la WAN a través del router.", //_MSG358 
	"<SPAN STYLE=\"font-weight : bold;\">Canales:</SPAN><A NAME=\"wireless_channel\"></A>  Seleccione un canal de transmisión para las comunicaciones inalámbricas. La SSID de cualquier dispositivo inalámbrico debe coincidir con la SSID que escriba aquí para que el dispositivo inalámbrico acceda a la <A HREF=\"glossary.htm#def_LAN\">LAN</A> y a la <A HREF=\"glossary.htm#def_WAN\">WAN</A> a través del router.", //_MSG359 
	"Por favor, escriba el Nombre de Usuario.", //_MSG36 
	"<strong>modo 802.11:</strong><A NAME=\"wireless_802.11mode\"></A> Si todos los dispositivos inalámbricos que desea conectar conectar con este router pueden usar el mismo modo de transmisión, usted puede mejorar el rendimiento ligeramente eligiendo el modo 'Único' apropiado. Si tiene varios dispositivos que usan diferentes modos de transmisión, elija el modo 'Mixto' apropiado.", //_MSG360 
	"<strong>Ancho de canal:</strong><A NAME=\"wireless_channel_width\"></A> Normalmente la opción \"Auto 20/40 MHz\" es la mejor. Las otras opciones están disponibles para circunstancias especiales. ", //_MSG361 
	"<strong>retransmisión SSID:</strong> Seleccione Inhabilitada si no desea que la SSID de su red inalámbrica sea retransmitida por el TEW-731BR. Si esta opción está Inhabilitada, la SSID del TEW-731BR no se verá a través de la Utilidades de Evaluación Sitio de modo que sus clientes inalámbricos necesitarán conocer la SSID de su TEW-731BR para poder conectarse a él. ", //_MSG362 
	"<strong>WMM:</strong> Habilitando el Wi-Fi Multimedia le ofrecerá redes Wi-Fi estables que mejoran la experiencia del usuario para aplicaciones de audio, video y voz mediante la priorización del tráfico de datos.", //_MSG363 
	"Esta pantalla le permite establecer los parámetros <A HREF=\"glossary.htm#def_WEP\">WEP</A> | WPA | WPA2 | WPA-Auto para comunicaciones inalámbricas seguras.", //_MSG364 
	"Para proteger su privacidad, usted puede configurar las funciones de seguridad inalámbrica. Este dispositivo soporta dos modos de seguridad inalámbrica, a saber: WPA-Personal (PSK) y WPA-Enterprise (RADIUS). El WPA proporciona un mayor nivel de seguridad. El WPA-Personal no necesita un servidor de autenticación. La opción WPA-Enterprise requiere de un servidor RADIUS externo.", //_MSG365 
	"<strong> tipo de autenticación.:</strong> Seleccione el tipo de <a href=\"glossary.htm#def_Authentication\">autenticación</A>. El Sistema Abierto permite acceso público al router a través de comunicaciones inalámbricas. ", //_MSG366 
	"<strong>WEP:</strong> WEP es el estándar de codificación inalámbrica. Para usarlo debe introducir la misma clave en el router y en las estaciones inalámbricas. Para claves de 64 bits debe introducir 10 dígitos hexadecimales en cada ventana de clave.  Para claves de 128 bits debe introducir 26 dígitos hexadecimales en cada ventana de clave.  Un dígito hexadecimal es o un número del 0 al 9 o una letra de la A a la F. Para un uso más seguro del WEP establezca el tipo de autenticación para la clave compartida cuando tiene WEB habilitada. ", //_MSG367 
	"Usted también puede escribir cualquier texto en la ventana de la clave WEP, en cuyo caso será convertida en una clave hexadecimal usando los valores ASCII de los caracteres. Un máximo de 5 caracteres de texto se se pueden escribir para las claves de 64 bits, y un máximo de 13 caracteres para las claves de 128 bits.", //_MSG368 
	"<em>Si elige la opción de seguridad WEP, este dispositivo SÓLO funcionará en modo Inalámbrico aceptado (802.11B/G). Esto quiere decir que NO obtendrá funcionamiento 11N debido al hecho que WEP no está soportada por la especificación 11N.</em>", //_MSG369 
	"La IP DHCP estática está fuera de margen.", //_MSG37 
	"<SPAN STYLE=\"font-weight : bold;\">modo :</SPAN><A NAME=\"WEP_mode\"></A> Seleccione el nivel de codificación que desee desde la lista desplegable. Elrouter soporta codificación de 64--, 128-- bits.", //_MSG370 
	"<SPAN STYLE=\"font-weight : bold;\">Clave 1 ~ Clave 4:</SPAN><A NAME=\"WEP_key1to4\"></A> Le permite crear una esquema de codificación para las transmisiones LAN inalámbricas. Introduzca manualmente un conjunto de valores para cada clave. Seleccione la clave que desea usar marcando el botón de elección junto a la clave. Haga 'clic' sobre <SPAN STYLE=\"font-style : italic;\">Borrar</A> para borrar los valores de las claves.", //_MSG371 
	"<SPAN STYLE=\"font-weight : bold;\">Nota:</SPAN> Una codificación de 128 bits necesita más recursos del sistema que una codificación de 64 bits. Use una codificación de 64 bits para un mejor funcionamiento.", //_MSG372 
	"<strong>Seguridad WPA/WPA2/WPA-Auto:</strong>", //_MSG373 
	"Si selecciona WPA, WPA2 o WPA-Auto EAP, aparece la anterior pantalla. Por favor, establezca la longitud de la clave de codificación y los parámetros para el servidor RADIUS.", //_MSG374 
	"WPA requiere estaciones para usar una codificación y la autenticación de alto nivel. Para compatibilidad de sistemas heredados, use modo WPA o WPA2. Este modo usa WPA para clientes heredados mientras mantiene una alta seguridad con las estaciones con capacidad WPA2. Se utilizará el cifrado más fuerte que soporte el cliente.  Para mayor seguridad, use el modo 'WPA2 Only' (sólo WPA2). En este modo, a las estaciones heredadas no se les permite acceder con seguridad WPA.  El cifrado AES se usará a través de la red inalámbrica para asegurar la mejor seguridad.", //_MSG375 
	"<strong>Servidor RADIUS:</strong>", //_MSG376 
	"1.Escriba la dirección IP, el puerto usado y el Secreto Compartido por el Servidor Radius Primario.", //_MSG377 
	"2.Escriba la dirección IP, el puerto usado y el Secreto Compartido por el Servidor Radius Secundario.  (opcional)", //_MSG378 
	"<strong>Seguridad WPA/WPA2/WPA-PSK:</strong>", //_MSG379 
	"La Comunidad no puede quedar en blanco,", //_MSG38 
	"Si selecciona WPA, WPA2 o WPA-Auto PSK, cada usuario puede introducir una contraseña para acceder a la red.", //_MSG380 
	"<strong>tipo de cifrado:</strong> Seleccione el tipo de cifrado para codificación TKIP o AES, o seleccione Auto para detectar automáticamente el tipo de cifrado.", //_MSG381 
	"<strong>Contraseña confirmada:</strong> La longitud debe ser entre 8 y 63 caracteres ASCII o 64 caracteres Hexadecimales.", //_MSG382 
	"Esta pantalla le permite configurar la funciones inalámbricas avanzadas.", //_MSG383 
	"<SPAN STYLE=\"font-weight : bold;\">Intervalo de baliza:</SPAN><A NAME=\"advanced_beacon_interval\"></A> Escriba el <A HREF=\"glossary.htm#def_beacon_interval\">intervalo de la baliza</A> en la ventana de texto. Puede especificar un valor desde 25 hasta 1000. El intervalo de baliza por defecto es 100.", //_MSG384 
	"<SPAN STYLE=\"font-weight : bold;\">umbral RTS : </SPAN><A NAME=\"advanced_rts_threshold\"></A>Escriba el umbral <A HREF=\"glossary.htm#def_RTS\">RTS</A> (Necesario para enviar, siglas en inglés) en la ventana de texto. Este valor estabiliza el flujo de datos. Si el flujo de datos es irregular, elija valores entre 256 y 2346 hasta que el flujo de datos se normalice.", //_MSG385 
	"<SPAN STYLE=\"font-weight : bold;\">Umbral de fragmentación:</SPAN><A NAME=\"advanced_fragmentation_threshold\"></A> Escriba el umbral de <A HREF=\"glossary.htm#def_fragmentation\">fragmentación</A> en la ventana de texto. Si los valores de error de transferencia de paquetes son altos, elija valores entre 1500 y 2346 hasta que los errores de transferencia de datos se reduzcan al mínimo.", //_MSG386 
	"<SPAN STYLE=\"font-weight : bold;\">Nota:</SPAN> Ajustar el valor del umbral de fragmentación puede disminuir el rendimiento del sistema.", //_MSG387 
	"<SPAN STYLE=\"font-weight : bold;\">Intervalo DTIM:</SPAN><A NAME=\"advanced_dtim_interval\"></A> Escriba un intervalo <A HREF=\"glossary.htm#def_DTIM\">DTIM</A> (Mensaje de Indicación de Tráfico de Entrega, siglas en inglés) en la ventana de texto. Usted puede especificar un valor entre 1 y 255. El valor por defecto es 1.", //_MSG388 
	"802.1X  ", //_MSG389 
	"¡La lista de Reservas DHCP está llena! Por favor, elimine una Entrada.", //_MSG39 
	"El IEEE 802.1X es un estándar para autenticación de usuarios en la red. El ROUTER soporta EAP (Protocolo de Autenticación Extensible, siglas en inglés) como lo especifica 802.1X. EAP proporciona LAN inalámbrica con una fuerte autenticación mutua entre el cliente y el servidor de autenticación.  EL ROUTER puede servir como un Autenticador 802.1X entre clientes inalámbricos 802.1X y el servidor de autenticación normalmente instalado en un servidor RADIUS. Por favor tenga en cuenta que al habilitar el 802.1X necesitará un servidor RADIUS para la autenticación del usuario en la red.", //_MSG390 
	"<SPAN STYLE=\"font-weight : bold;\">clave de codificación :</SPAN> La longitud de la clave de codificación puede ser de 64 bits o de 128 bits, cuando se usa con productor AirPlus. La clave de codificación tiene periodo de caducidad que se puede especificar desde 5 minutos a 1 día.", //_MSG391 
	"<SPAN STYLE=\"font-weight : bold;\">servidor Radius:</SPAN> El servidor RADIUS (Servicio de Usuario de Marcación de Acceso Remoto, siglas en inglés) de claves de codificación se usa para la autenticación del usuario. Necesitará introducir la dirección IP del Servidor RADIUS y el número de puerto para la autenticación. En la mayoría de servidores RADIUS, se usa el puerto 1812 para este propósito. Se puede introducir la escritura de un Secreto Compartido como una protección de seguridad adicional para la comunicación entre el servidor RADIUS y el ROUTER. Se puede introducir un segundo Servidor RADIUS como opción. Consulte con su proveedor de RADIUS o el manual de su Servidor RADIUS para más detalles", //_MSG392 
	"Configuración Protegida Wi-F (WPS)", //_MSG393 
	"Esta pantalla le permite establecer los parámetros <a href=\"glossary.htm#wireless_wps\">WPS (Configuración Protegida Wi-Fi, siglas en inglés)</A>, para instalar fácilmente las comunicaciones inalámbricas.", //_MSG394 
	"<strong>WPS:</strong> Función de Habilitar/Inhabilitar la <a href=\"glossary.htm#wireless_wps\">Configuración Protegida Wi-Fi</A>.", //_MSG395 
	"<strong>Estado:</strong> Presenta la información del estado (<a href=\"glossary.htm#wireless_unconf\">estado no configurado</A> / <a href=\"glossary.htm#wireless_conf\">estado configurado</A>) del <a href=\"glossary.htm#wireless_wps\">WPS</a>. ", //_MSG396 
	"<strong>Número PIN propio:</strong> Muestra el <a href=\"glossary.htm#wireless_pin\">número PIN</a> por defecto del AP.", //_MSG397 
	"<strong>Número PIN del cliente:</strong> Teclee el <a href=\"glossary.htm#wireless_pin\">número PIN</a> del cliente que usa para negociar con el AP a través del protocolo <a href=\"glossary.htm#wireless_wps\">WPS</a>. Sólo se usa cuando los usuarios quieren que su estación se integre en una red de AP.", //_MSG398 
	"<strong>Configuración de pulsador:</strong> Al hacer 'clic' sobre este botón llamará al método <a href=\"glossary.htm#wireless_pbc\">PBC (Configuración de pulsador)</a> del WPS. sólo se usa cuando AP actúa de Registrador. ", //_MSG399 
	"Solamente permite el acceso a la red a PCs con las direcciones MAC enumeradas a continuación.  ", //_MSG4 
	"El número permitido de router estático es .", //_MSG40 
	"La pantalla principal le permite configurar el servidor <A HREF=\"glossary.htm#def_LAN\">LAN</a> y <A HREF=\"glossary.htm#def_dhcp\">DHCP</a>, establecer los parámetros <A HREF=\"glossary.htm#def_WAN\">WAN</a>, crear contraseñas de <A HREF=\"glossary.htm#def_administrator\">administrador</a> y usuario, ajustar la hora local, la zona horaria y el D1009.", //_MSG400 
	"Esta página le permite establecer la propiedades <A HREF=\"glossary.htm#def_LAN\">LAN</A> y <A HREF=\"glossary.htm#def_dhcp\">DHCP</A>, tales como el <A HREF=\"glossary.htm#def_host_name\">nombre</A> del sistema anfitrión, la dirección <A HREF=\"glossary.htm#def_ip_address\">IP</A>, la <A HREF=\"glossary.htm#def_subnet_mask\">máscara subred</A>, y el <A HREF=\"glossary.htm#def_domain_name\">nombre del dominio</A>.  Los perfiles LAN y DHCP se enumeran en la tabla DHCP en la parte inferior de la pantalla.", //_MSG401 
	"<SPAN STYLE=\"font-weight : bold;\">Nombre el servidor</SPAN><A NAME=\"lan&amp;dhcp_server_hostname\"></A> L Escriba el <A HREF=\"glossary.htm#def_host_name\">nombre</A> del sistema anfitrión en la ventana de texto. Es necesario el nombre del sistema anfitrión en algunos <A HREF=\"glossary.htm#def_ISP\">ISP</A>s.  El nombre del sistema anfitrión por defecto es \"TEW-731BR\"", //_MSG402 
	"<SPAN STYLE=\"font-weight : bold;\">dirección IP:</SPAN><A NAME=\"lan_dhcp_server_ipaddress\"></A> Esta es la <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> del router. La dirección IP por defecto es 192.168.10.1.", //_MSG403 
	"<SPAN STYLE=\"font-weight : bold;\">máscara subred :</SPAN><A NAME=\"lan_dhcp_server_subnet_mask\"></A> Teclee en la ventana de texto la <A HREF=\"glossary.htm#def_subnet_mask\">mascara subred</A> para el router. La máscara subred por defecto es <SPAN STYLE=\"font-style : normal;\">\"255.255.255.0\"</SPAN>", //_MSG404 
	"<SPAN STYLE=\"font-weight : bold;\">servidor DHCP:</SPAN><A NAME=\"lan_dhcp_server_dhcp_server\"></A> Habilita el servidor <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> para que permita al router asignar automaticamtne direcciones IP a los dispositivos que se conectan al puerto <A HREF=\"glossary.htm#def_LAN\">LAN</A> o se conectan de modo inalámbrico al TEW-731BR. El DHCP está habilitado por defecto.", //_MSG405 
	"Todos los PCs clientes DHCP están enumerados en la tabla de la parte inferior de la pantalla. La tabla muestra el nombre del sistema anfitrión, la dirección IP, y la dirección <A HREF=\"glossary.htm#def_MAC_address\">MAC</A> del cliente. ", //_MSG406 
	"<SPAN STYLE=\"font-weight : bold;\">IP de inicio:</SPAN><A NAME=\"lan_dhcp_server_start_ip\"></A> Teclee una <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> para que sirva de punto inicial del intervalo de IPs que usará el <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> para asignar direcciones IPs a todos los dispositivos conectados por cable o de modo inalámbrico al router.", //_MSG407 
	"<SPAN STYLE=\"font-weight : bold;\">IP terminal:</SPAN><A NAME=\"lan_dhcp_server_end_ip\"></A> Teclee una <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> para que sirva de punto final del intervalo de IPs que usará el <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> para asignar direcciones IPs a todos los dispositivos conectados por cable o de modo inalámbrico al router.", //_MSG408 
	"<SPAN STYLE=\"font-weight : bold;\">Nombre del dominio:</SPAN><A NAME=\"lan_dhcp_server_domain_name\"></A> Escriba el <A HREF=\"glossary.htm#def_domain_name\">nombre del dominio</A> local de la red en la ventana de texto. Este elemento es opcional.", //_MSG409 
	"Conflicto del puerto público con el puerto HTTP de Administración Remota. ", //_MSG41 
	"<strong>Periodo de alquiler:</strong> El tiempo de alquiler especifica la cantidad de tiempo de conexión que un usuario de la red tiene autorizado en su dirección de IP dinámica actual.", //_MSG410 
	"<strong>DHCP estática:</strong> Reserva una dirección IP a un cliente DHCP. Esto asegura que la dirección IP del PC no cambia.", //_MSG411 
	"Esta pantalla le permite configurar la conexión <A HREF=\"glossary.htm#def_WAN\">WAN</A> del router, especificar la <A HREF=\"glossary.htm#def_IP\">dirección IP</A> para la WAN, añadir direcciones IP de <a href=\"glossary.htm#def_DNS\">DNS</A>, introducir la <A HREF=\"glossary.htm#def_MAC_address\">dirección MAC</A> y establecer el <A HREF=\"glossary.htm#def_MTU\">MTU</A>.", //_MSG412 
	"<SPAN STYLE=\"font-weight : bold;\">tipo de conexión:</SPAN><A NAME=\"WAN_connection_type\"></A> Seleccione el tipo de conexión, o cliente <A HREF=\"glossary.htm#def_dhcp\">DHCP</A>/ <A HREF=\"glossary.htm#def_PPPoE\">PPPoE</A> de IP fija , PPTP, L2TP, PPPoE Rusa, PPTP Rusa o L2TP Rusa de la lista desplegable.", //_MSG413 
	" Cuando usa el cliente DHCP/IP fija, introduzca la información siguiente en los campos (parte de la información la proporciona su Proveedor de Servicios de Internet <A HREF=\"glossary.htm#def_ISP\">ISP</A>).", //_MSG414 
	"<SPAN STYLE=\"font-weight : bold;\">WAN IP:</SPAN><A NAME=\"WAN_WAN_IP\"></A> Seleccione si desea que el <a href=\"glossary.htm#def_ISP\">ISP</A> proporciona la <a href=\"glossary.htm#def_ip_address\">dirección IP</A> automáticamente, o si desea asignar una dirección IP fija al <a href=\"glossary.htm#def_WAN\">WAN</A> del router. <SPAN STYLE=\"font-weight : normal;\">Cuando</SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\"> selecciona Especificar IP</SPAN><SPAN STYLE=\"font-weight : normal;\">, teclee la dirección </SPAN><A HREF=\"glossary.htm#def_ip_address\"><SPAN STYLE=\"font-weight : normal;\">IP</SPAN> del PPPoE en la ventana de texto. Su </SPAN><A HREF=\"glossary.htm#def_ISP\"><SPAN STYLE=\"font-weight : normal;\">ISP</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> le proporcionará esta información. </SPAN>", //_MSG415 
	"<SPAN STYLE=\"font-weight : bold;\">DNS 1/2:</SPAN> <SPAN STYLE=\"font-weight : normal;\"> Escriba asta dos números de </SPAN><A HREF=\"glossary.htm#def_DNS\"><SPAN STYLE=\"font-weight : normal;\">DNS</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> en las ventanas de texto. Su </SPAN><A HREF=\"glossary.htm#def_ISP\"><SPAN STYLE=\"font-weight : normal;\">ISP</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> le proporcionará esta información.</SPAN>", //_MSG416 
	"<SPAN STYLE=\"font-weight : bold;\">dirección MAC:</SPAN><A NAME=\"WAN_MAC_address\"></A><SPAN STYLE=\"font-weight : normal;\"> Si se lo solicita su Proveedor de Servicios de Internet (</SPAN><A HREF=\"glossary.htm#def_ISP\"><SPAN STYLE=\"font-weight : normal;\">ISP</SPAN></A><SPAN STYLE=\"font-weight : normal;\">), teclee la </SPAN><A HREF=\"glossary.htm#def_MAC_address\"><SPAN STYLE=\"font-weight : normal;\">dirección MAC</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> de la interfaz </SPAN><A HREF=\"glossary.htm#def_WAN\"><SPAN STYLE=\"font-weight : normal;\">WAN</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> del router en este campo.</SPAN>", //_MSG417 
	"Cuando use PPPoE, introduzca la siguiente información el los campos (parte de la información se la proporciona su Proveedor de Servicios de Internet (<A HREF=\"glossary.htm#def_ISP\">ISP</A>)). ", //_MSG418 
	"<SPAN STYLE=\"font-weight : bold;\">WAN IP:</SPAN><SPAN STYLE=\"font-weight : normal;\"> Seleccione si desea que el <A HREF=\"glossary.htm#def_ISP\">ISP</A> proporciona la <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> automáticamente, o si desea asignar una dirección IP fija al <A HREF=\"glossary.htm#def_WAN\">WAN</A> del router. Cuando </SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">selecciona Especificar IP</SPAN><SPAN STYLE=\"font-weight : normal;\">, teclee la </SPAN><A HREF=\"glossary.htm#def_ip_address\"><SPAN STYLE=\"font-weight : normal;\">dirección IP</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> del PPPoE en la ventana de texto. Su </SPAN><A HREF=\"glossary.htm#def_ISP\"><SPAN STYLE=\"font-weight : normal;\">ISP</SPAN></A><SPAN STYLE=\"font-weight : normal;\"> le proporcionará esta información. </SPAN>", //_MSG419 
	"El valor 'LAN a LAN' o el 'WAN a WAN' no es válido.", //_MSG42 
	"<strong>Nombre del servicio:</strong>  Teclee el nombre de su servicio<a href=\"glossary.htm#def_PPPoE\"> PPPoE</A>.", //_MSG420 
	"<SPAN STYLE=\"font-weight : bold;\">Nombre de usuario:</SPAN><SPAN STYLE=\"font-weight : normal;\"> Teclee su nombre de usuario <A HREF=\"glossary.htm#def_PPPoE\">PPPoE</A>.</SPAN>", //_MSG421 
	"<SPAN STYLE=\"font-weight : bold;\">contraseña:</SPAN><SPAN STYLE=\"font-weight : normal;\">  Escriba su contraseña <A HREF=\"glossary.htm#def_PPPoE\">PPPoE</A>.</SPAN>", //_MSG422 
	"<strong>Reescribir contraseña:</strong>  Vuelva a escribir su contraseña <a href=\"glossary.htm#def_PPPoE\">PPPoE</A>.", //_MSG423 
	"<strong>DNS Primario:</strong> La dirección IP del DNS (Servidor de Nombres del Dominio, siglas en inglés) primario.  Esto se lo proporciona su ISP. ", //_MSG424 
	"<strong>DNS Secundario:</strong> La dirección IP del DNS (Servidor de Nombres del Dominio, siglas en inglés) secundario.  Esto se lo proporciona su ISP. ", //_MSG425 
	"<strong>Reconexión automática:</strong> Habilita la función  <em>Siempre-encendido </em>,  <em>Manual </em> o Conexión a demanda. La  <em>Conexión a demanda </em> permite al router iniciar una conexión con su <a href=\"glossary.htm#def_ISP\">ISP</A> cuando el router realiza una solicitud de Internet. Cuando está habilitado, el router se conecta automáticamente a Internet cuando abre su explorador por defecto. ", //_MSG426 
	"<SPAN STYLE=\"font-weight : bold;\">Tiempo muerto de inactividad:</SPAN><SPAN STYLE=\"font-weight : normal;\"> Especifica el tiempo que transcurrirá antes de que el router se descuelgue de la conexión.</SPAN>", //_MSG427 
	"<strong>MTU:</strong> Escriba el valor <a href=\"glossary.htm#def_MTU\">MTU</A> en el cuadro de texto.", //_MSG428 
	"<SPAN STYLE=\"font-weight : bold;\">PPTP:</SPAN><SPAN STYLE=\"font-weight : normal;\"> El protocolo de transmisión de datos estructurados Punto-a-Punto usa TCP para tratar los datos para el mantenimiento del túnel, y usa PPP para calcular la información que se transporta por el túnel. Los datos transportados por el túnel se pueden comprimir o codificar. El método de codificación usado es el RSA RC4. El PPTP puede funcionar cuando solamente cuando el protocolo es soportado por el cliente y por el servidor situado en el otro extremo al que se corresponde el cliente. No es esencial el soporte de cualquier router o servidor dentro de la red por la que se están interconectando los dos PCs. </SPAN>", //_MSG429 
	"¿Salir del asistente de configuración y descartar los ajustes?", //_MSG43 
	"<strong>L2TP:</strong> El L2TP se usa a menudo como mecanismo de transmisión de datos estructurados (Tunelado) para revender la conectividad ADSL en el punto final. Un túnel L2TP debería establecerse entre el usuario y la conexión ISP que se revendería, de modo que el ISP revendido no aparecería como realizador del tránsito.", //_MSG430 
	"<strong>dirección IP:</strong> Esta es la <a href=\"glossary.htm#def_ip_address\">dirección IP</A> del router. La dirección IP se la proporciona su ISP.", //_MSG431 
	"<strong> máscara subred:</strong> Esta es la <a href=\"glossary.htm#def_subnet_mask\">máscara subred</A> del router.  La máscara subred se la proporciona su ISP.", //_MSG432 
	"<strong>Puerta de enlace:</strong> La dirección de la puerta de enlace a la red. Contacte con su ISP o con su administrador de red para esta información.", //_MSG433 
	"<strong>DNS:</strong>Teclee las direcciones IP del <a href=\"glossary.htm#def_DNS\">DNS</A> en las ventanas de texto. Su <a href=\"glossary.htm#def_ISP\">ISP</A> le proporcionará esta información.", //_MSG434 
	"<strong>IP del servidor :</strong> Teclee las direcciones IP del servidor en la ventana de texto. Su ISP le proporcionará esta información.", //_MSG435 
	"<strong>Cuenta PPTP o L2TP:</strong> Escriba su número de cuenta PPTP o L2TP.", //_MSG436 
	"<strong>Contraseña PPTP o L2TP:</strong>  Escriba su contraseña PPTP o L2TP.", //_MSG437 
	"<strong>Reescribir Contraseña PPTP o L2TP:</strong>  Vuelva a escribir su contraseña PPTP o L2TP.", //_MSG438 
	" Inválida. Los caracteres permitidos son 0~9, A~Z, o a~z,-,_. ", //_MSG44 
	"<strong>MPPE Activado:</strong> Seleccione para habilitar la codificación Punto-a-Puto de Microsoft. (Sólo para MSCHAPv2)", //_MSG442 
	"<strong>Bigpond Cable:</strong> BigPond es el mayor Proveedor de Servicios de Internet en Australia y es el nombre de marca de Telstra para los servicios de banda ancha de consumo.", //_MSG443 
	"<strong>Nombre de usuario:</strong> Teclee su nombre de usuario <a href=\"glossary.htm#def_PPPoE\">BigPond</A>.", //_MSG444 
	"<strong>contraseña:</strong>  Escriba su contraseña <a href=\"glossary.htm#def_PPPoE\">BigPond</A>.", //_MSG445 
	"<strong>Reescribir contraseña:</strong>  Vuelva a escribir su contraseña <a href=\"glossary.htm#def_PPPoE\">BigPond</A>.", //_MSG446 
	"<strong>Servidor Aut: servidor sm:</strong> servidor mmo pequeño (sm, siglas en inglés) ", //_MSG447 
	"<strong>Dce-server :</strong>  servidor dce (entorno computerizado distribuido, siglas en inglés). ", //_MSG448 
	"<strong>IP del servidor de inicio de sesión:</strong> Tipo de servidor IP  Su ISP le proporcionará esta información.", //_MSG449 
	"Hay datos sin guardar en esta página. ¿Desea abandonarlo?", //_MSG45 
	"<strong>dirección MAC:</strong> Si se lo solicita su Proveedor de Servicios de Internet (<a href=\"glossary.htm#def_ISP\">ISP</A>), teclee la <a href=\"glossary.htm#def_MAC_address\">dirección MAC</A> de la interfaz <a href=\"glossary.htm#def_WAN\">WAN</A> del router en este campo.", //_MSG450 
	"<strong>PPPoE Rusa:</strong> Cuando use PPPoE, introduzca la siguiente información el los campos (parte de la información se la proporciona su Proveedor de Servicios de Internet (<a href=\"glossary.htm#def_ISP\">ISP</a>))", //_MSG451 
	"Nombre de usuario: Teclee su nombre de usuario PPPoE.", //_MSG454 
	"contraseña:  Escriba su contraseña PPPoE.", //_MSG455 
	"Reescribir contraseña:  Vuelva a escribir su contraseña PPPoE.", //_MSG456 
	"Si no, pulse Cancelar y luego haga 'clic' en D259", //_MSG46 
	"<strong>Configuración física WAN:</strong> La PPPoE Rusa soporta acceso WAN dual. Configura la segunda conexión WAN a continuación:", //_MSG460 
	"<strong>IP dinámica:</strong> Seleccione esta opción si la dirección IP de la WAN se obtiene automáticamente.", //_MSG461 
	"<strong>IP fija:</strong> Seleccione esta opción si la dirección IP de la WAN es fija. Entonces rellene los siguientes campos:", //_MSG462 
	"PPTP Rusa: Cuando use PPTP, introduzca la siguiente información el los campos (parte de la información se la proporciona su Proveedor de Servicios de Internet (ISP))", //_MSG468 
	"En este caso, pulse Ok.", //_MSG47 
	"<strong>Cuenta PPTP:</strong> Teclee su número de cuenta PPTP. ", //_MSG474 
	"<strong>PPTP contraseña:</strong>  Escriba su contraseña PPTP.", //_MSG475 
	"<strong>PPTP: Reescribir contraseña:</strong>  Vuelva a escribir su contraseña PPTP.", //_MSG476 
	"L2TP Rusa: Cuando use L2TP, introduzca la siguiente información el los campos (parte de la información se la proporciona su Proveedor de Servicios de Internet (ISP))", //_MSG482 
	"IP/Nombre del servidor : Teclee las direcciones IP del servidor en la ventana de texto. Su ISP le proporcionará esta información.", //_MSG487 
	"<strong>Cuenta L2TP:</strong> Teclee su número de cuenta L2TP. ", //_MSG488 
	"<strong>L2TP:</strong>  Escriba su contraseña L2TP.", //_MSG489 
	"La verificación de contraseña no coincide con la contraseña nueva.", //_MSG49 
	"<strong>L2TP:</strong> Reescribir contraseña:  Vuelva a escribir su contraseña L2TP.", //_MSG490 
	"Esta pantalla le permite establecer las contraseñas de administrador y usuario. Estas contraseñas se usan para obtener acceso a la interfaz del router", //_MSG495 
	"<SPAN STYLE=\"font-weight : bold;\">administrados:</SPAN><A NAME=\"password_administrator\"></A> Escriba la contraseña que usará el <A HREF=\"glossary.htm#def_administrator\">administrados</A> para iniciar sesión en el sistema. Debe volver a escribir la contraseña para su confirmación.", //_MSG496 
	"<SPAN STYLE=\"font-weight : bold;\">Usuario:</SPAN><A NAME=\"password_user\"></A> Los usuarios deben escribir una contraseña que usarán para iniciar sesión en el sistema. Deben volver a escribir la contraseña para su confirmación.", //_MSG497 
	"<SPAN STYLE=\"font-weight : bold;\">Nota:</SPAN> Los usuarios no tienen permisos para configurar las funciones del router.", //_MSG498 
	"Esta pantalla le permite ajustar la fecha y la hora del reloj de tiempo real del router, seleccionar su zona horario, especificar el servidor <A HREF=\"glossary.htm#def_NTP\">NTP</A> y habilitar o inhabilitar el ahorro de energía por horario de verano.", //_MSG499 
	"Solamente denegar acceso a la red a PCs con las direcciones MAC enumeradas a continuación", //_MSG5 
	"La dirección IP y el  no están en el mismo dominio.", //_MSG50 
	"<SPAN STYLE=\"font-weight : bold;\">Hora local:</SPAN><A NAME=\"time_local_time\"></A> Muestra la fecha y hora locales.", //_MSG500 
	"<SPAN STYLE=\"font-weight : bold;\">zona horaria:</SPAN><A NAME=\"time_time_zone\"></A> Seleccione su zona horaria de la lista desplegable.", //_MSG501 
	"<strong>Sincronizar el reloj con:</strong> Seleccione el método de ajuste del reloj de la lista desplegable.", //_MSG502 
	"<strong>Automático:</strong> Ajusta automáticamente la hora del sistema desde el servidor NTP.", //_MSG503 
	"<strong>manual:</strong>  Ajusta manualmente la hora del sistema cuando pulsa el botón Ajustar Hora.", //_MSG504 
	"<SPAN STYLE=\"font-weight : bold;\">servidor NTP por defecto:</SPAN><A NAME=\"time_default_ntp_server\"></A> Teclee la dirección del servidor <A HREF=\"glossary.htm#def_NTP\">NTP</A> en la ventana de texto para permitir que el router ajuste la hora automáticamente desde el servidor NTP de Internet.", //_MSG505 
	"<SPAN STYLE=\"font-weight : bold;\">Ajustar la Hora:</SPAN><SPAN STYLE=\"font-style : normal;\"><A NAME=\"time_set_the_time\"></A> Seleccione la fecha y la hora de las listas desplegables y haga 'clic' en </SPAN><SPAN STYLE=\"font-style : italic;font-weight : normal;\">Ajustar Hora</SPAN><SPAN STYLE=\"font-style : normal;\"> para ajustar el reloj interno del router hasta la fecha y hora correctas.", //_MSG506 
	"<SPAN STYLE=\"font-weight : bold;\">Horario de verano:</SPAN><A NAME=\"time_daylight_saving\"></A> Le permite habilitar o inhabilitar el ahorro de energía por horario de verano. Cuando esté habilitado, seleccione la fecha de inicio y fin del horario de verano.", //_MSG507 
	"El DNS (Servicio de Nombres del dominio) dinámico es un método de mantener el nombre del dominio enlazada con una dirección IP cambiante (dinámica). Con la mayoría de las conexiones de cable y DSL, a usted se le asigna una dirección IP dinámica y esa dirección está activa solamente por la duración de una conexión específica. Usted puede configurar su servicio DDNS y el router actualizará automáticamente su servidor DDNS cada vez que recibe una dirección IP diferente. Primero, necesita registrar su DNS preferente en el proveedor DDNS. Después, por favor seleccione la dirección DDNS en la dirección del servidor y cumplimente la información relacionada en los campos siguientes: Nombre de sistema anfitrión, Nombre de Usuario y Contraseña.", //_MSG508 
	"Esta pantalla le permite establecer los parámetros por los que el router envía datos a su destino si su red tiene una <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> fija.", //_MSG509 
	"La   y la dirección IP de la LAN no están en el mismo dominio.", //_MSG51 
	"<SPAN STYLE=\"font-weight : bold;\">Dirección de la red:</SPAN><A NAME=\"routing_static_network_address\"></A> Teclee la <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> fija que su red usa para acceder a Internet. Su <A HREF=\"glossary.htm#def_ISP\">ISP</A> o su <A HREF=\"glossary.htm#def_administrator\">administrador</A> de red le proporcionarán esta información.", //_MSG510 
	"<SPAN STYLE=\"font-weight : bold;\">Máscara subred:</SPAN><A NAME=\"routing_static_network_mask\"></A> Teclee la <A HREF=\"glossary.htm#def_subnet_mask\">máscara de red (subred)</A> para su red. Si no introduce ningún valor aquí, se usará la máscara subred por defecto 255.255.255.255. Su <A HREF=\"glossary.htm#def_ISP\">ISP</A> o su <A HREF=\"glossary.htm#def_administrator\">administrador</A> de red le proporcionarán esta información.", //_MSG511 
	"<SPAN STYLE=\"font-weight : bold;\">Dirección de la puerta de enlace:</SPAN><A NAME=\"routing_static_gateway_address\"></A> Escriba la <A HREF=\"glossary.htm#def_gateway\">dirección</A> de la puerta de enlace para su red. Su <A HREF=\"glossary.htm#def_ISP\">ISP</A> o su <A HREF=\"glossary.htm#def_administrator\">administrador</A> de red le proporcionarán esta información.", //_MSG512 
	"<SPAN STYLE=\"font-weight : bold;\">Interfaz:</SPAN><A NAME=\"routing_static_interface\"></A> Seleccione que interfaz, <A HREF=\"glossary.htm#def_WAN\">WAN</A> o <A HREF=\"glossary.htm#def_LAN\">LAN</A>, usa para conectarse a Internet.", //_MSG513 
	"<SPAN STYLE=\"font-weight : bold;\">Métrico:</SPAN><A NAME=\"routing_static_metric\"></A> Seleccione qué <A HREF=\"glossary.htm#def_metric\">métrica</A> desea aplicar a esta configuración.", //_MSG514 
	"<SPAN STYLE=\"font-weight : bold;\">Añadir:</SPAN><A NAME=\"routing_static_add\"></A> Haga 'clic' para añadir la configuración a la tabla de <A HREF=\"glossary.htm#def_ip_address\">direcciones IP</A> fijas en la parte inferior de la página.", //_MSG515 
	"<SPAN STYLE=\"font-weight : bold;\">Actualizar:</SPAN><A NAME=\"routing_static_update\"></A> Seleccione una de las entradas de la tabla de <A HREF=\"glossary.htm#def_ip_address\">direcciones IP</A> fijas en la parte inferior de la página y, después de cambiar los parámetros, haga 'clic' en <SPAN STYLE=\"font-style : italic;\">Actualizar</SPAN> para confirmar los cambios.", //_MSG516 
	"<SPAN STYLE=\"font-weight : bold;\">Eliminar:</SPAN><A NAME=\"routing_static_delete\"></A> Seleccione una de las entradas de la tabla de <A HREF=\"glossary.htm#def_ip_address\">direcciones IP</A> fijas en la parte inferior de la página y haga 'clic' en <SPAN STYLE=\"font-style : italic;\">Eliminar</SPAN> para borrar la entrada.", //_MSG517 
	"<SPAN STYLE=\"font-weight : bold;\">Transmitir:</SPAN><A NAME=\"routing_dynamic_transmit\"></A> Marque los botones de elección para establecer los parámetros de transmisión que desee, Inhabilitar, <A HREF=\"glossary.htm#def_RIP\">RIP</A> 1 o <A HREF=\"glossary.htm#def_RIP\">RIP</A> 2. ", //_MSG519 
	"La dirección IP final debe ser mayor que la dirección IP de inicio.", //_MSG52 
	"<SPAN STYLE=\"font-weight : bold;\">Recibir:</SPAN><A NAME=\"routing_dynamic_receive\"></A> Haga clic en los botones de opción para ajustar la transmisión de parámetros, discapacitados, <A HREF=\"glossary.htm#def_RIP\">RIP</A> 1 o <A HREF=\"glossary.htm#def_RIP\">RIP</A>2", //_MSG520 
	"Esta pantalla le permite ver la tabla de enrutamiento para el router. La tabla de enrutamiento es una base de datos creada por el router que indica la topología de interconexión a la red.", //_MSG521 
	"<SPAN STYLE=\"font-weight : bold;\">Dirección de la red:</SPAN><A NAME=\"routing_table_network_address\"></A> Muestra la <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> del nodo conectado", //_MSG522 
	"<SPAN STYLE=\"font-weight : bold;\">Máscara subred:</SPAN><A NAME=\"routing_table_network_mask\"></A>  Muestra la <A HREF=\"glossary.htm#def_subnet_mask\">máscara de red (subred)</A> del nodo conectado.", //_MSG523 
	"<SPAN STYLE=\"font-weight : bold;\">Dirección de la puerta de enlace:</SPAN><A NAME=\"routing_table_gateway_address\"></A> Muestra la <A HREF=\"glossary.htm#def_gateway\">dirección de la puerta de enlace</A> del nodo conectado.", //_MSG524 
	"<SPAN STYLE=\"font-weight : bold;\">Interfaz:</SPAN><A NAME=\"routing_table_interface\"></A> Muestra si el nodo está conectado a través de la <A HREF=\"glossary.htm#def_WAN\">WAN</A> o la <A HREF=\"glossary.htm#def_LAN\">LAN</A>.", //_MSG525 
	"<SPAN STYLE=\"font-weight : bold;\">Métrico:</SPAN><A NAME=\"routing_table_metric\"></A> Muestra la <A HREF=\"glossary.htm#def_metric\">métrica</A> del nodo conectado.", //_MSG526 
	"<SPAN STYLE=\"font-weight : bold;\">Tipo:</SPAN><A NAME=\"routing_table_type\"></A> Muestra si el nodo tiene una <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> fija o dinámica.", //_MSG527 
	"Esta página le permite establecer cómo el router reenvía los datos.", //_MSG528 
	"Esta página le permite definir las restricciones de acceso, configurar el protocolo y los filtros IP, crear servidores virtuales, definir accesos para aplicaciones especiales como juegos, y establecer las reglas del cortafuegos.", //_MSG529 
	"Los caracteres permitidos para la dirección MAC deben ser 0~9, A~F, o a~f.", //_MSG53 
	"Esta pantalla le permite autorizar o denegar acceso basándose en la lista MAC que usted crea.", //_MSG530 
	"Filtros MAC: Le permite autorizar o denegar acceso a Internet a los usuarios dentro de la LAN según las direcciones MAC de sus interfaces de red. Marque el botón de selección de Inhabilitar para inhabilitar la función de filtro por MAC. ", //_MSG531 
	"Desactivado: Inhabilitar la función de Filtro por MAC.", //_MSG532 
	"Permitir: Permitir sólo que los equipos y dispositivos con las direcciones MAC que aparecen a continuación tengan acceso a la red local (LAN / WLAN), la gestión de la red e Internet", //_MSG533 
	"negar: Solamente denegar acceso a la Internet a PCs con las direcciones MAC enumeradas a continuación", //_MSG534 
	"tabla MAC: Use esta sección para crear un perfil de usuario para el que se autorizará o denegará el acceso a Internet.", //_MSG535 
	"Los perfiles de usuario se enumeran en la tabla de la parte inferior de la página.", //_MSG536 
	"<SPAN STYLE=\"font-weight : bold;\">Nota:</SPAN> <A NAME=\"addprotfilter\"></A> Cuando seleccione elementos de la tabla de la parte inferior, haga 'clic' en cualquier parte del elemento. La línea queda seleccionada y los campos cargan automáticamente los parámetros del elemento, que puede ahora editar.", //_MSG537 
	"Nombre: Escriba el nombre del usuario al que se le autoriza/deniega el acceso.", //_MSG538 
	"dirección MAC: Escriba la dirección MAC de la interfaz de red del usuario.", //_MSG539 
	"No puede dejar vacía la SSID.", //_MSG54 
	"Añadir: Haga 'clic' para añadir el usuario a la lista de la parte inferior de la página.", //_MSG540 
	"Actualizar: Haga 'clic' para actualizar la información para el usuario, si usted ha cambiado alguno de los campos.", //_MSG541 
	"Eliminar: Seleccione un usuario de la tabla de la parte inferior de la lista y haga 'clic' en Eliminar para borrar el perfil de usuario.", //_MSG542 
	"El Bloqueo URL se usa para denegar a los PCs de la red LAN (Red de Área Local, siglas en inglés) el acceso a Sitos Web específicos por su URL (Localizador Uniforme de Recursos, siglas en inglés).   Un URL es una cadena de texto especialmente formateada que defina una Localización en Internet. Si cualquier parte del URL contiene la palabra de bloqueo, el Sitio Web no será accesible y no aparecerá la página Web. El Bloqueo de dominio se usa para denegar o autorizar a los PCs de la LAN acceder a dominios específicos de Internet. El Bloqueo de dominio denegará o autorizará todas las solicitudes como http y ftp a un dominio específico. Seleccione Permitir Usuarios para acceder a todos los dominios excepto a los \"Dominios Bloqueados\", permitiendo a los usuarios a acceder a todos los dominios excepto a los de la lista de Dominios Bloqueados.  Seleccione Denegar Usuarios el acceso a todos los dominios excepto a los \"Dominios Permitidos\", si sólo desea que los usuarios accedan a los Dominios Permitidos.", //_MSG545 
	"El Bloqueo de dominio se usa para denegar o autorizar a los PCs en la LAN /Red de Área Local, siglas en inglés) el acceso a d+D924ominios específicos en Internet.  El Bloqueo de dominio denegará o autorizará todas las solicitudes como http y ftp a un dominio específico. Seleccione Permitir Usuarios para acceder a todos los dominios excepto a los \"Dominios Bloqueados\", permitiendo a los usuarios a acceder a todos los dominios excepto a los de la lista de Dominios Bloqueados.  Seleccione Denegar Usuarios el acceso a todos los dominios excepto a los \"Dominios Permitidos\", si sólo desea que los usuarios accedan a los Dominios Permitidos.", //_MSG546 
	"Desactivado: Inhabilitar la función de Bloqueo de Dominio/URL.", //_MSG547 
	"<strong>Permite:</strong>Permitir Usuarios para acceder a todos los dominios de la Lista de Dominios.", //_MSG548 
	"<strong>negar:</strong>Denegar Usuarios el acceso a todos los dominios de la Lista de Dominios.", //_MSG549 
	"La dirección IP y la dirección IP de la puerta de enlace no están en la misma subred.", //_MSG55 
	"<strong>Lista de dominios:</strong> Es la lista de dominios/URL que denega+D959rá o autorizará. ", //_MSG550 
	"<strong>Eliminar:</strong> Seleccione un Dominio/URL de la tabla en la parte inferior de la lista y haga 'clic' en Eliminar para borrar el Dominio/URL.", //_MSG551 
	"<strong>Añadir:</strong> Haga 'clic' en el botón Añadir para añadir el dominio a la lista de Dominios.", //_MSG552 
	"Esta pantalla le permite autorizar o denegar acceso basándose en la lista de <A HREF=\"glossary.htm#def_protocol\">protocolos de comunicación/IP</A> que usted crea.", //_MSG554 
	"Los perfiles de filtro de protocolo se enumeran en la tabla de la parte inferior de la página.", //_MSG555 
	"<SPAN STYLE=\"font-weight : bold;\">perfiles de filtro:</SPAN> Le permite autorizar o denegar el acceso a Internet a los usuarios basándose en el <A HREF=\"glossary.htm#def_protocol\">protocolo</A> de comunicaciones del origen. Marque el botón de selección de <SPAN STYLE=\"font-style : italic;\">Inhabilitar</SPAN> para inhabilitar la función de filtro por protocolo. ", //_MSG557 
	"<SPAN STYLE=\"font-weight : bold;\">Desactivado:</SPAN> Se autoriza a todos los protocolos de la lista a conectarse a Internet a través de al LAN. (Cree los elementos de la lista en la sección  <A HREF=\"#access_protocol_filter_apf\">Añadir Filtro de Protocolo</A>.)", //_MSG558 
	"<SPAN STYLE=\"font-weight : bold;\">Activado:</SPAN> Deniega el acceso a Internet desde la LAN cuando el elemento de la siguiente lista esté habilitado. (Cree los elementos de la lista en la sección <A HREF=\"#access_protocol_filter_apf\">Añadir Filtro de Protocolo</A>.)", //_MSG559 
	"La contraseña confirmada no coincide con la nueva contraseña de Administrador.", //_MSG56 
	"<SPAN STYLE=\"font-weight : bold;\">Añadir Filtro de protocolo:</SPAN><A NAME=\"access_protocol_filter_apf\"></A> Use esta sección para crear un perfil para el protocolo que desee autorizar o denegar su acceso a Internet.", //_MSG560 
	"<SPAN STYLE=\"font-weight : bold;\">Activado:</SPAN> Haga 'clic' para habilitar o inhabilitar el <A HREF=\"glossary.htm#def_filter\">filtro</a> de <A HREF=\"glossary.htm#def_protocol\">protocolo</A>.", //_MSG561 
	"<SPAN STYLE=\"font-weight : bold;\">Nombre:</SPAN> Escriba un nombre descriptivo para el <A HREF=\"glossary.htm#def_filter\">filtro</A> de <A HREF=\"glossary.htm#def_protocol\">protocolo</A>.", //_MSG562 
	"<SPAN STYLE=\"font-weight : bold;\">protocolo:</SPAN> Seleccione de la lista desplegable el protocolo (<A HREF=\"glossary.htm#def_TCP\">TCP</A>, <A HREF=\"glossary.htm#def_UDP\">UDP</A>, o <A HREF=\"glossary.htm#def_ICMP\">ICMP</A>) que desee autorizar/denegar su acceso a Internet.", //_MSG563 
	"<SPAN STYLE=\"font-weight : bold;\">Intervalo de Puertos:</SPAN> Escriba el intervalo de <A HREF=\"glossary.htm#def_port\">puertos</A> que desee bloquear en las dos ventanas de texto.", //_MSG564 
	"<strong>Intervalo de IPs: </strong> Escriba el intervalo de IPs. Las direcciones de IP que se encuentre entre este valor y el Final del intervalo no estarán autorizados a acceder a Internet.", //_MSG565 
	"<SPAN STYLE=\"font-weight : bold;\">Añadir:</SPAN><SPAN STYLE=\"font-weight : normal;\"> Haga 'clic' para añadir el <A HREF=\"glossary.htm#def_filter\">filtro</A> de <A HREF=\"glossary.htm#def_protocol\">protocolo</A> a la lista situada en la parte inferior de la página.", //_MSG566 
	"<SPAN STYLE=\"font-weight : bold;\">Actualizar: </SPAN>Haga 'clic' para actualizar la información para <A HREF=\"glossary.htm#def_filter\">filtro</A> de <A HREF=\"glossary.htm#def_protocol\">protocolo</A>, si usted ha cambiado alguno de los campos.", //_MSG567 
	"<SPAN STYLE=\"font-weight : bold;\">Eliminar:</SPAN> Seleccione un perfil de <A HREF=\"glossary.htm#def_filter\">filtro</A> de la tabla situado en la parte inferior de la lista y haga 'clic' en <SPAN STYLE=\"font-style : italic;\">Eliminar</SPAN> para borrar el perfil. Cancelar: Haga 'clic' en el botón Cancelar para borrar todos los campos y escribir información nueva.", //_MSG568 
	"La contraseña confirmada no coincide con la nueva contraseña de Usuario.", //_MSG57 
	"Esta pantalla le permite crear un <A HREF=\"glossary.htm#def_virtual_server\">servidor virtual</A> a través del router. Si el router es configurado como un servidor virtual, los usuarios remotos que solicitan servicios de Internet o <A HREF=\"glossary.htm#def_FTP\">FTP</A> a través de la <A HREF=\"glossary.htm#def_WAN\">WAN</A> son direccionados a servidores locales en la <A HREF=\"glossary.htm#def_LAN\">LAN</A>. El router redirecciona la solicitud a través del <A HREF=\"glossary.htm#def_protocol\">protocolo</A> y los números de <A HREF=\"glossary.htm#def_port\">puerto</A> hasta el servidor LAN correcto.", //_MSG570 
	"Los perfiles del servidor virtual se enumeran en la tabla situada en la parte inferior de la página.", //_MSG571 
	"<SPAN STYLE=\"font-weight : bold;\">Activado:</SPAN><A NAME=\"access_virtual_server_enable\"> Haga 'clic' para habilitar o inhabilitar el <A HREF=\"glossary.htm#def_virtual_server\">servidor virtual</A>.", //_MSG573 
	"<SPAN STYLE=\"font-weight : bold;\">Nombre:</SPAN><A NAME=\"access_virtual_server_name\"></A> Escriba un nombre descriptivo para el <A HREF=\"glossary.htm#def_virtual_server\">servidor virtual</A>.", //_MSG574 
	"<SPAN STYLE=\"font-weight : bold;\">Protocolo:</SPAN><A NAME=\"access_virtual_server_protocol\"></A> Seleccione el <A HREF=\"glossary.htm#def_protocol\">protocolo</A> (<A HREF=\"glossary.htm#def_TCP\">TCP</A>, <A HREF=\"glossary.htm#def_UDP\">UDP</A> o *(<A HREF=\"glossary.htm#def_TCP\">TCP</A> y <A HREF=\"glossary.htm#def_UDP\">UDP</A>)) que desee usar para el <A HREF=\"glossary.htm#def_virtual_server\">servidor virtual</A>.", //_MSG575 
	"<SPAN STYLE=\"font-weight : bold;\">Puerto Privado:</SPAN><A NAME=\"access_virtual_server_private_port\"></A> Escriba el número de <A HREF=\"glossary.htm#def_port\">puerto</A> del PC en la <A HREF=\"glossary.htm#def_LAN\">LAN</A> que está utilizando para actuar como <A HREF=\"glossary.htm#def_virtual_server\">servidor virtual</A>.", //_MSG576 
	"<SPAN STYLE=\"font-weight : bold;\">Puerto Público:</SPAN><A NAME=\"access_virtual_server_public_port\"></A> Teclee el número de <A HREF=\"glossary.htm#def_port\">puerto</A> en la <A HREF=\"glossary.htm#def_WAN\">WAN</A> que se usará para proporcionar acceso al <A HREF=\"glossary.htm#def_virtual_server\">servidor virtual</A>.", //_MSG577 
	"<SPAN STYLE=\"font-weight : bold;\">Servidor LAN:</SPAN><A NAME=\"access_virtual_server_LAN_server\"></A> Escriba la <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> de la <A HREF=\"glossary.htm#def_LAN\">LAN</A> que será asignado al <A HREF=\"glossary.htm#def_virtual_server\">servidor virtual</A>.", //_MSG578 
	"<SPAN STYLE=\"font-weight : bold;\">Añadir:</SPAN>  Haga 'clic' para añadir el <A HREF=\"glossary.htm#def_virtual_server\">servidor virtual</A> a la tabla situada en la parte inferior de la pantalla.", //_MSG579 
	"El campo seleccionado de la clave WEP no puede estar en blanco.", //_MSG58 
	"<SPAN STYLE=\"font-weight : bold;\">actualizar:</SPAN> Haga 'clic' para actualizar la información para el <A HREF=\"glossary.htm#def_virtual_server\">servidor virtual</A> si tiene seleccionado un elemento de la lista y ha realizado cambios.", //_MSG580 
	"<strong>Eliminar:</strong> Seleccione un elemento de la lista y haga 'clic' sobre<strong>Eliminar</strong> para borrar el elemento de la lista.", //_MSG581 
	"Esta pantalla le permite especificar aplicaciones especiales.", //_MSG583 
	"Los perfiles de aplicaciones especiales se enumeran en la tabla de la parte inferior de la página.", //_MSG584 
	"<SPAN STYLE=\"font-weight : bold;\">Activado:</SPAN><A NAME=\"access_special_AP_enable\"></A> Haga 'clic' para habilitar o inhabilitar el perfil de la aplicación. Cuando está habilitado, los usuarios podrán conectarse a la aplicación a través de la conexión <A HREF=\"glossary.htm#def_WAN\">WAN</A> del router. Haga 'clic' en Inhabilitar sobre un perfil para evitar que los usuarios accedan a la aplicación en la WAN.", //_MSG586 
	"<SPAN STYLE=\"font-weight : bold;\">Nombre:</SPAN><A NAME=\"access_special_AP_name\"> Escriba un nombre descriptivo para la aplicación.", //_MSG587 
	"<SPAN STYLE=\"font-weight : bold;\">Activador: </SPAN><A NAME=\"access_special_AP_trigger\"></A>Define la comunicación saliente que determina si el usuario tiene acceso legítimo a la aplicación.", //_MSG588 
	"<SPAN STYLE=\"font-weight : bold;\">Protocolo:</SPAN> Seleccione el <A HREF=\"glossary.htm#def_protocol\">protocolo</A> (<A HREF=\"glossary.htm#def_TCP\">TCP</A>, <A HREF=\"glossary.htm#def_UDP\">UDP</A>, o <A HREF=\"glossary.htm#def_ICMP\">ICMP</A>) que puede utilizar la comunicación entrante.", //_MSG589 
	"La contraseña confirmada no coincide con la Contraseña.", //_MSG59 
	"<SPAN STYLE=\"font-weight : bold;\"> intervalos de puertos:</SPAN> Escriba en las ventanas de texto los intervalos de <A HREF=\"glossary.htm#def_port\">puertos</A> que pueden utilizarse para acceder a la aplicación.", //_MSG590 
	"<SPAN STYLE=\"font-weight : bold;\">Recibido:</SPAN><A NAME=\"access_special_AP_incoming\"></A> Define que usuarios de comunicaciones entrantes tienen autorización para conectarse.", //_MSG591 
	"<SPAN STYLE=\"font-weight : bold;\">Protocolo:</SPAN> Seleccione el <A HREF=\"glossary.htm#def_protocol\">protocolo</A>  (<A HREF=\"glossary.htm#def_TCP\">TCP</A>, <A HREF=\"glossary.htm#def_UDP\">UDP</A>, 0 <A HREF=\"glossary.htm#def_ICMP\">ICMP</A>) que puede ser usado por la comunicación entrante.", //_MSG592 
	"<SPAN STYLE=\"font-weight : bold;\">Puerto:</SPAN> Seleccione el número de <A HREF=\"glossary.htm#def_port\">puerto</A> que puede ser usado por la comunicación entrante.", //_MSG593 
	"<SPAN STYLE=\"font-weight : bold;\"> Añadir:</SPAN> Haga 'clic' para añadir el perfil de aplicación especial a la tabla situada en la parte inferior de la pantalla.", //_MSG594 
	"<SPAN STYLE=\"font-weight : bold;\"> actualizar:</SPAN> Haga 'clic' para actualizar la información para la aplicación especial si tiene seleccionado un elemento de la lista y ha realizado cambios.", //_MSG595 
	"<SPAN STYLE=\"font-weight : bold;\"> Eliminar:</SPAN> Seleccione un elemento de la lista y haga 'clic' sobre <SPAN STYLE=\"font-style : italic;\">Eliminar</SPAN> para borrar el elemento de la lista.", //_MSG596 
	"Esta pantalla le permite crear una <A HREF=\"glossary.htm#def_DMZ\">DMZ</A> (Zona neutral, siglas en inglés) para aquellos PCs que no pueden acceder correctamente a las aplicaciones de Internet a través del router y a la configuración de seguridad asociada.", //_MSG599 
	"usuarios para acceder a la lista de todos los dominios.", //_MSG6 
	"La longitud de la contraseña debe tener entre 8 y 63 caracteres.", //_MSG60 
	"<SPAN STYLE=\"font-weight : bold;\">Activado:</SPAN><A NAME=\"access_dmz_enable\"> Haga 'clic' para habilitar o inhabilitar la <A HREF=\"glossary.htm#def_DMZ\">DMZ</A>.", //_MSG600 
	"<SPAN STYLE=\"font-weight : bold;\">IP del sistema anfitrión DMZ:</SPAN><A NAME=\"access_dmz_host_ip\"></A> Escriba una <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> <A HREF=\"glossary.htm#def_host_name\">de sistema</A> anfitrión para la <A HREF=\"glossary.htm#def_DMZ\">DMZ</A>. EL PC con esta dirección IP actúa como sistema anfitrión DMZ con acceso a internet ilimitado.", //_MSG601 
	"<SPAN STYLE=\"font-weight : bold;\">Nota:</SPAN> Cualquiera de los clientes añadidos al DMZ expone a los clientes a riesgos de seguridad como virus y accesos no autorizados.", //_MSG602 
	"<SPAN STYLE=\"font-weight : bold;\">Aplicar:</SPAN> Haga 'clic' para guardar los ajustes.", //_MSG603 
	"Esta pantalla le permite configurar el <a href=\"glossary.htm#def_firewall\">cortafuegos</A>. El router proporciona funciones básicas de cortafuegos, filtrando todos los paquetes que entran en el router usando un paquete de reglas.  Las reglas son una lista de secuencia de órdenes - a menor número de regla, mayor prioridad tiene la regla.   Los perfiles de las reglas se enumeran en la tabla de la parte inferior de la página.", //_MSG604 
	"Los perfiles de las reglas se enumeran en la tabla de la parte inferior de la página.", //_MSG605 
	"<strong>Activado:</strong> Haga 'clic' para habilitar o inhabilitar el perfil de reglas del <a href=\"glossary.htm#def_firewall\">cortafuegos</A>.", //_MSG607 
	"<strong>Nombre:</strong> <a name=\"access_firewall_enable\"></a> Escriba un nombre descriptivo para el perfil de reglas del <a href=\"glossary.htm#def_firewall\">cortafuegos</A>.", //_MSG608 
	"<strong>Acción:</strong><a name=\"access_firewall_action\"></a> Seleccione si autorizar o denegar <a href=\"glossary.htm#def_packet\">paquetes</A> que cumplan con la regla.", //_MSG609 
	"La contraseña debe tener 0~9, A~F, o a~f.", //_MSG61 
	"<strong>Fuente:</strong><a name=\"access_firewall_source\"></a> Define la fuente del <a href=\"glossary.htm#def_packet\">paquete</A> entrante al que se le aplica la regla.", //_MSG610 
	"<strong>Interfaz:</strong> Seleccione a que interfaz (<a href=\"glossary.htm#def_WAN\">WAN</A> o LAN) se aplica la regla. ", //_MSG611 
	"<strong>Inicio del intervalo de Ips:</strong> Teclee la <a href=\"glossary.htm#def_ip_address\">dirección IP</a> de inicio a la que se aplica la regla.", //_MSG612 
	"<strong>Fin del intervalo de Ips:</strong> Teclee la <a href=\"glossary.htm#def_ip_address\">dirección IP</A> final a la que se aplica la regla.", //_MSG613 
	"<strong>Destino:</strong><a name=\"access_firewall_destination\"></a> Define el destino del <a href=\"glossary.htm#def_packet\">paquete</a> entrante al que se le aplica la regla.", //_MSG614 
	"Interfaz: Seleccione a que interfaz (WAN o LAN) se aplica la regla. ", //_MSG615 
	"<strong>Protocolo:</strong> Seleccione el <a href=\"glossary.htm#def_protocol\">protocolo</a> (<a href=\"glossary.htm#def_TCP\">TCP</a>, <a href=\"glossary.htm#def_UDP\">UDP</a> o <a href=\"glossary.htm#def_ICMP\">ICMP</a>) del destino.", //_MSG618 
	"<strong>Intervalo de Puertos:</strong> Seleccione el intervalo de <a href=\"glossary.htm#def_port\">puertos</a>.", //_MSG619 
	"Por favor, introduzca otro servidor SMTP u otra dirección IP.", //_MSG62 
	"<strong>Añadir:</strong> <a name=\"access_ip_filter_add\"></a>Haga 'clic' para añadir el perfil de la regla a la tabla situada en la parte inferior de la pantalla.", //_MSG620 
	"<strong>actualizar: </strong><a name=\"access_ip_filter_update\"></a>Haga 'clic' para actualizar la información para la regla si tiene seleccionado un elemento de la lista y ha realizado cambios. ", //_MSG621 
	"<strong>Eliminar:</strong><a name=\"access_ip_filter_delete\"></a> Seleccione un elemento de la lista y haga 'clic' sobre Eliminar para borrar el elemento de la lista.", //_MSG622 
	"<strong>Nuevo:</strong><a name=\"access_ip_filter_new\"></a> Haga 'clic' en nuevo para borrar todos los campos e introducir información nueva.", //_MSG623 
	"<strong>Subir prioridad:</strong><a name=\"access_firewall_priority_up\"></a> Seleccione una regla de la lista y haga 'clic' sobre Subir Prioridad para aumentar la prioridad de la regla.", //_MSG624 
	"<strong>Bajar prioridad: </strong><a name=\"access_firewall_priority_down\"></a>Seleccione una regla de la lista y haga 'clic' sobre Bajar Prioridad para disminuir la prioridad de la regla.", //_MSG625 
	"<strong>Actualizar prioridad:</strong><a name=\"access_firewall_update_priority\"></a> Después de subir o bajar la prioridad de una regla, haga 'clic' en Actualizar Prioridad para guardar los cambios.", //_MSG626 
	"Esta pantalla de permite configurar las funciones SNMP y de administración remota.", //_MSG627 
	"Esta pantalla le permite configurar el SNMP.", //_MSG628 
	"habilitar/inhabilitar: Haga 'clic' para habilitar o inhabilitar el SNMP.", //_MSG629 
	"Por favor, introduzca una dirección de correo-e válida.", //_MSG63 
	"Nombre del sistema: Presenta el nombre dado al router.", //_MSG630 
	"Localización del sistema:  Muestra la localización del router (normalmente, el nombre DNS). ", //_MSG631 
	"Contacto del sistema: Muestra la información de contracto para la persona responsable del router.", //_MSG632 
	"Comunidad:Nombre del sistema SNMP para el intercambio de mensajes de la comunidad SNMP. Se puede usar el nombre para limitar los mensajes SNMP a través de la red. El nombre por defecto es 'private'.", //_MSG633 
	"Esta pantalla le permite configurar la administración remota. Usando la administración remota, el router se puede configurar a través de la WAN usando el explorador de Internet. Es necesario un nombre de usuario y una contraseña para efectuar la administración remota.", //_MSG634 
	"<SPAN STYLE=\"font-weight : bold;\">HTTP:</SPAN><A NAME=\"manage_remote_management_HTTP\"></A> Le permite configurar el acceso <A HREF=\"glossary.htm#def_HTTP\">HTTP</A> para la administración remota.", //_MSG635 
	"<SPAN STYLE=\"font-weight : bold;\">Activado:</SPAN> Haga 'clic' para habilitar o inhabilitar el acceso <A HREF=\"glossary.htm#def_HTTP\">HTTP</A> para la administración remota.", //_MSG636 
	"<SPAN STYLE=\"font-weight : bold;\">Intervalo de IPs remotas:</SPAN> Escriba el intervalo de las <A HREF=\"glossary.htm#def_ip_address\">direcciones IP</A> que se pueden usar para el acceso remoto.", //_MSG637 
	"<SPAN STYLE=\"font-weight : bold;\">Permitir comprobación puerto WAN:</SPAN><A NAME=\"manage_remote_management_allow_to_ping\"></A> escriba el intervalo de <A HREF=\"glossary.htm#def_ip_address\">direcciones IP</A> del router que pueden ser reconocidas por las localizaciones remotas.", //_MSG638 
	"<strong>UPnP Activado:</strong> UPnP es la abreviatura de 'Universal Plug and Play' que es una arquitectura de red que proporciona compatibilidad entre los equipos, software y periféricos de la red. El router es un router UPnP compatible y solo trabajará con otros equipos/software UPnP. Si no desea usar la funcionalidad UPnP, se puede inhabilitar seleccionado \"Inhabilitar\". ", //_MSG639 
	"¿Esta seguro de querer eliminar esto?", //_MSG64 
	"<strong>PPTP: </strong>Permite a los usuarios configurar la conexión PPTP entre la LAN y la WAN (transferencia). ", //_MSG640 
	"<strong>L2TP:</strong>  Permite a los usuarios configurar la conexión L2TP entre la LAN y la WAN (transferencia). ", //_MSG641 
	"<strong>IPSec:</strong> Permite a los usuarios configurar la conexión IPSec entre la LAN y la WAN (transferencia). ", //_MSG642 
	"<strong>Cadena multidifusión:</strong> Habilita o Inhabilita a los usuarios a configurar cadenas multidifusión. Si usted tiene una aplicación LAN multimedia que no está recibiendo el contenido como era de esperar, intente habilitar esta opción. La opción por defecto es Habilitado. ", //_MSG643 
	"Esta página le permite reiniciar el sistema, guardar y cargar diferentes configuraciones como perfiles, recuperar la configuración de fábrica por defecto, ejecutar el <A HREF=\"help_wizard.htm\">asistente de configuración</A> para configurar el router, actualizar el <A HREF=\"glossary.htm#def_firmware\">Firmware</A> e identificar direcciones IP remotas.", //_MSG644 
	"Haga 'clic' en <SPAN STYLE=\"font-style : italic;\">Reiniciar</SPAN> el sistema en el caso de que el sistema no esté funcionando correctamente.", //_MSG645 
	"Esta pantalla le permite guardar su configuración como un perfil, y cargar perfiles para diferentes circunstancias. También puede cargar la configuración de fábrica por defecto, y ejecutar el asistente de configuración para configurar el router y su interfaz. ", //_MSG646 
	"<SPAN STYLE=\"font-weight : bold;\">Guardar Configuración:</SPAN> Haga 'clic' para guardar la configuración actual como un perfil que podrá cargar cuando sea necesario.", //_MSG647 
	"<SPAN STYLE=\"font-weight : bold;\">Configuración de carga:</SPAN> Haga 'clic' en <SPAN STYLE=\"font-style : italic;\">Explorar</SPAN> y vaya a la posición del perfil guardado. Haga 'clic' en <SPAN STYLE=\"font-style : italic;\">Cargar</SPAN> para cargar la configuración del perfil. ", //_MSG648 
	"<SPAN STYLE=\"font-weight : bold;\">recuperar la configuración de fábrica por defecto:</SPAN> Haga 'clic' para recuperar la configuración por defecto. Todos los cambios de configuración que haya realizado se perderán.", //_MSG649 
	"¿Cargar la configuración desde el archivo de configuración guardado?", //_MSG65 
	"Esta pantalla le permite tener el firmware del router actualizado.", //_MSG650 
	"Siga estas instrucciones:", //_MSG651 
	"Descarga el último firmare desde el Sitio Web del fabricante, y guárdelo en su disco.", //_MSG652 
	"Haga 'clic' en <SPAN STYLE=\"font-style : italic;\">Explorar</SPAN> y vaya a la localización del archivo del firmware que ha descargado.", //_MSG653 
	"Seleccione el archivo y haga 'clic' en Mejorar para actualizar el firmware con la última edición.", //_MSG654 
	"La prueba de reconocimiento (<A HREF=\"glossary.htm#def_Ping\">ping</A>) le permite determinar su una <A HREF=\"glossary.htm#def_ip_address\">dirección IP</A> o un sistema anfitrión está presente en Internet. Teclee el <A HREF=\"glossary.htm#def_host_name\">nombre</A> del sistema anfitrión o la dirección IP en la ventana de texto y haga 'clic' en Ping.", //_MSG655
	"El asistente le permite configurar el router de un modo rápido y cómodo. Siga estas instrucciones:", //_MSG656
	"Haga 'clic' sobre Asistente.", //_MSG657
	"haga clic en <SPAN STYLE=\"font-style : italic;\">Next</SPAN>(Siguiente). Se le indica que seleccione una contraseña. Escriba una contraseña en la ventana de texto y luego vuélvala a escribir para verificación.", //_MSG658
	"haga clic en <SPAN STYLE=\"font-style : italic;\">Next</SPAN>(Siguiente). Seleccione su zona horaria de la lista desplegable.", //_MSG659
	"Por favor, escriba otro nombre.", //_MSG66 
	"haga clic en <SPAN STYLE=\"font-style : italic;\">Next</SPAN>(Siguiente). Teclee las <A HREF=\"glossary.htm#def_ip_address\">direcciones IP</A> de la LAN en la ventana de texto. La dirección IP por defecto ", //_MSG660
	"Escriba el nombre de la <A HREF=\"glossary.htm#def_subnet_mask\">máscara subred</A> en la ventana de texto.", //_MSG661
	"Habilite el servidor DHCP si desea que la <A HREF=\"glossary.htm#def_dhcp\">DHCP</A> asigne automáticamente <A HREF=\"glossary.htm#def_ip_address\">direcciones IP</A>. Escriba una dirección IP de inicio y una dirección IP final para el servidor DHCP las use para la asignación de direcciones IP.", //_MSG662
	"haga clic en <SPAN STYLE=\"font-style : italic;\">Next</SPAN>(Siguiente). Seleccione cómo configurará el router la conexión de Internet. Si tiene habilitado el servidor <A HREF=\"glossary.htm#def_dhcp\">DHCP</A>, elija \"Obtener IP automáticamente (cliente DHCP)\" para hacer que el router asigne las <A HREF=\"glossary.htm#def_ip_address\">direcciones IP</A> automáticamente.", //_MSG663
	"haga clic en <SPAN STYLE=\"font-style : italic;\">Next</SPAN>(Siguiente).  Aparecerá una indicación para que reinicie guardando la configuración y reiniciar la interfaz del router. Haga 'clic' sobre <SPAN STYLE=\"font-style : italic;\">Reiniciar</SPAN> para terminar con el asistente.", //_MSG664
	"Glosario ", //_MSG665
	"atrás, arriba", //_MSG666
	"Punto de acceso", //_MSG667
	"Punto de acceso  Los puntos de acceso son estaciones de paso en una LAN inalámbrica que están conectadas a un concentrador Ethernet o a un servidor. Los usuarios pueden deambular dentro del intervalo de puntos de acceso y sus conexiones de dispositivos inalámbricos van pasando de un punto de acceso al siguiente.", //_MSG668
	"Con Autenticación se refiere a la verificación de la integridad de un mensaje transmitido.", //_MSG669
	"Por favor, escriba otra palabra clave.", //_MSG67 
	"La DMZ (Zona neutral, siglas en inglés) es parte de una red que se encuentra entre una LAN segura y una WAN insegura.  Las DMZ proporcionan a algunos clientes un modo de obtener acceso a Internet sin restricciones. ", //_MSG670
	"Se refiere al intervalo entre paquetes enviados entre puntos de acceso con propósito de sincronización de las LAN inalámbricas.", //_MSG671
	"El software DHCP (Protocolo de configuración de sistemas anfitriones dinámicos, siglas en inglés) asigna automáticamente direcciones IP a estaciones de clientes registradas en una red TCP/IP, lo que elimina la necesidad de asignar manualmente direcciones IP fijas.", //_MSG672
	"DNS quiere decir Sistema de Nombres de Dominios. EL DNS convierte los nombres de las máquinas en direcciones IP que tienen todas las máquinas de la red. Transfiere del nombre a la dirección y de la dirección al nombre. ", //_MSG673
	"Nombre del dominio", //_MSG674
	"El nombre del dominio normalmente se refiere a una dirección de un Sitio de Internet.", //_MSG675
	"DTIM", //_MSG676
	"El DTIM (Mensaje de Indicación de Tráfico de Entrega, siglas en inglés) proporciona a las estaciones clientes la información sobre la próxima oportunidad para  supervisar mensajes en emisión o multidifusión. ", //_MSG677
	"Los filtros son esquemas que sólo permiten la transmisión de datos específicos. Por ejemplo, el router puede filtrar ciertas direcciones IP de modo que los usuarios no se puedan conectar desde esas direcciones.", //_MSG678
	"Los cortafuegos son métodos usados para conservar las redes aseguradas contra intrusos y de acceso no autorizados. Los cortafuegos usan filtros para evitar que se transmitan paquetes no deseados. Los cortafuegos se usan típicamente para proporcionar acceso seguro a Internet mientras se mantiene se servidor Web público de la organización separado de la LAN interna. ", //_MSG679
	"Esta palabra clave ya existe en la lista de palabras clave.", //_MSG68 
	"El Firmware  se refiere a los chips de memoria que retienen su información sin alimentación eléctrica (por ejemplo, la BIOS ROM). El Firmware del router almacena las configuraciones realizadas en la interfaz.", //_MSG680
	"Fragmentación", //_MSG681
	"Se refiere a la ruptura de los paquetes de datos durante la transmisión. ", //_MSG682
	"El FTP (Protocolo de transferencia de archivos, siglas en inglés) se usa para transferir archivos a través de una red TCP/IP, y normalmente se usa para transferir archivos grandes o para subir páginas HTML al servidor Web de un Sitio Web. ", //_MSG683
	"Las puertas de enlace son PCs que convierten protocolos permitiendo que diferentes redes, aplicaciones y sistemas operativos intercambien información. ", //_MSG684
	"El nombre dado a un PC o a una estación cliente que actúa como fuente para la información de la red.", //_MSG685
	"HTTP (Protocolo de Transporte de HiperTexto, siglas en inglés) es un protocolo de comunicaciones usado para conectar servidores en la Red Mundial. El HTTP establece una conexión con una servidor Web y transmite páginas HTML al explorador del cliente (por ejemplo, el Internet Explorer de Windows). Las direcciones HTTP empiezan todas por 'http://' (por ejemplo, <SPAN STYLE=\"font-style : italic;\">http://www.trendnet.com</SPAN>). ", //_MSG686
	"ICMP (Protocolo de Mensajes de Control de Internet, siglas en inglés) es un protocolo TCP/IP usado para enviar mensajes de error y control por la LAN (por ejemplo, lo usa el router para notificar al remitente del mensaje que el nodo de destino no está disponible).", //_MSG687
	"El IP (Protocolo de Internet, siglas en inglés) es el protocolo del paquete de protocolos de comunicaciones TCP/IP que contiene las direcciones de red y autoriza a direccionar los mensajes a una red o subred diferente. Sin embargo, el IP no asegura la entrega de un mensaje completo - TCP proporciona la función de asegurar la entrega. ", //_MSG688
	"La dirección IP (Protocolo de Internet, siglas en inglés) se refiere a la dirección de un PC conectado a la red TCP/IP. Cada cliente y cada estación servidor debe tener una única dirección IP. A los clientes se les asigna o una dirección fija o se les asigna una dinámicamente a través del DHCP. Las direcciones IP se escriben por cuatro grupos de números separados por puntos (por ejemplo, 211.23.181.189).", //_MSG689
	"¿Esta seguro de querer eliminar este filtro IP?", //_MSG69 
	"ISP", //_MSG690
	"Un ISP es una organización que proporciona acceso a Internet a través de modems, ISDN (Red Digital de Servicios Integrados, siglas en inglés), y líneas privadas.", //_MSG691
	"Las LANs (Redes de Área Local, siglas en inglés) son redes que sirven a los usuarios en áreas geográficas específicas, como por ejemplo en un edificio de una empresa. Las LANs están formadas por servidores, estaciones de trabajo, un sistema operativo de la red, y enlaces de comunicaciones como routers. ", //_MSG692
	"Una dirección MAC es un número de serie único grabado en los adaptadores de hardware, que le da al adaptados una identificación única.", //_MSG693
	"Un número que indica cuánto tiempo tarda un paquete en llegar a su destino. ", //_MSG694
	"La MTU (Unidad de transmisión/transferencia máxima, siglas en inglés) es el mayor tamaño del paquete que se puede enviar por la red. Los mensajes más grandes que la MTU son divididos en paquetes más pequeños.", //_MSG695
	"administrador de la red", //_MSG696
	"El administrador de la red es la persona que gestiona la LAN dentro de una organización. El trabajo del administrador incluye asegurar la protección de la red, mantener el software, el hardware y el firmware actualizados y mantener un registro de la actividad de la red.", //_MSG697
	"NTP (Protocolo de Tiempo de la Red, siglas en inglés) se usa para sincronizar la hora real de un PC. Los Servidores primario y secundario sincronizan con la hora UTC (Hora Universal Coordinada). ", //_MSG698
	"Paquete", //_MSG699
	"nulo", //_MSG70 
	"Un paquete es un conjunto de datos que se transmite en las comunicaciones de la red. Los paquetes se denominan a veces 'frames' y datagramas. Los paquetes no solo contienen datos, sino también la dirección IP de destino.", //_MSG700
	"El Ping (Buscador de paquetes de Internet, siglas en inglés) es una utilidad usada para encontrar si una dirección IP específica está presente en internet, y normalmente se usa en las redes para corregir errores. ", //_MSG701
	"Los puertos son vías de comunicación de entrada y salida de los PCs y de los dispositivos de red (routers e intercambiadores). La mayoría de los PCs tienen puertos en serie y puertos paralelos, que son los conectores externos para conectar dispositivos como impresoras, módems y ratones. Todos los adaptadores de red usan puertos para conectarse a la LAN. Los puertos van normalmente numerados.", //_MSG702
	"PPPoE (Ethernet sobre protocolo Punto-a-Punto, siglas en inglés) se usa para ejecutar el protocolo PPP (normalmente usado para marcar conexiones de Internet) sobre una Ethernet. ", //_MSG703
	"Preámbulo", //_MSG704
	"Preámbulo se refiere a la longitud de un bloque de CRC (Comprobación de Redundancia Cíclica, siglas en inglés) que supervisa las comunicaciones entre dispositivos inalámbricos itinerantes habilitados y los puntos de acceso.", //_MSG705
	"Protocolo:", //_MSG706
	"Un protocolo es una regla que gobierna la comunicación de los datos. ", //_MSG707
	"RIP", //_MSG708
	"RIP (Protocolo de Información de Ruta) es un protocolo de enrutamiento que se entrega en el protocolo TCP/IP. El RIP encuentra una ruta que se base en el menor número de saltos entre la fuente de un paquete y su destino.", //_MSG709
	"Esta  ya existe en la lista.", //_MSG71 
	"RTS", //_MSG710
	"RTS (Solicitud de Envío, siglas en inglés) es una señal enviada desde la estación de transmisión a la estación receptora solicitando permiso para transmitir datos. ", //_MSG711
	"Servidor ", //_MSG712
	"Los Servidores son máquinas normalmente potentes y rápidas que almacenan programas y datos. Los programas y datos son compartidos por las máquinas clientes (estaciones de trabajo) de la red.", //_MSG713
	"SMTP", //_MSG714
	"SMTP (Protocolo Simple de transferencia de Correo-e, siglas en inglés) es el estándar del protocolo de correo-e en Internet. SMTP es un protocolo TCP/IP que define el formato del mensaje e incluye un agente de transferencia de mensaje que almacena y transfiere el correo. ", //_MSG715
	"SNMP (Protocolo Simple de Administración de Red, siglas en inglés) es un protocolo de supervisión y control de la red ampliamente usado. Los componentes de hardware y software SNMP transmiten los datos de actividad del dispositivo en red a la estación de trabajo usada para supervisar la red. ", //_MSG716
	"SSID (Identificador del Grupo de Servicio, siglas en inglés) es una medida de seguridad usada en las WLANs. El SSID es un identificador único adjuntado a los paquetes enviados por las WLANs. Este identificador emula una contraseña cuando un dispositivo inalámbrico intenta la comunicación en la WLAN. Debido a que un SSID distingue una WLAN de otra, los puntos de acceso y los dispositivos inalámbricos que intenta n conectarse a la WLAN deben usar el mismo SSID. ", //_MSG717
	"Las Máscaras Subred se usan en el protocolo IP para dirigir mensaje dentro de un segmento de red específico (p. ej. una subred). Una máscara subred se almacena en la máquina cliente, el servidor o el router y se compara con la dirección IP entrante para determinar si se acepta o se rechaza el paquete. ", //_MSG718
	"C283", //_MSG719
	"¿Esta seguro de querer eliminar este filtro de protocolo?", //_MSG72 
	"Un servidor de protocolo de red (SysLog) supervisa los mensajes de protocolo de red entrantes y descodifica el mensaje con propósitos de registrarlo.", //_MSG720
	"TCP (Protocolo de Control de Transmisión, siglas en inglés) es el protocolo de transporte en TCP/IP que asegura que los mensajes en la red se transmiten completamente y con precisión.  ", //_MSG721
	"TCP/IP", //_MSG722
	"TCP/IP (Protocolo de Control de Transmisión/Protocolo de Internet, siglas en inglés) es el protocolo principal de comunicaciones en Internet. La parte TCP asegura que los datos se envían en su totalidad y son recibidos en el otro extremo. La otra parte del conjunto de protocolos TCP/IP es la UDP, que se usa para enviar los datos cuando la exactitud y la garantía de entrega del paquete no es tan importante (por ejemplo, en transmisiones de audio y vídeo en tiempo real).  ", //_MSG723
	"El componente IP del TCP/IP proporciona el enrutamiento de los datos, esto quiere decir que los paquetes de datos contienen las direcciones de la estación de destino y de la red, permitiendo que los mensaje TCP/IP sean enviados a múltiples redes dentro de la LAN o en la WAN.", //_MSG724
	"Telnet", //_MSG725
	"telnet es un protocolo de emulación terminal comúnmente usado en Internet y en las redes basadas en TCP - o - IP. ", //_MSG726
	"Telnet se usa para conectar dispositivos y para ejecutar programas remotos (a distancia). Telnet es un elemento integral del protocolo de comunicaciones TCP/IP.", //_MSG727
	"UDP (Protocolo de Datagrama de Usuario, siglas en inglés) es un protocolo dentro del TCP/IP que se usa para transportar información cuando no es necesaria una entrega precisa (por ejemplo, audio y vídeo en tiempo real donde los paquetes se pueden descartar cuando no hay tiempo para retransmitir los datos). ", //_MSG728
	"servidores virtuales ", //_MSG729
	"Por favor, introduzca otro número de puerto.", //_MSG73 
	"Los servidores virtuales son servidores cliente (como los servidores Web) que comparten recursos con otros servidores virtuales (es decir, no es un servidor dedicado). ", //_MSG730
	"WEP (Privacidad Equivalente al Cableado, siglas en inglés) es de hecho un protocolo de seguridad para LANs inalámbricas, proporcionando la seguridad \"equivalente\" a la de las redes por cable.", //_MSG731
	"<SPAN STYLE=\"font-style : normal;\">Las LANs inalámbricas (WLANs)</SPAN> son redes de área local que usan comunicaciones inalámbricas para transmitir los datos. Las transmisiones son normalmente en la banda de los 2,4 GHz. Los dispositivos WLAN no necesitan alinearse para establecer comunicaciones como los dispositivos infrarrojos. Los dispositivos WLAN usan puntos de acceso que están conectados a la LAN por cable y proporcionan conectividad con la LAN. La radiofrecuencia de los dispositivos WLAN es lo suficientemente fuerte para ser transmitida a través de paredes y objetos no-metálicos, y pueden cubrir un área de hasta mil pies (300 metros). Los PCs portátiles y notebooks usan tarjetas LAN PCMCIA mientras que los PCs de sobremesa usan tarjetas integradas para acceder a la WLAN. ", //_MSG732
	"WLAN", //_MSG733
	"<SPAN STYLE=\"font-style : normal;\">Las WLANs (LANs inalámbricas)</SPAN> son redes de área local que usan comunicaciones inalámbricas para transmitir los datos. Las transmisiones son normalmente en la banda de los 2,4 GHz. Los dispositivos WLAN no necesitan alinearse para establecer comunicaciones como los dispositivos infrarrojos. Los dispositivos WLAN usan puntos de acceso que están conectados a la LAN por cable y proporcionan conectividad con la LAN. La radiofrecuencia de los dispositivos WLAN es lo suficientemente fuerte para ser transmitida a través de paredes y objetos no-metálicos, y pueden cubrir un área de hasta mil pies (300 metros). Los PCs portátiles y notebooks usan tarjetas LAN PCMCIA mientras que los PCs de sobremesa usan tarjetas integradas para acceder a la WLAN.", //_MSG734
	"WAN (Red de área extendida, siglas en inglés) es una red de comunicaciones que cubre una amplia zona geográfica como un país (en comparación con la LAN, que cubre un área pequeña como el edificio de una empresa). ", //_MSG735
	"Filtro de entrada", //_MSG736
	"Filtro de salida", //_MSG737
	"Transmitir: ", //_MSG738
	"Bloqueo de dominio", //_MSG739
	"Por favor, introduzca otro número de puerto público.", //_MSG74 
	"Lista de dominios:", //_MSG740
	"<strong>Cancelar:</strong> Cancelar para borrar todos los campos y escribir información nueva.", //_MSG741
	"Nota: Cuando seleccione elementos de la tabla de la parte inferior, haga 'clic' en cualquier parte del elemento. La línea queda seleccionada y los campos cargan automáticamente los parámetros del elemento, que se pueden ahora editar:", //_MSG743
	"dinámica", //_MSG744
	"estática", //_MSG745
	"Gestión ", //_MSG746
	"Ruta", //_MSG747
	"Estado  ", //_MSG748
	"Principal", //_MSG749
	"Por favor, introduzca otro número de puerto público.", //_MSG75 
	"<SPAN STYLE=\"font-weight : bold;\">Nota: </SPAN>Cuando seleccione elementos de la tabla de la parte inferior, <A HREF=\"#addprotfilter\">haga 'clic' en</A> cualquier parte del elemento. La línea queda seleccionada y los campos cargan automáticamente los parámetros del elemento, que se pueden ahora editar:", //_MSG750
	"defecto: 100 msec, Intervalo: :25~1000", //_MSG751
	"defecto: 2346 Intervalo:256~2346", //_MSG752
	"defecto: 2346 Intervalo:1500~2346, sólo número par", //_MSG753
	"defecto:1   Intervalo: 1~255", //_MSG754
	"Salir de sesión Bigpond", //_MSG755
	"El número permitido de router estático es 40", //_MSG756
	"Iniciar sesión en el TEW-731BR", //_MSG757
	"Iniciar sesión otra vez", //_MSG758
	"Fallo al iniciar sesión", //_MSG759
	"Conflicto de puerto.", //_MSG76 
	"Habilitar DMZ", //_MSG760
	"PPPoE Rusa desconectada", //_MSG761
	"PPTP desconectada", //_MSG762
	"L2TP desconectada", //_MSG763
	"Cliente Bigpond Desconectado", //_MSG764
	"RusslandPPTP Desconectado", //_MSG765
	"Russland L2TP Desconectado", //_MSG766
	"Cliente Bigpond ", //_MSG767
	"Habilitar 802.11n AP", //_MSG768
	"Inhabilitar 802.11n AP", //_MSG769
	"¿Esta seguro de querer eliminar esta AP especial?", //_MSG77 
	"Esta dirección de sitio Web es inválida ", //_MSG770
	"Debe especificar una contraseña PPTP ", //_MSG772
	"¡Las reglas de programación están llenas! Por favor, elimine una Entrada.", //_MSG773
	"La dirección IP reservada debería estar dentro del intervalo DHCP configurado.", //_MSG774
	"El nombre reservado ya está en uso ", //_MSG776
	"La dirección IP reservada para esta dirección MAC ya está establecida.", //_MSG778
	"Por favor, introduzca otro número de Puerto de Activador.", //_MSG78 
	"La IP de la LAN está en conflicto con el intervalo de IPs para la LAN, por favor introdúzcala otra vez. ", //_MSG780
	"WPS no puede funcionar cuando utiliza autenticación WEP. Necesita ir a la página Inalámbrico/Seguridad para modificar la configuración para que WPS tenga efecto.", //_MSG781
	"El número de puerto final debe ser mayor que el número de puerto de inicio.", //_MSG782
	"Ha superado el número máximo de reglas del cortafuegos.", //_MSG783
	"El valor 'LAN a LAN' o el 'WAN a WAN' no es válido", //_MSG784
	"Debe especificar una contraseña L2TP ", //_MSG785
	"La dirección IP no puede ser cero.", //_MSG786
	"Solicitar tiempo límite", //_MSG787
	"Por favor, introduzca otro número de Puerto de entrada.", //_MSG79 
	"Bloquear aquellas URLs que contenga alguna de las palabras claves enumeradas a continuación.", //_MSG8 
	"¿Desea reiniciar este router?", //_MSG80 
	"Por favor seleccione un archivo configuración guardado para cargarlo.", //_MSG81 
	"¿Recuperar la configuración de fábrica por defecto?", //_MSG82 
	"Por favor, seleccione un archivo de para actualizar el router.", //_MSG83 
	"Por favor, introduzca un nombre de sistema anfitrión o una dirección IP.", //_MSG84 
	"¿Esta seguro de querer eliminar esta regla del cortafuegos?", //_MSG85 
	"La Comunidad no puede quedar en blanco,", //_MSG86 
	"El nombre del sistema anfitrión debe tener 0~9, A~Z, o a~z.", //_MSG87 
	"La dirección IP del servidor introducida es inválida.", //_MSG88 
	"El   tiene el mismo nombre.", //_MSG89 
	"Filtrado de punto final NAT", //_MSG9 
	"El   tiene la misma MAC.", //_MSG90 
	" está en conflicto con la dirección IP de la LAN, por favor escríbala de nuevo.", //_MSG91 
	"Por favor, escriba otro nombre de DHCP fija.", //_MSG92 
	"La dirección IP y la dirección IP fija no están en el mismo dominio.", //_MSG93 
	"¿Esta seguro de querer eliminar esta dirección DHCP fija?", //_MSG94 
	"La dirección IP no puede estar en el intervalo de la DHCP.", //_MSG95 
	"Sólo la cuenta del Administrador puede reiniciar el dispositivo", //_MSG96 
	"Sólo la cuenta del Administrador puede actualizar el Firmware", //_MSG97 
	"Sólo la cuenta del Administrador puede cargar la configuración", //_MSG98 
	"No puede dejar vacía el nombre del usuario.", //_MSG99 
	"MTU", //_MTU 
	"Cadena multidifusión", //_MuitlcastStr 
	"Mi IP", //_MyIP 
	"Nombre ", //_Name 
	"Dirección de la red", //_NetworkAddr 
	"Máscara subred", //_NetworkMask 
	"Nuevo:", //_New
	"nueva contraseña", //_NewPwd 
	"Siguiente", //_Next
	"Página siguiente", //_NextPage 
	"No", //_No 
	"Ninguno", //_None 
	"Aviso", //_Notice 
	"Nov", //_Nov 
	"NTP", //_NTP
	"servidor NTP por defecto", //_NTPser 
	"servidor NTP", //_NTPSer 
	"Obtener IP automáticamente", //_ObtainIPAuto 
	"Oct", //_Oct 
	"Conectar a petición", //_OnDemand 
	"Sólo para MSCHAPv2", //_OnlyMSCHAPv2 
	"Abrir", //_open 
	"Abrir Sistema", //_OpenSys 
	"(opcional)", //_optional 
	"Paquetes", //_Packets 
	"página", //_Page 
	"Contraseña ", //_Passphrase 
	"contraseña", //_Passward 
	"Pico", //_Peak 
	"Ping", //_Ping
	"Prueba de comprobación (Ping)", //_PingTest 
	"PM", //_PM 
	"puerto", //_Port 
	"Intervalo de Puertos", //_PortRange 
	"PPPoE", //_PPPoE
	"PPPoE desconectada", //_PPPoEDiscon
	"PPTP", //_PPTP 
	"cuenta PPTP", //_PPTPaccount 
	"contraseña PPTP", //_PPTPpwd 
	"Página Anterior", //_PreviousPage 
	"Primario", //_Primary 
	"Bajar prioridad", //_PriorityDown 
	"Subir prioridad", //_PriorityUp 
	"Puerto Privado:", //_PriPort 
	"Protocolo:", //_Protocol 
	"Protocolo/Filtros IP", //_Protocol_IP_Filters 
	"Filtros de protocolo ", //_ProtocolFilters 
	"PSK", //_PSK 
	"PSK / EAP", //_PSKEAP
	"Público:", //_Public 
	"Puerto Público", //_PubPort 
	"Configuración de pulsador", //_PushBtnConfig 
	"contraseña", //_Pwd 
	"Servidor RADIUS: 1", //_RadiusServer1 
	"Servidor RADIUS 2", //_RadiusServer2 
	"Intervalo", //_range 
	"Fin del intervalo", //_RangeEnd 
	"Inicio del intervalo", //_RangeStart 
	"recibir.", //_Receive 
	"Refrescar", //_Refresh 
	"Intervalo de IPs remotas", //_RemoteIPRange 
	"Administración remota", //_RemoteManage 
	"Restaurar", //_Reset
	"Reiniciar", //_Restart 
	"Reiniciar su router", //_RestartRouter 
	"Recuperar", //_Restore 
	"Recuperar los ajustes de configuración", //_RestoreConfig 
	"recuperar la configuración de fábrica por defecto", //_RestoreDefault 
	"recuperar la configuración de fábrica por defecto", //_RestoreDefaultSet 
	"Reintentar", //_Retry 
	"Reescribir Contraseña L2TP", //_RetypeL2TPPwd 
	"Reescribir Contraseña PPTP", //_RetypePPTPPwd 
	"Reescribir contraseña", //_RetypePwd 
	"RIP 1", //_RIP1 
	"RIP 2", //_RIP2 
	" tabla de enrutamiento", //_RoutingTb 
	"umbral RTS", //_RTSthreshold 
	"L2TP Rusa", //_RussiaL2TP
	"PPPoE Rusa", //_RussiaPPPoE
	"PPTP Rusa", //_RussiaPPTP
	"Sab", //_Sat 
	"Guardar", //_Save 
	"Guardar ajustes de configuración", //_SaveConifg 
	"Guardar Ajustes", //_SaveSettings 
	"Segundo", //_Second 
	"Secundario.", //_Secondary 
	"Segundos", //_seconds 
	"Seguridad ", //_Security 
	"Seleccionar Tipo de Conexión de Internet", //_Sel_InternetConnType 
	"Número PIN propio", //_SelfPIN 
	"Enviar", //_Send 
	"Sep", //_Sep 
	"servidor IP", //_SerIP 
	"servidor IP / nombre", //_SerIPName 
	"dirección del servidor", //_ServerAddr  
	"servidor nombre", //_ServerName 
	"Nombre del servicio", //_ServiceName 
	"Establecer la Dirección IP dinámica", //_SetDynamicIP 
	"Establecer la Dirección IP fija", //_SetFixedIP 
	"Establecer el cliente L2TP", //_SetL2TPclient 
	"Ajustar PPPoE para obtener IP automáticamente", //_SetPPPoEdynamicIP 
	"Ajustar PPPoE con una dirección IP fija", //_SetPPPoEfixedIP 
	"Establecer el cliente PPTP", //_SetPPTPclient 
	"Establecer contraseña", //_SetPwd 
	"Ajustar la Hora", //_SetTime 
	"Ajustar la Hora", //_SetTime 
	"Ajustes", //_Settings 
	"Configuración completa", //_SetupComplete 
	"Asistente de configuración", //_SetupWizard 
	"Clave compartida", //_SharedKey 
	"Secreto Compartido", //_SharedSecret 
	"sm-server", //_smSer 
	"Cuenta SMTP", //_SMTPAccount 
	"autenticación SMTP", //_SMTPAuth 
	"Contraseña SMTP", //_SMTPPwd 
	"Servidor SMTP", //_SMTPSer 
	"SNMP", //_SNMP 
	"AP especial", //_SpecialAP 
	"Nombre AP especial", //_SpecialAPname 
	"Especificar IP", //_SpecifyIP 
	"Fuente ", //_Src 
	"SSID", //_SSID 
	"retransmisión SSID ", //_SSIDbroadcast 
	"Inicio  ", //_Start 
	"dirección IP", //_StartIP 
	"dirección IP de Inicio ", //_StartIPaddr 
	"Iniciar PBC", //_StartPBC 
	"Iniciar PIN", //_StartPIN 
	"Añadir DHCP estática", //_StaticDHCP 
	"Lista de DHCPs fijas", //_StaticDHCPlist 
	"dirección IP fija", //_StaticIP 
	"Estadística", //_Statistic 
	"estado  ", //_Status 
	"Sigilo", //_Stealth 
	"Paso 1.", //_Step1 
	"Paso 2.", //_Step2 
	"Paso 3.", //_Step3 
	"Paso 4.", //_Step4 
	"Paso 5.", //_Step5 
	"Paso 6.", //_Step6 
	"máscara subred", //_Subnet 
	"Dom", //_Sun 
	"Sincronizar el reloj con", //_SyncClock 
	"Sincronizar el reloj con el servidor NTP", //_SyncClockNTP 
	"Actividad del sistema", //_SysActivity 
	"Contacto del sistema", //_SysContact 
	"Localización del sistema", //_SysLocation 
	"Nombre del sistema", //_SysName 
	"sistema", //_System 
	"TCP", //_TCP 
	"TCP", //_TCP 
	"Jue", //_Thu 
	"Hora", //_Time
	"Ajuste  de  Hora", //_TimeSet 
	"zona horaria", //_TimeZone 
	"TKIP", //_TKIP 
	"Para  ", //_To 
	"Para E-mail", //_ToEmail 
	"Herramientas", //_Tools
	"Receptor de trampas 1", //_TrapReceiver 
	"TrendNet", //_TrendNet
	"Activador  ", //_Trigger 
	"Intervalo de Puertos de Activador.", //_TriggerPortRange 
	"Mar", //_Tue 
	"Tipo", //_Type
	"UDP", //_UDP 
	"UDP", //_UDP 
	"Desconfigurado", //_UnConfigured 
	"actualiza", //_update 
	"Actualizar prioridad: ", //_UpdatePriority 
	"actualizar", //_Upgrade 
	"actualizar el Firmware", //_UpgradeFirmware 
	"UPnP", //_UPnP 
	"<span><b><font size=\"3\">Tiempo de funcionamiento del router", //_UpTime 
	"usuario.", //_User 
	"nombre del usuario.", //_username
	"Utilización", //_Utilization 
	"verificación de contraseña", //_VerifyPwd 
	"Nombre del servidor virtual", //_VirSerName 
	" servidores virtuales", //_VirtualSer
	"WAN", //_WAN 
	"dirección IP de la LAN", //_WAN_IP 
	"Dirección de la puerta de enlace (WAN)", //_WANgwAddr 
	"WAN IP", //_WANIP 
	"Configuración física WAN", //_WANPhy 
	"máscara subred de la WAN", //_WANSubnet 
	"Mie", //_Wed 
	"Semana", //_Week 
	"WEP", //_WEP 
	"Clave WEP", //_WEPkey 
	"Formato de Clave WEP", //_WEPKeyFormat 
	"Longitud de clave WEP", //_WEPkeyLength 
	"Configuración Protegida Wi-Fi.", //_wifiPS 
	"Configuración Protegida Wi-Fi.", //_WiFiSetup
	"Inalámbrico", //_Wireless 
	"Lista de clientes inalámbrico", //_WirelessClientList 
	"LAN  inalámbrico", //_WirelessLAN 
	"Asistente.", //_Wizard 
	"Mostrar el Asistente la próxima vez", //_WizardNextTime 
	"WMM", //_WMM
	"WPA", //_WPA 
	"WPA2", //_WPA2 
	"WPA2AUTO-PSK", //_WPA2AUTOPSK
	"WPA2-PSK", //_WPA2PSK
	"WPA-AUTO", //_WPAauto 
	"WPA-PSK", //_WPAPSK
	"WPS", //_WPS 
	"Año", //_Year 
	"Si", //_Yes 
	"Contraseña inválida, por favor pruebe otra vez.", //li__alert__3 
	"Iniciar sesión en el router", //li_intro 
	"por favor, escriba el nombre de usuario.", //li_msg1 
	"La IP LAN ha sido modificada, por favor espere", //li_msg2
	"seconds …", //li_msg3
	"La configuración está teniendo lugar.  Haga clic en el botón \"Continue\" (continuar) para proceder con las otras configuraciones", //li_msg4
	"Continuar", //li_msg5
	"Enlace", //li_msg6
	"Please start WPS on the wireless device you are adding to your wireless network within", //li_msg7
	"que los equipos y dispositivos con las direcciones MAC que aparecen a continuación tengan acceso a la red local (LAN / WLAN), la gestión de la red e Internet", //li_msg8
	"La configuración Wi-Fi protegida (WPS) se utiliza para agregar con facilidad dispositivos a una red mediante un PIN o la pulsación de un botón. Los dispositivos deben admitir la configuración Wi-Fi protegida para que puedan ser configurados mediante este método.", //li_msg10
	"Un número de PIN es un número único que se utiliza para que el enrutador y la estación se identifiquen entre sí cuando se crea una nueva red mediante WPS. ", //li_msg11
	"La configuración inalámbrica del enrutador nunca se modifica de forma manual o mediante WPS, es un estado sin configurar.", //li_msg12
	"Se establece las contraseñas de los usuarios, la hora local, la zona horario y las configuraciones predeterminadas", //li_msg127
	"Esta página le permite configurar", //li_msg128
	"propiedades, como", //li_msg129
	"La configuración inalámbrica del enrutador nunca se modifica de forma manual o mediante WPS, es un estado sin configurar.", //li_msg13
	"Los perfiles LAN y DHCP aparecen en la tabla DHCP en la parte inferior de la pantalla. ", //li_msg130
	"en la casilla de texto.  El nombre de host es requerido por algunos", //li_msg131
	"El nombre de host por defecto es", //li_msg132
	"Este es el", //li_msg133
	"enrutador. La dirección IP predeterminada es 192.168.10.1.", //li_msg134
	"para el router en el cuadro de texto. La máscara de subred por defecto es", //li_msg135
	"Permite la", //li_msg136
	"servidor para permitir el router para asignar automáticamente direcciones IP a los dispositivos de conexión a la", //li_msg137
	"puerto o de forma inalámbrica al TEW-731BR.  El DHCP se habilita de forma predeterminada.", //li_msg138
	"Restaurar el dispositivo por defecto. ", //li_msg139
	"El botón de arranque se utiliza para desencadenar el proceso WPS para crear una nueva red Hay dos tipos de botones de arranque, de hardware y software (en la página de configuración Wi-Fi protegida/inalámbrica) para que los usuarios inicien WPS. Al presionar el botón de arranque, se utilizará la conexión para crear entre el enrutador y el dispositivo del usuario.", //li_msg14
	"Reiniciando.", //li_msg140
	"No apague ni reinicie el dispositivo cuando se lleve a cabo el proceso de actualización del firmware.", //li_msg141
	"mismo dominio y uso de antigua IP LAN", //li_msg142
	"Esta dirección de sitio web", //li_msg143
	"no es válido", //li_msg144
	"¿Está seguro que desea eliminar:", //li_msg145
	"Está seguro que desea actualizar:", //li_msg146
	"El filtro de entrada debe ser más pequeño que", //li_msg147
	"No válido de direcciones IP:", //li_msg148
	"Habilitar al menos un rango de IP de origen para ", //li_msg149
	"Esta página le permite definir restricciones de acceso, configurar", //li_msg15
	"debe estar dentro del rango DHCP configurado.", //li_msg150
	"ya está en uso.", //li_msg151
	"Reservados dirección IP para la dirección MAC", //li_msg152
	"ya está establecido.", //li_msg153
	"Nombre de host no puede estar vacío", //li_msg154
	"Carácter no válido", //li_msg155
	"Dirección IP de servidor Syslog", //li_msg156
	"Por favor espere por un ping", //li_msg157
	"resultado…", //li_msg158
	"Ping de dirección IP", //li_msg159
	"definir el acceso para aplicaciones especiales tales como juegos, y establecer", //li_msg16
	"La dirección IP no puede permitir entrar en bucle IP o multicaso IP (127.xxx).", //li_msg160
	"N/A", //li_msg161
	"Le permite aceptar o denegar el acceso a Internet a usuarios dentro de la LAN basada", //li_msg17
	"en la interfaz de su red. Haga clic en el botón radio próximo a", //li_msg18
	"para desactivar la función de filtros MAC.", //li_msg19
	"Desactivar la función de filtro MAC.", //li_msg20
	"<b>Permitir</b> sólo que los equipos y dispositivos con las direcciones MAC que aparecen a continuación tengan acceso a la red local (LAN / WLAN), la gestión de la red e Internet.", //li_msg21
	"<b>Denegar</b> sólo el acceso a los equipos y dispositivos con las direcciones MAC que aparecen a continuación a la red local (LAN / WLAN), la gestión de la red e Internet. ", //li_msg22
	"Use esta sección para crear un perfil de usuario para el que se autorizará o denegará el acceso a Internet.", //li_msg23
	"Al seleccionar elementos de la tabla en la parte inferior,", //li_msg24
	"en cualquier parte del artículo. La línea está seleccionado y los campos de forma automática los parámetros de carga del elemento, que puede editar.", //li_msg25
	"Escriba el nombre del usuario al que se le autoriza/deniega el acceso.", //li_msg26
	"Escriba el", //li_msg27
	"de interfaz de red del usuario.", //li_msg28
	"Haga 'clic' para añadir el usuario a la lista de la parte inferior de la página.", //li_msg29
	"Haga 'clic' para actualizar la información para el usuario, si usted ha cambiado alguno de los campos.", //li_msg30
	"Seleccione un usuario de la tabla en la parte inferior de la lista y haga clic en", //li_msg31
	"para eliminar el perfil de usuario.", //li_msg32
	"Haga clic en el", //li_msg33
	"botón para borrar todos los campos y escriba la nueva información.", //li_msg34
	"El Bloqueo URL se usa para denegar a los PCs de la red LAN (Red de Área Local, siglas en inglés) el acceso a Sitos Web específicos por su URL (Localizador Uniforme de Recursos, siglas en inglés).   Un URL es una cadena de texto especialmente formateada que defina una Localización en Internet. Si cualquier parte del URL contiene la palabra de bloqueo, el Sitio Web no será accesible y no aparecerá la página Web.", //li_msg35
	"Cuando seleccione elementos de la tabla de la parte inferior, haga 'clic' en cualquier parte del elemento. La línea queda seleccionada y los campos cargan automáticamente los parámetros del elemento, que se pueden ahora editar:", //li_msg48
	"Nota: Agregue la dirección MAC utilizando la sección de la Tabla MAC que aparece primero en la parte inferior, luego seleccione la opción “Only Allow” (Permitir sólo) o “Only Deny” (Denegar sólo), y luego haga clic en “Apply” (Aplicar). ", //li_msg9
	"2,4 GHz", //_2_4G
	"Siempre", //_Always
	"AP Deshabilitar", //_AP_Disable
	"AP Habilitar", //_AP_Enable
	"Tipo de Cifrado", //_CipherType
	"Estado Configurado", //_ConfigState
	"Conectados", //_Connected
	"Conexión", //_Connecting
	"Desconectado", //_Disconnected
	"Desconexión", //_Disconnecting
	"Servidor DNS", //_DNS_Ser
	"Servidor DNS 1", //_DNS_Ser1
	"Servidor DNS 2", //_DNS_Ser2
	"Duplex", //_Duplex
	"Editar filtro de protocolo en la lista", //_Firewallname
	"Editar filtro de protocolo en la lista", //_ifmsg1
	"Tiempo de inactividad", //_IdleTime
	"LAN1", //_LAN1
	"Filtro MAC", //_MACfilter
	"Nombre de MAC", //_MACname
	"Mbps", //_Mbps
	"Modo", //_Mode
	"<strong>Cancel:</strong>Haga 'clic' en el botón Cancelar para borrar todos los campos y escribir información nueva.", //_MSG569
	"<strong>PPTP Rusa : </strong> Cuando use PPTP, introduzca la siguiente información el los campos (parte de la información se la proporciona su Proveedor de Servicios de Internet (ISP))", //_MSG788
	"<strong>L2TP Rusa: </strong> Cuando use L2TP, introduzca la siguiente información el los campos (parte de la información se la proporciona su Proveedor de Servicios de Internet (ISP))", //_MSG789
	"El DNS (Servicio de Nombres del dominio) : dinámico es un método de mantener el nombre del dominio enlazada con una dirección IP cambiante (dinámica).<br> Con la mayoría de las conexiones de cable y DSL, a usted se le asigna una dirección IP dinámica y esa dirección está activa solamente por la duración de una conexión específica.<br> Usted puede configurar su servicio DDNS y el router actualizará automáticamente su servidor DDNS cada vez que recibe una dirección IP diferente. Primero, necesita registrar su DNS preferente en el proveedor DDNS. Después, por favor seleccione la dirección DDNS en la dirección del servidor y cumplimente la información relacionada en los campos siguientes: Nombre de sistema anfitrión, Nombre de Usuario y Contraseña.", //_MSG790
	"This screen enables you to set up  remote management features.", //_MSG791
	"Esta pantalla le permite habilitar y configurar el SNMP (protocolo simple de administración de redes) en el enrutador.  Mediante el uso de SNMP, los mensajes de notificación o alertas SNMP Traps (el estado del enrutador / información del dispositivo) se pueden enviar desde el enrutador a las estaciones de administración SNMP externas/ los receptores de captura para monitorizar el dispositivo.", //_MSG792
	"Seleccione Enable (Habilitar) para habilitar el SNMP en el enrutador. ", //_MSG793
	"Escriba la ubicación del sistema para describir brevemente la ubicación del dispositivo. ", //_MSG794
	"Ubicación del sistema (opcional)", //_MSG795
	"Contacto del sistema (opcional)", //_MSG796
	"Escriba el contacto del sistema para identificar el nombre del contacto o administrador del dispositivo. ", //_MSG797
	"Escriba el nombre de la comunidad de SNMP.  Este debe coincidir con la comunicación SNMP de la estación de administración SNMP externa / receptor de captura.", //_MSG798
	"Trampa receptor 1/2/3", //_MSG799
	"Escriba la dirección IP de la estación de gestión externa SNMP / trampa receptor.", //_MSG800
	"Esta pantalla le permite configurar la administración remota. Usando la administración remota, el router se puede configurar a través de la <A HREF=\"glossary.htm#def_WAN\">WAN</A> usando el explorador de Internet. Es necesario un nombre de usuario y una contraseña para efectuar la administración remota.", //_MSG801
	"Transmisión de multidifusión", //_MuitlcastStream
	"Nota", //_Note
	"Sólo", //_Only
	"Configuración del botón", //_PBC
	"DNS primario", //_PrimaryDNS
	"Protocolo del filtro", //_ProtocolFilter
	"Estreno", //_Release
	"IP final remota", //_RemoteIPEnd
	"IP inicial remota", //_RemoteIPStart
	"Renovar", //_Renew
	"IP de reserva", //_ReservationIP
	"Reserva de dirección IP", //_ReservationIPAddr
	"Reservados dirección IP", //_ReservedIPAddr
	"Reservados nombre", //_Reservedname
	"DNS secundario", //_SecondaryDNS
	"Puerto de servidor SMTP", //_SMTPSerPort
	"Estadísticas", //_Statistics
	"arriba", //_top
	"Estado no configurado", //_UnconfiguredState
	"WPA|AUTO-PSK", //_WPA_Auto_PSK
	"WPA|AUTO-EAP", //_WPA_EAP
	"WPA2-EAP", //_WPA2EAP
	"WPA-EAP", //_WPAEAP
	"permiten", //__allow
	"Siempre-encendido", //__AlwaysOn 
	"y", //__and
	"atrás", //__back
	"haga clic en", //__click
	"crear", //__create
	"Por defecto", //__default
	"deny", //__deny
	"de dominio", //__domain
	"de nombres de dominio", //__DomainName 
	"permiten", //__enable
	"salir", //__Exit
	"no", //__fail
	"filtro", //__filter
	"filtros", //__filters
	"cortafuego", //__firewall
	"anfitrión", //__host
	"sistema anfitrión", //__hostname
	"Ninguno", //__none
	"Abrir", //__open
	"o", //__or
	"paquete", //__packet
	"paquetes", //__packets
	"parámetros", //__parameters
	"puerto", //__port
	"protocolo", //__protocol
	"normas", //__rules
	"servidor", //__server
	"conjunto", //__set
	"AP especiales", //__special_ap
	"máscara de subred", //__subnet
	"éxito", //__success
	"Éxito", //__Success
	"servidores virtuales", //__virtualservs
	"servidor virtual", //__virtualserv
	"Siguiente >", //_gtNext
	"< Atrás", //_ltBack
	"Números PIN", //_PINnum
	"Bigpond sesión", //_bpalogin
	"Bigpond Desconectarse", //_bpalogout
	"Idioma", //_Language
	"Actualización de idioma", //_upd_lang
	"Checksum error.", //_upd_msg_checksum_err
	"Identificador de hardware malo. ", //_upd_msg_bad_hwid
	"Formato de archivo desconocido. ", //_upd_msg_unknow_fmt
	"Actualización de éxito.", //_upd_msg_success
	"Dirección IP fija", //_FixedIPAddr
	"&nbsp;TEW-731BR", //_snmp_system_name
	"Paquetes para captura", //_Ptrace
	"Interfaz de red ", //_ptrace_sel_network
	"Detener", //_Stop
	"Descargar", //_Download
	"Parada automática en", //_auto_stop
	"Obtener primero", //_Get_first
	"Obtener", //_Get
	"MB (Menos de 2MB)", //_MSG802
	"Debe ser menor o igual a 2MB", //_MSG803
	"Instalación rápida", //_QuickInstall
	"Inf. del sistema", //_SystemInfo
	"Estado de WAN", //_WanStatus
	"Información de DNS", //_DNSInfo
	"Estado de WLAN", //_WlanStatus
	"Estado de LAN", //_LanStatus
	"Motivo", //_Reason
	"IP de PHY", //_PHYIP
	"Máscara del PHY", //_PHYMask
	"Puerta de enlace del PHY", //_PHYGateway
	"Estado de radio", //_RadioStatus
	"Estado de WPS", //_WPSStatus
	"Estado de la conexión", //_ConnStatus
	"Cliente de WLAN", //_WlanClient
	"Cliente de LAN", //_LanClient
	"Modo de seguridad", //_SecurityMode
	"Versión del hardware", //_HWVer
	"Tiempo de actividad", //_SysUpTime
	"Pérdida en el cable", //_CableLoss
	"The Server Name entered is invalid", //li_msg162
	"PPTP Account can not be empty", //li_msg163
	"L2TP Account can not be empty", //li_msg164
	"Diagnostic", //_Diagnostic
	"IPv6", //_IPv6
	"IPv6 - Automático", //_IPv6Auto
	"6rd_Tunnel", //_6rdTunnel
	"Configuración 6rd", //_6rdConfig
	"6rd DHCPv4 Option", //_6rdDhcpv4
	"Configuración manual", //_6rdMaunal
	"Prefijo de IPv6 6rd", //_6rdIPv6Prefix
	"Dirección IPv4", //_v4Addr
	"Longitud de la máscara", //_MaskLength
	"Prefijo de IPv6 asignado", //_6rdPrefix
	"Dirección de enlace local de túnel", //_TunnelAddress
	"Dirección IPv4 de relé 6rd de borde", //_6rdRelayv4Addr
	"Servidor DNS IPv6 primario", //_v6dns1
	"Servidor DNS IPv6 secundario", //_v6dns2
	"Sólo", //_Only1
	"La configuración WAN está teniendo lugar.  Haga clic en el botón \"Continue\" (continuar) para proceder con las otras configuraciones", //li_msg165
	"Capturing packets allows you to further analyze the contents of each data packet from a specified interface on the router for advanced monitoring and troubleshooting purposes. Once the packet capture file is downloaded from the router, a third party packet capture software application is required to open the file and view the contents.", //_MSG804
	"<SPAN STYLE=\"font-weight : bold;\">Network Interface:</SPAN> Select the network interface to capture packets.", //_MSG805
	"<SPAN STYLE=\"font-weight : bold;\">Start:</SPAN> Click <b>Start</b> to start capturing packets on the specified interface.", //_MSG806
	"<SPAN STYLE=\"font-weight : bold;\">Stop:</SPAN> Click <b>Stop</b> to stop capturing packets on the specified interface.", //_MSG807
	"<SPAN STYLE=\"font-weight : bold;\">Download:</SPAN> Click <b>Download</b> to download the packet capture file from the router. You will be prompted to choose a save location on your computer to save the file.", //_MSG808
	"Settings has been changed, please wait for ", //li_msg166
	"Activate 802.11n will set WMM enabled.", //_WWMInfo
	"Please specify an ip address to Remote IP Range", //verify_remote_ip
	"La dirección IP no es válida", //LS46
	"Auto-lock-down-state", //auto_lock
	"Unlock", //btn_auto_lock
	"La dirección IPv6 es una dirección ilegal", //MSG042
	"Port Mirroring", //PortMirror_01
	"Mirror port", //PortMirror_02
	"Port mirroring setting", //PortMirror_03
	"TX", //PortMirror_04
	"RX", //PortMirror_05
	"La dirección IPv6 sólo permite los dos puntos dobles una vez.", //MSG041
	"If turn on hidden SSID; WPS2.0 will be disabled", //msg_wps_sec_03
	"If TKIP; WPS2.0 will be disabled", //msg_wps_sec_02
	"If WEP is turn on, WPS2.0 will be disabled", //msg_wps_sec_01
	"Unlocked", //stat_unlock
	"Locked", //stat_lock
	"When you set security WEP, cipher type is TKIP or Visibility Status is Invisible, WPS will be disable.", //notify_wps
	"WPS cannot work when TKIP Authentication is used. You need go to Wireless/Security page to modify settings to make WPS take effect.", //notify_wps_01
	"El archivo de configuración restaurado no es correcto. Es posible que haya restaurado un archivo que no es para este dispositivo o que el archivo esté corrompido.", //rs_intro_1
	"" //MAX
);
var _128bit =0;
var _1st =1;
var _20MHz =2;
var _2nd =3;
var _3rd =4;
var _4th =5;
var _5th =6;
var _64bit =7;
var _6th =8;
var _80211bg =9;
var _80211bgMix =10;
var _80211bgn =11;
var _80211bgnMix =12;
var _80211bOnly =13;
var _80211gOnly =14;
var _80211mode =15;
var _80211nOnly =16;
var _Access =17;
var _AccessCon =18;
var _Action =19;
var _Add =20;
var _AddStaticDHCP =21;
var _Admin =22;
var _AdmPwd =23;
var _Advanced =24;
var _AES =25;
var _Allow =26;
var _AllowPingWAN =27;
var _AlwaysOn =28;
var _AlwaysOn =29;
var _AM =30;
var _Apply =31;
var _Apr =32;
var _ASCII =33;
var _at =34;
var _Attacks =35;
var _Aug =36;
var _Authentication =37;
var _AuthSer =38;
var _AuthType =39;
var _Auto =40;
var _Auto20_40MHz =41;
var _AutoChannel =42;
var _Automatic =43;
var _AutoReconn =44;
var _Back=45;
var _Basic =46;
var _BeaconInterval =47;
var _BigPondCable=48;
var _Both =49;
var _bytes =50;
var _Cancel =51;
var _Channel =52;
var _ChannelWidth =53;
var _ChooseTimeZone =54;
var _Clear =55;
var _ClearLog =56;
var _ClientPIN =57;
var _CloneMAC =58;
var _Close =59;
var _Closed =60;
var _Community =61;
var _Config =62;
var _Configured =63;
var _ConfirmPassphrase =64;
var _ConfirmPwd =65;
var _Conn =66;
var _Connect=67;
var _connectTypeNone=68;
var _ConnTime =69;
var _conntype =70;
var _Day =71;
var _DaylightSaving =72;
var _Days =73;
var _dceSer =74;
var _DDNS =75;
var _DDNSserverList =76;
var _DebugInfo =77;
var _Dec =78;
var _default =79;
var _DefaultGW =80;
var _Delete =81;
var _Deny =82;
var _Dest =83;
var _DevInfo =84;
var _DHCP =85;
var _DHCPclient =86;
var _DHCPClient_FixedIP =87;
var _DHCPclientList =88;
var _DHCPorFix=89;
var _DHCPrelease=90;
var _DHCPrenew=91;
var _DHCPSer =92;
var _DHCPserEndIP =93;
var _DHCPserStartIP =94;
var _DHCPTable =95;
var _Disable =96;
var _Disabled =97;
var _Disconnect=98;
var _DMZ =99;
var _DMZHost=100;
var _DNS =101;
var _dns_err =102;
var _DNS1 =103;
var _DNS2 =104;
var _DNSAddr1 =105;
var _DNSAddr2 =106;
var _DNSServer1 =107;
var _DNSServer2 =108;
var _domain =109;
var _DomainName =110;
var _DomainUrlBlocking =111;
var _DomainUrlList =112;
var _DropPacket =113;
var _DTIMinterval =114;
var _DynamicIP =115;
var _DynDHCPlist =116;
var _dyndns =117;
var _EAP =118;
var _EmailLog =119;
var _EmailLogNow =120;
var _Enable =121;
var _Enabled =122;
var _Encryption =123;
var _EncryptionType =124;
var _End =125;
var _EndIP =126;
var _EndIPaddr =127;
var _EveryDay =128;
var _EveryFri =129;
var _EveryMon =130;
var _EverySat =131;
var _EverySun =132;
var _EveryThur =133;
var _EveryTues =134;
var _EveryWed =135;
var _Exit =136;
var _ExpiredTime =137;
var _Feb =138;
var _Filter =139;
var _FilterName =140;
var _Filters =141;
var _firewall =142;
var _FirewallRule=143;
var _FirewallSet =144;
var _FirewallSettings =145;
var _Firmware =146;
var _FirmwareVer =147;
var _FirstPage =148;
var _FixedIP=149;
var _FixedIP =150;
var _FragThreshold =151;
var _Fri =152;
var _From =153;
var _FromEmail =154;
var _FTP=155;
var _GMT_01 =156;
var _GMT_02 =157;
var _GMT_03 =158;
var _GMT_04 =159;
var _GMT_05 =160;
var _GMT_06 =161;
var _GMT_07 =162;
var _GMT_08 =163;
var _GMT_09 =164;
var _GMT_10 =165;
var _GMT_11 =166;
var _GMT_12 =167;
var _GMT_13 =168;
var _GMT_14 =169;
var _GMT_15 =170;
var _GMT_16 =171;
var _GMT_17 =172;
var _GMT_18 =173;
var _GMT_19 =174;
var _GMT_20 =175;
var _GMT_21 =176;
var _GMT_22 =177;
var _GMT_23 =178;
var _GMT_24 =179;
var _GMT_25 =180;
var _GMT_26 =181;
var _GMT_27 =182;
var _GMT_28 =183;
var _GMT_29 =184;
var _GMT_30 =185;
var _GMT_31 =186;
var _GMT_32 =187;
var _GMT_33 =188;
var _GMT_34 =189;
var _GMT_35 =190;
var _GMT_36 =191;
var _GMT_37 =192;
var _GMT_38 =193;
var _GMT_39 =194;
var _GMT_40 =195;
var _GMT_41 =196;
var _GMT_42 =197;
var _GMT_43 =198;
var _GMT_44 =199;
var _GMT_45 =200;
var _GMT_46 =201;
var _GMT_47 =202;
var _GMT_48 =203;
var _GMT_49 =204;
var _GMT_50 =205;
var _GMT_51 =206;
var _GMT_52 =207;
var _GMT_53 =208;
var _GMT_54 =209;
var _GMT_55 =210;
var _GMT_56 =211;
var _GMT_57 =212;
var _GMT_58 =213;
var _GMT_59 =214;
var _GMT_60 =215;
var _GMT_61 =216;
var _GMT_62 =217;
var _GMT_63 =218;
var _GMT_64 =219;
var _GMT_65 =220;
var _GMT_66 =221;
var _GMT_67 =222;
var _GMT_68 =223;
var _GMT_69 =224;
var _GMT_70 =225;
var _GMT_71 =226;
var _GMT_72 =227;
var _GMT_73 =228;
var _GMT_74 =229;
var _GMT_75 =230;
var _GW =231;
var _GWAddr =232;
var _Help =233;
var _HEX =234;
var _HostName =235;
var _HostName_IP =236;
var _Hour =237;
var _Hours =238;
var _HTTP =239;
var _ICMP =240;
var _IDENT =241;
var _IdleTimeOut =242;
var _Incoming =243;
var _IncomingPort =244;
var _Interface =245;
var _InvalidHostName =246;
var _InvalidPIN =247;
var _IP =248;
var _IP_Addr =249;
var _IPAuto=250;
var _IPRange =251;
var _IPRangeEnd =252;
var _IPRangeStart =253;
var _IPSec =254;
var _Jan =255;
var _Jul =256;
var _Jun =257;
var _Key =258;
var _L2TP =259;
var _L2TPaccount =260;
var _L2TPpwd =261;
var _LAN =262;
var _LAN_DHCPSer =263;
var _LAN_Serv =264;
var _LANipAddr =265;
var _LANsubnet =266;
var _LastPage =267;
var _LeaseTime =268;
var _Load =269;
var _LoadSettngs =270;
var _LocalTime =271;
var _Log =272;
var _LogFull =273;
var _Login =274;
var _loginErrMsg =275;
var _LoginIsAdmin =276;
var _LoginIsUser =277;
var _LoginSer =278;
var _LogSer =279;
var _LogSet =280;
var _LogSettings =281;
var _LogType =282;
var _LonginAdmin =283;
var _LonginUser =284;
var _MAC =285;
var _MACAddr =286;
var _MacFilter =287;
var _MacTable =288;
var _Manual =289;
var _ManualTimeSet =290;
var _Mar =291;
var _Mask =292;
var _May =293;
var _Message=294;
var _Metric =295;
var _Minute =296;
var _minutes =297;
var _Mon =298;
var _Month =299;
var _MPPE =300;
var _msec =301;
var _MSG1 =302;
var _MSG10 =303;
var _MSG100 =304;
var _MSG101 =305;
var _MSG102 =306;
var _MSG103 =307;
var _MSG104 =308;
var _MSG105 =309;
var _MSG106 =310;
var _MSG107 =311;
var _MSG108 =312;
var _MSG109 =313;
var _MSG11 =314;
var _MSG110 =315;
var _MSG111 =316;
var _MSG112 =317;
var _MSG113 =318;
var _MSG114 =319;
var _MSG115 =320;
var _MSG116 =321;
var _MSG117 =322;
var _MSG118 =323;
var _MSG119 =324;
var _MSG12 =325;
var _MSG120 =326;
var _MSG121 =327;
var _MSG122 =328;
var _MSG123 =329;
var _MSG124 =330;
var _MSG125 =331;
var _MSG126 =332;
var _MSG127 =333;
var _MSG128 =334;
var _MSG129 =335;
var _MSG13 =336;
var _MSG130 =337;
var _MSG131 =338;
var _MSG132 =339;
var _MSG133 =340;
var _MSG134 =341;
var _MSG135 =342;
var _MSG136 =343;
var _MSG137 =344;
var _MSG138 =345;
var _MSG139 =346;
var _MSG14 =347;
var _MSG140 =348;
var _MSG141 =349;
var _MSG142 =350;
var _MSG143 =351;
var _MSG144 =352;
var _MSG145 =353;
var _MSG146 =354;
var _MSG147 =355;
var _MSG148 =356;
var _MSG149 =357;
var _MSG15 =358;
var _MSG150 =359;
var _MSG151 =360;
var _MSG152 =361;
var _MSG153 =362;
var _MSG154 =363;
var _MSG155 =364;
var _MSG156 =365;
var _MSG157 =366;
var _MSG158 =367;
var _MSG159 =368;
var _MSG16 =369;
var _MSG160 =370;
var _MSG161 =371;
var _MSG162 =372;
var _MSG163 =373;
var _MSG164 =374;
var _MSG165 =375;
var _MSG166 =376;
var _MSG167 =377;
var _MSG168 =378;
var _MSG169 =379;
var _MSG17 =380;
var _MSG170 =381;
var _MSG171 =382;
var _MSG172 =383;
var _MSG173 =384;
var _MSG174 =385;
var _MSG175 =386;
var _MSG176 =387;
var _MSG177 =388;
var _MSG178 =389;
var _MSG179 =390;
var _MSG180 =391;
var _MSG181 =392;
var _MSG182 =393;
var _MSG183 =394;
var _MSG184 =395;
var _MSG185 =396;
var _MSG186 =397;
var _MSG187 =398;
var _MSG188 =399;
var _MSG189 =400;
var _MSG190 =401;
var _MSG191 =402;
var _MSG192 =403;
var _MSG193 =404;
var _MSG194 =405;
var _MSG195 =406;
var _MSG196 =407;
var _MSG197 =408;
var _MSG198 =409;
var _MSG199 =410;
var _MSG2 =411;
var _MSG200 =412;
var _MSG201 =413;
var _MSG202 =414;
var _MSG203 =415;
var _MSG204 =416;
var _MSG205 =417;
var _MSG206 =418;
var _MSG207 =419;
var _MSG208 =420;
var _MSG209 =421;
var _MSG210 =422;
var _MSG211 =423;
var _MSG212 =424;
var _MSG213 =425;
var _MSG214 =426;
var _MSG215 =427;
var _MSG216 =428;
var _MSG217 =429;
var _MSG218 =430;
var _MSG219 =431;
var _MSG220 =432;
var _MSG221 =433;
var _MSG222 =434;
var _MSG223 =435;
var _MSG224 =436;
var _MSG225 =437;
var _MSG226 =438;
var _MSG227 =439;
var _MSG228 =440;
var _MSG229 =441;
var _MSG230 =442;
var _MSG231 =443;
var _MSG232 =444;
var _MSG233 =445;
var _MSG234 =446;
var _MSG235 =447;
var _MSG236 =448;
var _MSG237 =449;
var _MSG238 =450;
var _MSG239 =451;
var _MSG24 =452;
var _MSG240 =453;
var _MSG241 =454;
var _MSG242 =455;
var _MSG243 =456;
var _MSG244 =457;
var _MSG245 =458;
var _MSG246 =459;
var _MSG247 =460;
var _MSG248 =461;
var _MSG249 =462;
var _MSG25 =463;
var _MSG250 =464;
var _MSG251 =465;
var _MSG252 =466;
var _MSG253 =467;
var _MSG254 =468;
var _MSG255 =469;
var _MSG257 =470;
var _MSG258 =471;
var _MSG259 =472;
var _MSG26 =473;
var _MSG260 =474;
var _MSG261 =475;
var _MSG262 =476;
var _MSG263 =477;
var _MSG264 =478;
var _MSG265 =479;
var _MSG266 =480;
var _MSG267 =481;
var _MSG268 =482;
var _MSG269 =483;
var _MSG27 =484;
var _MSG270 =485;
var _MSG271 =486;
var _MSG272 =487;
var _MSG273 =488;
var _MSG274 =489;
var _MSG275 =490;
var _MSG276 =491;
var _MSG277 =492;
var _MSG278 =493;
var _MSG279 =494;
var _MSG28 =495;
var _MSG280 =496;
var _MSG281 =497;
var _MSG282 =498;
var _MSG283 =499;
var _MSG284 =500;
var _MSG285 =501;
var _MSG286 =502;
var _MSG287 =503;
var _MSG288 =504;
var _MSG289 =505;
var _MSG29 =506;
var _MSG290 =507;
var _MSG291 =508;
var _MSG292 =509;
var _MSG293 =510;
var _MSG294 =511;
var _MSG295 =512;
var _MSG296 =513;
var _MSG297 =514;
var _MSG298 =515;
var _MSG299 =516;
var _MSG3 =517;
var _MSG30 =518;
var _MSG300 =519;
var _MSG301 =520;
var _MSG302 =521;
var _MSG303 =522;
var _MSG304 =523;
var _MSG305 =524;
var _MSG306 =525;
var _MSG307 =526;
var _MSG308 =527;
var _MSG309 =528;
var _MSG309 =529;
var _MSG31 =530;
var _MSG310 =531;
var _MSG311 =532;
var _MSG312=533;
var _MSG313 =534;
var _MSG314 =535;
var _MSG315 =536;
var _MSG316 =537;
var _MSG317 =538;
var _MSG318 =539;
var _MSG319=540;
var _MSG32 =541;
var _MSG320 =542;
var _MSG321 =543;
var _MSG322 =544;
var _MSG323 =545;
var _MSG324 =546;
var _MSG325 =547;
var _MSG326 =548;
var _MSG327 =549;
var _MSG328 =550;
var _MSG329 =551;
var _MSG33 =552;
var _MSG330 =553;
var _MSG331 =554;
var _MSG332 =555;
var _MSG333 =556;
var _MSG334 =557;
var _MSG335 =558;
var _MSG336 =559;
var _MSG337 =560;
var _MSG338 =561;
var _MSG339 =562;
var _MSG34 =563;
var _MSG340 =564;
var _MSG341 =565;
var _MSG342 =566;
var _MSG343 =567;
var _MSG344 =568;
var _MSG345 =569;
var _MSG346 =570;
var _MSG347 =571;
var _MSG348 =572;
var _MSG349 =573;
var _MSG35 =574;
var _MSG350 =575;
var _MSG351 =576;
var _MSG352 =577;
var _MSG353 =578;
var _MSG354 =579;
var _MSG355 =580;
var _MSG356 =581;
var _MSG357 =582;
var _MSG358 =583;
var _MSG359 =584;
var _MSG36 =585;
var _MSG360 =586;
var _MSG361 =587;
var _MSG362 =588;
var _MSG363 =589;
var _MSG364 =590;
var _MSG365 =591;
var _MSG366 =592;
var _MSG367 =593;
var _MSG368 =594;
var _MSG369 =595;
var _MSG37 =596;
var _MSG370 =597;
var _MSG371 =598;
var _MSG372 =599;
var _MSG373 =600;
var _MSG374 =601;
var _MSG375 =602;
var _MSG376 =603;
var _MSG377 =604;
var _MSG378 =605;
var _MSG379 =606;
var _MSG38 =607;
var _MSG380 =608;
var _MSG381 =609;
var _MSG382 =610;
var _MSG383 =611;
var _MSG384 =612;
var _MSG385 =613;
var _MSG386 =614;
var _MSG387 =615;
var _MSG388 =616;
var _MSG389 =617;
var _MSG39 =618;
var _MSG390 =619;
var _MSG391 =620;
var _MSG392 =621;
var _MSG393 =622;
var _MSG394 =623;
var _MSG395 =624;
var _MSG396 =625;
var _MSG397 =626;
var _MSG398 =627;
var _MSG399 =628;
var _MSG4 =629;
var _MSG40 =630;
var _MSG400 =631;
var _MSG401 =632;
var _MSG402 =633;
var _MSG403 =634;
var _MSG404 =635;
var _MSG405 =636;
var _MSG406 =637;
var _MSG407 =638;
var _MSG408 =639;
var _MSG409 =640;
var _MSG41 =641;
var _MSG410 =642;
var _MSG411 =643;
var _MSG412 =644;
var _MSG413 =645;
var _MSG414 =646;
var _MSG415 =647;
var _MSG416 =648;
var _MSG417 =649;
var _MSG418 =650;
var _MSG419 =651;
var _MSG42 =652;
var _MSG420 =653;
var _MSG421 =654;
var _MSG422 =655;
var _MSG423 =656;
var _MSG424 =657;
var _MSG425 =658;
var _MSG426 =659;
var _MSG427 =660;
var _MSG428 =661;
var _MSG429 =662;
var _MSG43 =663;
var _MSG430 =664;
var _MSG431 =665;
var _MSG432 =666;
var _MSG433 =667;
var _MSG434 =668;
var _MSG435 =669;
var _MSG436 =670;
var _MSG437 =671;
var _MSG438 =672;
var _MSG44 =673;
var _MSG442 =674;
var _MSG443 =675;
var _MSG444 =676;
var _MSG445 =677;
var _MSG446 =678;
var _MSG447 =679;
var _MSG448 =680;
var _MSG449 =681;
var _MSG45 =682;
var _MSG450 =683;
var _MSG451 =684;
var _MSG454 =685;
var _MSG455 =686;
var _MSG456 =687;
var _MSG46 =688;
var _MSG460 =689;
var _MSG461 =690;
var _MSG462 =691;
var _MSG468 =692;
var _MSG47 =693;
var _MSG474 =694;
var _MSG475 =695;
var _MSG476 =696;
var _MSG482 =697;
var _MSG487 =698;
var _MSG488 =699;
var _MSG489 =700;
var _MSG49 =701;
var _MSG490 =702;
var _MSG495 =703;
var _MSG496 =704;
var _MSG497 =705;
var _MSG498 =706;
var _MSG499 =707;
var _MSG5 =708;
var _MSG50 =709;
var _MSG500 =710;
var _MSG501 =711;
var _MSG502 =712;
var _MSG503 =713;
var _MSG504 =714;
var _MSG505 =715;
var _MSG506 =716;
var _MSG507 =717;
var _MSG508 =718;
var _MSG509 =719;
var _MSG51 =720;
var _MSG510 =721;
var _MSG511 =722;
var _MSG512 =723;
var _MSG513 =724;
var _MSG514 =725;
var _MSG515 =726;
var _MSG516 =727;
var _MSG517 =728;
var _MSG519 =729;
var _MSG52 =730;
var _MSG520 =731;
var _MSG521 =732;
var _MSG522 =733;
var _MSG523 =734;
var _MSG524 =735;
var _MSG525 =736;
var _MSG526 =737;
var _MSG527 =738;
var _MSG528 =739;
var _MSG529 =740;
var _MSG53 =741;
var _MSG530 =742;
var _MSG531 =743;
var _MSG532 =744;
var _MSG533 =745;
var _MSG534 =746;
var _MSG535 =747;
var _MSG536 =748;
var _MSG537 =749;
var _MSG538 =750;
var _MSG539 =751;
var _MSG54 =752;
var _MSG540 =753;
var _MSG541 =754;
var _MSG542 =755;
var _MSG545 =756;
var _MSG546 =757;
var _MSG547 =758;
var _MSG548 =759;
var _MSG549 =760;
var _MSG55 =761;
var _MSG550 =762;
var _MSG551 =763;
var _MSG552 =764;
var _MSG554 =765;
var _MSG555 =766;
var _MSG557 =767;
var _MSG558 =768;
var _MSG559 =769;
var _MSG56 =770;
var _MSG560 =771;
var _MSG561 =772;
var _MSG562 =773;
var _MSG563 =774;
var _MSG564 =775;
var _MSG565 =776;
var _MSG566 =777;
var _MSG567 =778;
var _MSG568 =779;
var _MSG57 =780;
var _MSG570 =781;
var _MSG571 =782;
var _MSG573 =783;
var _MSG574 =784;
var _MSG575 =785;
var _MSG576 =786;
var _MSG577 =787;
var _MSG578 =788;
var _MSG579 =789;
var _MSG58 =790;
var _MSG580 =791;
var _MSG581 =792;
var _MSG583 =793;
var _MSG584 =794;
var _MSG586 =795;
var _MSG587 =796;
var _MSG588 =797;
var _MSG589 =798;
var _MSG59 =799;
var _MSG590 =800;
var _MSG591 =801;
var _MSG592 =802;
var _MSG593 =803;
var _MSG594 =804;
var _MSG595 =805;
var _MSG596 =806;
var _MSG599 =807;
var _MSG6 =808;
var _MSG60 =809;
var _MSG600 =810;
var _MSG601 =811;
var _MSG602 =812;
var _MSG603 =813;
var _MSG604 =814;
var _MSG605 =815;
var _MSG607 =816;
var _MSG608 =817;
var _MSG609 =818;
var _MSG61 =819;
var _MSG610 =820;
var _MSG611 =821;
var _MSG612 =822;
var _MSG613 =823;
var _MSG614 =824;
var _MSG615 =825;
var _MSG618 =826;
var _MSG619 =827;
var _MSG62 =828;
var _MSG620 =829;
var _MSG621 =830;
var _MSG622 =831;
var _MSG623 =832;
var _MSG624 =833;
var _MSG625 =834;
var _MSG626 =835;
var _MSG627 =836;
var _MSG628 =837;
var _MSG629 =838;
var _MSG63 =839;
var _MSG630 =840;
var _MSG631 =841;
var _MSG632 =842;
var _MSG633 =843;
var _MSG634 =844;
var _MSG635 =845;
var _MSG636 =846;
var _MSG637 =847;
var _MSG638 =848;
var _MSG639 =849;
var _MSG64 =850;
var _MSG640 =851;
var _MSG641 =852;
var _MSG642 =853;
var _MSG643 =854;
var _MSG644 =855;
var _MSG645 =856;
var _MSG646 =857;
var _MSG647 =858;
var _MSG648 =859;
var _MSG649 =860;
var _MSG65 =861;
var _MSG650 =862;
var _MSG651 =863;
var _MSG652 =864;
var _MSG653 =865;
var _MSG654 =866;
var _MSG655=867;
var _MSG656=868;
var _MSG657=869;
var _MSG658=870;
var _MSG659=871;
var _MSG66 =872;
var _MSG660=873;
var _MSG661=874;
var _MSG662=875;
var _MSG663=876;
var _MSG664=877;
var _MSG665=878;
var _MSG666=879;
var _MSG667=880;
var _MSG668=881;
var _MSG669=882;
var _MSG67 =883;
var _MSG670=884;
var _MSG671=885;
var _MSG672=886;
var _MSG673=887;
var _MSG674=888;
var _MSG675=889;
var _MSG676=890;
var _MSG677=891;
var _MSG678=892;
var _MSG679=893;
var _MSG68 =894;
var _MSG680=895;
var _MSG681=896;
var _MSG682=897;
var _MSG683=898;
var _MSG684=899;
var _MSG685=900;
var _MSG686=901;
var _MSG687=902;
var _MSG688=903;
var _MSG689=904;
var _MSG69 =905;
var _MSG690=906;
var _MSG691=907;
var _MSG692=908;
var _MSG693=909;
var _MSG694=910;
var _MSG695=911;
var _MSG696=912;
var _MSG697=913;
var _MSG698=914;
var _MSG699=915;
var _MSG70 =916;
var _MSG700=917;
var _MSG701=918;
var _MSG702=919;
var _MSG703=920;
var _MSG704=921;
var _MSG705=922;
var _MSG706=923;
var _MSG707=924;
var _MSG708=925;
var _MSG709=926;
var _MSG71 =927;
var _MSG710=928;
var _MSG711=929;
var _MSG712=930;
var _MSG713=931;
var _MSG714=932;
var _MSG715=933;
var _MSG716=934;
var _MSG717=935;
var _MSG718=936;
var _MSG719=937;
var _MSG72 =938;
var _MSG720=939;
var _MSG721=940;
var _MSG722=941;
var _MSG723=942;
var _MSG724=943;
var _MSG725=944;
var _MSG726=945;
var _MSG727=946;
var _MSG728=947;
var _MSG729=948;
var _MSG73 =949;
var _MSG730=950;
var _MSG731=951;
var _MSG732=952;
var _MSG733=953;
var _MSG734=954;
var _MSG735=955;
var _MSG736=956;
var _MSG737=957;
var _MSG738=958;
var _MSG739=959;
var _MSG74 =960;
var _MSG740=961;
var _MSG741=962;
var _MSG743=963;
var _MSG744=964;
var _MSG745=965;
var _MSG746=966;
var _MSG747=967;
var _MSG748=968;
var _MSG749=969;
var _MSG75 =970;
var _MSG750=971;
var _MSG751=972;
var _MSG752=973;
var _MSG753=974;
var _MSG754=975;
var _MSG755=976;
var _MSG756=977;
var _MSG757=978;
var _MSG758=979;
var _MSG759=980;
var _MSG76 =981;
var _MSG760=982;
var _MSG761=983;
var _MSG762=984;
var _MSG763=985;
var _MSG764=986;
var _MSG765=987;
var _MSG766=988;
var _MSG767=989;
var _MSG768=990;
var _MSG769=991;
var _MSG77 =992;
var _MSG770=993;
var _MSG772=994;
var _MSG773=995;
var _MSG774=996;
var _MSG776=997;
var _MSG778=998;
var _MSG78 =999;
var _MSG780=1000;
var _MSG781=1001;
var _MSG782=1002;
var _MSG783=1003;
var _MSG784=1004;
var _MSG785=1005;
var _MSG786=1006;
var _MSG787=1007;
var _MSG79 =1008;
var _MSG8 =1009;
var _MSG80 =1010;
var _MSG81 =1011;
var _MSG82 =1012;
var _MSG83 =1013;
var _MSG84 =1014;
var _MSG85 =1015;
var _MSG86 =1016;
var _MSG87 =1017;
var _MSG88 =1018;
var _MSG89 =1019;
var _MSG9 =1020;
var _MSG90 =1021;
var _MSG91 =1022;
var _MSG92 =1023;
var _MSG93 =1024;
var _MSG94 =1025;
var _MSG95 =1026;
var _MSG96 =1027;
var _MSG97 =1028;
var _MSG98 =1029;
var _MSG99 =1030;
var _MTU =1031;
var _MuitlcastStr =1032;
var _MyIP =1033;
var _Name =1034;
var _NetworkAddr =1035;
var _NetworkMask =1036;
var _New=1037;
var _NewPwd =1038;
var _Next=1039;
var _NextPage =1040;
var _No =1041;
var _None =1042;
var _Notice =1043;
var _Nov =1044;
var _NTP=1045;
var _NTPser =1046;
var _NTPSer =1047;
var _ObtainIPAuto =1048;
var _Oct =1049;
var _OnDemand =1050;
var _OnlyMSCHAPv2 =1051;
var _open =1052;
var _OpenSys =1053;
var _optional =1054;
var _Packets =1055;
var _Page =1056;
var _Passphrase =1057;
var _Passward =1058;
var _Peak =1059;
var _Ping=1060;
var _PingTest =1061;
var _PM =1062;
var _Port =1063;
var _PortRange =1064;
var _PPPoE=1065;
var _PPPoEDiscon=1066;
var _PPTP =1067;
var _PPTPaccount =1068;
var _PPTPpwd =1069;
var _PreviousPage =1070;
var _Primary =1071;
var _PriorityDown =1072;
var _PriorityUp =1073;
var _PriPort =1074;
var _Protocol =1075;
var _Protocol_IP_Filters =1076;
var _ProtocolFilters =1077;
var _PSK =1078;
var _PSKEAP=1079;
var _Public =1080;
var _PubPort =1081;
var _PushBtnConfig =1082;
var _Pwd =1083;
var _RadiusServer1 =1084;
var _RadiusServer2 =1085;
var _range =1086;
var _RangeEnd =1087;
var _RangeStart =1088;
var _Receive =1089;
var _Refresh =1090;
var _RemoteIPRange =1091;
var _RemoteManage =1092;
var _Reset=1093;
var _Restart =1094;
var _RestartRouter =1095;
var _Restore =1096;
var _RestoreConfig =1097;
var _RestoreDefault =1098;
var _RestoreDefaultSet =1099;
var _Retry =1100;
var _RetypeL2TPPwd =1101;
var _RetypePPTPPwd =1102;
var _RetypePwd =1103;
var _RIP1 =1104;
var _RIP2 =1105;
var _RoutingTb =1106;
var _RTSthreshold =1107;
var _RussiaL2TP=1108;
var _RussiaPPPoE=1109;
var _RussiaPPTP=1110;
var _Sat =1111;
var _Save =1112;
var _SaveConifg =1113;
var _SaveSettings =1114;
var _Second =1115;
var _Secondary =1116;
var _seconds =1117;
var _Security =1118;
var _Sel_InternetConnType =1119;
var _SelfPIN =1120;
var _Send =1121;
var _Sep =1122;
var _SerIP =1123;
var _SerIPName =1124;
var _ServerAddr  =1125;
var _ServerName =1126;
var _ServiceName =1127;
var _SetDynamicIP =1128;
var _SetFixedIP =1129;
var _SetL2TPclient =1130;
var _SetPPPoEdynamicIP =1131;
var _SetPPPoEfixedIP =1132;
var _SetPPTPclient =1133;
var _SetPwd =1134;
var _SetTime =1135;
var _SetTime =1136;
var _Settings =1137;
var _SetupComplete =1138;
var _SetupWizard =1139;
var _SharedKey =1140;
var _SharedSecret =1141;
var _smSer =1142;
var _SMTPAccount =1143;
var _SMTPAuth =1144;
var _SMTPPwd =1145;
var _SMTPSer =1146;
var _SNMP =1147;
var _SpecialAP =1148;
var _SpecialAPname =1149;
var _SpecifyIP =1150;
var _Src =1151;
var _SSID =1152;
var _SSIDbroadcast =1153;
var _Start =1154;
var _StartIP =1155;
var _StartIPaddr =1156;
var _StartPBC =1157;
var _StartPIN =1158;
var _StaticDHCP =1159;
var _StaticDHCPlist =1160;
var _StaticIP =1161;
var _Statistic =1162;
var _Status =1163;
var _Stealth =1164;
var _Step1 =1165;
var _Step2 =1166;
var _Step3 =1167;
var _Step4 =1168;
var _Step5 =1169;
var _Step6 =1170;
var _Subnet =1171;
var _Sun =1172;
var _SyncClock =1173;
var _SyncClockNTP =1174;
var _SysActivity =1175;
var _SysContact =1176;
var _SysLocation =1177;
var _SysName =1178;
var _System =1179;
var _TCP =1180;
var _TCP =1181;
var _Thu =1182;
var _Time=1183;
var _TimeSet =1184;
var _TimeZone =1185;
var _TKIP =1186;
var _To =1187;
var _ToEmail =1188;
var _Tools=1189;
var _TrapReceiver =1190;
var _TrendNet=1191;
var _Trigger =1192;
var _TriggerPortRange =1193;
var _Tue =1194;
var _Type=1195;
var _UDP =1196;
var _UDP =1197;
var _UnConfigured =1198;
var _update =1199;
var _UpdatePriority =1200;
var _Upgrade =1201;
var _UpgradeFirmware =1202;
var _UPnP =1203;
var _UpTime =1204;
var _User =1205;
var _username=1206;
var _Utilization =1207;
var _VerifyPwd =1208;
var _VirSerName =1209;
var _VirtualSer=1210;
var _WAN =1211;
var _WAN_IP =1212;
var _WANgwAddr =1213;
var _WANIP =1214;
var _WANPhy =1215;
var _WANSubnet =1216;
var _Wed =1217;
var _Week =1218;
var _WEP =1219;
var _WEPkey =1220;
var _WEPKeyFormat =1221;
var _WEPkeyLength =1222;
var _wifiPS =1223;
var _WiFiSetup=1224;
var _Wireless =1225;
var _WirelessClientList =1226;
var _WirelessLAN =1227;
var _Wizard =1228;
var _WizardNextTime =1229;
var _WMM=1230;
var _WPA =1231;
var _WPA2 =1232;
var _WPA2AUTOPSK=1233;
var _WPA2PSK=1234;
var _WPAauto =1235;
var _WPAPSK=1236;
var _WPS =1237;
var _Year =1238;
var _Yes =1239;
var li__alert__3 =1240;
var li_intro =1241;
var li_msg1 =1242;
var li_msg2=1243;
var li_msg3=1244;
var li_msg4=1245;
var li_msg5=1246;
var li_msg6=1247;
var li_msg7=1248;
var li_msg8=1249;
var li_msg10=1250;
var li_msg11=1251;
var li_msg12=1252;
var li_msg127=1253;
var li_msg128=1254;
var li_msg129=1255;
var li_msg13=1256;
var li_msg130=1257;
var li_msg131=1258;
var li_msg132=1259;
var li_msg133=1260;
var li_msg134=1261;
var li_msg135=1262;
var li_msg136=1263;
var li_msg137=1264;
var li_msg138=1265;
var li_msg139=1266;
var li_msg14=1267;
var li_msg140=1268;
var li_msg141=1269;
var li_msg142=1270;
var li_msg143=1271;
var li_msg144=1272;
var li_msg145=1273;
var li_msg146=1274;
var li_msg147=1275;
var li_msg148=1276;
var li_msg149=1277;
var li_msg15=1278;
var li_msg150=1279;
var li_msg151=1280;
var li_msg152=1281;
var li_msg153=1282;
var li_msg154=1283;
var li_msg155=1284;
var li_msg156=1285;
var li_msg157=1286;
var li_msg158=1287;
var li_msg159=1288;
var li_msg16=1289;
var li_msg160=1290;
var li_msg161=1291;
var li_msg17=1292;
var li_msg18=1293;
var li_msg19=1294;
var li_msg20=1295;
var li_msg21=1296;
var li_msg22=1297;
var li_msg23=1298;
var li_msg24=1299;
var li_msg25=1300;
var li_msg26=1301;
var li_msg27=1302;
var li_msg28=1303;
var li_msg29=1304;
var li_msg30=1305;
var li_msg31=1306;
var li_msg32=1307;
var li_msg33=1308;
var li_msg34=1309;
var li_msg35=1310;
var li_msg48=1311;
var li_msg9=1312;
var _2_4G=1313;
var _Always=1314;
var _AP_Disable=1315;
var _AP_Enable=1316;
var _CipherType=1317;
var _ConfigState=1318;
var _Connected=1319;
var _Connecting=1320;
var _Disconnected=1321;
var _Disconnecting=1322;
var _DNS_Ser=1323;
var _DNS_Ser1=1324;
var _DNS_Ser2=1325;
var _Duplex=1326;
var _Firewallname=1327;
var _ifmsg1=1328;
var _IdleTime=1329;
var _LAN1=1330;
var _MACfilter=1331;
var _MACname=1332;
var _Mbps=1333;
var _Mode=1334;
var _MSG569=1335;
var _MSG788=1336;
var _MSG789=1337;
var _MSG790=1338;
var _MSG791=1339;
var _MSG792=1340;
var _MSG793=1341;
var _MSG794=1342;
var _MSG795=1343;
var _MSG796=1344;
var _MSG797=1345;
var _MSG798=1346;
var _MSG799=1347;
var _MSG800=1348;
var _MSG801=1349;
var _MuitlcastStream=1350;
var _Note=1351;
var _Only=1352;
var _PBC=1353;
var _PrimaryDNS=1354;
var _ProtocolFilter=1355;
var _Release=1356;
var _RemoteIPEnd=1357;
var _RemoteIPStart=1358;
var _Renew=1359;
var _ReservationIP=1360;
var _ReservationIPAddr=1361;
var _ReservedIPAddr=1362;
var _Reservedname=1363;
var _SecondaryDNS=1364;
var _SMTPSerPort=1365;
var _Statistics=1366;
var _top=1367;
var _UnconfiguredState=1368;
var _WPA_Auto_PSK=1369;
var _WPA_EAP=1370;
var _WPA2EAP=1371;
var _WPAEAP=1372;
var __allow=1373;
var __AlwaysOn =1374;
var __and=1375;
var __back=1376;
var __click=1377;
var __create=1378;
var __default=1379;
var __deny=1380;
var __domain=1381;
var __DomainName =1382;
var __enable=1383;
var __Exit=1384;
var __fail=1385;
var __filter=1386;
var __filters=1387;
var __firewall=1388;
var __host=1389;
var __hostname=1390;
var __none=1391;
var __open=1392;
var __or=1393;
var __packet=1394;
var __packets=1395;
var __parameters=1396;
var __port=1397;
var __protocol=1398;
var __rules=1399;
var __server=1400;
var __set=1401;
var __special_ap=1402;
var __subnet=1403;
var __success=1404;
var __Success=1405;
var __virtualservs=1406;
var __virtualserv=1407;
var _gtNext=1408;
var _ltBack=1409;
var _PINnum=1410;
var _bpalogin=1411;
var _bpalogout=1412;
var _Language=1413;
var _upd_lang=1414;
var _upd_msg_checksum_err=1415;
var _upd_msg_bad_hwid=1416;
var _upd_msg_unknow_fmt=1417;
var _upd_msg_success=1418;
var _FixedIPAddr=1419;
var _snmp_system_name=1420;
var _Ptrace=1421;
var _ptrace_sel_network=1422;
var _Stop=1423;
var _Download=1424;
var _auto_stop=1425;
var _Get_first=1426;
var _Get=1427;
var _MSG802=1428;
var _MSG803=1429;
var _QuickInstall=1430;
var _SystemInfo=1431;
var _WanStatus=1432;
var _DNSInfo=1433;
var _WlanStatus=1434;
var _LanStatus=1435;
var _Reason=1436;
var _PHYIP=1437;
var _PHYMask=1438;
var _PHYGateway=1439;
var _RadioStatus=1440;
var _WPSStatus=1441;
var _ConnStatus=1442;
var _WlanClient=1443;
var _LanClient=1444;
var _SecurityMode=1445;
var _HWVer=1446;
var _SysUpTime=1447;
var _CableLoss=1448;
var li_msg162=1449;
var li_msg163=1450;
var li_msg164=1451;
var _Diagnostic=1452;
var _IPv6=1453;
var _IPv6Auto=1454;
var _6rdTunnel=1455;
var _6rdConfig=1456;
var _6rdDhcpv4=1457;
var _6rdMaunal=1458;
var _6rdIPv6Prefix=1459;
var _v4Addr=1460;
var _MaskLength=1461;
var _6rdPrefix=1462;
var _TunnelAddress=1463;
var _6rdRelayv4Addr=1464;
var _v6dns1=1465;
var _v6dns2=1466;
var _Only1=1467;
var li_msg165=1468;
var _MSG804=1469;
var _MSG805=1470;
var _MSG806=1471;
var _MSG807=1472;
var _MSG808=1473;
var li_msg166=1474;
var _WWMInfo=1475;
var verify_remote_ip=1476;
var LS46=1477;
var auto_lock=1478;
var btn_auto_lock=1479;
var MSG042=1480;
var PortMirror_01=1481;
var PortMirror_02=1482;
var PortMirror_03=1483;
var PortMirror_04=1484;
var PortMirror_05=1485;
var MSG041=1486;
var msg_wps_sec_03=1487;
var msg_wps_sec_02=1488;
var msg_wps_sec_01=1489;
var stat_unlock=1490;
var stat_lock=1491;
var notify_wps=1492;
var notify_wps_01=1493;
var rs_intro_1=1494;

const url = 'https://www.foro-electromovilidad.igeco.mx';

export default function template( name, email) {
    return `
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 680px;">
    <tbody>
        <tr>
          <td colspan="2" align="center">
            <img src="${url}/assets/email_es.webp" alt="logo" width="550">         
          </td>
        </tr>        
        <tr>
          <td colspan="2" >
            <h2 style="text-align: center;margin:0;font-weight:bold;text-transform: uppercase;margin-top: 20px;">
              BIENVENID@, ${name}. TU REGISTRO SE HA REALIZADO CON ÉXITO.
            </h2>
            <h2 style='text-align: center;'>
              GRACIAS POR FORMAR PARTE DEL <span style="color:#65a30d;font-weight:bold;">FORO DE ELECTROMOVILIDAD 2024</span>
            </h2>
            <div style="text-align: center;font-size:22px;">
              ¡Conoce y <span style="color:#65a30d;font-weight:bold;">conecta con especialistas</span> de la electromovilidad!                    
            </div>
            <div style="text-align:center;padding:20px;margin-top:25px;">
              <div style="background: #65a30d;padding:20px;border-radius:20px;">
                <a style="text-decoration:none; color: white;font-weight:bold;" href="${url}/#program" target='_blank'>                 
                  CONSULTA EL PROGRAMA DE ACTIVIDADES
                </a>
              </div>
              <p style="margin-top:40px;margin-bottom: 40px;">
                Te esperamos en el <strong>FORO DE ELECTROMOVILIDAD 2024 el 23/09/2024, Auditorio Mateo Herrera, León, Guanajuato.</strong>
              </p>
              <div style="background: #65a30d;color:white;border-radius: 20px;padding:20px;">               
               <p><strong>HORARIO:</strong></p>
               <p>10:00 - 15:40</p>
              </div>
            </div>    
            <div>
              <table style="width: 100%;">
                <tr>
                  <td style="width: 80%">
                    <p><strong>Nombre: </strong>${name}</p>
                    <p><strong>Correo electrónico: </strong>${email}
                    </p>
                    <p><strong>
                      Fecha de registro: </strong>${getDate()}
                    </p>
                  </li>
                  <td>
                    <img src="cid:qr@cid" alt="qr code" width=200 height=200>
                  </td>
                </tr>
              </table>
            </div>
            <p style="font-weight:bold;font-size:20px;text-align: center;">AÑADIR AL CALENDARIO</p>
            <div style="text-align:center;padding:20px;margin: 20px;">
              <a style="background: #009748;color:white;padding:20px;border-radius:20px;margin:20px;text-decoration:none;" href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240923%2F20240924&details=Comparte%20este%20espacio%20junto%20a%20especialistas%20destacados%2C%20conoce%20las%20nuevas%20actualizaciones%20de%20la%20movilidad%20inteligente%2C%20explora%20las%20innovaciones%20y%20tendencias%20para%20el%20futuro.&location=Auditorio%20Mateo%20Herrera&text=Foro%20Electromovilidad"
              target="_blank">                        
                Google
              </a>
            </div>
            <div style="text-align:center;padding:20px;margin: 20px;">              
              <a style="background: #009748;color:white;padding:20px;border-radius:20px;text-decoration:none;" href="https://outlook.live.com/calendar/0/action/compose?allday=true&body=Comparte%20este%20espacio%20junto%20a%20especialistas%20destacados%2C%20conoce%20las%20nuevas%20actualizaciones%20de%20la%20movilidad%20inteligente%2C%20explora%20las%20innovaciones%20y%20tendencias%20para%20el%20futuro.&enddt=2024-09-24T14%3A00%3A00&location=Auditorio%20Mateo%20Herrera&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2024-09-23T14%3A00%3A00&subject=Foro%20Electromovilidad"
              target="_blank">                       
                Outlook
              </a>
            </div>                   
            <div style="text-align:center;padding:20px;margin: 20px;">
              <a style="background: #009748;color:white;padding:20px;border-radius:20px;margin:20px;text-decoration:none;" href="https://calendar.yahoo.com/?desc=Comparte%2520este%2520espacio%2520junto%2520a%2520especialistas%2520destacados%252C%2520conoce%2520las%2520nuevas%2520actualizaciones%2520de%2520la%2520movilidad%2520inteligente%252C%2520explora%2520las%2520innovaciones%2520y%2520tendencias%2520para%2520el%2520futuro.&dur=allday&et=20240924&in_loc=Auditorio+Mateo+Herrera&st=20240923&title=Foro%2520Electromovilidad&v=60"
              target="_blank">
                
              <i>Y!</i> Yahoo!
              </a>
            </div>
            <div style="text-align:center;padding:20px;margin: 20px;">                            
              <a style="background: #009748;color:white;padding:20px;border-radius:20px;text-decoration:none;" donwload target="_blank" href="https://foro-electromovilidad.igeco.mx/calendar.ics">  
                iCalendar
              </a>
            </div>
            <p style="font-size:15px;line-height:21px;margin:16px 0px;font-weight:bold">
              INSTRUCCIONES PARA TU VISITA:
            </p>
            <ul>
              <li>
                Para agilizar tu acceso al evento, por favor muestra este comprobante desde tu dispositivo móvil en el módulo de registro. 
              </li>
              <li>
                Ten en cuenta que tu registro es personal e intransferible.
              </li>                 
            </ul>                                                          
          </td>      
        </tr>               
        <tr>
          <td style="padding:20px;" align="center">
            <div style="background: #65a30d;border-radius: 20px;padding:20px;margin:auto;">
              <a style="text-decoration:none;color:white;" href="https://igeco.mx/" target="_blank">
                ENTÉRATE DE TODOS NUESTROS EVENTOS
              </a>
            </div>          
          </td>
          <td style="padding:20px;" align="center">
            <div style="background: #65a30d;width:fit-content;border-radius: 20px;padding:20px;margin:auto;">
              <a style="text-decoration:none;color:white;" href="https://maps.app.goo.gl/dPbCkn6xaRwNLnzu7" target="_blank">
                UBICACIÓN
              </a>
            </div>        
          </td>
        </tr>      
        <tr>
          <td colspan="2">
          <hr style="width:100%;border-top:1px solid rgb(214,216,219);border-right:none rgb(214,216,219);border-bottom:none rgb(214,216,219);border-left:none rgb(214,216,219);margin:30px 0px">
            <p style="font-size:12px;line-height:15px;margin:4px 0px;color:rgb(145,153,161);text-align:center">
              <strong>IGECO</strong>, Blvrd Francisco Villa 102-piso 14, Oriental, 37510 León, Guanajuato México.
            </p>
          </td>   
        </tr>     
      </tbody>
    </table>
  `;
}

function getDate() {
  let date = new Date();
  let day = date.getDate();
  if (day < 10) {
      day = '0' + day;
  }
  let month = date.getMonth() + 1; 
  if (month < 10) {
      month = '0' + month;
  }
  let year = date.getFullYear();
  return day + '/' + month + '/' + year;
}

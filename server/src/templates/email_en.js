const url = 'https://www.foro-electromovilidad.igeco.mx';

export default function template( name, email ) {
    return `
    <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 680px;">
    <tbody>
        <tr>
          <td colspan="2" align="center">
            <img src="${url}/assets/email_en.png" alt="logo" width="550">         
          </td>
        </tr>        
        <tr>
          <td colspan="2" >
            <h2 style="text-align: center;margin:0;font-weight:bold;text-transform: uppercase;margin-top: 20px;">
              WELCOME, ${name}. YOUR REGISTRATION WAS SUCCESSFUL.
            </h2>
            <h2 style='text-align: center;'>
              THANK YOU FOR JOINING <span style="color:#007ae9;font-weight:bold;">ELECTROMOBILITY FORUM 2024</span>
            </h2>
            <div style="text-align: justify;font-size:22px;">
              <strong>Explore the</strong> <span style="color:#007ae9;font-weight:bold;">latest trends</span> and innovations in electric vehicles, meet and learn from industry experts and discover the keys to the charging infrastructure of the future.             
            </div>
            <div style="text-align:center;padding:20px;margin-top:25px;">
              <div style="background: #007ae9;padding:20px;border-radius:20px;">
                <a style="text-decoration:none; color: white;font-weight:bold;" href="${url}/#program" target='_blank'>                 
                  SEE THE PROGRAM OF ACTIVITIES
                </a>
              </div>
              <p style="margin-top:40px;margin-bottom: 40px;">
                We look forward to seeing you at <strong>ELECTROMOBILITY FORUM 2024 on (date to be confirmed), Mateo Herrera Auditorium, Leon, Guanajuato.
              </p>
              <div style="background: #007ae9;color:white;border-radius: 20px;padding:20px;">               
               <p><strong>SCHEDULE:</strong></p>
               <p>(time to be confirmed)</p>
              </div>
            </div> 
            <div>
              <table style="width: 100%;">
                <tr>
                  <td style="width: 80%">
                    <p><strong>Name: </strong>${name}</p>
                    <p><strong>Email: </strong>${email}
                    </p>
                    <p><strong>
                      Registration Date: </strong>${getDate()}
                    </p>
                  </li>
                  <td>
                    <img src="cid:qr@cid" alt="qr code" width=200 height=200>
                  </td>
                </tr>
              </table>
            </div>              
            <p style="font-weight:bold;font-size:20px;text-align: center;">ADD TO CALENDAR</p>
            <div style="text-align:center;padding:20px;margin: 20px;">
              <a style="background: #0a1650;color:white;padding:20px;border-radius:20px;margin:20px;text-decoration:none;"
              target="_blank">                        
                Google
              </a>
            </div>
            <div style="text-align:center;padding:20px;margin: 20px;">              
              <a style="background: #0a1650;color:white;padding:20px;border-radius:20px;text-decoration:none;"
              target="_blank">                       
                Outlook
              </a>
            </div>                   
            <div style="text-align:center;padding:20px;margin: 20px;">
              <a style="background: #0a1650;color:white;padding:20px;border-radius:20px;margin:20px;text-decoration:none;"
              target="_blank">
                
              <i>Y!</i> Yahoo!
              </a>
            </div>
            <div style="text-align:center;padding:20px;margin: 20px;">                            
              <a style="background: #0a1650;color:white;padding:20px;border-radius:20px;text-decoration:none;" donwload target="_blank">  
                iCalendar
              </a>
            </div>
            <p style="font-size:15px;line-height:21px;margin:16px 0px;font-weight:bold">
              INSTRUCTIONS FOR YOUR VISIT:
            </p>
            <ul>
              <li>
                To expedite your access to the event, please show this printed voucher or from your mobile device at the pre-registered visitors module.
              </li>
              <li>
                Please note that your badge is personal and non-transferable and must be visible throughout your visit.
              </li>                 
            </ul>                                                          
          </td>      
        </tr>               
        <tr>
          <td style="padding:20px;" align="center">
            <div style="background: #007ae9;border-radius: 20px;padding:20px;margin:auto;">
              <a style="text-decoration:none;color:white;" href="https://igeco.mx/" target="_blank">
                LEARN ABOUT ALL OUR EVENTS
              </a>
            </div>          
          </td>
          <td style="padding:20px;" align="center">
            <div style="background: #007ae9;width:fit-content;border-radius: 20px;padding:20px;margin:auto;">
              <a style="text-decoration:none;color:white;" href="${url}" target="_blank">
                INVITE A COLLEAGUE
              </a>
            </div>        
          </td>
        </tr>      
        <tr>
          <td colspan="2">
          <hr style="width:100%;border-top:1px solid rgb(214,216,219);border-right:none rgb(214,216,219);border-bottom:none rgb(214,216,219);border-left:none rgb(214,216,219);margin:30px 0px">
            <p style="font-size:12px;line-height:15px;margin:4px 0px;color:rgb(145,153,161);text-align:center">
              <strong>IGECO</strong>, Blvrd Francisco Villa 102-floor 14, Oriental, 37510 Leon, Guanajuato Mexico.
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
  return month + '/' + day + '/' + year;
}
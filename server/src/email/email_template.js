export function emailTemplate( name ) {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html dir="ltr" lang="es">
    
        <head>
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
        </head>
    
        <body style="background-color:#ffffff;color:#24292e;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Helvetica,Arial,sans-serif,&quot;Apple Color Emoji&quot;,&quot;Segoe UI Emoji&quot;">
        <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:480px;margin:0 auto;padding:20px 0 48px">
          <tbody>
            <tr style="width:100%">
              <td>
                <p style="font-size:24px;line-height:1.25;margin:16px 0">Gracias por registrarte en el Foro de Electromovilidad.</p>
                <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="padding:24px;border:solid 1px #dedede;border-radius:5px;text-align:center">
                  <tbody>
                    <tr>
                      <td>
                        <p style="font-size:14px;line-height:24px;margin:0 0 10px 0;text-align:left">Estimado/a <strong>${name}</strong>! Estamos encantados de contar contigo en este evento.</p>
                        <p style="font-size:14px;line-height:24px;margin:0 0 10px 0;text-align:left">Adjunto encontrarás tu código QR personalizado para acceder al evento el día [Fecha del Evento]. Por favor, asegúrate de llevarlo contigo el día del evento para facilitar tu entrada.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <img alt="IGECO logo" src="http://localhost:4321/logo.png" style="display:block;outline:none;border:none;text-decoration:none;width:70%;filter:invert(1);margin:auto;padding-top:20px;" />
              </td>
            </tr>
          </tbody>
        </table>
        </body>
    
    </html>
  `;
}
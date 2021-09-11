function carregar() 
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'zmanha.png'
        document.body.style.background = '#f0e9a9'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'ztarde.png'
        document.body.style.background = '#b6bcc8'
    } else {
        // BOA NOITE!
        img.src = 'znoite.png'
        document.body.style.background = '#17262d'
    }
}
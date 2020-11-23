exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `*❛ ❲ ${BotName} - BOT ❳ ❜*

*Hi,* _${id.split("@s.whatsapp.net")[0]}_
*Berikut adalah beberapa info yang ada pada bot ini!*

 *${tampilTanggal}*
 *${tampilWaktu}*

  INFO BOT! :
   
┌  *AUTHOR*: _DANI ARKANATA_
├  *DESIGNER*: _DANI ARKANATA_
└  *SCRIPT ORIGINAL BY*: _ABDUL MUTTAQIN / FDCIABDUL & BINTANG NP_

┌  *WA:* _${whatsapplu}_
└  *IG:* ${instagramlu}


  *INFORMASI COVID-19 TERBARU*

┌  *Positif :* _${corohelp.confirmed.value}_
├  *Sembuh :* _${corohelp.recovered.value}_
├  *Meninggal :* _${corohelp.deaths.value}_
└  *Update :* _${corohelp.lastUpdate}_

┌  *Jaga kesehatan & Pakai masker*
├  *Gunakan dengan bijak*
└  *Bot ini berjalan ${kapanbotaktif}*

  *Official Grub [1] :* ${grupch1}
  *Official Grub [2] :* ${grupch2}
  
    _${BotName}_BOT @ 2020_`
}

exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `*❚█══${BotName}-BOT══█❚*

*Hi,* _${id.split("@s.whatsapp.net")[0]}_
*Berikut adalah beberapa fitur yang ada pada bot ini!*

 *${tampilTanggal}*
 *${tampilWaktu}*

  _Command / Perintah :_

    Ｆｉｔｕｒ Ｄｏｗｎｌｏａｄ 

┌   *#ytmp3* _linkYt_
├   *#yt* _linkYt_
├   *#ig* _linkIg_
├   *#fb* _linkFb_
└ *#twt* _linkVideoTwitter_

    Ｆｉｔｕｒ Ｓｔｉｃｋｅｒ
    
├   *#sticker*

    Ｆｉｔｕｒ Ｌａｉｎ

┌    *#nulis* _teks_
├    *#wiki* _kata kunci_
├    *#tts* _kode bhs teks_
├    *#quran* 
├    *#randomanime*
├    *#pantun*
├    *#say* _teks_
├    *#ptl* _cewek/cowok_
└    *#quotes* 

    Ｉｎｆｏｒｍａｓｉ
    
┌   *#info*
├   *#donasi*
├   *wa admin :* _${whatsapplu}_
└   *ig admin :* ${instagramlu}


  *INFORMASI COVID-19 TERBARU*

┌   *Positif :* _${corohelp.confirmed.value}_
├   *Sembuh :* _${corohelp.recovered.value}_
├   *Meninggal :* _${corohelp.deaths.value}_
└   *Update :* _${corohelp.lastUpdate}_

┌   *Jaga kesehatan & Pakai masker*
├   *Gunakan dengan bijak ‼️*
└   *Bot ini berjalan ${kapanbotaktif} ‼️*

  *Official Grub [1] :* ${grupch1}
  *Official Grub [2] :* ${grupch2}
  
    _${BotName}_BOT @ 2020_`
}

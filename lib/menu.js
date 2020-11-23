exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `*❛ ❲ ${BotName} - BOT ❳ ❜*

*Hi,* _${id.split("@s.whatsapp.net")[0]}_
*Berikut adalah beberapa fitur yang ada pada bot ini!*

 *${tampilTanggal}*
 *${tampilWaktu}*

  _Command / Perintah :_
    
•   *#quran*
•   *#pantun*
•   *#quotes*
•   *#sticker*
•   *#say* _teks_
•   *#alay* _teks_
•   *#yt* _linkYt_
•   *#ig* _linkIg_
•   *#fb* _linkFb_
•   *#randomanime*
•   *#nulis* _teks_
•   *#sholat* _daerah_
•   *#ytmp3* _linkYt_
•   *#ptl* _cewek/cowok_
•   *#wiki* _kata kunci_
•   *#tts* _kode bhs teks_
•   *#tiktok* _linkTiktok_
•   *#twt* _linkVideoTwiter_
•   *#lirik* _penyanyi-judul lagu_

    *INFORMATION*
    
•   *#info*
•   *#donasi*

      *_OWNER_*
•  *WA:* _${whatsapplu}_
•  *IG:* ${instagramlu}

  *INFORMATION ON COVID 19*

•  *Positif :* _${corohelp.confirmed.value}_
•  *Sembuh :* _${corohelp.recovered.value}_
•  *Meninggal :* _${corohelp.deaths.value}_
•  *Update :* _${corohelp.lastUpdate}_

•  *Jaga kesehatan & Pakai masker*
•  *Gunakan dengan bijak*
•  *Bot ini berjalan ${kapanbotaktif}*

  *Official Grub [1] :* ${grupch1}
  *Official Grub [2] :* ${grupch2}

  *SPECIAL THX TO :*
  _FCIABDUL & BINTANG NP_

    _${BotName}_BOT © 2020_`
}

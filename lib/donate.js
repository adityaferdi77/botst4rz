exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `*❚█══${BotName}-BOT══█❚*

*Hi,* _${id.split("@s.whatsapp.net")[0]}_
*Mau Donasi?*

 *${tampilTanggal}*
 *${tampilWaktu}*

  Donasi cukup dengan follow :

   *IG:* _${instagramlu}_

  *INFORMATION ON COVID 19*

╔  *Positif :* _${corohelp.confirmed.value}_
╠  *Sembuh :* _${corohelp.recovered.value}_
╠  *Meninggal :* _${corohelp.deaths.value}_
╚  *Update :* _${corohelp.lastUpdate}_

╔  *Jaga kesehatan & Pakai masker*
╠  *Gunakan dengan bijak*
╚  *Bot ini berjalan ${kapanbotaktif}*

  *Official Grub [1] :* ${grupch1}
  *Official Grub [2] :* ${grupch2}

  *SPECIAL THX TO :*
  _FCIABDUL & BINTANG NP_

    _${BotName}_BOT © 2020_`
}

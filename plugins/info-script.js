import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*hak cipta milik WH MODS MODDER*

BASE SCRIPT YANG DI RECODE RIELL :
https://github.com/ImYanXiao/Elaina-MultiDevice

script recode by Riell: private deks🐤
*Buy di owner Riell DAN THANKS KEPADA WH MODS MODDER YANG TELAH MEMBANTU RECODE SCRIPT INI*
wa.me/6282146218274 (RIELGANZZ)`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/_ctzhid",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'RIELFURR-DEV',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler

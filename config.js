import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['94760069363', '©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠️', true], 
  ['94775258999', '©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠️', true], 
  ['94760069363', '⚡©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠️', true],

] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['2341', '94742274855', '94742274855','94742274855'] 
global.prems = ['94742274855','94742274855','94742274855']
global.allowed = ['94742274855', '94742274855']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,        
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠️'
global.premium = 'true'
global.packname = '©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠️' 
global.author = '@©ʍɾ ℂ𝕪𝕓𝕖𝕣 ʍɑղմӀ օƒƒíϲíɑӀ♠️' 
global.menuvid = 'https://telegra.ph/file/8947ab6221aa493f48692.mp4'
global.igfg = '▢✓ Follow My channel\nhttps://chat.whatsapp.com/EIjQV4nxXwJ6S6QHSa9jpN\n' 
global.dygp='▢✓ Follow My channel\nhttps://chat.whatsapp.com/EIjQV4nxXwJ6S6QHSa9jpN\n'
global.fgsc = 'https://chat.whatsapp.com/EIjQV4nxXwJ6S6QHSa9jpN' 
global.fgyt = 'https://chat.whatsapp.com/EIjQV4nxXwJ6S6QHSa9jpN'
global.fgpyp = 'https://chat.whatsapp.com/EIjQV4nxXwJ6S6QHSa9jpN'
global.fglog = 'STAR.jpg' 
global.thumb = fs.readFileSync('./STAR.jpg')


global.wait = '*🕣 _STAR IS LOADING..._*\n*▰▰▰▱▱▱▱▱⭐*'
global.rwait = '🔜'
global.dmoji = '⚡'
global.done = '☑️'
global.error = '❎' 
global.xmoji = '⤵️' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

const fs = require('fs');

const infos = JSON.parse(fs.readFileSync('./banco/settings.json'))
const { prefix, ownerName, ownerNumber, cdd, ammOff, cr, crfig, crlv, crtt, crh } = infos
 
exports.wait = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nCaso não funcione, use o comando novamente.`
}

exports.waitmusic = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA sua música será enviada em até 2 minutos\nCaso não envie, tente especificar o nome da música.`
}

exports.waitfig = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos.`
}

exports.waitgif = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nA criação de stickers demora alguns segundos\nA criação de stickergif leva de 10 segundos á 1 minuto dependendo do tamanho do gif\nLimite de 10 segundos por gif.`
}

exports.waitpor = () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar a img\nTente novamente caso não envie.`
}

exports.waitimg= () => {
	return`⏳Aguarde alguns instantes...⏳\n\nO bot irá enviar criar e enviar a imagem\nO processo dura no mínimo 10 segundos\nTente novamente caso não envie.`
}

exports.success = () => {
	return`✅Sucesso✅`
}

exports.stick = () => {
	return`❌Ocorreu um erro na criação de sticker❌`
}

exports.Lv = () => {
	return`❌Link inválido❌`
}

exports.group = () => {
	return`❌O comando só pode ser usado em grupos❌`
}

exports.ownerG = (ownerName) => {
	return`O comando só pode ser usado pelo ${ownerName}🕴`
}

exports.ownerB = (ownerName) => {
	return`O comando só pode ser usado pelo ${ownerName}🕴`
}

exports.admin = () => {
	return`❌O comando só pode ser usado por administradores do grupo❌`
}

exports.Badmin = () => {
	return`❌O comando só pode ser usado quando o bot é um administrador do grupo❌'`
}

exports.erro = () => {
	return`❌ocorreu um erro❌\n\nTente novamente.`
}



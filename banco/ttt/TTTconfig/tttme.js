const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
「 🌀💮 Tic Tac Toe 💮🌀 」
𝐌𝐀𝐘 𝐁𝐎𝐓
❖ NOME: ${pushname} 

    ➣ Vitórias: ${userWins} 🎊
    ➣ Derrotas: ${userDefeats} 💥
    ➣ Empates : ${userTies} 🌀
    ➣ Pontos  : ${userPoints} ✨
    `
}

exports.tttme = tttme

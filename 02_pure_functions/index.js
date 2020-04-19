function toHour(mins) {
  const num = mins
  const hours = num / 60
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)
  return rhours + ' hour(s) and ' + rminutes + ' minute(s).'
}

const player = {
  name: 'overment',
  games: [
    { name: 'Grand Theft Auto V', playtime: 20280 },
    { name: 'Dirt Rally', playtime: 12660 },
    { name: 'Dirt Rally 2.0', playtime: 8580 },
  ],
}

const convertPlayTime = (games) => {
  return games.map((game) => ({ ...game, playtime: toHour(game.playtime) }))
}

const hoursPlayed = (games) => {
  convertPlayTime(games) /*?*/
  // show top games in HTML
}

const totalPlaytime = (games) =>
  games.reduce((total, game) => (total += game.playtime), 0)

hoursPlayed(player.games)
totalPlaytime(player.games) /*?*/
player.games[0] /*?*/

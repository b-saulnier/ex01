import mathGames from '../modules/math.js';

export async function getAdd(req, res) {
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);
    const result = await mathGames.add(x, y);
    res.render('index', {text: result});
}

export async function getSub(req, res) {
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);
    const result = await mathGames.sub(x, y);
    res.render('index', {text: result});
}

export async function getPick(req, res) {
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);
    const result = await mathGames.pickRandom(x, y);
    res.render('index', {text: result});
}
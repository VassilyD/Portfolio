const LETTRES = ['À', 'a', 'b', 'c', 'e', '+', 'p', '$',
				  'P', 'o', 'r', '!', 'E', 's', '=', 'i',
				  'y', '#', 'm', 'j', 'g', 'é', '&', 'l',
				  'S', 'x', 'u', 'R', '?', '@', '1', '2',
				  '3', '4', '5', '6', '7', '8', '9', '0',
				  't', 'n', 'è', '%', '£', '*', ' ', 'w',
				  'd', 'f', 'h', 'k', 'l', 'q', 't', 'v',
				  'w', 'x', 'z', 'à', 'é', 'ô', 'â', 'ê',
				  'î', 'ö', 'ï', 'ù', 'A', 'B', 'C' ,'D',
				  'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
				  'N', 'O', 'Q', 'R', 'S', 'T', 'U', 'V',
				  'X', 'Y', 'Z', 'ç', ',', '!', '?', '.'];

const aProposTxt = 'À propos';
const projetsTxt = 'Projets';
const expeTxt = 'Expérimental';
const socialTxt = 'Réseaux sociaux';

function getRandomLetter(lettres) {
	var i = Math.round(Math.rand() * lettres.length);
	var lettre = lettres[i];
	lettres.splice(i,1);
	return i;
}

function guessingTexte(texte, idDom) {
	
}
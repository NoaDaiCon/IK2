
function storeInit() {
	if(localStorage.getItem("coins") === null)
	{
<<<<<<< HEAD
		localStorage.coin=0;
	}
	if (localStorage.getItem("hearts") === null)
	{
		localStorage.hearts=5;
	}
	if (localStorage.getItem("swords") === null)
	{
		localStorage.swords=0;
	}
	if (localStorage.getItem("shields") === null)
	{
		localStorage.shields=0;
	}
	if (localStorage.getItem("drinks") === null)
	{
		localStorage.drinks=0;
=======
		localStorage.coins="0";
	}
	if (localStorage.getItem("hearts") === null)
	{
		localStorage.hearts="0";
	}
	if (localStorage.getItem("swords") === null)
	{
		localStorage.swords="0";
	}
	if (localStorage.getItem("shields") === null)
	{
		localStorage.shields="0";
	}
	if (localStorage.getItem("drinks") === null)
	{
		localStorage.drinks="0";
>>>>>>> 10fc893aba65b600bab322df59d630c4c29b59d3
	}
}

function getCoins()
{
<<<<<<< HEAD
	return localStorage.coin;
=======
	return localStorage.coins;
>>>>>>> 10fc893aba65b600bab322df59d630c4c29b59d3
}

function setCoins(x)
{
<<<<<<< HEAD
	localStorage.coin = x;
=======
	localStorage.coins = x;
>>>>>>> 10fc893aba65b600bab322df59d630c4c29b59d3
}

function addHeart()
{
<<<<<<< HEAD
	if(localStorage.coin >= 60)
=======
	if(localStorage.coins >= 60)
>>>>>>> 10fc893aba65b600bab322df59d630c4c29b59d3
	{
		localStorage.hearts++;
		alert("You have bought a life!");
	}
	else
	{
		alert("You don't have enough coins for a life!");
	{
}

function addSword()
{
<<<<<<< HEAD
	if(localStorage.coin >= 100)
=======
	if(localStorage.coins >= 100)
>>>>>>> 10fc893aba65b600bab322df59d630c4c29b59d3
	{
		localStorage.swords++;
		alert("You have bought a sword!");
	}
	else
	{
		alert("You don't have enough coins for a sword!");
	{
}

function addShield()
{
<<<<<<< HEAD
	if(localStorage.coin >= 80)
=======
	if(localStorage.coins >= 80)
>>>>>>> 10fc893aba65b600bab322df59d630c4c29b59d3
	{
		localStorage.shields++;
		alert("You have bought a sword!");
	}
	else
	{
		alert("You don't have enough coins for a shield!");
	{
}

function addDrink()
{
<<<<<<< HEAD
	if(localStorage.coin >= 1000)
=======
	if(localStorage.coins >= 1000)
>>>>>>> 10fc893aba65b600bab322df59d630c4c29b59d3
	{
		localStorage.drinks++;
		alert("You have bought a drink!");
	}
	else
	{
		alert("You don't have enough coins for a drink!");
	{
}

const BloquePrim ={
	reference: document.getElementById("SobreMi"),
	active: false,
	yCordinatesAppear: [0, 200],
	yCordinatesDisAppearAtDown: 400,
	yCordinatesDisAppearAtUp: null,
	typeDis: 0
};

const BloqueSeg = {
	reference : document.getElementById("Experiencia"),
	active: false,
	yCordinatesAppear: [1200, 1250],
	yCordinatesDisAppearAtDown: 1800,
	yCordinatesDisAppearAtUp: 900,
	typeDis: 2

};


const BloqueTer ={
	reference: document.getElementById("Contacto"),
	active: false,
	yCordinatesAppear: [2523, 2550],
	yCordinatesDisAppearAtDown: null,
	yCordinatesDisAppearAtUp: 2050,
	typeDis: 1

};


function OpenMouth()
{
	let myImage = document.getElementById("MyPhoto");
	myImage.src = "../Resources/images/FotoYoAbierta.png"
}

function CloseMouth()
{
	let myImage = document.getElementById("MyPhoto");
	myImage.src = "../Resources/images/FotoYo.png"
}

function ApplySlideInAnimation(y, Bloque)
{
	if ((y >= Bloque.yCordinatesAppear[0] && y <= Bloque.yCordinatesAppear[1]) && Bloque.active == false)
	{
		OpenMouth();

	  	Bloque.reference.style.animationName  = "slideIn";
	  	Bloque.active = true;

		setTimeout(() => {
			CloseMouth();
		}, 500);
	  	
	}
}

function ApplySlideOutAnimation(y, Bloque)
{
	if (Bloque.typeDis == 0 || Bloque.typeDis == 2)
	{
		if ((y > Bloque.yCordinatesDisAppearAtDown) && Bloque.active == true)
		{
		  	Bloque.reference.style.animationName  = "slideOut";
		  	Bloque.active = false;
		}
	}

	if (Bloque.typeDis == 1 || Bloque.typeDis == 2)
	{
		if ((y < Bloque.yCordinatesDisAppearAtUp) && Bloque.active == true)
		{
		  	Bloque.reference.style.animationName  = "slideOutDown";
		  	Bloque.active = false;
		}
	}
}

window.onload =function(){ var y = window.scrollY; ApplySlideInAnimation(scrollY, BloquePrim);}

window.onscroll = function() {
  var y = window.scrollY;
  console.log(y);

  	ApplySlideInAnimation(y, BloquePrim);
  	ApplySlideOutAnimation(y, BloquePrim);

  	ApplySlideInAnimation(y, BloqueSeg);
  	ApplySlideOutAnimation(y, BloqueSeg);

  	ApplySlideInAnimation(y, BloqueTer);
  	ApplySlideOutAnimation(y, BloqueTer);


/*	if (bloqueSegAct == true)
	{
		if ((y < 900)|| (y > 1800))
		{
			bloqueSeg.style.animationName  = "slideOut";
	  		bloqueSegAct = false;
		}
	}
*/		


/*
	if ((y < 2050) && bloqueTerAct == true)
	{
		bloqueTer.style.animationName = "slideOut";
		bloqueTerAct = false;
	}

*/

};	
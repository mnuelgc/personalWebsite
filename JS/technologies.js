/**************************/
/*Technologies objects */
/**************************/
/*
class Technologies {
	cosntructor(id, name, imageClassCSS)
	{
		this.id = id;
		this.name = name;
		this.imageClassCSS = imageClassCSS;
	}
}
*/

function Technologies(id, name, imageClassCSS)
{
	this.id = id;
	this.name = name;
	this.imageClassCSS = imageClassCSS;
}

const Unity 	= new Technologies(1, 	"Unity",		"Unity");
const cSharp 	= new Technologies(2, 	"C#",			"cSharp");
const Jira 		= new Technologies(3, 	"Jira",	 		"Jira");
const Git 		= new Technologies(4, 	"Git",	 		"Git");
const Kotlin 	= new Technologies(5, 	"Kotlin",		"Kotlin");
const Swift 	= new Technologies(6, 	"Swift",		"Swift");
const HTML 		= new Technologies(7,	"HTML",	 		"HTML");
const CSS 		= new Technologies(8,	"CSS",	 		"CSS");
const JS 		= new Technologies(9,	"Javascript",	"JS");
const Java 		= new Technologies(10,	"Java",			"Java");
const Cmas 		= new Technologies(11,	"C++",			"Cmas");

var techn = new Array(Unity, cSharp, Jira, Git, Kotlin, Swift, HTML, CSS, JS, Java, Cmas);

/**************************/
/**************************/
/**************************/



function showAll()
{
	console.log(techn.length);
	for (let i =0 ; i < techn.length; i ++)
	{
		console.log(techn[i]);
	}

}

showAll(); 
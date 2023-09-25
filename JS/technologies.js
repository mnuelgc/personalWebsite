/**************************/
/*Technologies objects */
/**************************/

function Technologies(id, name, imageClassCSS)
{
	this.id = id;
	this.name = name;
	this.imageClassCSS = imageClassCSS;
	this.related = new Array();
}

const Unity 	= new Technologies(0, 	"Unity",		"Unity");
const cSharp 	= new Technologies(1, 	"C#",			"cSharp");
const Jira 		= new Technologies(2, 	"Jira",	 		"Jira");
const Git 		= new Technologies(3, 	"Git",	 		"Git");
const Kotlin 	= new Technologies(4, 	"Kotlin",		"Kotlin");
const Swift 	= new Technologies(5, 	"Swift",		"Swift");
const HTML 		= new Technologies(6,	"HTML",	 		"HTML");
const CSS 		= new Technologies(7,	"CSS",	 		"CSS");
const JS 		= new Technologies(8,	"Javascript",	"JS");
const Java 		= new Technologies(9,	"Java",			"Java");
const Cmas 		= new Technologies(10,	"C++",			"Cmas");

/**Relateds**/
Unity.related.push(cSharp);
Unity.related.push(Git);
Unity.related.push(Jira);

cSharp.related.push(Unity);
cSharp.related.push(Git);
cSharp.related.push(Jira);

Jira.related.push(Unity);
Jira.related.push(cSharp);
Jira.related.push(Cmas);
Jira.related.push(Kotlin);
Jira.related.push(Swift);
Jira.related.push(Java);
Jira.related.push(HTML);
Jira.related.push(CSS);

Git.related.push(Unity);
Git.related.push(cSharp);
Git.related.push(Cmas);
Git.related.push(Kotlin);
Git.related.push(Swift);
Git.related.push(Java);
Git.related.push(HTML);
Git.related.push(CSS);

Kotlin.related.push(Java);
Kotlin.related.push(Swift);
Kotlin.related.push(Git);
Kotlin.related.push(Jira);

Swift.related.push(Kotlin);
Swift.related.push(Git);
Swift.related.push(Jira);

HTML.related.push(CSS);
HTML.related.push(JS);
HTML.related.push(Git);
HTML.related.push(Jira);

CSS.related.push(HTML);
CSS.related.push(JS);
CSS.related.push(Git);
CSS.related.push(Jira);


JS.related.push(HTML);
JS.related.push(CSS);
JS.related.push(Git);
JS.related.push(Jira);


Java.related.push(Kotlin);
Java.related.push(Git);
Java.related.push(Jira);

Cmas.related.push(Git);
Cmas.related.push(Jira);

/***************/

var techn = new Array(Unity, cSharp, Jira, Git, Kotlin, Swift, HTML, CSS, JS, Java, Cmas);

/**************************/
/**************************/
/**************************/



function showTechSelected(index)
{
	let techName = document.getElementById("techName");
	let techImg = document.getElementById("techImg");
	let techRelated = document.getElementById("techRelated");

	techName.innerHTML = techn[index].name;
	techImg.className = "main__section__display__element__Tech__information__header__image backgroundImage--"+techn[index].imageClassCSS;

	techRelated.innerHTML = ''
	for (var i = 0; i < techn[index].related.length; i++)
	{
		techRelated.innerHTML += '<a onClick = "showTechSelected('+ techn[index].related[i].id +')"><section class="main__section__display__element__Tech__Related__elements__element  backgroundImage--'+techn[index].related[i].imageClassCSS+'"></section></a>'
	}

}

function showTechInformation(index)
{
	var techInfo = document.getElementById("techInformation");
	if (techInfo.style.opacity == 0)
	{
		var body = document.getElementById("body");
		techInfo.style.opacity = 1;
		techInfo.style.height = "auto"; 
		body.style.overflowY =  "hidden";
		
		
	}
	showTechSelected(index);
}

function hideTechInformation()
{
	var techInfo = document.getElementById("techInformation");
	var body = document.getElementById("body");
	body.style.overflowY =  "scroll";
	techInfo.style.opacity = 0;
		setTimeout(() => {
		techInfo.style.height = 0; 
		}, 800);
	
	
}


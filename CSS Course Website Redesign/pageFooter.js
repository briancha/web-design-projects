// JavaScript Document

function aboutDesigner( aboutLink, author, rollOver )
{
	document.write('<a title="' + rollOver + '" href=" ' + aboutLink + '" > ');
	document.write( author + "</a>");
}

document.write('<div id="footerInfo">');
document.write('About Brian Chan | ');
document.write('Contact Info | ');
document.write('Site Designer: ' );
// you should be setting these three variables in css.js
aboutDesigner( aboutLink, author, rollOver );
document.write('<br />' );
document.write('Last Updated: ' + document.lastModified);
document.write('</div>');




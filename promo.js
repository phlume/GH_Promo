// JavaScript Document
	//$(document).ready(function() {
    //$("#datepick").datepicker({dateFormat: 'MM d, yy' });
    // });  
	//function displayResult(radval)
	//{
	//document.getElementById("white").value=radval
	//}
  
  
  function SelectAll(id){
	  /* Give focus to the input area, and select all of the text -- for easier copy/paste*/
  	  document.getElementById(id).focus();
  	  document.getElementById(id).select();
	  }
	
  function clean(){
	  /*Reset all fileds in the form to display the default text. */
	  document.getElementById("title").value = "Swim-Sale event";
	  document.getElementById("subtitle").value = "Enter Sub-Title Here";
	  document.getElementById("fp").innerHTML = "Enter the Fine Print here...";
	  document.getElementById("pdp").innerHTML = "Enter the \"PDP specific\" Fine Print here...";
	  document.getElementById("ges").innerHTML = "Global Espot copy";
	  document.getElementById("gesLink").innerHTML = "Global Espot Link";
	  //document.getElementById("datepick").value = "June 1, 2013";
	  document.getElementById("colored").value = "D6DAFF";
	  document.getElementById("topBnr").value = "-- full path provided by creative --";
	  document.getElementById("catBnr").value = "-- full path provided by creative --";
	  document.getElementById("pop").value = "-- full path provided by creative --";
	  document.getElementById("popH").value = "330";
	 // document.getElementById("popW").value = "130";
  	  document.getElementById("alt").value = "Provided by Copy";
	  }
	  
  function gen(){
	  /* Set up all form elements into a variable from their IDs for use in the generation */
	  var pr_title = document.getElementById("title").value;
	  var pr_subtitle = document.getElementById("subtitle").value;
	  var pr_fp = document.getElementById("fp").value;
	  var pr_pdp = document.getElementById("pdp").value;
	  var pr_ges = document.getElementById("ges").value;
	  var pr_gesLink = document.getElementById("gesLink").value;
	  //var pr_datepick = document.getElementById("datepick").value;
	  var pr_colored = document.getElementById("colored").value;
	  var pr_topBnr = document.getElementById("topBnr").value;
	  var pr_catBnr = document.getElementById("catBnr").value;
	  var pr_pop = document.getElementById("pop-html").value;
	  var pr_popH = document.getElementById("popH").value;
	  //var pr_popW = document.getElementById("popW").value;
  	  var pr_alt = document.getElementById("alt").value;
	 // var oput1 = document.getElementById('result').value;
	  var fontColor = "fff";
	  var popLink = "_parent";
	  var GESPop = false;
	  
	  		
		 	 
	  /* If the Alt text field from the form isn't empty, use it, otherwise, use the title of the promo and FP info as the alt text */
	  if (pr_alt != ""){
		  alttext = pr_alt;
	  } else {
		  alttext = pr_title +' '+ pr_fp +'. See Details.';
	  }
	  
	/* verify radio status for font color of global espot */
	 if (document.getElementById('black').checked) {
			fontColor = document.getElementById('black').value;
		}
	/* verify radio status for lin klocation of global espot */
	 if (document.getElementById('new').checked) {
			popLink = "_blank";
		}
	/* prompt user for pop up information for the height/width of new pop for global espot */
	 if (document.getElementById('pop').checked) {
			GESPop = true;
			GESPopH = prompt("Height of the pop up window\nfor the global e-spot?\n\n");
			GESPopW = prompt("Width of the pop up window\nfor the global e-spot?\n\n");
		}
	  	  
		 /* create a timestamp in miliseconds then converts it to a string
		 * trims the time to the last 5 digits, create a random number between 1-50,
		 * and then concatenate them into a unique ID for the pop up.
		 */
		 
	  var curTime = Date.now();
	  		curTime += '';
	  var stamp = curTime.substr(curTime.length - 5) ;
	  var randNum1 = Math.floor(Math.random() * 50) + 1	;
	  
	  uniqueId = '00pr-popup-'+randNum1+'_'+stamp;

	 /* show unique id in an alert */
	 // alert('Your unique ID for the pop up is: '+uniqueId);
	  
	  
	  /* obtuse code for the generation of the
	  * pop up modal for the category banners.
	  * edit here for output in the code below.
	  */
	  
	   var catBnrStyle = '<style>.popupTop{background-color:#fff;}.popupMiddleLeft{background-color:#fff;}.popupMiddleRight{background-color:#fff;}.popupBottom{background-color:#fff;}.primary{background: none repeat scroll 0 0 #FFFFFF;    border: 1px solid #CCCCCC;    max-height: 20px;    max-width: 15px;  max-width: 19px9;  position: absolute;    right: 12px;    top: 6px; *right:20px;}.button {color: #cccccc !important ;font-size: 16px; padding: 0 3px 0 0px; padding-left:4px9; padding-right:4px9; *padding-left:2px; -webkit-padding-left:4px; -webkit-padding-right:4px;}@media screen and (-webkit-min-device-pixel-ratio:0){ .button {padding-left:3px;}}.button span{color:#ccc; }.close{background: none repeat scroll 0 0 #dedede; border: 1px solid #cccccc;position: relative;float:right;top: -5px;color: #cccccc;font-size: 12px;}.box{background-color: #FFFFFF; margin-bottom: -5px; margin-top: 15px; overflow: auto;padding: 1px; position: relative; width: 290px; *width:318px; *margin-top: 0px; *padding: 10px; *height:auto;}.hr-pop{border-bottom: solid 1px #cccccc;float: right;margin-bottom: 10px;margin-left: 10px !important; padding-bottom: 5px; width: 97%;}.form{padding:0px;}.title{text-transform:uppercase;margin:0 0 0 4px;padding:4px 15px 3px 6px;background-color:#FFFFFF;color:#000000;font-family:Helvetica, Arial,sans-serif;font-weight:bold;font-size:12px;}.title2{margin:2px 0 0 3px;padding:0px 15px 3px 6px;background-color:#FFFFFF;color:#961421;font-family:Helvetica, Arial,sans-serif;font-weight:bold;font-size:12px;}.small span {font-size: 9px !important;    height: 16px;    line-height: 16px;    padding: 0 0 0 1px;}.body-txt{ background-color: #FFFFFF; color: #333333;    font-family: Arial,Helvetica,sans-serif; font-size: 11px;margin:0;overflow: auto; padding: 8px 10px; *padding:5px;*padding-left:11px;}</style>';
	  
	  
		/*Convert the path provided by Creative into the full image path for the banner*/	  
		topImgPath = '<img src="'+pr_topBnr+'" alt="'+alttext+'" title="'+alttext+'"/>';
		catImgPath = '<img src="'+pr_catBnr+'" alt="'+alttext+'" title="'+alttext+'"/>';
	  
	  
		/*Global Espot build */	  	  
		if (GESPop==true){
			gesBuild = '<div style="display:inline;float:right;width:auto;text-align:right;padding:0px;padding-bottom:5px;background:#'+pr_colored+';margin-top:5px;"><a href="javascript:void(0)" onclick="window.open(\''+pr_gesLink+'\' ,\'\',\'width='+GESPopW+', height='+GESPopH+', scrollbars=yes, resizable=yes\')" style="text-decoration:none;"><span style="padding-left:20px;padding-right:8px;color:#'+fontColor+';text-transform:normal; font-family:Arial;position:relative;top:3px;font-size:12px;">'+pr_ges+'</span></a></div>'
		} else {
			gesBuild = '<div style="display:inline;float:right;width:auto;text-align:right;padding:0px;padding-bottom:5px;background:#'+pr_colored+';margin-top:5px;"><a href="'+pr_gesLink+'" style="text-decoration:none;" target="'+popLink+'"><span style="padding-left:20px;padding-right:8px;color:#'+fontColor+';text-transform:normal; font-family:Arial;position:relative;top:3px;font-size:12px;">'+pr_ges+'</span></a></div>'
		}
		
		
		/*Global Espot display code (for onscreen) */		
		if (GESPop==true){
			gesDisplay = '<div style="display:inline;width:auto;text-align:right;padding:0px;padding-bottom:5px;background:#'+pr_colored+';margin-top:5px;"><a href="javascript:void(0)" onclick="window.open(\''+pr_gesLink+'\' ,\'\',\'width='+GESPopW+', height='+GESPopH+', scrollbars=yes, resizable=yes\')" style="text-decoration:none;"><span style="padding-left:20px;padding-right:8px;color:#'+fontColor+';text-transform:normal; font-family:Arial;position:relative;top:3px;font-size:12px;">'+pr_ges+'</span></a></div>'
		} else {
			gesDisplay = '<div style="display:inline;width:auto;text-align:right;padding:0px;padding-bottom:5px;background:#'+pr_colored+';margin-top:5px;"><a href="'+pr_gesLink+'" style="text-decoration:none;" target="_blank"><span style="padding-left:20px;padding-right:8px;color:#'+fontColor+';text-transform:normal; font-family:Arial;position:relative;top:3px;font-size:12px;">'+pr_ges+'</span></a></div>'
		}
		
		
		
		/* Top banner build */			  
		topBnr = '<div style="width:980px;margin: 0 auto;margin-bottom:12px;"><a href="javascript:void(0)" onClick="window.open(\''+pr_pop+'\',\'\',\'width=330, height='+pr_popH+', scrollbars=no, resizable=no\')">'+topImgPath+'</a></div>';
	  
	  		
		
		/* Category banner build */		   
		catBnr = '<a href="javascript:void(0)" onClick="showContentPopup(\''+uniqueId+'\',\'X\')">'+catImgPath+'</a><div id="'+uniqueId+'" style="display:none; z-index:100;">'+catBnrStyle+'<div class="box"><div class="hr-pop" style="padding-top:2px"></div><span class="title">'+pr_title+'</span><div class="body-txt">'+pr_fp+'</div></div><div class="gwt-PopupPanelGlass" style="position: absolute; left: -800px; top: -500px; visibility: visible; display: block; width: 2666px; height: 3225px; z-index:-200;"></div></div>';
	  
	  		
		
		/* PDP build */		    
		pdpBuild = '<div id="promoPDP" style="border-color:#'+pr_colored+'!important;"><span style="text-transform:uppercase;font-family:georgia;color:#000000;"><b>'+pr_title+':</b></span><span style="text-transform:none;font-family:arial;">&nbsp;'+pr_pdp+'</span></div>';
	  	  
		
		
	   /* Special Character Replacement array */
	    	
	var charReplace = [ ['\u0027', '&#39;'], ['\u2122', '&#153;'], ['\u00AE', '&#174;'], ['\u201c', '&#34;'], ['\u201c', '&#34;'], ['\u201D', '&#34;'], ['\u2018', '&#39;'], ['\u2019', '&#39;'], ['\u00D8', '&#216;'], ['\u00F8', '&#248;'], ['\u2022', '&#2022;'], ['\u2015', '--'], ['\u2014', '--'], ['\u2013', '--'], ['\u2012', '--'], ['\u2011', '-'], ['\u2010', '-'] ];
	
	charReplace.forEach(function(pair) {
     	gesBuild = gesBuild.split(pair[0]).join(pair[1]);
		pdpBuild = pdpBuild.split(pair[0]).join(pair[1]);
		topBnr = topBnr.split(pair[0]).join(pair[1]);
		catBnr = catBnr.split(pair[0]).join(pair[1]);
		});
				
				
		/* Full code output */		
	  output1 = '<!--Global Espot Code-->\n\n'+gesBuild+'\n\n\n\n\n<!--PDP Code:-->\n\n'+pdpBuild+'\n\n\n\n\n<!--Top Banner Code:-->\n\n'+topBnr+'\n\n\n\n\n<!--Category Banner Code:-->\n\n'+catBnr;
	  
	  	  
	   /* individual code elements output */
	  output3 = gesBuild;
	  output4 = pdpBuild;
	  output5 = topBnr;
	  output6 = catBnr;
	  
	  /* display of output */
	  output2 = gesDisplay+'<br><br>'+pdpBuild+'<br><br>'+topBnr+'<br><br>'+catBnr;
	  	  
	  document.getElementById("output1").value=output1;
	  document.getElementById("output2").innerHTML=output2;
	  
	  document.getElementById("output3").value=output3;
	  document.getElementById("output4").value=output4;
	  document.getElementById("output5").value=output5;
	  document.getElementById("output6").value=output6;
	  
	  document.getElementById("gen-form").style.display = 'none';
	  document.getElementById("results").style.display = 'block';
	  }
	  
	  function redo(){
		document.getElementById("gen-form").style.display = 'block';
	  	document.getElementById("results").style.display = 'none';
	  }

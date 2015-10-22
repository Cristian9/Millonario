/**
 * Copyright eLearning Brothers LLC 2012 All Rights Reserved
 */

function SCOPreInitialize() {
//called by game files but overridden by jca scorm code
}

function SCOInitialize() {
//called by game files but overridden by jca scorm code
}

function SCOSetValue(valueKey, value) {
//-----------------------------------------------------
// New SCORM Code by JCA Solutions
//----------------------------------------------------- 
switch(valueKey)
{
	case "time":
	 parent.scorm.objSCORM.setTime(value);
	break; 
	case "score":
	parent.scorm.objSCORM.setScore(value)
	//alert("parent.scorm.objSCORM.setScore("+value+")")
	break;
	case "data":
	parent.scorm.objSCORM.setData(value)
	break;	
	case "completed":
	parent.scorm.objSCORM.setStatus("completed")
	//alert("completed")
	case "passed":
	parent.scorm.objSCORM.setStatus("passed")	
	//alert("passed")
	break;
	case "incomplete":
	parent.scorm.objSCORM.setStatus("incomplete")
	//alert("incomple")
	break;
	case "failed":
	parent.scorm.objSCORM.setStatus("failed")
	//alert("failed")
	break;	
	
	
	 
		
	
}
//-----------------------------------------------------
// End Code
//-----------------------------------------------------
}
//score data  completed
function SCOGetValue(valueKey) {
//-----------------------------------------------------
// New SCORM Code by JCA Solutions
//----------------------------------------------------- 
switch(valueKey)
{
	
	case "score":
	return parent.scorm.objSCORM.getScore()
	break;
	case "data":
	return  parent.scorm.objSCORM.getData()
	break;	
	case "completed":
	return  parent.scorm.objSCORM.getStatus()
	case "passed":
	return  parent.scorm.objSCORM.getStatus()	
	break;
}
//-----------------------------------------------------
// End Code
//-----------------------------------------------------
}

function SCOCommit() {
parent.scorm.objSCORM.commit();
}
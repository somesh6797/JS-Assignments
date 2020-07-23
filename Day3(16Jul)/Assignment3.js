
let getGrade=(marks)=>{
    if(marks>=90)
    {
    return "A";
    }else if(marks>=80)
    {
    return "B";
    }else if(marks>=70)
    {
    return "C";
    }else if(marks>=60)
    {
    return "D";
    }else if(marks>=40)
    {
    return "E";
    }else if(marks>=0)
    {
    return "F";
    }
    else{
        return "Not Valid Marks";
    }
}


let calGrade=(marks)=>{
switch(true)
{
    case (marks>=90):
        Grade="A";
        break;
    
    case (marks>=80) :
        Grade="B";
        break;
    
        
    case (marks>=70) :
        Grade="C";
        break;
    
            
    case (marks>=60) :
        Grade="D";
        break;

            
    case (marks>=40) :
        Grade="E";
        break;
    
    case (marks>=0):
       Grade="F";
       break;
    default:
        Grade="Not Valid Marks";
        
}
return(Grade);
}


var marks= prompt("Enter the marks");
console.log(getGrade(marks));
console.log(calGrade(marks));


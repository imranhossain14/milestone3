//Assignment number 1

function feetToMile(feet){
    if (feet>0){
    var mile = feet/5280;
    return mile;
    }
    else {
        console.log("Please give a positive number for conversion")
    }
       
}

var ConvertResult = feetToMile(55);
console.log(ConvertResult);

//Assignment number 2

function woodCalculator(chair, table, bed){

    if(chair>0 && table>0 && bed>0){
    var countForChair = chair*1;
    var countForTable = table*3;
    var countForBed = bed*5;
    var totalWood = countForChair + countForTable + countForBed ;
    return totalWood;
    }

    else {
        console.log("Please give a positive number for counting wood")
        }
}

    var RequiredWood = woodCalculator(10,15,20);
    console.log(RequiredWood);


    //Assignment number 3 

    function brickCalculator(floor){
        var numberOfFloor = parseInt(floor);
                switch(true) {
                    case numberOfFloor<0 : 
                        return "Floor number cannot be negative";
                        break;
                    
                    case numberOfFloor>0 && numberOfFloor<11 :
                        var countBrick =numberOfFloor*1000*15;
                        return countBrick;
                        break;
                        
        
                    case numberOfFloor<20 && numberOfFloor>10 :
                            var countBrick =10*1000*15+(numberOfFloor-10)*1000*12;
                            return countBrick;
        
        
                    case numberOfFloor>20  :
                                var countBrick =10*1000*15+10*1000*12+(numberOfFloor-20)*1000*10 ;
                                return countBrick;     
                                
                
                }
                
                return countBrick;
        
        }
        
        var result = brickCalculator(21);
        console.log(result);
        
        
        

   //Assignment number 4 

  
   function tinyFriend(name){
    
    var smallest = name[0].length;
    var smallestName = name[0];
    var currentName;
    for (var i = 0; i < name.length; i++){
        //console.log(name[i]);
        if(name[i]) {
        var currentNameLength = name[i].length;
        if (currentNameLength<smallest){
            smallest = currentNameLength;
            smallestName = name[i];
        }  
    }else {
        return "Don't give empty String"
    }
}
    return smallestName;
    //return smallest; 
    
}

var smallestName = tinyFriend(['kfffgd', 'Aki', 'Imran', 'kalibor', 'katrina']);
console.log(smallestName);
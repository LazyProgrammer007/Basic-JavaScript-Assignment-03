                            
                            
                                                //start Assignment-part-1.**  Make function method For Converting kilometre to meter



                    function kilometerToMeter(kilometer){

                    if(typeof kilometer==='number' && kilometer>=0){    //for === false, since both operands are not of same type
                        var meter= kilometer * 1000;
                        return meter;
                    }
                    else{
                        return "Please provide valid number value";
                    }

                    }

                // Call  kilometerToMeter function with providing value

                /* var testkilometerToMeterFunction=kilometerToMeter(.5);
                    console.log(testkilometerToMeterFunction);*/



                                        // start Assignment-part-2.**  Make budgetCalculator function method For budgeting cost.



                    function budgetCalculator(watch,phone,laptop) {
                        
                        if (typeof watch==='number' && typeof phone==='number' && typeof laptop==='number'      //for === false, since both operands are not of same type
                        && watch>=0 && phone>=0 && laptop>=0
                        && watch%1===0 && watch%1===0 && watch%1===0) {
                            watch=watch*50;
                            phone=phone*100;
                            laptop=laptop*500;
                            var totalBudgetCost=watch+phone+laptop;
                            return totalBudgetCost;
                        }
                        else{
                            return "Please provide valid quantity of item";
                        }
                        
                        
                    }

                    // Call  budgetCalculator function with providing value
                    /*var budgetCalculatorResult=budgetCalculator(2,4,7);
                    console.log(budgetCalculatorResult);*/

                    

                                            //start Assignment-part-3.**  Make function method For hotelCost calculation


                        function hotelCost(days){
                            var stayingHotelCost=0;
                            if(typeof days === "number" && days >= 0){                      //for === false, since both operands are not of same type
                                if(days<=10){
                                    stayingHotelCost = days*100;
                                }
                                else if(days<=20){
                                    stayingHotelCost = 10*100;
                                    days-=10;
                                    stayingHotelCost += days*80;
                                }
                                else if(days>20){
                                    stayingHotelCost = 10*100;
                                    days-=10;
                                    stayingHotelCost += 10*80;
                                    days-=10;
                                    stayingHotelCost += days*50;
                                }
                                return stayingHotelCost;
                            }
                            else{
                                return "Please provide a valid number of days";
                            }
                        }

                    //Call  budgetCalculator function with providing value

                    /*var testHotelCost=hotelCost(15);
                    console.log(testHotelCost);*/


                                            //start Assignment-part-4.**  Make function method For megaFriend to find longest name.


                    function megaFriend(friendNames){
                        if(friendNames.length > 0 && friendNames.every(function(i){return typeof i==='string';})){         //for === false, since both operands are not of same type // (every use for) expected output: true
                            var longestName = friendNames[0];
                            for(var i=0; i<friendNames.length; i++){
                                var newLongestName = friendNames[i];
                                if((newLongestName.length > longestName.length)){
                                    longestName = newLongestName;
                                }
                            }
                            return longestName;
                        }else{
                            return "Please provide the right value";
                        }
                    }

                    //Call  megaFriend function with providing value to find longest name.

                    /*var findLongestName=megaFriend(["zahid", "lipi","Shormi","Rayhan","Anis","Habib"])
                    console.log(findLongestName);*/
                    
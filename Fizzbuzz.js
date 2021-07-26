for(var x = 0; x <= 100; x++){
    if( x % 5 == 0){
        console.log("buzz")
    } else {
        console.log(x)
    }
    if( x % 3 == 0){
      console.log("fizz")
    }
    if( x % 3 && x % 5 == 0){
      console.log("fizzbuzz")
    }
}

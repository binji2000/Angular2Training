  var youngMan = new Promise ((resolve, reject) => {
        setTimeout(function(){
          resolve("my parents agreed to it");
          //reject("I fell in love with your best friend...");
        }, 3000);
      });

      youngMan.then(result => {
        console.log(result);
        console.log('planning a bachelor party');

        return new Promise ((resolve, reject) => {
          setTimeout(function(){
            resolve("bachelor party planned...");
          }, 3000);
        })
      }).then(result => {
        console.log(result);
        console.log('select a location');

        return new Promise ((resolve, reject) => {
          setTimeout(function(){
            resolve("found a beach...");
          }, 3000);
        })
      }).then(result => {
        console.log(result);
      }).catch(err =>{
        console.log("catch");
        console.log(err);
      });

      console.log("young man waiting...")
    
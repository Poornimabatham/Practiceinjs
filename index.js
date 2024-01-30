let val
      let arr = [24, 33, 77];
      arr.forEach((val) => console.log(val)); // ✅✅✅
      
      for (val of arr) {
        console.log(val); // ✅✅✅
      }
      
      let obj = { age: 12, name: "John Doe" };
      Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key}: ${value}`); // Outputs: key1: value1, key2: value2, key3: value3
      });
     
      Object.values(obj).forEach(value => {
        console.log(value); // Outputs: value1, value2, value3
      });
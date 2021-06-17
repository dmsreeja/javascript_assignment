describe("mocha hooks demo",()=>{
    before(function() {
        console.log("runs once before first test case");
        // runs once before the first test in this block
      });
    
      after(function() {
          console.log("runs once after all the test cases");
        // runs once after the last test in this block
      });
    
      beforeEach(function() {
          console.log("runs before each test case");
        // runs before each test in this block
      });
    
      afterEach(function() {
        console.log("runs after each test case");
        // runs after each test in this block
      });
    it("tc_01",()=>{
        console.log("this is test case 1");
    })
    it("tc_02",()=>{
        console.log("this is test case 2");
    })
    it("tc_03",()=>{
        console.log("this is test case 3");
    })
})
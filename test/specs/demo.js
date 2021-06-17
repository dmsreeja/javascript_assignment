describe("demo of mocha suite",()=>{
    it("test case1",()=>{
        //place to write your scripts
        console.log("this is testcase1");
    })
    it("test case2",()=>{
        //place to write your scripts
        
    })
    it("test case3",()=>{
        //place to write your scripts
        console.log("this is testcase3");
    })
})
describe("demo of mocha suite2",()=>{
    it("test case1",()=>{
        //place to write your scripts
        console.log("this is testcase1");
    })
    it("test case2",()=>{
        //place to write your scripts
        console.log("this is testcase2");
    })
    it("test case3",()=>{
        //place to write your scripts
        console.log("this is testcase3");
    })
})
describe.only("demo of mocha suite3",()=>{
    it("test case1",()=>{
        //place to write your scripts
        console.log("this is testcase1");
    })
    it.skip("test case2",()=>{
        //place to write your scripts
        console.log("this is testcase2");
    })
    it("test case3",()=>{
        //place to write your scripts
        console.log("this is testcase3");
    })
})
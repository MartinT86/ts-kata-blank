import { example, ExampleClass } from "../src";

describe("an example test", () => {
  it("should pass", () => {

        var first = 1
        var second = 2
        var third = summer(first, second)
        expect(example()).toEqual(true);
  });
});
function summer(first: number, second: number) {
  return first + second; 
}


describe('Name of the group', () => {
  it('should ', () => {
    var exampleClass = new ExampleClass()

    expect(exampleClass.GetOne()).toEqual(1)
  });
});
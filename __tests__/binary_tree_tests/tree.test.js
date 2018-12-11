import binaryTreeMaker from "../../src/components/binary_trees/binaryTreeMaker.js";
import fizzBuzzTree from "../../src/components/binary_trees/fizzbuzz_tree.js";

describe("Binary Trees: ", () => {
  it("Create Tree", () => {
    let newTree = new binaryTreeMaker();
    expect(newTree).toBeTruthy();
    expect(newTree.root).toBe(null);
  });
  it("Insert First Node", () => {
    let newTree = new binaryTreeMaker();
    newTree.insert(1);
    expect(newTree).toBeTruthy();
    expect(newTree.root.val).toBe(1);
  });
  it("Insert Insert Left Node", () => {
    let newTree = new binaryTreeMaker();
    newTree.insert(5);
    newTree.insert(2);
    newTree.insert(1);
    expect(newTree).toBeTruthy();
    expect(newTree.root.val).toBe(5);
    expect(newTree.root.left.val).toBe(2);
    expect(newTree.root.left.left.val).toBe(1);
  });
  it("Insert Insert Right Node", () => {
    let newTree = new binaryTreeMaker();
    newTree.insert(5);
    newTree.insert(10);
    newTree.insert(11);
    expect(newTree).toBeTruthy();
    expect(newTree.root.right.val).toBe(10);
    expect(newTree.root.right.right.val).toBe(11);
  });
  it("Fizzbuzz", () => {
    let newTree = fizzBuzzTree();
    // newTree.insert(5);
    // newTree.insert(10);
    // newTree.insert(11);
    // expect(newTree).toBeTruthy();
    // expect(newTree.root.right.val).toBe(10);
    // expect(newTree.root.right.right.val).toBe(11);
    // expect(newTree.root.right.right.val).toBe(11);
    expect(newTree).toBe(1);
  });
});

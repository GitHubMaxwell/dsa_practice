module.exports = function(wallaby) {
  return {
    files: [
      // 'arrays/**/*.js',
      // 'll/**/*.js',
      // 'stacks_queues/**/*.js',
      "src/components/binary_trees/**/*.js",
      "!__tests__/binary_tree_tests/**/*.js"
    ],

    tests: [
      // 'arrays_test/**/*.test.js',
      // 'll_test/**/*.test.js',
      // 'stacks_queues_test/**/*.test.js',
      "__tests__/binary_tree_tests/**/*.js"
    ],

    testFramework: "jest",
    env: {
      type: "node"
    },
    compilers: {
      "**/*.js": wallaby.compilers.babel({
        presets: ["env", "react", "stage-0"],
        plugins: [
          "transform-class-properties",
          "transform-decorators",
          "transform-react-constant-elements",
          "transform-react-inline-elements"
        ]
      })
    }
  };
};

const config = {
    reporters: [
        "default",
        ["jest-junit", {
          outputFile: "results/test-results.xml",
          ancestorSeparator: " > ",
        }]
      ]
}

module.exports = config;
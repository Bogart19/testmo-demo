{
    reporters: [
      "default",
      ["jest-junit", {
        outputFile: "results/test-results.xml",
        ancestorSeparator: " > ",
      }]
    ]
  }
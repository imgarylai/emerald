module.exports = {
  branches: [
    "main",
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/CHANGELOG.md",
      },
    ],
    ["@semantic-release/github", {
      "assets": [
        {"path": "dist/release.zip", "label": "Ghost theme - emerald"},
      ]
    }],
    [
      "@semantic-release/git",
      {
        assets: ["docs/CHANGELOG.md", "package.json", "package-lock.json"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};

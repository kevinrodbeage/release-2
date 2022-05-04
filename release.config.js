/* eslint-disable no-template-curly-in-string */

module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    'next',
    'next-major',
    {
      name: 'devel',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'pre',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        preset: 'conventionalcommits',
        presetConfig: {
          compareUrlFormat: '{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}',
          issuePrefixes: ['#'],
          issueUrlFormat: '{{host}}/{{owner}}/{{repository}}/issues/{{id}}',
          types: [
            { hidden: true, section: 'Others', type: 'chore' },
            { hidden: true, section: 'Reverts', type: 'revert' },
            { hidden: false, section: 'Features', type: 'feat' },
            { hidden: false, section: 'Bug Fixes', type: 'fix' },
            { hidden: true, section: 'Feature Improvements', type: 'improvement' },
            { hidden: true, section: 'Docs', type: 'docs' },
            { hidden: true, section: 'Styling', type: 'style' },
            { hidden: true, section: 'Code Refactoring', type: 'refactor' },
            { hidden: false, section: 'Performance Improvements', type: 'perf' },
            { hidden: true, section: 'Tests', type: 'test' },
            { hidden: true, section: 'Build System', type: 'build' },
            { hidden: true, section: 'CI', type: 'ci' },
          ],
        },
      },
    ],
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/git',
      {
        message: 'release: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};

module.exports = {
  name: 'Tarmac Technologies',
  version: '2.4.2',
  description: 'Miscellaneous Tarmac Technologies Utilities',
  author: 'Victor Colomb',
  icon: 'https://static-tarmac.s3.amazonaws.com/img/favicon.ico',
  updateURL:
    'https://github.com/VictorColomb/userscripts/raw/main/dist/tarmac-technologies.meta.js',
  downloadURL:
    'https://github.com/VictorColomb/userscripts/raw/main/dist/tarmac-technologies.user.js',

  match: [
    'https://backoffice.tarmactechnologies.com/*',
    'https://dev-backoffice.tarmactechnologies.com/*',
    'https://admin.tarmactechnologies.com/*',
    'https://dev-admin.tarmactechnologies.com/*',
    'https://agoa.tarmactechnologies.com/*',
    'https://dev-agoa.tarmactechnologies.com/*',
  ],
};

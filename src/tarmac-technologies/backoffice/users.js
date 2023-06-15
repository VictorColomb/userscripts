function processBackofficeUsers(subdomain = 'admin') {
  for (const user of document.querySelectorAll('#users-list tbody tr')) {
    const id = user.querySelector('a').href.match(/\/([0-9]+)\//)[1];

    const username = user.children[1];
    username.addEventListener('click', () => {
      window.open(
        `https://${subdomain}.tarmactechnologies.com/users/customuser/${id}`
      );
    });
    username.style = 'cursor: pointer; user-select: none;';
  }

  console.log('[TT Userscript] Users module loaded');
}

module.exports = processBackofficeUsers;

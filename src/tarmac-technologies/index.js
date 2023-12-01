const adminPartnerTaskRules = require('./admin/partnertaskrules');
const adminUsers = require('./admin/users');
const agoa = require('./agoa/turnarounds');
const backofficeCriticalPath = require('./backoffice/critical_path');
const backofficeUsers = require('./backoffice/users');

(function () {
  'use strict';

  // Depending on the current URL, call relevant handler
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;

  if (/^(?:dev-)?backoffice.tarmactechnologies.com$/.test(hostname)) {
    if (
      /^\/(?:specific_)?critical_path\/(?:[0-9]+\/)?(?:edit|add|new)/.test(
        pathname
      )
    ) {
      backofficeCriticalPath();
    }

    if (/\/users/i.test(pathname)) {
      backofficeUsers(/^dev-backoffice/.test(hostname) ? 'dev-admin' : 'admin');
    }
  }

  if (/^(?:dev-)?admin.tarmactechnologies.com$/.test(hostname)) {
    if (/^\/users\/customuser\/[0-9]+\/change/.test(pathname)) {
      adminUsers();
    }

    console.log('here');
    if (/^\/tarmac\/partnertaskrule\/[0-9]+\/change/.test(pathname)) {
      console.log('hear hear');
      adminPartnerTaskRules();
    }
  }

  if (/(?:dev-)?agoa.tarmactechnologies.com/.test(hostname)) {
    if (/^\/(?:agoa)?$/.test(pathname)) {
      agoa();
    }
  }
})();

const adminUsers = require('./admin/users');
const agoa = require('./agoa/turnarounds');
const backofficeReport = require('./backoffice/report');
const backofficeCriticalPath = require('./backoffice/critical_path');

(function () {
  'use strict';

  // Depending on the current URL, call relevant handler
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;

  if (/^(?:dev-)?backoffice.tarmactechnologies.com$/.test(hostname)) {
    if (
      /^\/turnaround_close_report\/new/.test(pathname) ||
      /^\/turnaround_close_report\/[0-9]+\/edit/.test(pathname)
    ) {
      backofficeReport();
    }

    if (
      /^\/(?:specific_)?critical_path\/(?:[0-9]+\/)?(?:edit|add|new)/.test(
        pathname
      )
    ) {
      backofficeCriticalPath();
    }
  }

  if (/^(?:dev-)?admin.tarmactechnologies.com$/.test(hostname)) {
    if (/^\/users\/customuser\/[0-9]+\/change/.test(pathname)) {
      adminUsers();
    }
  }

  if (/(?:dev-)?agoa.tarmactechnologies.com/.test(hostname)) {
    if (/^\/(?:agoa)?$/.test(pathname)) {
      agoa();
    }
  }
})();

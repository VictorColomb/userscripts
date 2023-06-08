const adminUsers = require('./admin/users');
const agoa = require('./agoa/turnarounds');
const backofficeReport = require('./backoffice/report');
const backofficeCriticalPath = require('./backoffice/critical_path');

(function () {
  'use strict';

  // Depending on the current URL, call relevant handler
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;

  if (RegExp('^(?:dev-)?backoffice.tarmactechnologies.com$').test(hostname)) {
    if (
      RegExp('^/turnaround_close_report/new').test(pathname) ||
      RegExp('^/turnaround_close_report/[0-9]+/edit').test(pathname)
    ) {
      backofficeReport();
    }

    if (
      RegExp('^/(?:specific_)?critical_path/(?:[0-9]+/)?(?:edit|add|new)').test(
        pathname
      )
    ) {
      backofficeCriticalPath();
    }
  }

  if (RegExp('^(?:dev-)?admin.tarmactechnologies.com$').test(hostname)) {
    if (RegExp('^/users/customuser/[0-9]+/change').test(pathname)) {
      adminUsers();
    }
  }

  if (hostname === 'agoa.tarmactechnologies.com') {
    if (RegExp('^/agoa$').test(pathname)) {
      agoa();
    }
  }

  if (hostname === 'dev-agoa.tarmactechnologies.com') {
    if (RegExp('^/agoa$').test(pathname)) {
      agoa('dev-admin');
    }
  }
})();

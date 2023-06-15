function processBackofficeReport() {
  // find tasks section header
  const header = document
    .evaluate(
      '//h3[contains(., "Task timings")]',
      document,
      null,
      XPathResult.ANY_TYPE,
      null
    )
    .iterateNext();
  if (!header) {
    console.error('[TT Userscript] Task Timings section not found');
    return;
  }

  // add click event listener
  header.addEventListener('click', () => {
    // find tasks section
    const section = document
      .evaluate(
        '//section[contains(., "Task timings")]',
        document,
        null,
        XPathResult.ANY_TYPE,
        null
      )
      .iterateNext();
    if (!section) {
      console.error('[TT Userscript] Task Timings section not found');
      return;
    }

    // click on all unselected checkboxes
    for (const e of section.querySelectorAll('input[type=checkbox]')) {
      if (!e.checked) {
        e.parentNode.click();
      }
    }
  });

  // change hover mouse icon
  header.style = 'cursor: pointer; user-select: none;';

  console.log('[TT Userscript] Report module loaded');
}

module.exports = processBackofficeReport;

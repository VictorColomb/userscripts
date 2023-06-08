function processAdminUser() {
  const label = document.querySelector('label[for="id_business_groups"]');
  const select = document.querySelector('select[name="business_groups"]');

  function handleSubmit(airlines, airports, handlers, positions, unknown) {
    // First of all, unselect everything
    for (const option of select.options) {
      option.selected = false;
    }

    for (const a of airlines) {
      if (!a) continue;

      const option = Array.from(select.options).find(
        option => option.label === `AIRLINE ${a.toUpperCase()}`
      );
      if (option === undefined) {
        console.warn(`[TT Userscript] Cound not find airline ${a}`);
      } else {
        option.selected = true;
      }
    }

    for (const a of airports) {
      if (!a) continue;

      const option = Array.from(select.options).find(
        option => option.label === `AIRPORT ${a.toUpperCase()}`
      );
      if (option === undefined) {
        console.warn(`[TT Userscript] Cound not find airport ${a}`);
      } else {
        option.selected = true;
      }
    }

    for (const h of handlers) {
      if (!h) continue;

      const option = Array.from(select.options).find(
        option => option.label === `HANDLER ${h.toUpperCase()}`
      );
      if (option === undefined) {
        console.warn(`[TT Userscript] Cound not find handler ${h}`);
      } else {
        option.selected = true;
      }
    }

    for (const p of positions) {
      if (!p) continue;

      const option = Array.from(select.options).find(
        option => option.label === `POSITION ${p.toUpperCase()}`
      );
      if (option === undefined) {
        console.warn(`[TT Userscript] Cound not find position ${p}`);
      } else {
        option.selected = true;
      }
    }

    for (const u of unknown) {
      const option = Array.from(select.options).find(
        option => option.label === u
      );
      if (option === undefined) {
        console.error(
          `[TT Userscript] Could not find business group ${u}`
        );
      } else {
        option.selected = true;
      }
    }
  }

  label.addEventListener('click', () => {
    // Find all selected business groups and split by type
    const airlines = [];
    const airports = [];
    const handlers = [];
    const positions = [];
    const unknown = [];
    for (const option of select.options) {
      if (!option.selected) continue;

      const [type, name] = option.label.split(' ');
      switch (type) {
        case 'AIRLINE':
          airlines.push(name);
          break;
        case 'AIRPORT':
          airports.push(name);
          break;
        case 'HANDLER':
          handlers.push(name);
          break;
        case 'POSITION':
          positions.push(name);
          break;
        default:
          console.warn(`Unknown business group type ${type} (name = ${name})`);
          unknown.push(option.label);
      }
    }

    const popup = window.open('', '', 'width=800, height=400, scrollbars=yes');
    popup.document.body.innerHTML = `<label for="airlines" style="display: block;">Airlines</label><input type="text" name="airlines" id="airlines" value="${airlines.join(
      ','
    )}" style="width: 100%; margin-bottom: 15px;" /><br>`;
    popup.document.body.innerHTML += `<label for="airports" style="display: block;">Airports</label><input type="text" name="airports" id="airports" value="${airports.join(
      ','
    )}" style="width: 100%; margin-bottom: 15px;" /><br>`;
    popup.document.body.innerHTML += `<label for="handlers" style="display: block;">Handlers</label><input type="text" name="handlers" id="handlers" value="${handlers.join(
      ','
    )}" style="width: 100%; margin-bottom: 15px;" /><br>`;
    popup.document.body.innerHTML += `<label for="positions" style="display: block;">Positions</label><input type="text" name="positions" id="positions" value="${positions.join(
      ','
    )}" style="width: 100%; margin-bottom: 15px;" /><br>`;
    popup.document.body.innerHTML += '<button id="submit">Submit</button>';

    popup.document.querySelector('#submit').addEventListener('click', () => {
      handleSubmit(
        popup.document.querySelector('#airlines').value.split(/[ ,]+/),
        popup.document.querySelector('#airports').value.split(/[ ,]+/),
        popup.document.querySelector('#handlers').value.split(/[ ,]+/),
        popup.document.querySelector('#positions').value.split(/[ ,]+/),
        unknown
      );

      popup.close();
    });
  });

  label.style = 'cursor: pointer; user-select: none;';

  console.log('[TT Userscript] Users module loaded');
}

module.exports = processAdminUser;

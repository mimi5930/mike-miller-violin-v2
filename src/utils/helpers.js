export function configureHref(link, email) {
  let splitLink = link.split('?');
  let newLink = `${splitLink[0]}?action=TEMPLATE&tm${splitLink[1]}`;

  return `${newLink}&tmsrc=${email.replace('@', '%40')}`;
}

export function sortDates(eventsArr) {
  const sortDates = eventsArr.sort((a, b) => {
    a = Date.parse(a.start.dateTime);
    b = Date.parse(b.start.dateTime);
    return a - b;
  });
  let pastDates = [],
    futureDates = [];
  sortDates.forEach(date => {
    if (Date.parse(date.start.dateTime) >= Date.now()) {
      futureDates.push(date);
    } else {
      pastDates.push(date);
    }
  });
  pastDates.sort((a, b) => {
    a = Date.parse(a.start.dateTime);
    b = Date.parse(b.start.dateTime);
    return b - a;
  });
  return { pastDates, futureDates };
}

export function setDocumentTitle(page) {
  switch (page) {
    case 'lessons':
      document.title = 'Lessons - Mike Miller';
      break;
    case 'bio':
      document.title = 'Bio - Mike Miller';
      break;
    case 'events':
      document.title = 'Events - Mike Miller';
      break;
    case 'see':
      document.title = 'See - Mike Miller';
      break;
    case 'listen':
      document.title = 'Listen - Mike Miller';
      break;
    default:
      document.title = 'Mike Miller';
      break;
  }
}

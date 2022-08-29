import compareAsc from 'date-fns/compareAsc';

export function configureHref(link, email) {
  let splitLink = link.split('?');
  let newLink = `${splitLink[0]}?action=TEMPLATE&tm${splitLink[1]}`;

  return `${newLink}&tmsrc=${email.replace('@', '%40')}`;
}

export function sortDates(eventsArr) {
  return eventsArr.sort((a, b) => {
    a = new Date(a.start.dateTime);
    b = new Date(b.start.dateTime);
    return compareAsc(a, b);
  });
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

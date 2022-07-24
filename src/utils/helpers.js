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

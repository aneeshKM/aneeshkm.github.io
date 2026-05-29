export const slugify = (value) => {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

export const formatYear = (value) => new Date(value).getUTCFullYear();

export const formatDate = (value) => {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    timeZone: 'UTC',
    year: 'numeric',
  }).format(new Date(value));
};

export const dateRange = (item) => `${formatDate(item.start)} - ${item.end ? formatDate(item.end) : 'Present'}`;

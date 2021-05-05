const mapTypes = (t: string) => {
  if (t.indexOf('int') !== -1) {
    return 'number';
  }
  if (t.indexOf('char') !== -1 || t.indexOf('text') !== -1) {
    return 'string';
  }
  if (t.indexOf('date') !== -1) {
    return 'Date';
  }
  return t;
};

export const tableToInterface = (s: string) => {
  const lines = s
    .split('\n')
    .map((l) => l.trim().split('\t'))
    .filter((parts) => parts.length >= 3);

  const cols = lines.map((parts) => {
    const [name, type, nullable] = parts;
    return {
      name,
      type,
      nullable: nullable === 'YES',
    };
  });

  return (
    cols
      .map(
        (c) => `${c.name}: ${mapTypes(c.type)}${c.nullable ? ' | null' : ''};`
      )
      .join('\n') + '\n'
  );
};

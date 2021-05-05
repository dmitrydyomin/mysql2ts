import React, { useCallback, useMemo, useState } from 'react';
import { tableToInterface } from './tableToInterface';

export const App: React.FC = () => {
  const [src, setSrc] = useState('');

  const onSrcChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSrc(e.target.value);
    },
    []
  );

  const dest = useMemo(() => tableToInterface(src), [src]);

  return (
    <>
      <textarea value={src} onChange={onSrcChange} />
      <textarea value={dest} />
    </>
  );
};

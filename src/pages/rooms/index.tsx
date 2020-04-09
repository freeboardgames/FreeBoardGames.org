import dynamic from 'next/dynamic';

export default dynamic(import('./nossr'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

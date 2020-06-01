import { QrCodePopup } from './QrCodePopup';

export default {
  title: 'Infrastructure/Room/QrCodePopup',
};
const url = 'https://freeboardgames.org';
const toggle = () => {
  alert('toggle called.');
};
export const example = () => <QrCodePopup url={url} toggleQrCode={toggle} />;

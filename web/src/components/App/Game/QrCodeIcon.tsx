import SvgIcon from '@material-ui/core/SvgIcon';
import React from 'react';

class QrCodeIcon extends React.Component<{}, {}> {
  render() {
    const path1 = `M76.5 280.5h51v51h-51v-51m204-153h51v102h-51v-102m-51 153h102v102h-51v-51h-51v-51m153 0h51v51h51v-51h51v51h-51v51h51v102h-51v51h-51v-51h-102v51h-51v-102h102v-51h51v-51h-51v-51m102 204v-102h-51v102h51m-102-408h153v153h-153v-153m51 51v51h51v-51h-51m-357-51h153v153h-153v-153m51 51v51h51v-51h-51m-51 255h153v153h-153v-153m51 51v51h51v-51zm0 0`;
    return (
      <SvgIcon viewBox="0 0 612 612">
        <path d={path1} />
      </SvgIcon>
    );
  }
}

export default QrCodeIcon;

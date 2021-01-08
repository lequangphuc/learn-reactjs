import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Bài Hát Nhạc Trẻ Hay Nhất',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/1/f/7/81f7f0e2ebefd2be1aad325fccc57a2e.jpg',
    },
    {
      id: 2,
      name: 'Nhạc Việt',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/7/c/9/97c960ac271e94fa47c87a12aa7d3be5.jpg',
    },
    {
      id: 3,
      name: 'Chill cùng Rap Việt',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/c/5/4/dc5466987d2555c67c161f078049142f.jpg',
    }
  ]
  return (
    <div>
      <h3>Nghe gần đây</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

//design assets
import img1 from '../../imgs/gallery/carousel/img1.JPEG'
import img2 from '../../imgs/gallery/carousel/img2.JPEG'
import img3 from '../../imgs/gallery/carousel/img3.jpeg'
import img4 from '../../imgs/gallery/carousel/img4.jpeg'
import img5 from '../../imgs/gallery/carousel/img5.jpeg'
import img6 from '../../imgs/gallery/carousel/img6.jpeg'
import img7 from '../../imgs/gallery/carousel/img7.jpeg'
import img8 from '../../imgs/gallery/carousel/img8.jpeg'
import img9 from '../../imgs/gallery/carousel/img9.jpeg'
import img10 from '../../imgs/gallery/carousel/img10.jpeg'
import img11 from '../../imgs/gallery/carousel/img11.jpeg'
import img12 from '../../imgs/gallery/carousel/img12.jpeg'
import img13 from '../../imgs/gallery/carousel/img13.jpeg'
import img14 from '../../imgs/gallery/carousel/img14.jpeg'
import img15 from '../../imgs/gallery/carousel/img15.jpeg'
import img16 from '../../imgs/gallery/carousel/img16.jpeg'
import img17 from '../../imgs/gallery/carousel/img17.jpeg'
import img18 from '../../imgs/gallery/carousel/img18.jpeg'
import img19 from '../../imgs/gallery/carousel/img19.jpeg'
import img20 from '../../imgs/gallery/carousel/img20.jpeg'
import img21 from '../../imgs/gallery/carousel/img21.jpeg'
import img22 from '../../imgs/gallery/carousel/img22.jpeg'
import img23 from '../../imgs/gallery/carousel/img23.jpeg'
import img24 from '../../imgs/gallery/carousel/img24.jpeg'
import img25 from '../../imgs/gallery/carousel/img25.jpeg'
import img26 from '../../imgs/gallery/carousel/img26.jpeg'
import img27 from '../../imgs/gallery/carousel/img27.jpeg'
import img28 from '../../imgs/gallery/carousel/img28.jpeg'
import img29 from '../../imgs/gallery/carousel/img29.jpeg'
import img30 from '../../imgs/gallery/carousel/img30.jpeg'
import img31 from '../../imgs/gallery/carousel/img31.jpeg'
import img32 from '../../imgs/gallery/carousel/img32.jpeg'
import img33 from '../../imgs/gallery/carousel/img33.jpeg'
import img34 from '../../imgs/gallery/carousel/img34.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

 const tileData = [
   {
     img: img1,
     title: 'Image',
     author: 'author',
     cols: 3,
     rows: 2
   },
  {
    img: img2,
    title: 'Image',
    author: 'author',
    cols: 2,
    rows: 2
  },
  {
    img: img22,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: img4,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: img5,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: img6,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: img7,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img8,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img9,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img10,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
     img: img11,
     title: 'Image',
     author: 'author',
     cols: 2,
   },
   {
    img: img12,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img13,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img14,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img15,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img16,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img18,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img19,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img20,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img21,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img22,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img23,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: img24,
    title: 'Image',
    author: 'author',
    cols: 2,
  }
];
 
// export default function GalleryScroll() {
//   const classes = useStyles();

//   return (
//     <div className={`${classes.root} gallery`}>
//       <GridList cellHeight={180} className={`${classes.gridList} grid-img`} cols={3}>
//         {tileData.map((tile) => (
//           <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
//             <img src={tile.img} alt={tile.title} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }

export default function GalleryScroll(){
  return(
    <div className="gallery">
      <ul className="gallery-list">
        {tileData.map((tile) => (
          <li className="gallery-pic">
            <img src={tile.img} alt={tile.author} srcset=""/>
          </li>
        ))}
      </ul>
    </div>
  );
}
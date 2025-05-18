'use client'

import React from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function App({ photos }: { photos: photos[] }) {
  const [index, setIndex] = React.useState(-1);

  return (
    <>  
      <ColumnsPhotoAlbum photos={photos} columns={4} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        styles={{ container: {backgroundColor: "rgba(15,15,15,0.9)"} }}
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
      />
    </>  
  )
}
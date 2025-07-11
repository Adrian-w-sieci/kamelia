import sizeOf from 'image-size';
import path from 'path';
import fs from 'fs';

const imageDir = path.join(process.cwd(), 'public', 'images');


const images = [
	"OlaMastalerzFotografia (8).jpg",
	"OlaMastalerzFotografia (9).jpg",
	"OlaMastalerzFotografia (10).jpg",
	"OlaMastalerzFotografia (11).jpg",
	"OlaMastalerzFotografia (12).jpg",
	"OlaMastalerzFotografia (16).jpg",
	"OlaMastalerzFotografia (39).jpg",
	"OlaMastalerzFotografia (40).jpg",
	"OlaMastalerzFotografia (41).jpg",
	"OlaMastalerzFotografia (42).jpg",
	"OlaMastalerzFotografia (43).jpg",
	"OlaMastalerzFotografia (44).jpg",
	"OlaMastalerzFotografia (45).jpg",
	"OlaMastalerzFotografia (46).jpg",
	"OlaMastalerzFotografia (47).jpg",
	"OlaMastalerzFotografia (48).jpg",
	"OlaMastalerzFotografia (49).jpg",
	"OlaMastalerzFotografia (57).jpg",
	"OlaMastalerzFotografia (58).jpg",
	"OlaMastalerzFotografia (59).jpg",
	"OlaMastalerzFotografia (60).jpg",
	"OlaMastalerzFotografia (61).jpg",
	"OlaMastalerzFotografia (62).jpg",
	"OlaMastalerzFotografia (63).jpg",
	"OlaMastalerzFotografia (64).jpg",
	"OlaMastalerzFotografia (65).jpg",
	"OlaMastalerzFotografia (66).jpg",
	"OlaMastalerzFotografia (71).jpg",
	"OlaMastalerzFotografia (72).jpg",
	"OlaMastalerzFotografia (74).jpg",
	"Zmniejszone Edels 01.06 (2).jpg",
	"Zmniejszone Edels 01.06 (3).jpg",
	"Zmniejszone Edels 01.06 (4).jpg",
	"Zmniejszone Edels 01.06 (5).jpg",
	"Zmniejszone Edels 01.06 (6).jpg",
	"Zmniejszone Edels 01.06 (7).jpg",
	"Zmniejszone Edels 01.06 (8).jpg",
	"Zmniejszone Edels 01.06 (9).jpg",
	"Zmniejszone Edels 01.06 (11).jpg",
	"Zmniejszone Edels 01.06 (12).jpg",
	"Zmniejszone Edels 01.06 (13).jpg",
	"Zmniejszone Edels 01.06 (14).jpg",
	"Zmniejszone Edels 01.06 (15).jpg",
	"Zmniejszone Edels 01.06 (16).jpg",
	"Zmniejszone Edels 01.06 (17).jpg",
	"Zmniejszone Edels 01.06 (18).jpg",
	"Zmniejszone Edels 01.06 (19).jpg",
	"Zmniejszone Edels 01.06 (20).jpg",
	"Zmniejszone Edels 01.06 (21).jpg",
	"Zmniejszone Edels 01.06 (22).jpg",
	"Zmniejszone Edels 01.06 (23).jpg",
	"Zmniejszone Edels 01.06 (24).jpg",
	
];

function getPhotoData(filename: string) {
	const fullPath = path.join(imageDir, filename);
	const buffer = fs.readFileSync(fullPath);
	const dimensions = sizeOf(buffer);
	return {
		src: `/images/${filename}`,
		width: dimensions.width,
		height: dimensions.height,
	};
}

const photos = images.map(getPhotoData);

export default photos;
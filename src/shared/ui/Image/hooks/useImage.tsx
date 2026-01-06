import { srcSetItem } from '@shared/ui/Image/types/image.types';

export const useImage = () => {
  const getSrcset = (srcset?: srcSetItem[]) => {
    if (srcset?.length) {
      return srcset.map((attr, index) => (
        <source
          key={`${attr.src}-${index} `}
          type="image/webp"
          srcSet={attr.src}
          {...(attr.media ? { media: attr.media } : {})}
        />
      ));
    }
  };

  const extractFileName = (src: string): string => {
    return src.split('/').pop()?.split('.').shift() ?? '';
  };

  const getImageAlt = (src: string, alt?: string): string => {
    if (alt) return alt;
    return extractFileName(src);
  };

  return {
    getSrcset,
    getImageAlt,
  };
};

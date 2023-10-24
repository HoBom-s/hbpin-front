import { Suspense } from "react";
import { ImageBase } from "./style";

// hook
import { useLazyLoadImage } from "@/hooks";

// project
import { Spinner } from "..";

interface ImageCache {
  __cache: {
    [src: string]: Promise<unknown> | boolean;
  };
  read: (src: string) => Promise<unknown> | boolean;
}

const imageCache: ImageCache = {
  __cache: {},
  read(src: string): Promise<unknown> | boolean {
    if (!this.__cache[src]) {
      this.__cache[src] = new Promise((resolve) => {
        const image = new Image();

        image.onload = () => {
          this.__cache[src] = true;
          resolve(this.__cache);
        };

        image.src = src;
      }).then(() => {
        this.__cache[src] = true;
      });
    }

    if (this.__cache[src] instanceof Promise) {
      throw this.__cache[src];
    }

    return this.__cache[src];
  },
};

export interface ImageProps {
  isLazy: boolean;
  bottomViewMargin?: string;
  src: string;
  placeholder: string;
  alt: string;
  bordered?: boolean;
}

const ImageWithSuspense = ({
  isLazy,
  src,
  placeholder,
  alt,
  bottomViewMargin,
  bordered = false,
}: ImageProps) => {
  const { imgRef, imgSrc } = useLazyLoadImage(
    src,
    placeholder,
    bottomViewMargin,
    isLazy,
  );

  imageCache.read(src);

  return <ImageBase ref={imgRef} src={imgSrc} alt={alt} $bordered={bordered} />;
};

export const Img = ({
  isLazy,
  src,
  placeholder,
  alt,
  bottomViewMargin,
  bordered = false,
}: ImageProps) => {
  return (
    <Suspense fallback={<Spinner />}>
      <ImageWithSuspense
        isLazy={isLazy}
        src={src}
        placeholder={placeholder}
        alt={alt}
        bottomViewMargin={bottomViewMargin}
        bordered={bordered}
      />
    </Suspense>
  );
};

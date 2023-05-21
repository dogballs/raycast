type ImageManifest = {
  [id: string]: string;
};

export type ImageMap<M extends ImageManifest> = {
  [key in keyof M]: HTMLImageElement;
};

export class ImageLoader {
  async loadImages<M extends ImageManifest>(manifest: M): Promise<ImageMap<M>> {
    const keys = Object.keys(manifest) as Array<keyof M>;

    const promises = keys.map(async (id) => {
      const filename = manifest[id];
      const path = `data/graphics/${filename}`;
      return { id, image: await this.loadImage(path) };
    });

    const results = await Promise.all(promises);

    return results.reduce((map, { id, image }) => {
      map[id] = image;
      return map;
    }, {} as ImageMap<M>);
  }

  private async loadImage(imagePath: string) {
    return new Promise<HTMLImageElement>((resolve) => {
      const image = new Image();
      image.src = imagePath;
      image.addEventListener('load', () => {
        resolve(image);
      });
    });
  }
}

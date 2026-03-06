export class MediaType {
  isImage = (url: string) => {
    if (!url) return false;
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
    const extension = url.split('.').pop()?.toLowerCase();
    return imageExtensions.includes(extension || '');
  };

  isVideo = (url: string) => {
    if (!url) return false;
    const videoExtensions = ['mp4', 'webm', 'ogg', 'mov'];
    const extension = url.split('.').pop()?.toLowerCase();
    return videoExtensions.includes(extension || '');
  };
}

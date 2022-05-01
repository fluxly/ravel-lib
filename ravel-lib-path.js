const pathItems = import.meta.url.split('//')[1].split('/');
pathItems.shift();
pathItems.pop();
export const ravelLibPath = pathItems.length==0 ? '' : '/' + pathItems.join('/');

export const loadPosts = async () => {
    const postsReponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosReponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsReponse,photosReponse]);

    const postsjson = await posts.json();
    const photosjson = await photos.json();

    const postsAndPhotos = postsjson.map((post, index) => {
      return {...post, cover: photosjson[index].url}
    });

    return postsAndPhotos;
}
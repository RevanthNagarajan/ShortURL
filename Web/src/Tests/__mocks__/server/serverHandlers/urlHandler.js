import { rest } from 'msw';

const mockUrls = [
    {
      "_id": "61719b0521cba728e5ef1ff0",
      "createdBy": "firstUser@shorturl.com",
      "shortUrl": "j9QUA11",
      "url": "https://www.youtube.com/",
      "title": "Youtube",
      "description": "Youtube Home"
    },
    {
      "_id": "61719b0521cba728e5ef1ff2",
      "createdBy": "firstUser@shorturl.com",
      "shortUrl": "KZlfX21",
      "url": "https://twitter.com",
      "title": "Twitter",
      "description": "Twitter Home"
    },
    {
      "_id": "61719b0521cba728e5ef1ff1",
      "createdBy": "firstUser@shorturl.com",
      "shortUrl": "tIBA410",
      "url": "https://www.facebook.com/",
      "title": "Facebook",
      "description": "Facebook Home"
    },
    {
      "_id": "61719b0521cba728e5ef1fee",
      "createdBy": "firstUser@shorturl.com",
      "shortUrl": "Oo5d414",
      "url": "https://www.apple.com/in/",
      "title": "Apple",
      "description": "Apple India"
    },
    {
      "_id": "61719b0521cba728e5ef1fef",
      "createdBy": "firstUser@shorturl.com",
      "shortUrl": "cNkjz4",
      "url": "https://google.co.in/",
      "title": "Google",
      "description": "Google India"
    }
];

const urlHandler = [
    rest.get('/api/getUrl', async (req,res,ctx) => {
        return res(ctx.json(mockUrls));
    })
]

export {urlHandler}
const images = [
    { id: '1', src: 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg', category: 'nature' },
    { id: '2', src: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D', category: 'wildlife' },
    { id: '3', src: 'https://i.natgeofe.com/n/838dbb82-a2b5-4675-a7c6-ff80b0a1f651/future-cities-shanghai-yanan-expressway.jpg', category: 'cities' },
    {id: '4', src:'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg', category: 'nature' },
    {id: '5', src:'https://www.hindustantimes.com/ht-img/img/2023/09/26/1600x900/sajal-das-tPPh2SopGXI-unsplash_1695720966874_1695720979129.jpg', category: 'village' },
    {id: '6', src:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/640px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg', category: 'cities' },
    {id: '7', src:'https://www.wbcsd.org/var/site/storage/images/media/page-assets/imperative/nature-action/nature-action-intro/243120-2-eng-GB/Nature-action-intro_i1140.jpg', category: 'nature' },
    {id: '8', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQjWl3akPOmw6_OFOF0NXwXrpI5hY4JdvgPrpLI4nsQ&s', category: 'wildlife' },
    {id: '9', src:'https://worldwildschooling.com/wp-content/uploads/2024/02/Most-Beautiful-Cities-in-the-U.S._Savannah-Georgia_f11photo_AdobeStock_122991870.jpg', category: 'cities' },
    {id: '10', src:'https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?cs=srgb&dl=pexels-eberhardgross-534164.jpg&fm=jpg', category: 'nature' },
    {id: '11', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynDRRipAmHs666ZOvkUt8_MM6hdnW2Q1sdDcaHj6PYQ&s', category: 'village' },
    {id: '13', src:'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/11/tanzania-wildlife-og.jpg', category: 'wildlife' },
    {id: '14', src:'https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081_640.jpg', category: 'wildlife' },
    {id: '15', src:'https://media.self.com/photos/5e8e2b54f77fc200080d4122/4:3/w_2560%2Cc_limit/pandas-eating-bamboo.jpg', category: 'wildlife' },
    {id: '16', src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0116KpSJC0ZYequ23khR3E6k5_8YtaTGwJHp_srWD8ZfGh8PhK78YIz5FcLBIeYolXLA&usqp=CAU', category: 'cities' },
    {id: '17', src:'https://akshitphotography.com/wp-content/uploads/2021/08/Nature-Photography-105.jpg', category: 'nature' },
    {id: '18', src:'https://www.keralatourism.org/responsible-tourism/static_banner/Village%20Life%20Experience_31082022082718.jpg', category: 'village' },
    {id: '19', src:'https://www.india-briefing.com/news/wp-content/uploads/2019/01/India-Briefing-India-Tops-List-of-Fastest-Growing-Cities-in-the-World.jpg', category: 'cities' },
    {id: '20', src:'https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg', category: 'nature' },
    {id: '12', src:'https://images.unsplash.com/photo-1607992922515-7e38329e65d4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaW1hZ2VzfGVufDB8fDB8fHww', category: 'nature' },
];

function createImageElement(src, width) {
    const img = document.createElement('img');
    img.src = src;
    img.style.width = `${width}px`;
    img.style.margin = '5px';
    return img;
}

function createDownloadLink(src) {
    const link = document.createElement('a');
    link.href = src;
    link.setAttribute('download', '');
    link.setAttribute('target', '_blank'); 
    return link;
}


function filterImages(category) {
    const gallery = document.getElementById('image-gallery');
    gallery.innerHTML = '';

    images.forEach(image => {
        let width = 400;
        if (image.src.width > 2000) {
            width = 400;
        } else if (image.src.width > 1000) {
            width = 400;
        } else if (image.src.width > 400) {
            width = 400;
        }
        if (category === 'all' || image.category === category) {
            const imageContainer = document.createElement('div');
            const downloadLink = createDownloadLink(image.src);
            const imageElement = createImageElement(image.src, width);
            downloadLink.appendChild(imageElement);
            imageContainer.appendChild(downloadLink);
            gallery.appendChild(imageContainer);
        }
    });
}

filterImages('all');

document.getElementById('category').addEventListener('change', function() {
    filterImages(this.value);
});



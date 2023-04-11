import Article from './Article.js'

type ammo = {
    request: string
}

type article =  {
    content_type: string,
    title: string,
    date: string, // for now... change to datetime
    url: string,
}

type chatbot = {
    bot_name: string,
}

function Slingshot(ammo: ammo) {
    switch (ammo.request) {
        case 'blog':
            // return list of blog posts sorted by date desc, index 0 == latest
            break;
        case 'chatbot':
            //return chatbot with requested bot_name
            break;
        case 'project':
            // return projects
            break;
        default:
            console.log('invalid slingshot request')
    }
}

export default Slingshot

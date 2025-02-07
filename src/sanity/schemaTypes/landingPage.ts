export default {
    title: 'Landing Page',
    name: 'landingPage',
    type: 'document',
    fields:[
        {
            title: 'Page Sections',
            name: 'sections',
            type:'array',
            of: [
                { type: 'heroSection'},
                {type: 'aboutUsSection'},
                {type: 'foodCategorySection'},
                {type: 'ourMenuSection'},
            ]
        }
    ]
}
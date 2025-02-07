export default{
    title: 'Our Menu Section',
    name: 'ourMenuSection',
    type: 'object',
    fields:[
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
        },
        {
            title: ' Sub Heading',
            name: 'subHeading',
            type: 'string',
        },
        {
            title: 'Menu Image One',
            name: 'menuImageOne',
            type: 'image',
        },
        {
            title: 'Menu Cards',
            name: 'menuCards',
            type: 'array',
            of: [
               {
                type: 'object',
                fields: [
                    { title: 'Menu Food Image',name: 'menuFoodImage',type: 'image',},
                    {title: 'Menu Food Heading',name: 'menuFoodHeading',type: 'string',},
                    {title: 'Menu Food description',name: 'menuImageDescription',type: 'string',},
                    {title: 'Menu Food Price',name: 'menuFoodPrice',type: 'number',},
                    {title: 'Menu Food Id',name: 'id',type: 'number',},
                ]
               }
              
            ]
        },
        
        
    ]
}
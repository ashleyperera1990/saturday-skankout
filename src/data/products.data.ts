import {Product} from '../app/models/product.model';

export const PRODUCTS: Product[] = [
    {
        id: 2,
        price: 36.99,
        name: 'SSO Logo Tee',
        description: 'Dynamite White with Saturday SkankOut Logo',
        salePrice: 25.99,
        images: [
            {id: 1, imagePath: '/assets/img/logo_mockup_Front_Flat_White.png', primary: true},
            {id: 2, imagePath: '/assets/img/logo_mockup_Front_Mens_White.png', primary: false}
        ]
    },
    {
        id: 3,
        price: 42.99,
        name: 'SSO Logo Hoodie',
        description: 'Grey with Saturday SkankOut Logo',
        salePrice: 34.99,
        images: [
            {id: 1, imagePath: '/assets/img/logo_mockup_Front_Flat_Carbon-Grey.png', primary: true},
            {id: 2, imagePath: '/assets/img/logo_mockup_Front_Mens_Carbon-Grey.png', primary: false}
        ]
    }

]

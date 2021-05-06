const initState = {
   products: [
     {
         id: 1, name: 'man t-shirt' , image: '1.jpg',
         price: 500 , discount: 2, discountprice:500 - 2/100 * 500
         , quantity: 1 , desc:"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
     },
     {
        id: 2, name: 'woman t-shirt' , image: '2.jpg',
        price: 550 , discount: 2, discountprice:550 - 2/100 * 500
        , quantity: 1 , desc:"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        id: 3, name: 'Male trouser' , image: '3.jpg',
        price: 600 , discount: 2, discountprice:600 - 2/100 * 600
        , quantity: 1 , desc:"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        id: 4, name: 'shoes' , image: '4.jpg',
        price: 750 , discount: 2, discountprice:750 - 2/100 * 750
        , quantity: 1 , desc:"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        id: 5, name: 'Female Trouser' , image: '5.jpg',
        price: 450 , discount: 2, discountprice:450 - 2/100 * 450
        , quantity: 1 , desc:"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        id: 6, name: ' Jeans' , image: '6.jpg',
        price: 850 , discount: 2, discountprice:850 - 2/100 * 850
        , quantity: 1 , desc:"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        id: 7, name: 'Male Lower' , image: '7.jpg',
        price: 550 , discount: 2, discountprice:500 - 2/100 * 500
        , quantity: 1 , desc:"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        id: 8, name: 'man Jacket' , image: '8.jpg',
        price: 950 , discount: 2, discountprice:950 - 2/100 * 950
        , quantity: 1 , desc:"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
    {
        id: 9, name: 'man shirt' , image: '9.jpg',
        price: 550 , discount: 2, discountprice:500 - 2/100 * 500
        , quantity: 1 , desc:"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    }, {
        id: 10, name: 'man Jacket' , image: '10.jpg',
        price: 950 , discount: 2, discountprice:950 - 2/100 * 950
        , quantity: 1 , desc:"A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument."
    },
   ] ,
   product: {}
}

const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT":
            return {...state, product: state.products.find(product => 
                product.id === parseInt(action.id))}
        default:
            return state;
    }
}

export default ProductsReducer

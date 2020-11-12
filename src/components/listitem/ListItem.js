import './ListItem.scss';

const ListItem = ({ product }) => {
    const handleClick = () => {
        console.log(product.id);
    };

    return (
        <div onClick={handleClick} className='list-item-container'>
            <div>
                <img src={`/images/${product.image}`} alt='shoes' width='200' height='200' />
            </div>
            <div className='list-item-info'>
                <p className='list-item-brand'>{product.brand}</p>
                <h2 className='list-item-title'>{product.title}</h2>
                {product.hasDiscount ? (
                    <div className='price-container'>
                        <p className='regular-price'>{product.price.regularPrice} €</p>
                        <p className='final-price'>{product.price.finalPrice} €</p>
                    </div>
                ) : (
                    <div className='price-container'>
                        <p className='final-price'>{product.price.regularPrice} €</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListItem;

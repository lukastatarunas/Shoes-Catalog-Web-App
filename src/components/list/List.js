import ListItem from '../listitem/ListItem';
import './List.scss';

const List = ({ products }) => {
    return (
        <div className='list'>
            {products.map((product, index) => (
                <ListItem key={index} product={product} />
            ))}
        </div>
    );
};

export default List;

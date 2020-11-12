import './Controls.scss';

const Controls = ({ handleSearchChange, handleSort }) => {
    return (
        <section>
            <div className='category'>
                <h3>Category</h3>
            </div>
            <div className='controls'>
                <input onChange={handleSearchChange} type='search' placeholder='Search'></input>
                <select onChange={handleSort} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled hidden>
                        Sort by
                    </option>
                    <option value='brand'>Brand</option>
                    <option value='title'>Title</option>
                    <option value='price'>Price</option>
                </select>
            </div>
        </section>
    );
};

export default Controls;

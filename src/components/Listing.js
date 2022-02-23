import PropTypes from 'prop-types';

export default function Listing({ items }) {
  const itemsRender = items.map((item) => {
    if (!item.title) {
      return null;
    }

    const titleFormatted = item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title;
    const currencyFormatted = item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : 'GBP';
    const quantityClassName = item.quantity <= 10 ? 'low' : item.quantity <= 20 ? 'medium' : 'high';

    return (
      <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} alt={item.title} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{titleFormatted}</p>
          <p className="item-price">
            {currencyFormatted !== 'GBP' && currencyFormatted}
            {item.price}
            {currencyFormatted !== 'GBP' || ` ${currencyFormatted}`}
          </p>
          <p className={`item-quantity level-${quantityClassName}`}>{item.quantity} left</p>
        </div>
      </div>
    );
  });

  return (
    <div className="item-list">
      {itemsRender}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}

Listing.defaultProps = {
  items: []
};
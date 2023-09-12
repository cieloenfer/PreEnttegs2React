import React from 'react';

function CartWidget({ notificationNumber }) {
  return (
    <div>
          <div className="icon">
      <i className="fas fa-shopping-cart"></i>
      <div className="notification">
      <span>{notificationNumber}</span>
    </div>
    </div>
    </div>
  );
}

export default CartWidget;



  
      
        
     


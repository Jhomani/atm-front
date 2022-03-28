import {Cash} from '@components/icons';
import {Badge, Button} from '@components/index';
import React, {memo} from 'react';

const PricesPage = () => {
  return (
    <>
      <h2 className="landing-title g-my-4">Restaurar Caja</h2>
      <div className="bank-details">
        <div className="bill-section">
          <Badge>
            <Cash size="3.2rem" amount={20} />
          </Badge>
          <Badge quantity={50}>
            <Cash size="3.2rem" amount={100} />
          </Badge>
        </div>
        <div className="total-amout-section">
          <h6>Total: &nbsp;</h6>
          <h2>1000</h2>
        </div>
        <img src="/static/images/ill-deposit.png" alt="deposit-illustrasion" />
      </div>
      <div className="cash">
        <div className="cash-images"> </div>
        <span>caption</span>
      </div>
      <div className="cash-actions">
        <Button
          type="primary"
          className="mt-2"
          onPress={() => console.log('Pressed on this!!')}
          content="Finalizar"
        />
      </div>
    </>
  );
};

export default memo(PricesPage);

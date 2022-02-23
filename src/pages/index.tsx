import {
  Button,
  Language, Modal, Select
} from '@components/index';
import React, {
  memo, useEffect, useState
} from 'react';
import {useSelector} from 'react-redux';

const options = [
  {
    key: 0,
    label: 'Carlos'
  }
];

const IntoModal = () => {
  const {locale} = useSelector((store: MainStorage) => store.app);

  useEffect(() => {
    console.warn('Into first modal content!!!!');

    return () => {
      console.log('Unmout modal 1');
    };
  }, []);

  return (
    <div>
      Hello world from modal {locale}!!!!
    </div>
  );
};

const IntoModal2 = () => {
  const {locale} = useSelector((store: MainStorage) => store.app);

  useEffect(() => {
    console.warn('Into first modal 22 content!!!!');
    return () => {
      console.log('Unmout modal 2');
    };
  }, []);

  return (
    <div>
      Hello world from modal 2 {locale}!!!!
    </div>
  );
};

const IndexPage = () => {
  console.log('refesh this component');
  const [visible, setVisible] = useState(false);
  const [visibles, setVisibles] = useState(false);

  const handleSelected = (selected: number) => {
    console.log(selected, 'in used');
  };

  return <>
    <div className="landing">
      <h2 className="landing-title g-my-4">
        <Language langKey="landingTitle" />
      </h2>

      <Select
        options={options}
        initial={0}
        onSelected={handleSelected}
      />

      <Button
        type="primary"
        onPress={() => setVisible(true)}
        content="Open Modal"
      />

      <Button
        type="primary"
        className='mt-2'
        onPress={() => setVisibles(true)}
        content="Open Modal 2"
      />

      <Modal
        onCancel={() => setVisible(false)}
        header="Hello from modal 1"
        visible={visible}
      >
        <IntoModal />
      </Modal>

      <Modal
        onCancel={() => setVisibles(false)}
        header="Hello from modal 2"
        visible={visibles}
      >
        <IntoModal2 />
      </Modal>

    </div>
  </>;
};

export default memo(IndexPage);

import {useForceUpdate} from '@utils/custom-hook';
import React, {useEffect} from 'react';
import {createPortal} from 'react-dom';
import {Button} from 'src/components';

interface InSimpleModal {
  children: string | JSX.Element,
  header?: string | JSX.Element,
  visible: boolean,
  onCancel?: Function,
}

let bodyNode: HTMLElement;
let parentNode: HTMLElement;

const SimpleModal = (props: InSimpleModal) => {
  const {header, children, visible, onCancel} = props;
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (!bodyNode) bodyNode = document.querySelector('body');

    if (!parentNode) {
      parentNode = document.createElement('div');
      parentNode.classList.add('modal');
      bodyNode.appendChild(parentNode);
    }

    forceUpdate();

    return () => {
      if (parentNode) {
        bodyNode.removeChild(parentNode);
        parentNode = undefined;
      }
    };
  }, []);

  useEffect(() => {
    if (visible)
      bodyNode.classList.add('hide-scrollbar');
    else
      bodyNode.classList.remove('hide-scrollbar');
  }, [visible]);

  const BaseModal = (
    <div
      className="overlay"
      onClick={() => onCancel()}
    >
      <div
        className='modal-box'
        onClick={(ev) => ev.stopPropagation()}
      >
        {header && (
          <div className='modal-header'>
            {typeof header === 'string'
              ? <h5>{header}</h5>
              : header
            }
          </div>
        )}
        <div className='modal-body'>
          {children}
        </div>
        <div className='modal-footer'>
          footer
        </div>
        <Button
          role="clear"
          type="transparent"
          onPress={onCancel}
          content={<span role="icon">✕</span>}
        />

      </div>
    </div>
  );

  let resp = <></>;

  if (visible && parentNode)
    resp = createPortal(BaseModal, parentNode);

  return resp;
};

export const Modal = Object.assign(
  SimpleModal,
  {foo: 10}
);

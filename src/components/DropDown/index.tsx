import {ShortArrow} from '@components/icons';
import React, {useMemo, useRef, useState} from 'react';

interface OptionIn {
  key: string | number;
  label: string | JSX.Element;
}

interface SelectIn {
  options: OptionIn[];
  initial: string | number;
  type?: 'primary' | 'dynamic';
  onSelected(a: string | number): void;
}

export const DropDown = (props: SelectIn) => {
  const {type = 'dynamic', initial, options, onSelected} = props;

  const [display, setDisplay] = useState(false);
  const [selected, setSelected] = useState(initial);
  const container = useRef(null);

  const optionsObj = useMemo(() => {
    const res = {};

    options.forEach(({key, label}) => (res[key] = label));

    return res;
  }, [options]);

  const toggleOptions = () => {
    if (display) closeOptions();
    else setDisplay(true);
  };

  const handleSelected = (key: number | string) => {
    setSelected(key);
    onSelected(key);

    if (display) closeOptions();
  };

  const closeOptions = () => {
    const node: HTMLElement = container.current;

    if (node) {
      const opts: HTMLElement = node.querySelector('ul.options');
      const input: HTMLElement = node.querySelector('button[role]');

      if (opts) opts.classList.add('closeAnimation');
      if (input) input.blur();

      setTimeout(() => setDisplay(false), 400);
    }
  };

  return (
    <div className={`select-container ${type}`} ref={container} style={{}}>
      <div className="selected" onClick={toggleOptions}>
        <button role="switch" onBlur={() => display && closeOptions()}>
          {optionsObj[selected]}
        </button>
        <ShortArrow color="var(--text-emphasis)" className="selectIcon" />
      </div>
      {display && (
        <ul className="options">
          {options.map((item, i) =>
            item.key == selected ? (
              <li
                key={i}
                className="primary-selected-btn"
                onMouseDown={handleSelected.bind({}, item.key)}
              >
                <span>{item.label}</span>
              </li>
            ) : (
              <li key={i} onMouseDown={handleSelected.bind({}, item.key)}>
                <span>{item.label}</span>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
